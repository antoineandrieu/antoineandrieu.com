import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { constants as zlibConstants, createBrotliCompress, createGzip } from "node:zlib";

const root = fileURLToPath(new URL("./dist/", import.meta.url));
const port = Number(process.env.PORT || 3000);
const types = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

// Already-compressed formats (avif, webp, woff2, png) are served as-is.
const compressible = /^(text\/|application\/(json|javascript|xml)|image\/svg\+xml)/;

async function resolveFile(pathname) {
  const decoded = decodeURIComponent(pathname).replace(/^\/+/, "");
  const safePath = normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, "");
  const candidates = safePath
    ? [join(root, safePath), join(root, `${safePath}.html`), join(root, safePath, "index.html")]
    : [join(root, "index.html")];

  for (const candidate of candidates) {
    if (!candidate.startsWith(root)) continue;
    try {
      if ((await stat(candidate)).isFile()) return candidate;
    } catch {}
  }
  return join(root, "404.html");
}

function negotiateEncoding(acceptEncoding, contentType) {
  if (!compressible.test(contentType)) return null;
  if (/\bbr\b/.test(acceptEncoding)) {
    return {
      encoding: "br",
      create: () =>
        createBrotliCompress({
          params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 5 },
        }),
    };
  }
  if (/\bgzip\b/.test(acceptEncoding)) {
    return { encoding: "gzip", create: () => createGzip({ level: 6 }) };
  }
  return null;
}

createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url || "/", "http://localhost").pathname;
    const file = await resolveFile(pathname);
    const statusCode = file.endsWith("404.html") ? 404 : 200;
    const contentType = types[extname(file)] || "application/octet-stream";
    const cacheControl =
      statusCode === 200 && pathname.startsWith("/_next/static/")
        ? "public, max-age=31536000, immutable"
        : "public, max-age=0, must-revalidate";
    const compression = negotiateEncoding(
      request.headers["accept-encoding"] || "",
      contentType,
    );

    const headers = {
      "Cache-Control": cacheControl,
      "Content-Type": contentType,
      Vary: "Accept-Encoding",
      "X-Content-Type-Options": "nosniff",
    };
    if (compression) headers["Content-Encoding"] = compression.encoding;

    response.writeHead(statusCode, headers);
    if (request.method === "HEAD") return response.end();

    const source = createReadStream(file);
    source.on("error", () => response.destroy());
    if (compression) {
      const compressor = compression.create();
      compressor.on("error", () => response.destroy());
      source.pipe(compressor).pipe(response);
      return;
    }
    source.pipe(response);
  } catch (error) {
    const statusCode = error instanceof URIError ? 400 : 500;
    const message = statusCode === 400 ? "Bad Request" : "Internal Server Error";
    response.writeHead(statusCode, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(message);
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Portfolio listening on 0.0.0.0:${port}`);
});
