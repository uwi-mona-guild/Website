const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

router.get('/', supportController.getAllSupportRequests);
router.post('/', supportController.createSupportRequest);
router.get("/:id", supportController.getSupportRequest);
router.put("/:id", supportController.updateSupportRequest);
router.delete("/:id", supportController.deleteSupportRequest);
module.exports = router;