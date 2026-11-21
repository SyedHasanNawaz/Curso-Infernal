const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { requireAuthorization, requireAuthentication } = require('../authMiddleware');

const router = express.Router();

const categoryProxy = createProxyMiddleware({
  target: 'http://category-service:4001',
  changeOrigin: true,
});

router.use((req, res, next) => {
  const mutating = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method);
  if (mutating) {
    return requireAuthorization(req, res, requireAuthentication(req, res, next));
  }
  return next();
});

router.use('/', categoryProxy);

module.exports = router;
