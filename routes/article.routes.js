const express = require('express');
const router = express.Router();
const { 
    getArticle, 
    getAllArticles,
    getlimitArticle,
    getEditorPicked,
    getPopularArticles,
    getOtherArticles,
    createArticle } = require('../controllers/article.controller');

router
.route('/')
.get(getAllArticles)
.post(createArticle);

router
.route('/:id')
.get(getArticle);

router
.route('/limit/:num')
.get(getlimitArticle);

router
.route('/picked/:num')
.get(getEditorPicked);

router
.route('/popular/:num')
.get(getPopularArticles);

router
.route('/others/other')
.get(getOtherArticles);


module.exports = router;