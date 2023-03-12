const express = require("express");
const router  = express.Router();

const { createComment } = require("../controllers/comment/createComment.controller");
const { getAllComments } = require("../controllers/comment/getAllComments.controller");
const { createReply } = require("../controllers/comment/createReply.controller");
const { getAllReply } = require("../controllers/comment/getAllReply.controller");

router.route("/").patch(createComment).get(getAllComments);
router.route("/reply").patch(createReply).get(getAllReply);
router.route("/test").get(async(req, res) => {

    const model = require('../models/article.model');

    await model.find({_id: req.body.id })
        .then( doc => {
            res.status(200).json({
                status: 200,
                doc: doc
            })
        })
        .catch( err => console.log(err))
});

module.exports = router;