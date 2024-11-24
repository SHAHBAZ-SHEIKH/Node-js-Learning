// External Modules
const express = require("express");
const userRouter = express.Router();


// Core Modules

const path = require("path")

const rootDir = require("../utils/pathUtils");




userRouter.get("/",(req, res, next)=>{
    console.log(req.url,req.method)
    res.sendFile(path.join(rootDir,"views","home.html"))
})

module.exports = userRouter