var express = require("express");
var http = require("http");
var app = express();

app.use(function (request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});

app.use(function (request, response) { // only run if authorised
    response.end('Hello,world!');
});

http.createServer(app).listen(3000);
console.log("app listens on port 3000");