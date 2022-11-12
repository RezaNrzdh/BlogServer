const express = require('express');
const router = express.Router();
const { 
    getArticle, 
    getAllArticles,
    createArticle } = require('../controllers/article.controller');

router
.route('/')
.get(getAllArticles)
.post(createArticle);

router
.route('/:id')
.get(getArticle);



module.exports = router;