const model = require('../../models/article.model');

exports.getArticle = async (req, res) => {

    const slug = req.query.slug;

    await model.findOne({ slug: { $regex: slug }})
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch( err => {
            console.log(err);
        })
}