exports.logout = async(req, res) => {
    res.cookie("jwt", null, {maxAge:0, httpOnly: true});
    res.status(200).json(true);
}