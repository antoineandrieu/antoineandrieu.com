#!/usr/bin/env node
/**
 * Post-build pass for the exported portfolio.
 *
 * 1. Guard: aborts if any file under src/ declares "use client". The strip below
 *    removes the client runtime, which would silently kill a hydrated component's
 *    interactivity. If that guard fires, drop the `postbuild` step from the build
 *    script instead of forcing it through.
 *
 * 2. Strip: the exported pages carry the App Router client runtime (six chunks,
 *    ~173 KiB gzipped) plus an inline RSC payload that duplicates the whole page
 *    copy as JSON. Nothing on this site hydrates: the header interactions are one
 *    small inline script, every anchor is a plain <a>, and there is no client-side
 *    navigation. Both are dead weight on the wire and on the main thread.
 *
 * 3. Cleanup: Next writes its build cache to `<distDir>/dev` (19 MB of Turbopack
 *    cache). The Dockerfile copies dist wholesale, so it would land in the image.
 */
import { readdirSync, readFileSync, writeFileSync, rmSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
const SRC = join(ROOT, "src");

const SECTIONS = ["content", "about", "expertise", "projects", "experience", "collaborer", "contact"];

const SCRIPT_SRC = /<script[^>]*\ssrc="[^"]*\/_next\/static\/chunks\/[^"]*"[^>]*><\/script>\s*/g;
const INLINE_RSC = /<script(?![^>]*\ssrc=)[^>]*>(?:(?!<\/script>)[\s\S])*?self\.__next_f(?:(?!<\/script>)[\s\S])*?<\/script>\s*/g;
const SCRIPT_PRELOAD = /<link[^>]*\sas="script"[^>]*>\s*/g;
const MODULE_PRELOAD = /<link[^>]*\srel="modulepreload"[^>]*>\s*/g;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// 1. Guard: no client component may exist.
const offenders = walk(SRC)
  .filter((f) => /\.(tsx?|jsx?|mjs)$/.test(f))
  .filter((f) => /["']use client["']/.test(readFileSync(f, "utf8")));

if (offenders.length > 0) {
  console.error(
    "postbuild: refusing to strip the client runtime, these files declare \"use client\":\n" +
      offenders.map((f) => `  ${relative(ROOT, f)}`).join("\n") +
      "\nRemove the postbuild step from package.json if the site needs hydration again."
  );
  process.exit(1);
}

// 2. Strip the runtime from every exported page.
let bytesBefore = 0;
let bytesAfter = 0;
const pages = walk(DIST).filter((f) => f.endsWith(".html"));

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const stripped = html
    .replace(SCRIPT_SRC, "")
    .replace(INLINE_RSC, "")
    .replace(SCRIPT_PRELOAD, "")
    .replace(MODULE_PRELOAD, "");

  // Assert only on what this page actually carried: Next's own 404 page has no
  // header and no sections, and stripping it is still correct.
  const carried = [...SECTIONS].filter((id) => html.includes(`id="${id}"`));
  const checks = [
    ["no runtime chunk reference left", !/_next\/static\/chunks\/[^"]*\.js/.test(stripped)],
    ["no RSC payload left", !stripped.includes("self.__next_f")],
    ["header script kept", !html.includes('querySelector(".site-header")') || stripped.includes('querySelector(".site-header")')],
    ["analytics script kept", !html.includes('src="/temps.min.js"') || stripped.includes('src="/temps.min.js"')],
    ...carried.map((id) => [`section #${id} kept`, stripped.includes(`id="${id}"`)]),
  ];
  const failed = checks.filter(([, ok]) => !ok).map(([name]) => name);
  if (failed.length > 0) {
    console.error(`postbuild: ${relative(ROOT, page)} failed: ${failed.join(", ")}`);
    process.exit(1);
  }

  writeFileSync(page, stripped);
  bytesBefore += Buffer.byteLength(html);
  bytesAfter += Buffer.byteLength(stripped);
}

// 3. Drop the build cache that lives inside distDir.
const cacheDir = join(DIST, "dev");
let cacheDropped = 0;
try {
  cacheDropped = walk(cacheDir).reduce((sum, file) => {
    try {
      return sum + statSync(file).size;
    } catch {
      return sum;
    }
  }, 0);
} catch {
  // No cache directory in this build.
}
try {
  rmSync(cacheDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
} catch (error) {
  console.error(`postbuild: could not remove ${relative(ROOT, cacheDir)}: ${error.message}`);
  process.exit(1);
}
if (existsSync(cacheDir)) {
  console.warn(`postbuild: ${relative(ROOT, cacheDir)} survived the cleanup, it will be deployed`);
}

const kib = (n) => `${(n / 1024).toFixed(0)} KiB`;
console.log(
  `postbuild: ${pages.length} pages, HTML ${kib(bytesBefore)} -> ${kib(bytesAfter)}, ` +
    `Turbopack cache dropped ${kib(cacheDropped)}`
);
