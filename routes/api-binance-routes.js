const express = require('express');
const router = express.Router();
const { getBinanceData } = require('../controllers/api-binance-controler.js');

router.get('/api/getBinData', getBinanceData);

module.exports = router;