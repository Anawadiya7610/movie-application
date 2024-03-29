import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { data } = props;

  return (
    <div>
      {data && data ? (
        <div className="card-item">
          <Link to={`/movie/${data.imdbID}`}>
            <div className="card-inner">
              <div className="card-top">
                <img src={data.Poster} alt={data.Title} />
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <h4>{data.Title}</h4>
                  <p>{data.Year}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div>
          Lading....
        </div>
      )}
    </div>
  );
}

export default MovieCard;
