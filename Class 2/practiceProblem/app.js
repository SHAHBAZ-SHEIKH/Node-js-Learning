const express = require("express");

const homeRouter = require("./routers/home");
const addContactRouter = require("./routers/addContact");
const path = require("path")

const rootDir = require("./utils/pathUtils");


const app = express();

app.use(express.urlencoded())

app.use(homeRouter)
app.use(addContactRouter)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))
})

app.listen(3003,()=>{
    console.log("Server is running on port 3000")
})    