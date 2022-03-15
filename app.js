const express = require('express')
const path = require("path");
const env = require("dotenv").config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

// LISTEN LOG SERVER PORT
console.log("starting server...");
const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => {
    console.log(`server is running on port ${SERVER_PORT}.`);
});

module.exports = app;