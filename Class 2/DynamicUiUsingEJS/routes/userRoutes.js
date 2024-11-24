// External Modules
const express = require("express");
const userRouter = express.Router();


// Core Modules

const path = require("path")

//const rootDir = require("../utils/pathUtils");

const {registerHome} = require("./hostRoutes")




userRouter.get("/",(req, res, next)=>{
    console.log(req.url,req.method)
    console.log(registerHome)
    console.log("Current page is: Home")
    res.render("home",{registerHome:registerHome,currentPage:"home"})
})

module.exports = userRouter