const mongoose = require('mongoose'); 
require('dotenv').config();

const connectToDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI); 
        console.log("MongoDB is connected successfully!");
    } catch (error) {
        console.log('Database connection failed!', error);
        process.exit(1);
    }
}

module.exports = connectToDB; 