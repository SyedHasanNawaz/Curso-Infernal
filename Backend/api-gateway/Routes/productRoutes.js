const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

const productProxy = createProxyMiddleware({
  target: 'http://product-service:4000',
  changeOrigin: true,
  pathRewrite: { '^/': '/products/' } 
});

router.use('/', productProxy);

module.exports = router;
