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

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
const port = process.env.PORT || 5000;
app.listen(port, error => {
    if (error) throw error;
    console.log("Server running on port " + port);
});