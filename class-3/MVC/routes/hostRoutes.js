
// External Modules

const express = require("express");
const hostRouter = express.Router();

//Core Modules

const path = require("path")
const rootDir = require("../utils/pathUtils");






hostRouter.get("/host/add-home",(req, res, next)=>{
    res.sendFile(path.join(rootDir,"views","addHome.html"))
})

hostRouter.post("/host/add-home",(req, res, next)=>{
    console.log(req.body)
    res.sendFile(path.join(rootDir,"views","homeAdd.html"))
})

module.exports = hostRouter
