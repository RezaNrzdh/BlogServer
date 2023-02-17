const express = require("express");
const router  = express.Router();

const { createSubscribe } = require("../controllers/subscribe/createSubscribe.controller");


router.route('/').post(createSubscribe);

module.exports = router;