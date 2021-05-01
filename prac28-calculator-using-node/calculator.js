const express = require("express");

let app = express();
// specific for parsing data from html form
//higher
app.use(express.urlencoded({ extended: false }));

//get index.html data and show it on the server
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

//hosting on the port
app.listen("3000", function () {
  console.log("server is running on port 3000");
});
