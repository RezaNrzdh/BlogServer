const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created: {
        type: Number,
        required: true,
        default: Date.now
    }
},{ 
    collection: 'contacts'
});

const Contacts = mongoose.model('Contacts', ContactSchema);
module.exports = Contacts;