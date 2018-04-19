var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3600;

// Create a few array variables that will hold the data
var data = {
    reservations: [],
    waitList: []
};

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

    if (data.reservations.length > 5) {
        data.waitList.push(newTable);
    } else {
        data.reservations.push(newTable);
    }
});

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

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    var newTable = {
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        uniqueID: $("#UniqueID").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/new", newTable)
        .then(function (data) {
            console.log(data);
            alert("Adding character...");
        });
});