const express = require("express");
const router  = express.Router();

const { createComment } = require("../controllers/comment/createComment.controller");
const { getAllComments } = require("../controllers/comment/getAllComments.controller");

router.route("/").patch(createComment).get(getAllComments);

module.exports = router;