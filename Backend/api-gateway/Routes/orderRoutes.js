const express = require('express');
const router = express.Router();
const axios = require('axios');
const { requireAuthorization, requireAuthentication } = require('../authMiddleware');

const SERVICE_URL = 'http://checkout-service:4004/orders';

router.use((req, res, next) => {
  const mutating = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method);
  if (mutating) {
    return requireAuthorization(req, res, requireAuthentication);
  }
  return next();
});

router.post('/create-checkout-session', async (req, res) => {
  try {
    const response = await axios.post(`${SERVICE_URL}/create-checkout-session`, req.body);
    res.json(response.data);
  }
  catch (err) {
    res.status(500).json({ error: 'Order service failed' });
  }
});

router.post('/send-email', async (req, res) => {
  try {
    const response = await axios.post(`${SERVICE_URL}/send-email`, req.body);
    res.json(response.data);
  }
  catch (err) {
    res.status(500).json({ error: 'Order service failed' });
  }
});

router.post('/', async (req, res) => {
  try {
    const response = await axios.post(`${SERVICE_URL}`, req.body);
    res.json(response.data);
  }
  catch (err) {
    res.status(500).json({ error: 'Order service failed' });
  }
});

module.exports = router;
