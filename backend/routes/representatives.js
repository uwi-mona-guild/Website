const express = require('express');
const router = express.Router();
const representativesController = require('../controllers/representativesController');

router.get('/', representativesController.getAllRepresentatives);
router.post('/', representativesController.createRepresentative);

module.exports = router;