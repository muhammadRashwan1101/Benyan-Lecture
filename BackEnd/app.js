//Get Dotenv
const dotenv = require("dotenv");
dotenv.config();
//Get express
const express = require("express");
const app = express()
//Get mongoose
const mongoose = require("mongoose");
//Get DB function
const connectDB = require("./Config/db");

//JSON Middleware 
app.use(express.json())
//Connect to DB
//Simple logger 
connectDB()
if(process.env.NODE_ENV === "dev") {
    app.use((req, res, next) => {
        console.log(`${req.method}, ${req.originalUrl}`)
        next();
    })
}

//Test Route
app.get("/test", (req, res) => {
    res.json({msg: "Test Route"})
})

const port = process.env.PORT || 3000;
//Connect to PORT and listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
