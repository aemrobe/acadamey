const express = require('express');

const eventController = require('./../controllers/event.controller');

//  Setup
const router = express.Router();

// Routes

router.get('/', eventController.getEvents);
router.post('/', eventController.createEvent);

module.exports = router;