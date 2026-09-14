import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("./dist/", import.meta.url));
const port = Number(process.env.PORT || 3000);
const types = {
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

createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url || "/", "http://localhost").pathname;
    const file = await resolveFile(pathname);
    const statusCode = file.endsWith("404.html") ? 404 : 200;
    const cacheControl =
      statusCode === 200 && pathname.startsWith("/_next/static/")
        ? "public, max-age=31536000, immutable"
        : "public, max-age=0, must-revalidate";

    response.writeHead(statusCode, {
      "Cache-Control": cacheControl,
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });
    if (request.method === "HEAD") return response.end();
    createReadStream(file).pipe(response);
  } catch (error) {
    const statusCode = error instanceof URIError ? 400 : 500;
    const message = statusCode === 400 ? "Bad Request" : "Internal Server Error";
    response.writeHead(statusCode, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(message);
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Portfolio listening on 0.0.0.0:${port}`);
});
