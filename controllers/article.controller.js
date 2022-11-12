const model = require('../models/article.model');

exports.getAllArticles = async (req, res) => {
    await model.find()
        .then(doc => {
            res.status(200).json({
                status: 200,
                doc: doc
            })
        })
        .catch( err => {
            console.log(err);
        });
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

exports.getlimitArticle = async (req, res) => {
    const limit = req.params.num;

    await model.find().limit(limit)
        .then(doc => {
            res.status(200).json({
                status: 200,
                doc: doc
            })
        })
        .catch( err => {
            console.log(err);
        });
}
