const express = require('express');
const router = express.Router();
const initiativesController = require('../controllers/initiativesController');

router.get('/', initiativesController.getAllInitiatives);
router.post('/', initiativesController.createInitiative);

module.exports = router;