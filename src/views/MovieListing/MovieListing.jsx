import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieListing.css";
// import { Link } from "react-router-dom";
import MovieCard from "../Movie/MovieCard";
import { fetchAsyncMovies } from "../../api/movieApi/Action";
import { fetchAsyncSeries } from "../../api/serise/actionSeries";
function MovieListing(props) {
  let movies = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, [dispatch]);

  // console.log(movies);
  let resultMovie = movies.moviePage.moviesData;
  let resultSeries = movies.seriesPage.seriesData;
  // console.log(resultSeries);
  // console.log(resultMovie);

  if (resultMovie !== null && resultMovie !== undefined) {
    // console.log(resultMovie.Response);
    let renderMovise,
      renderShow = "";
    renderMovise =
      resultMovie.Response === "True" ? (
        resultMovie.Search.map((el, index) => {
          return <MovieCard data={el} key={index} />;
        })
      ) : (
        <div className="movies-error">
          <h3>{movies.error}</h3>
        </div>
      );

    if (resultSeries !== null && resultSeries !== undefined) {
      // console.log(resultSeries.Response);

      renderShow =
        resultSeries.Response === "True" ? (
          resultSeries.Search.map((el, index) => {
            return <MovieCard data={el} key={index} />;
          })
        ) : (
          <div className="movies-error">
            <h3>{movies.error}</h3>
          </div>
        );

      return (
        <div className="movie_wrapper">
          <div className="movie-list">
            <h2 className="card-info">Movies</h2>
            <div className="movie-container">{renderMovise}</div>
          </div>
          <div className="series-list">
            <h2 className="card-info">Shows</h2>
            <div className="movie-container">{renderShow}</div>
          </div>
        </div>
      );
    }
  }
}

export default MovieListing;
