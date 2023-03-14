const dotenv   = require("dotenv");
const mongoose = require('mongoose');
const app      = require('./app');

// Environment Variables
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

// Database Configuration
mongoose.connect(DB_URI);

// Error Handling

app.listen(PORT, () => {
    console.log('Waiting for request...')
})