const jwt    = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const model  = require("../../models/user.model");

exports.signup = async(req, res) => {

    req.body.password = await bcrypt.hash(req.body.password, 12);

    await model.create(req.body)
        .then( doc => {
            const token = jwt.sign(
                {
                    uid: doc._id,
                    name: doc.email,
                    role: doc.role
                },
                process.env.SECRET,
                { expiresIn: process.env.EXPIRES_IN });

            res.cookie(
                "jwt",
                token,
                {
                    httpOnly: true,
                    maxAge: process.env.MAX_AGE
                });

            res.status(201).json({
                status: 201,
                doc: {
                    uid: doc._id,
                    name: doc.email,
                    role: doc.role
                }
            });
        })
        .catch( err => {
            res.status(422).send(err);
        });
}