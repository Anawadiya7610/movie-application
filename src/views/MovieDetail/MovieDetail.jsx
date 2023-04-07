import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSelect } from "../../api/selectPageApi/actionSelect";
import "./MovieDetail.css";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const selectData = useSelector((state) => state);
  console.log(selectData);

  useEffect(() => {
    dispatch(fetchSelect(imdbID));
   
    return()=>{
        // dispatch(removeSelectdata())
    }
  }, [dispatch, imdbID]);

  let result = selectData.selectPage.selectsData;

  if (result !== null && result !== undefined) {
    return (
      <div className="movie-section">
        <div className="section-left">
          <div className="movie-title">{result.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating <i className="fa fa-star">:</i> {result.imdbRating}
            </span>
            <span>
              IMDB Votes <i className="fa fa-thumbs-up">:</i> {result.imdbVotes}
            </span>
            <span>
              Runtime <i className="fa fa-film">: </i>{result.Runtime}
            </span>
            <span>
              Year <i className="fa fa-calendar">:</i> {result.Year}
            </span>
          </div>
          <div className="movie-plot"> {result.Plot} </div>
          <div className="movie-info">
            <ul>
              <li className="detailfilm">
                <span className="detailfilm1">Director </span>
                <span className="detailfilm2"> {result.Director} </span>
              </li>
              <li className="detailfilm">
                <span className="detailfilm1">Star </span>
                <span className="detailfilm2"> {result.Actors} </span>
              </li>
              <li className="detailfilm">
                <span className="detailfilm1">Genere </span>
                <span className="detailfilm2"> {result.Genre} </span>
              </li>
              <li className="detailfilm">
                <span className="detailfilm1">Language </span>
                <span className="detailfilm2"> {result.Language} </span>
              </li>
              <li className="detailfilm">
                <span className="detailfilm1">Award </span>
                <span className="detailfilm2"> {result.Awards} </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-right">
          <img src={result.Poster} alt={result.Title} />
        </div>
      </div>
    );
  }
}

export default MovieDetail;
