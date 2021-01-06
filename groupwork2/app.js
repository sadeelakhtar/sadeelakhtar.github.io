const express = require("express");
const http = require("http");
const app = express();
const path = require('path');

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', function (request, response) {
    response.send('Hello World!');
});

// Routes GET requests to /lessons and /users to the request handler
app.get('/lessons', (req, res) => {
    res.json(lessons);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.use(function(req,res) {
    res.status(404).send('Page not found');
})

http.createServer(app).listen(3000);

console.log("app listens on port 3000");

let lessons = [
    {'topic':  'math', 'location': 'London', 'price': 100 },
    {'topic': 'math', 'location': 'Liverpool ', 'price': 80 },
    {'topic': 'math', 'location': 'Oxford', 'price': 90 },
    {'topic': 'math', 'location': 'Bristol', 'price': 120 },
]

let users = { 'email': 'user@email.com', 'password': 'mypassword' };