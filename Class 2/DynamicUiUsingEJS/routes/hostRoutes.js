
// External Modules

const express = require("express");
const hostRouter = express.Router();

//Core Modules

const path = require("path")
const rootDir = require("../utils/pathUtils");






hostRouter.get("/host/add-home",(req, res, next)=>{
    console.log("Current page is: Add Home")
    res.render("addHome",{currentPage:"addHome"})
})

const registerHome = [];

hostRouter.post("/host/add-home",(req, res, next)=>{
    console.log('Home registeration successful for: ',req.body)
    registerHome.push({ownerHome: req.body.name, ownerPrice: req.body.Price, ownerLocation: req.body.Location, ownerImage: req.body.Image})
    res.render("homeAdd",{currentPage:"homeAdd"})
})

exports.hostRouter = hostRouter
exports.registerHome= registerHome
