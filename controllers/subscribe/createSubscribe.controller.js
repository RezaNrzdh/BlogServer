const model = require("../../models/subscribe.model");

exports.createSubscribe = async (req, res) => {
    let id = 0;
    let body = req.body;

    await model.count()
        .then( num => {
            id = num + 1;
            body["_id"] = id;
        })
        .catch( err => console.log(err));

    await model.create(body)
        .then( doc => {
            res.status(201).json({
                status: 201,
                doc: doc
            });
        })
        .catch( err => console.log(err));
}