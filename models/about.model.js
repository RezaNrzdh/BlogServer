const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
    goals: {
        type: String,
        required: true
    },
    properties: {
        type: Array,
        required: true
    },
    team: {
        type: Array,
        requires: true
    }
},{ collection: "about" });

const About = mongoose.model("About", AboutSchema);
module.exports = About;