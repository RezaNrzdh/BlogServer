const express = require('express');
const router = express.Router();

const { getArticle } = require('../controllers/article/getArticle.controller');
const { getAllArticles } = require('../controllers/article/getAllArticles.controller');
const { getlimitArticle } = require('../controllers/article/getlimitArticle.controller');
const { getEditorPicked } = require('../controllers/article/getEditorPicked.controller');
const { getPopularArticles } = require('../controllers/article/getPopularArticles.controller');
const { getLatestArticles } = require('../controllers/article/getLatestArticles.controller');
const { createArticle } = require('../controllers/article/createArticle.controller');

router.route('/').post(createArticle);
router.route('/all').get(getAllArticles);
router.route('/once').get(getArticle);
router.route('/limit/:num').get(getlimitArticle);
router.route('/limit/:num/picked').get(getEditorPicked);
router.route('/limit/:num/popular').get(getPopularArticles);
router.route('/limit/:num/latest').get(getLatestArticles);

module.exports = router;