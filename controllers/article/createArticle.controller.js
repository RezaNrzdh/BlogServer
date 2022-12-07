const model = require('../../models/article.model');

exports.createArticle = async (req, res) => {
    await model.create(req.body)
        .then( doc => {
            res.status(201).json({
                status: 200,
                doc: doc
            });
        })
        .catch( err => {
            console.log(err);
        });
}