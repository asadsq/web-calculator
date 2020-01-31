const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// this is how you use body parser
app.use(bodyParser.urlencoded({extended : true}));

// get methods
app.get("/", function(req, res) {

    // tells you the current file's directory
    // console.log(__dirname);
    
    res.sendFile(__dirname + "/index.html");
});

// post method for the home route 
app.post("/", function(req, res) {
    //console.log(req);

    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);
    var result = num1 + num2;

    res.send("Your result is " + result);
});

// listener method
app.listen(3000, function() {
    console.log("Starting server on port 3000");
});

// *** - BMI Calculator stuff - ***

// get method
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

// post method
app.post("/bmicalculator", function(req, res) {
    var weight = req.body.weight;
    var height = req.body.height;

    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
});