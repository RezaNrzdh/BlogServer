const express = require("express");
const router  = express.Router();

const { createComment } = require("../controllers/comment/createComment.controller");
const { getAllComments } = require("../controllers/comment/getAllComments.controller");
const { createReply } = require("../controllers/comment/createReply.controller");
const { getAllReply } = require("../controllers/comment/getAllReply.controller");

router.route("/").patch(createComment).get(getAllComments);
router.route("/reply").patch(createReply).get(getAllReply);

module.exports = router;