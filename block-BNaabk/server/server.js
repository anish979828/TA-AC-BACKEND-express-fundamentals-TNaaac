var express = require("express");

const app = express();

app.get("/",(req,res) => {
    res.send("Welcome Anish");
});

app.listen(3000,() => {
    console.log(`server is listenning on port 3k`)
});
