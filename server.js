var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3600;

// Create a few array variables that will hold the data
var reservations = [];
var waitList = [];

var visitorCount = 0;

// Create a set of routes for getting and posting table data
app.get("/api/:tables?", function (req, res) {
    var chosen = req.params.reservations;

    if (chosen) {
        console.log(chosen);

        for (var x = 0; x < tables.length; x++) {
            if (chosen === tables[x].routeName) {
                return res.json(tables[x]);
            }
        }
        return res.json(false);
    }
    return res.json(tables);
});

app.post("/api/new", function (req, res) {
    var newTable = req.body;

    newTable.routeName = newTable.name;

    console.log(newTable);

    if (reservations.length > 5) {
        waitList.push(newTable);
    } else {
        reservations.push(newTable);
    }
});

// Create a set of routes for displaying the HTML pages
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "Index.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation-page.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "reswait.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});