const express = require('express');
const router = express.Router();
const { getArticle, getAllArticles } = require('../controllers/article.controller');

router.route('/').get(getAllArticles);
router.route('/:id').get(getArticle);



module.exports = router;