var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var app = express();



// middleware 

app.use(logger("dev"));

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded());

app.use((req, res, next) => {
    res.cookie("username","anish");
    next();
});

// Routes

app.get("/server",(req,res,next) => {
    next("Unathorised user!")
})

app.get("/",(req,res) => {
    res.send('<h2>Welcome to express</h2>');
});


app.get("/about",(req,res,next) => {
    res.send('My name is qwerty');
});


app.post("/form",(req,res) => {
   res.json(req.body);
});

app.post("/json",(req,res) => {
    res.send(req.body);
});

app.get("/users/:username",(req,res) => {
    res.send(`<h1>${req.params.username}</h1>`)
});

// error handling

app.use((req,res) => {
    res.end("Page not found!");
})

app.use((err,req,res,next) => {
    res.end(err);
})


app.listen(3000,() => {
    console.log("server is listenning on port 3k");
});
