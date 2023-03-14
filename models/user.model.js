const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    created: {
        type: Number,
        required: true,
        default: Date.now
    },
    role: {
        type: String,
        enum: ["user", "admin", "manager"],
        default: "user"
    },
    attempt: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }
}, {
    collection: 'users'
});

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;