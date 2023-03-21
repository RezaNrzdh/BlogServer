const express = require("express");
const router  = express.Router();

const {login}  = require("../controllers/auth/login.controller");
const {signup} = require("../controllers/auth/signup.controller");
const {verify} = require("../controllers/auth/verify.controller");

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/verify").get(verify);

module.exports = router;
