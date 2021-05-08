const express = require("express");

const app = express();

app.use(express.static("public"));
// another method
// app.use("/static", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.listen("3000", function () {
  console.log("program running in port 3000");
});
