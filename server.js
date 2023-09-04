const express = require('express');
const mongoose = require('mongoose');

// create a express app
 const app = express();

// connect to mongodb using mongoose

 mongoose
 .connect(process.env.MONGO_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 })
 .then(()=>{
    console.log("Connected to mongodb");
 })
 .catch((err)=>{
    console.log("Could not connect to mongodb",err);
 })

app.get('/health',async(req,res)=>{
    res.status(200).json("Server is listening and running");
});

 // start the server
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
 });