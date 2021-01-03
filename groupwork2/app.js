const express = require("express");
const http = require("http");
const app = express();
const path = require('path');
const cors = require('cors');
const mustache = require ('mustache');

app.get(function (request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});

app.get('/', function (request, response) {
    response.send('Hello,world!');
});

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// Routes GET requests to /lessons to the request handler
app.get('/lessons', (req, res) => {
    res.json(lessons);
});

app.use(function(req,res) {
    res.status(404).send('page not found)');
})
http.createServer(app).listen(3000);
console.log("app listens on port 3000");

let lessons = [
    { 't o p i c' :  'math ', ' l o c at i o n ': ' London ', ' p r i c e ': 100 },
    { ' t o p i c ': ' math ', ' l o c at i o n ': ' L i v e r p o o l ', ' p r i c e ': 80 },
    { ' t o p i c ': ' math ', ' l o c at i o n ': ' Oxford ', ' p r i c e ': 90 },
    { ' t o p i c ': ' math ', ' l o c at i o n ': ' B r i s t o l ', ' p r i c e ': 120 },
]