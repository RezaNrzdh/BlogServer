const jwt = require("jsonwebtoken");
const model = require("../../models/user.model");

exports.signup = async(req, res) => {
    await model.create(req.body)
        .then( doc => {
            const token = jwt.sign(
                { uid: doc._id, name: doc.email, role: doc.role },
                process.env.SECRET,
                { expiresIn: process.env.EXPIRES_IN });

            res.cookie("jwt", token, { httpOnly: true, maxAge: process.env.MAX_AGE });

            res.status(201).json({
                status: 201,
                doc: doc
            });
        })
        .catch( err => {
            res.status(422).send(err);
        });
}