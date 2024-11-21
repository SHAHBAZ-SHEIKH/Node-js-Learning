const express = require('express');

const addContactRouter = express.Router();

const path = require("path")
const rootDir = require("../utils/pathUtils");

addContactRouter.get("/contact-us",(req, res, next)=>{
    console.log(req.url,req.method)
    res.sendFile(path.join(rootDir,"views","addContact.html"))
})

addContactRouter.post("/contact-us",(req, res, next)=>{
    console.log(req.body)
    res.sendFile(path.join(rootDir,"views","formSubmit.html"))
})

module.exports = addContactRouter

