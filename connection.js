const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log('connection established');
}).catch(()=>{
    console.log('error in connection');
})

//Write missing code here for database connection