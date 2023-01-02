const express = require("express");
const router = express.Router();
const { getAbout } = require("../controllers/about/getAbout.controller");

router.route("/").get(getAbout);

module.exports = router;
