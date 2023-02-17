const mongoose = require("mongoose");

const SubscribeSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
      type: Boolean,
      required: true,
      default: true
    },
    created: {
        type: Number,
        required: true,
        default: Date.now
    }
},{
    collection: "subscribe"
});

const Subscribe = mongoose.model("Subscribe", SubscribeSchema);
module.exports = Subscribe;