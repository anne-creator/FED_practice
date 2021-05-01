const express = require("express");

let app = express();
app.use(express.urlencoded({ extended: false }));

//calculator
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
//get data from the form and show it on the server
//the form data is transfered from urlencoded method
app.post("/", function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let sum = num1 + num2;
  res.send("The sum of two number is  " + sum);
});

//imb calculator
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  let weight = +req.body.weight;
  let height = +req.body.height;
  let bmi = Math.round((weight / (height * height)) * 10000 * 10) / 10;
  res.send("The BMI number is  " + bmi + " and your weight is  " + weight);
});

app.listen("3000", function () {
  console.log("the server is running in the port 3000");
});
