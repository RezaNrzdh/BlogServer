const express = require('express');
const router = express.Router();

const { createMessage } = require('../controllers/contact/createMessage.controller');

router.route('/').post(createMessage);

module.exports = router;