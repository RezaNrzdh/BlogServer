const jwt = require("jsonwebtoken");

exports.login = async(req, res) => {
    const token = jwt.sign(
        { uid: 547329, name: "RezaNrzdh", admin: true
        },
        process.env.SECRET,
        { expiresIn: process.env.EXPIRES_IN });

    res.cookie("jwt", token, { httpOnly: true, maxAge: process.env.MAX_AGE });

    res.status(200).json({
        status: 200,
        token
    });
}