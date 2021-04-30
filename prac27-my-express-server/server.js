const express = require("express");
//create express app
let app = express();

//send data to the browser
app.get("/", function (req, res) {
  res.send("<h1>Hello, World</h1>");
});
app.get("/contact", function (req, res) {
  res.send("Contact me at");
});
//listen to 3000 port
app.listen("3000", function () {
  console.log("Server started on port 3000");
});
