const express = require('express');
const router = express.Router();
const initiativesController = require('../controllers/initiativesController');

router.get('/', initiativesController.getAllInitiatives);

module.exports = router;