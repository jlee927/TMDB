const express = require('express'); 
const router = express.Router(); 

const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGJlZGM1YzM4MDY1ZGFjMDA0MmI4YTJjNWQxZjQ2MSIsInN1YiI6IjY0YWM1YTUwNDM0OTRmMDEwMzJiYTI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dAqL5HwMYlmFS1KjZs4EJuSvGh2fvSa1EJFQrAgqEGk",
    },
  };  

router.get("/", function(req, res)   {
    var searchURL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US'
    
    
    var keyword = req.query.keyword
    var page = req.query.page
  
    if (keyword != undefined && page != undefined) {
        searchURL = 'https://api.themoviedb.org/3/search/movie?query=' + keyword + '&include_adult=false&language=en-US&page=' + page
        // console.log(searchURL)
    }
    else if (keyword != undefined)   {
        searchURL = 'https://api.themoviedb.org/3/search/movie?query=' + keyword + '&include_adult=false&language=en-US'
        // console.log(searchURL)
    }  

    fetch(searchURL, options) 
        .then(res => res.json())
        .then(json => {
          let setOfSearch = [];

          for (let i = 0; i < json.results.length; i++) {
            let movieObject = {
              movieTitle: json.results[i].original_title,
              movieId: json.results[i].id,
              movieImage: "https://image.tmdb.org/t/p/w500/" + json.results[i].poster_path,
            };
            setOfSearch.push(movieObject);
          }

          for (let i = 0; i < json.results.length; i++) {
            // console.log(setOfSearch[i]);
          }

          res.json(setOfSearch)
        })
        .catch(err => console.error('error:' + err));
})



module.exports = router