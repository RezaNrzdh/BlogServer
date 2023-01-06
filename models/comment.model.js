const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    comment: { type: String, required: true },
    created: { type: Number, required: true, default: Date.now },
    replies: [
        {
            name: { type: String, required: true },
            email: String,
            comment: { type: String, required: true },
            created: { type: Number, required: true, default: Date.now }
        }
    ]
}, { collection: "comment" });

const Comments = mongoose.model("Comments", CommentSchema);
module.exports = Comments;