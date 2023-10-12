import * as actionTypes from "./ConstTypeSerise";
import axios from "axios";



export const fetchAsyncSeries = (data) => {
    return (dispatch) => {
      dispatch(fetchAsyncSeriesInit());
      const baseUrl = "https://www.omdbapi.com";
      let APIkey = "5cea0b7c";
      let seriesName = "game";
  
      axios
        .get(`${baseUrl}?apikey=${APIkey}&s=${seriesName}&type=series`)
        .then((response) => {
          if (response !== undefined) {
            dispatch(fetchAsyncSeriesSuccess(response.data));
            console.warn("data:--", response.data);
          }
        })
        .catch(function (error) {
          dispatch(fetchAsyncSeriesFailure());
        });
    };
  };
  
  export const fetchAsyncSeriesInit = () => ({
    type: actionTypes.FETCH_SERIES,
  });
  export const fetchAsyncSeriesFailure = (data) => ({
    type: actionTypes.FETCH_SERIES_FAILURE,
  });
  export const fetchAsyncSeriesSuccess = (data) => ({
    type: actionTypes.FETCH_SERIES_SUCCESS,
    payload: { data },
  });
  
