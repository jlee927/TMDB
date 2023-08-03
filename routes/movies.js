const express = require("express");
const router = express.Router();

function display_image(image) {}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGJlZGM1YzM4MDY1ZGFjMDA0MmI4YTJjNWQxZjQ2MSIsInN1YiI6IjY0YWM1YTUwNDM0OTRmMDEwMzJiYTI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dAqL5HwMYlmFS1KjZs4EJuSvGh2fvSa1EJFQrAgqEGk",
  },
};

router.get("/", (req, res) => {
  var topMovieURL =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US";

  page = req.query.page;
  // console.log("Page :", page);
  if (page > 0) {
    topMovieURL =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=" +
      page;
  } else if (page == 0) {
    topMovieURL =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=0";
  }

  fetch(topMovieURL, options)
    .then((res) => res.json())
    .then((json) => {
      let setOfMovies = [];
      //res.status(200).send(json.results[0].original_title);
      for (let i = 0; i < json.results.length; i++) {
        let movieObject = {
          movieTitle: json.results[i].original_title,
          movieId: json.results[i].id,
          movieImage:
            "https://image.tmdb.org/t/p/w500/" + json.results[i].poster_path,
        };
        setOfMovies.push(movieObject);
      }

      for (let i = 0; i < json.results.length; i++) {
        //console.log(setOfMovies[i]);
      }

      res.json(setOfMovies);
    })
    .catch((err) => console.error("error:" + err));
});

module.exports = router;
