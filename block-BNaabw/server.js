var server = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");

var app = server();

app.use(server.json());

app.use(server.urlencoded());

app.use(server.static(__dirname + "/public"));

app.get("/",(req,res,next) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about",(req,res,next) => {
    res.end("How's Going ?")
});

app.get("/about.html",(req,res,next) => {
    res.sendFile(__dirname + "/about.html");
});

app.get("/case.html",(req,res,next) => {
    res.sendFile(__dirname + "/case.html");
});

app.get("/contact.html",(req,res,next) => {
    res.sendFile(__dirname + "/contact.html");
});

app.get("/blog.html",(req,res,next) => {
    res.sendFile(__dirname + "/blog.html");
});

app.get("/service.html",(req,res,next) => {
    res.sendFile(__dirname + "/service.html");
});


app.use((req,res,next) => {
    res.send("Page not found")
});






app.listen(3000,() => {
    console.log("server is listenning on port 3k")
});