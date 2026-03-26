const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// POST process payment (simulated)
router.post('/', paymentController.processPayment);

module.exports = router;
