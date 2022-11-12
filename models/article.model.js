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
    created: {
        type: Number,
        required: true,
        default: new Date(Date.now())
    }
},{ 
    collation: 'articles'
});

const Articles = mongoose.model('Articles', ArticleSchema);

module.exports = Articles;