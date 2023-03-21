const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const articleRoutes   = require("./routes/article.routes");
const contactRoutes   = require("./routes/contact.routes");
const aboutRoutes     = require("./routes/about.routes");
const subscribeRoutes = require("./routes/subscribe.routes");
const commentRoutes   = require("./routes/comment.routes");
const authRoutes      = require("./routes/auth.routes");

//cors config
const CORS_OPTIONS = {
    origin: "http://localhost:4200",
    credentials: true
}

//init app
const app = express();

//app config
app.use(express.json());
app.use(cookieParser());
app.use(cors(CORS_OPTIONS));

//routes
app.use("/api/v1/articles/", articleRoutes);
app.use("/api/v1/contact/", contactRoutes);
app.use("/api/v1/about/", aboutRoutes);
app.use("/api/v1/subscribe/", subscribeRoutes);
app.use("/api/v1/comment/", commentRoutes);
app.use("/api/v1/auth/", authRoutes);

module.exports = app;