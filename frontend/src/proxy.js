/*
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8000",
      changeOrigin: true,
      secure: false, // Disable SSL certificate validation (for development only)
      xfwd: true, // Add x-forward headers
    })
  );
};
*/
