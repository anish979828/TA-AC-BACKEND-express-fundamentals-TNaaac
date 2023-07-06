var express = require("express");

var app = express();

app.use("/",(req,res,next) => {
    console.log(req.method,req.url);
    next();
})

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static( __dirname + "/public"));

app.get("/json",(req,res) => {

});

app.get("/contact",(req,res) => {

});

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html");
    console.log(req.url)
});

app.listen(5000,() => {
    console.log("server is listenning on port 5k");
});