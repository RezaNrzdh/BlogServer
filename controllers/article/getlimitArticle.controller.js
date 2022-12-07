const model = require('../../models/article.model');

exports.getlimitArticle = async (req, res) => {

    const limit = req.params.num;

    await model.find().limit(limit).sort({_id: -1})
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch( err => {
            console.log(err);
        });
}