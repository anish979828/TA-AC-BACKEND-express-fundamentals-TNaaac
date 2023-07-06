var express = require("express");
var logger = require("morgan");

var app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));


// routes 

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/new",(req,res) => {
    res.sendFile(__dirname + "/new.html")
});

app.post("/new",(req,res) => {
    console.log(req.body)
    res.json(req.body);
});

app.listen(3001,() => {
    console.log("server is running on port 3001");
});
