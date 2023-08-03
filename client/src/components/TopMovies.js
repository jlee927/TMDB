import React from "react";
import "./CSS/topMoviesStyle.css";
import Search from "./Search";

const TopMovies = ({ movie }) => {
  return (
    <div>
  
      {movie && (
        
        <div className="movie-card">
          <p className="movie-title">{movie.movieTitle}</p>
          <img
            src={movie.movieImage}
            alt={movie.title}
            className="movie-image"
          ></img>
        </div>
      )}
    </div>
  );
};

export default TopMovies;
