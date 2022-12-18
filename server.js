const mongoose = require('mongoose');
const app = require('./app');

const PORT = 3001;

// Database Configuration
const DB_URI = 'mongodb://127.0.0.1:27017/blog';
mongoose.connect(DB_URI);

// Error Handling
// Environment Variables

app.listen(PORT, () => {
    console.log('Waiting for request...')
})