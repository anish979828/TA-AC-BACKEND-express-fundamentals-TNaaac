var express = require("express");

var app = express();

function logger(req,res,next){
    console.log(req.method,req.url);
    next();
};

app.use("/about",logger);

app.get("/",(req,res) => {
    res.send("welcome to page");

});

app.listen(4000,() => {
    console.log("server is listenning on port on 4k")
});