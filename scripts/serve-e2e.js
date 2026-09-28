// Minimal static server for Playwright e2e: serves build/ at the root and strips
// the GitHub Pages path prefix, so tests exercise the real production bundle.
const fs = require("fs");
const http = require("http");
const path = require("path");

const ROOT = path.join(__dirname, "..", "build");
const PREFIX = "/Software_Engineer_Portfolio";
const PORT = Number(process.env.PORT) || 3100;

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".txt": "text/plain",
};

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);
    if (urlPath.startsWith(PREFIX)) {
      urlPath = urlPath.slice(PREFIX.length) || "/";
    }

    let file = path.join(ROOT, urlPath);
    if (!file.startsWith(ROOT)) {
      res.writeHead(403);
      return res.end();
    }
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      // Extensionless paths are SPA routes → fall back to index.html.
      // Anything with a file extension is a real asset → honest 404, so a
      // missing image/manifest fails tests instead of serving HTML silently.
      if (path.extname(urlPath)) {
        res.writeHead(404);
        return res.end("Not found");
      }
      file = path.join(ROOT, "index.html");
    }

    res.writeHead(200, {
      "Content-Type": MIME[path.extname(file)] || "application/octet-stream",
    });
    fs.createReadStream(file).pipe(res);
  })
  .listen(PORT, () => console.log(`e2e server on http://localhost:${PORT}`));
