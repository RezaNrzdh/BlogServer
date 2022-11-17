const express = require('express');
const cors = require('cors');

const articleRoutes = require('./routes/article.routes');

//cors config
const CORS_OPTIONS = {
    origin: 'http://localhost:4000',
    optionSuccessStatus: 200
}

//init app
const app = express();

//app config
app.use(express.json());
app.use(cors());

//routes
app.use('/api/article', articleRoutes);

module.exports = app;