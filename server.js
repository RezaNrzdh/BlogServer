const dotenv   = require("dotenv");
const mongoose = require('mongoose');
const app      = require('./app');

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

// Database Configuration
const DB_URI = process.env.DB_URI;
mongoose.connect(DB_URI);

// Error Handling
// Environment Variables

app.listen(PORT, () => {
    console.log('Waiting for request...')
})