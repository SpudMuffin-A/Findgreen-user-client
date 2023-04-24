const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1',
    createProxyMiddleware({
      // target: 'http://localhost:8080',
      target: 'http://172.174.202.43/find_green_admin_portal',
      changeOrigin: true,
    })
  );
};