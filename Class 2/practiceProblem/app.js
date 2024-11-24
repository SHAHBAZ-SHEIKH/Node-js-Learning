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



const PORT = 3003
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})    

