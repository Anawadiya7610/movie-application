import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieListing.css";
import MovieCard from "../Movie/MovieCard";
import { fetchAsyncMovies } from "../../api/movieApi/Action";
import { fetchAsyncSeries } from "../../api/serise/actionSeries";



function MovieListing() {
  let movies = useSelector((state) => state);
  const dispatch = useDispatch();
  const [movesData, setMoviesData] = useState(false);
  const [seriseData, setSeriseData] = useState(false);


  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, [dispatch]);

  let resultMovie = movies && movies.moviePage && movies.moviePage.moviesData;
  let resultSeries = movies && movies.seriesPage && movies.seriesPage.seriesData;

  useEffect(() => {
    if (resultMovie && resultMovie) {
      setMoviesData(true);
    }
    if (resultSeries && resultSeries) {
      setSeriseData(true);
    }
  }, [movies])

  if (resultMovie && resultMovie) {
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

    if (resultSeries && resultSeries) {


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
          {movesData ? (
            <div className="movie-list">
              <h2 className="card-info">Movies</h2>
              <div className="movie-container">{renderMovise}</div>
            </div>
          ) : (<div className="movie-list">
            <h1 > Loading...</h1>
          </div>)}
          {seriseData ? (
            <div className="series-list">
              <h2 className="card-info">Shows</h2>
              <div className="movie-container">{renderShow}</div>
            </div>
          ) : (<div className="series-list">
            <h1>
              Loading...</h1></div>)
          }
        </div >
      );
    }
  }
}

export default MovieListing;
