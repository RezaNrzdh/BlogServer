const model = require('../../models/article.model');

exports.createComment = async(req, res) => {

    let id = req.body.id;
    delete req.body.id;

    await model.findByIdAndUpdate({ _id: id }, { $push: { comments: req.body } })
        .then( doc => {
            res.status(201).json({
                status: 201,
                doc: doc
            })
        })
        .catch( err => { console.log(err)} );
}