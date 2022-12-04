const express = require('express');
const router = express.Router();
const { 
    getArticle, 
    getAllArticles,
    getlimitArticle,
    getEditorPicked,
    getPopularArticles,
    getLatestArticles,
    createArticle } = require('../controllers/article.controller');
const model = require('../models/article.model');

router.route('/all').get(getAllArticles).post(createArticle);
router.route('/once').get(getArticle);
router.route('/limit/:num').get(getlimitArticle);
router.route('/limit/:num/picked').get(getEditorPicked);
router.route('/limit/:num/popular').get(getPopularArticles);
router.route('/limit/:num/latest').get(getLatestArticles);

module.exports = router;