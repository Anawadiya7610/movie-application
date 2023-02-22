import React from "react";
import { useSelector } from "react-redux";
import "./MovieListing.css";

function MovieListing() {
  const movies = useSelector((state) => state.allMovies.movies);
  console.log(movies);

  if (movies !== undefined) {
    return (
      <div className="movie_wrapper">
        <div className="movie-list">
          <h2 className="card-info">Movies</h2>
          <div className="movie-container">
            {movies.Search.map((el, index) => {
              return (
                <div className="card-item" id={index}>
                  <div className="card-inner">
                    <div className="card-top">
                      <img src={el.Poster} alt={el.Title} />
                    </div>
                    <div className="card-bottom">
                      <div className="card-info">
                        <h4>{el.Title}</h4>
                        <p>{el.Year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieListing;
