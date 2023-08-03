const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const axios = require("axios");

app.use(cors());

var PORT = process.env.port || 8000;

app.set("views", path.join(__dirname));
app.set("view engine", "ejs");

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});

const defaultRoute = require("./routes/verification");
app.use("/", defaultRoute);

const moviesRoute = require("./routes/movies");
app.use("/movies", moviesRoute);

const searchRoute = require("./routes/search");
app.use("/search", searchRoute);

app.use(function (req, res) {
  res.send("Default Page");
});
