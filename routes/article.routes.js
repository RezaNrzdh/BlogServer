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
const model = require('../models/article.model');

router.route('/').get(getAllArticles).post(createArticle);
router.route('/:id').get(getArticle);
router.route('/limit/:num').get(getlimitArticle);
router.route('/limit/:num/picked').get(getEditorPicked);
router.route('/limit/:num/popular').get(getPopularArticles);
router.route('/limit/:num/rest').get(getOtherArticles);
router.route('/test/test').get(async (req, res) => {
    const a = await model.find().count();
    res.status(200).json(a);
});

module.exports = router;