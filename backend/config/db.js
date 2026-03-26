const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
        const DB_NAME = process.env.DB_NAME || 'gowndotcom';
        
        await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;