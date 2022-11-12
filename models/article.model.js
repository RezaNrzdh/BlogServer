const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,   
    },

}, { collation: 'articles' });

const Articles = mongoose.model('Articles', ArticleSchema);

module.exports = Articles;