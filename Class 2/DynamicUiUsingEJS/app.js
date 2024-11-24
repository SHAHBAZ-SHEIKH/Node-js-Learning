// External Modules

const express = require('express');

// Core Modules

const path = require("path");


// Local Modules

const userRouter = require("./routes/userRoutes");
const {hostRouter} = require("./routes/hostRoutes");
const rootDir = require("./utils/pathUtils");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(rootDir,"public",)))



app.use(express.urlencoded())

app.use(userRouter)

app.use(hostRouter)

app.use((req, res, next) => {
    res.status(404).render("404",{currentPage:"404"})
})





const PORT = 3005
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
});