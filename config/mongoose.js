// IMPORTING PACKAGE
const mongoose = require("mongoose");
const dotenv = require('dotenv');

// MAKING CONNECTION 
dotenv.config();
const pass = process.env.password;

mongoose.connect(`mongodb+srv://raghava:${pass}@cluster0.mwu6aa5.mongodb.net/csv_upload`).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

// CHECKING CONNECTION
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

module.exports = db;