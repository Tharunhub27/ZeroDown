const http = require("http");
const fs = require("fs");
const path = require("path");

const APP_VERSION = process.env.APP_VERSION || "v1";

function healthPayload() {
  return {
    status: "ok",
    version: APP_VERSION
  };
}

function versionPayload() {
  return {
    version: APP_VERSION
  };
}

const server = http.createServer((req, res) => {

  // Health check endpoint
  if (req.url === "/health") {

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify(healthPayload())
    );

    return;
  }

  // Version endpoint
  if (req.url === "/version") {

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Connection": "close",
      "Cache-Control": "no-store"
    });

    res.end(
      JSON.stringify(versionPayload())
    );

    return;
  }

  // Main application
  if (req.url === "/") {

    const filePath = path.join(
      __dirname,
      "public",
      "index.html"
    );

    fs.readFile(filePath, (err, data) => {

      if (err) {
        res.writeHead(500);
        res.end("Error loading application");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html"
      });

      res.end(data);
    });

    return;
  }

  // Unknown route
  res.writeHead(404);
  res.end("Not Found");
});

const PORT = 3000;

if (require.main === module) {

  server.listen(PORT, "0.0.0.0", () => {

    console.log(
      `ZeroDown running on port ${PORT}`
    );

    console.log(
      `Application version: ${APP_VERSION}`
    );

  });

}

module.exports = {
  healthPayload,
  versionPayload
};