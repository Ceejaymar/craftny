const express = require('express');

const router = express.Router();

// API Route: /api
router.use('/favorites', require('./favorites-router'));

module.exports = router;
