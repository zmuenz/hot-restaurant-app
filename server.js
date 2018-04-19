var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

// Create a few array variables that will hold the data
var data = {
    reservations: [],
    waitList: []
};

var visitorCount = 0;

// Create a set of routes for getting and posting table data


// Create a set of routes for displaying the HTML pages
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reseration.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});