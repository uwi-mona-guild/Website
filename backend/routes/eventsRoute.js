const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

router.get('/', eventsController.getAllEvents);
router.post('/', eventsController.createEvent);
// route.get('/:id', eventsController.getEvent);

module.exports = router;