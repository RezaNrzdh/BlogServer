const model = require('../models/article.model');

// Get all of the articles.
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

// Get one article.
exports.getArticle = (req, res) => {
    res.status(200).send('getArticle');
}

// Create new article.
exports.createArticle = async (req, res) => {
    await model.create(req.body)
        .then( doc => {
            res.status(200).json({
                status: 200,
                doc: doc
            });
        })
        .catch( err => {
            console.log(err);
        });
}

// Get limited articles. DESC sort
exports.getlimitArticle = async (req, res) => {
    const limit = req.params.num;

    await model.find().limit(limit).sort({"created": -1})
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch( err => {
            console.log(err);
        });
}

// Get editor picked articles. DESC sort
exports.getEditorPicked = async (req, res) => {
    const limit = req.params.num;

    await model.find({ editorpicked: true }).limit(limit)
        .then( doc => {
            res.status(200).json(doc);
        })
        .catch( err => {
            console.log(err);
        })
}

// Get popular articles
exports.getPopularArticles = async (req, res) => {
    const limit = req.params.num;

    await model.find().limit(limit).sort({"visit": -1})
        .then( doc => {
            res.status(200).json(doc);
        })
        .catch( err => {
            console.log(err);
        });
}

// Get Articles from X to Y
exports.getOtherArticles = async (req, res) => {
    const a = req.query;
    console.log(a);
    res.status(200).json({
        r: a
    });
}
