const jwt    = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const model  = require("../../models/user.model");

exports.login = async(req, res) => {
    const doc = await model.findOne({ email: req.body.email });

    if(!doc){
        res.status(422).json({ error: "User Not found" });
    }

    const compare = await bcrypt.compare(req.body.password, doc.password);

    if(compare) {
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

        res.status(200).json({
            status: 200,
            token,
            doc: { uid: doc._id, name: doc.email, role: doc.role },
            msg: "User Logged In"
        });
    }
    else {
        res.status(422).json({
            error: "Password in wrong!"
        });
    }
}