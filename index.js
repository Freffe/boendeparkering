const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const keys = require("./config/keys");
const compression = require('compression');

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const app = require('./services/helpers/app');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/fetchDataRoute")(app);

app.use(cors());

// TODO: Set up HTTPS redirection

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        console.log("Redirecting http traffic to https");
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

const port = process.env.PORT || 5000;
app.listen(port, error => {
    if (error) throw error;
    console.log("Server running on port " + port);
});