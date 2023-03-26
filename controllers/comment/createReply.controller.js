const model = require('../../models/article.model');

exports.createReply = async(req, res) => {

    let postId = req.body.postId;
    let id     = req.body.id;

    delete req.body.postId;
    delete req.body.id;

    await model.updateOne(
        { _id: postId},
        { $push: { "comments.$[comment].replies": req.body } },
        {arrayFilters: [{ "comment._id": id }]})
        .then( doc => {
            res.status(201).json({
                status: 201,
                doc: doc
            })
        })
        .catch( err => { console.log(err)} );
}