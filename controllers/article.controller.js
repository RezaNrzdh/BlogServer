const model = require('../models/article.model');

exports.getAllArticles = (req, res) => {
    res.status(200).send('getAllArticles');
}

exports.getArticle = (req, res) => {
    res.status(200).send('getArticle');
}

exports.createArticle = async (req, res) => {
    await model.create(req.body)
        .then( doc => {
            res.status(200).json({
                status: 200,
                doc: doc
            })
        })
        .catch( err => {
            console.log(err);
        });
}