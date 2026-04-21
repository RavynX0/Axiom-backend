const express = require('express');

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();



const app = express();
app.use(express.json());//middleware

const tasksRoutes = require('./routes/tasks.routes');
app.use('/api/tasks', tasksRoutes);

const port = process.env.PORT || 3000;
 
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("The database connection successful");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    
}).catch(err => {
    console.error("MongoDB connection failed");
    console.error(err);
});











