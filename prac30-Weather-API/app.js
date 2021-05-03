const express = require("express");
const https = require("https");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  //usually we get the data from html
  // console.log(res);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //when get data from API
  const query = req.body.cityName;
  const apiKey = "254f345752f81625dd8f6d4b1c960608";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  //access the url and save the data to response
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      // console.log(weatherData.main.temp);
      res.write(
        `<h1>the weather at ${query} is currently ${weatherData.weather[0].description}</h1>`
      );
      res.write(
        `<h1>the weather at ${query} is currently ${weatherData.main.temp}</h1>`
      );
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
      res.write(`<img src="${imageUrl}">`);
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("running at port 3000");
});
