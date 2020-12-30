const Express  = require("express");
const mongoose = require("mongoose");
const moment = require("moment");
const Person = require("./routers/Person");
const bodyParser = require("body-parser");
require("dotenv/config");
//Initializing Express
const express = new Express();

//Running Body-Parser as Middleware (basically to convert the data which we receive through POST to convert it into the JSON format

express.use(bodyParser.json());

//Learning Middleware
const logger = (req,res,next) =>{
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl} : ${moment().format()}`);
    next();
}
express.use(logger);


//Trying Get method
express.get("/",((req, res) => {
    res.send("<h1>Hello There</h1>")
}));

//Creating Server
express.listen(8080 , ()=>console.log("Server Started...."));

//Connecting to Database
mongoose.connect(process.env.DB ,
    { useUnifiedTopology: true },()=>console.log("connection Establised"));

//Using Imported Person Router using Middleware
express.use("/person",Person);
