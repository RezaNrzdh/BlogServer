const model = require('../../models/article.model');

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