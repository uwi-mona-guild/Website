const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');

router.get('/', templateController.getAll);
router.post('/', templateController.create);

module.exports = router;