import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSelect } from "../../api/selectPageApi/actionSelect";
import "./MovieDetail.css";


function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const [imdbupdate, setImdbUpdate] = useState(false);
  let selectData = useSelector((state) => state && state.selectPage && state.selectPage.selectsData);



  useEffect(() => {
    setImdbUpdate(false);
    dispatch(fetchSelect(imdbID));
  },[imdbID,dispatch]);

 

  useEffect(() => {
    if (selectData && selectData.imdbID) {
      let value = selectData && selectData.imdbID;
      if (imdbID === value) {
        setImdbUpdate(true);
      }
    }
  },[selectData,imdbID])

  let DetailPage = () => {

    return (
      <div>
        {imdbupdate ? (
          <div className="movie-section">
            <div className="section-left">
              <div className="movie-title">{selectData.Title}</div>
              <div className="movie-rating">
                <span>
                  IMDB Rating <i className="fa fa-star">:</i> {selectData.imdbRating}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up">:</i> {selectData.imdbVotes}
                </span>
                <span>
                  Runtime <i className="fa fa-film">: </i>{selectData.Runtime}
                </span>
                <span>
                  Year <i className="fa fa-calendar">:</i> {selectData.Year}
                </span>
              </div>
              <div className="movie-plot"> {selectData.Plot} </div>
              <div className="movie-info">
                <ul>
                  <li className="detailfilm">
                    <span className="detailfilm1">Director </span>
                    <span className="detailfilm2"> {selectData.Director} </span>
                  </li>
                  <li className="detailfilm">
                    <span className="detailfilm1">Star </span>
                    <span className="detailfilm2"> {selectData.Actors} </span>
                  </li>
                  <li className="detailfilm">
                    <span className="detailfilm1">Genere </span>
                    <span className="detailfilm2"> {selectData.Genre} </span>
                  </li>
                  <li className="detailfilm">
                    <span className="detailfilm1">Language </span>
                    <span className="detailfilm2"> {selectData.Language} </span>
                  </li>
                  <li className="detailfilm">
                    <span className="detailfilm1">Award </span>
                    <span className="detailfilm2"> {selectData.Awards} </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="section-right">
              <img src={selectData.Poster} alt={selectData.Title} />
            </div>
          </div>
        ) : (
          <div className="movie-section">
            <h1>
              Loading...</h1>
          </div>
        )}
      </div>
    )
  }


  return (
    <div>

      <DetailPage />

    </div>
  );

}

export default MovieDetail;
