import * as actionTypes from "./ConstTypes";
import axios from "axios";

export const fetchAsyncMovies = (data) => {
  return (dispatch) => {
    dispatch(fetchAsyncMoviesInit());
    const baseUrl = "https://www.omdbapi.com";
    let APIkey = "5cea0b7c";
    let movieName = "thomas";

    axios
      .get(`${baseUrl}?apikey=${APIkey}&s=${movieName}&type=movie`)
      .then((response) => {
        if (response !== undefined) {
          dispatch(fetchAsyncMoviesSuccess(response.data));
          // console.warn("data:--", response.data);
        }
      })
      .catch(function (error) {
        dispatch(fetchAsyncMoviesFailure());
      });
  };
};

export const fetchAsyncMoviesInit = () => ({
  type: actionTypes.FETCH_MOVIE,
});
export const fetchAsyncMoviesFailure = (data) => ({
  type: actionTypes.FETCH_MOVIE_FAILURE,
});
export const fetchAsyncMoviesSuccess = (data) => ({
  type: actionTypes.FETCH_MOVIE_SUCCESS,
  payload: { data },
});
