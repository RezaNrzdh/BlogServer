const model = require('../../models/article.model');

exports.getAllArticles = async (req, res) => {

    const lt = req.query.lt;

    if(lt == 0){
        await model.find().limit(12).sort({_id: -1})
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch( err => {
            console.log(err);
        });
    }
    else {
        await model.find({_id: { $lt: lt }}).limit(12).sort({_id: -1})
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch( err => {
            console.log(err);
        });
    }
}