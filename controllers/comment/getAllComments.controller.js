const model = require('../../models/article.model');

exports.getAllComments = async(req, res) => {
    await model.find({ _id: req.body.id })
        .then( doc => {
            res.status(200).json({
               status: 200,
               doc: doc
            });
        })
        .catch(err => console.log(err));
}