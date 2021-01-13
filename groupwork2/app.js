// GITHUB: https://github.com/sadeelakhtar/sadeelakhtar.github.io/tree/main/groupwork2

const express = require("express");
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

app.get('/user', (req, res) => {
    res.json(user);
});

app.use(function (req, res) {
    res.status(404).send('Page not found');
})

app.listen(3000, () => {
    console.log("app listens on port 3000");
});

let lessons = [
    { 'topic': 'math', 'location': 'London', 'price': 100, 'image': './math.png' },
    { 'topic': 'math', 'location': 'Liverpool ', 'price': 80, 'image': './math.png' },
    { 'topic': 'math', 'location': 'Oxford', 'price': 90, 'image': './math.png' },
    { 'topic': 'math', 'location': 'Bristol', 'price': 120, 'image': './math.png' },
]

let user = { 'email': 'user@email.com', 'password': 'mypassword' };