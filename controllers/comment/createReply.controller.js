const model = require('../../models/article.model');

exports.createComment = async(req, res) => {

    let id = req.body.id;
    delete req.body.id;

    await model.findOneAndUpdate({ _id: id}, { $push: { comments: { replies: req.body } } })
        .then( doc => {
            res.status(200).json({
                status: 200,
                doc: doc
            })
        })
        .catch( err => { console.log(err)} );
}