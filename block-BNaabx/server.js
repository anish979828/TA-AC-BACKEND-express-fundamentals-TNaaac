const express = require('express');
const app = express();

// Custom Middleware for morgan 
const loggerMiddleware = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const currentTime = new Date().toLocaleString();
  console.log(`Method: ${method} | URL: ${url} | Time: ${currentTime}`);
  next();
};

app.use(loggerMiddleware);

// Custom Middleware for json

const json = (req,res,next) => {
    req

}




