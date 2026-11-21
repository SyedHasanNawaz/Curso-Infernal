const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { requireAuthorization, requireAuthentication } = require('../authMiddleware');

const router = express.Router();

const productProxy = createProxyMiddleware({
  target: 'http://product-service:4000',
  changeOrigin: true,
  pathRewrite: { '^/': '/products/' } 
});

router.use((req, res, next) => {
  const mutating = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method);
  if (mutating) {
    return requireAuthorization(req, res, requireAuthentication);
  }
  return next();
});

router.use('/', productProxy);

module.exports = router;
