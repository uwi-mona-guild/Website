const express = require('express');
const router = express.Router();
const representativesController = require('../controllers/representativesController');

router.get('/', representativesController.getAllRepresentatives);
router.post('/', representativesController.createRepresentative);
router.get('/:id', representativesController.getRepresentative);
router.put('/:id', representativesController.updateRepresentative);
router.delete('/:id', representativesController.deleteRepresentative);

module.exports = router;