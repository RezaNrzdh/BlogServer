const model = require('../../models/article.model');

exports.getLatestArticles = async (req, res) => {
    
    const limit = req.params.num;

    await model.find().skip(5).limit(8).sort({_id: -1})
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
        });
}