const express = require('express');
const router = express.Router();

const orderController = require('../Controllers/orderController');

router.post('/', orderController.placeOrder);
router.post('/create-checkout-session', orderController.createCheckoutSession);
router.post('/send-email', orderController.sendEmail);

module.exports = router;
