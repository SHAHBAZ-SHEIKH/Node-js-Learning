// External Modules

const express = require('express');

// Core Modules

const path = require("path");





// Local Modules

const userRouter = require("./routes/userRoutes");
const hostRouter = require("./routes/hostRoutes");
const rootDir = require("./utils/pathUtils");

const app = express();



app.use(express.urlencoded())

app.use(userRouter)

app.use(hostRouter)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))()
})






app.listen(3001, () => {
    console.log("Server is running on port 3000");
});