const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

const categoryProxy = createProxyMiddleware({
  target: 'http://category-service:4001',
  changeOrigin: true,
});

router.use('/', categoryProxy);

module.exports = router;
