const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const connectDB = async() => {
    try{
        await mongoose.connect(`mongodb://localhost:27017/attendance_db`);
        console.log("MongoDB Connected Successfully");
    } catch(error) {
        console.log("Connection Error" + error);
    }
};

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> { console.log(`Server is running on port ${PORT}`)});