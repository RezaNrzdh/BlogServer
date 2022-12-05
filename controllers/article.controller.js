const model = require('../models/article.model');

// Get all of the articles.
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

// Get one article.
exports.getArticle = async (req, res) => {

    const slug = req.query.slug;

    await model.findOne({ slug: { $regex: slug }})
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch( err => {
            console.log(err);
        })
}

// Create new article.
exports.createArticle = async (req, res) => {
    await model.create(req.body)
        .then( doc => {
            res.status(201).json({
                status: 200,
                doc: doc
            });
        })
        .catch( err => {
            console.log(err);
        });
}

// Get limited articles. DESC sort
exports.getlimitArticle = async (req, res) => {

    const limit = req.params.num;

    await model.find().limit(limit).sort({_id: -1})
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch( err => {
            console.log(err);
        });
}

// Get editor picked articles. DESC sort
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

// Get popular articles
exports.getPopularArticles = async (req, res) => {

    const limit = req.params.num;

    await model.find().limit(limit).sort({"visit": -1})
        .then( doc => {
            res.status(200).json(doc);
        })
        .catch( err => {
            console.log(err);
        });
}

// Get latest articles
exports.getLatestArticles = async (req, res) => {
    
    const limit = req.params.num;

    await model.find().skip(5).limit(8).sort({_id: -1})
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
        });
}
