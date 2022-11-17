const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,   
    },
    img: {
        type: Array,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    duration: {
        type: Number
    },
    author: {
        type: String,
        required: true
    },
    tags: {
        type: Array
    },
    editorpicked: {
        type: Boolean,
        default: false
    },
    visit: {
        type: Number,
        default: 0
    },
    created: {
        type: Number,
        required: true,
        default: new Date(Date.now())
    }
},{ 
    collection: 'articles'
});

const Articles = mongoose.model('Articles', ArticleSchema);

module.exports = Articles;