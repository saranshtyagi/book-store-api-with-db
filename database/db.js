const mongoose = require('mongoose'); 

const connectToDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://18saranshtyagi2004:tIZAoPREkuMCfh1m@cluster0.vfcit5p.mongodb.net/"); 
        console.log("MongoDB is connected successfully!");
    } catch (error) {
        console.log('Database connection failed!', error);
        process.exit(1);
    }
}

module.exports = connectToDB; 