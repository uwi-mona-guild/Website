const express = require('express');
const router = express.Router();
const documentsController = require('../controllers/documentsController');

router.get('/', documentsController.getAllDocuments);

module.exports = router;