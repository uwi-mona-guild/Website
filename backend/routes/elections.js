const express = require('express');
const router = express.Router();
const electionsController = require('../controllers/electionsController');

router.get('/', electionsController.getAllElections);
router.post('/', electionsController.createElection);

module.exports = router;