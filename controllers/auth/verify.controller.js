const jwt    = require("jsonwebtoken");
const model  = require("../../models/user.model");

exports.verify = async(req, res) => {
    if(!req.cookies.jwt){
        res.status(200).json(false);
    }
    else{
        const verify = jwt.verify(req.cookies.jwt, process.env.SECRET);

        if(verify){
            res.status(200).json(verify)
        }
        else{
            res.status(200).json(false);
        }
    }


}