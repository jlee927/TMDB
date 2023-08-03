const express = require("express");
const router = express.Router();

const key =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGJlZGM1YzM4MDY1ZGFjMDA0MmI4YTJjNWQxZjQ2MSIsInN1YiI6IjY0YWM1YTUwNDM0OTRmMDEwMzJiYTI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dAqL5HwMYlmFS1KjZs4EJuSvGh2fvSa1EJFQrAgqEGk";
const url = "https://api.themoviedb.org/3/" + key;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGJlZGM1YzM4MDY1ZGFjMDA0MmI4YTJjNWQxZjQ2MSIsInN1YiI6IjY0YWM1YTUwNDM0OTRmMDEwMzJiYTI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dAqL5HwMYlmFS1KjZs4EJuSvGh2fvSa1EJFQrAgqEGk",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("erro:" + err));

module.exports = router;
