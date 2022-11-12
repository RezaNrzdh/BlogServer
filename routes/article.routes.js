const express = require('express');
const router = express.Router();
const { 
    getArticle, 
    getAllArticles,
    getlimitArticle,
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


module.exports = router;