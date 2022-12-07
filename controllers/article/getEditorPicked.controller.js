const model = require('../../models/article.model');

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