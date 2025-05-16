const express = require('express');
const router = express.Router();
const apiBinanceRoutes = require('./api-binance-routes.js');

router.use(apiBinanceRoutes);

module.exports = router