const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use((req, res,next) => {
    console.log("First dummy Middleware", req.method, req.url)
    next();
    
});

app.use((req, res,next) => {
    console.log("Second dummy Middleware", req.method, req.url);
    next();
    
});

// app.use((req, res,next) => {
//     console.log("Third dummy Middleware", req.method, req.url)
//     res.send("Hello from Express");
    
// });

app.get("/", (req, res,next) => {
    console.log("Handling GET request", req.method, req.url)
    res.send("Welcome to / Get Route")
    
});


app.get("/contact-us", (req, res,next) => {
    console.log("Handling Contact us page", req.method, req.url)
    res.send(`<h1>Please send me a Detail Here</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name">
            <input type="email" name="email" placeholder="Enter your email" >
            <button>Submit</button>
        </form>
        `)
    
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res,next) =>{
    console.log("Handling POST request", req.method, req.url,req.body)
    res.send("Thanks for contacting us")
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
