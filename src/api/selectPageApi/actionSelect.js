import * as actionTypes from "./constTypeSelect";
import axios from "axios";


export const fetchSelect = (id) => {
  return (dispatch) => {
    dispatch(fetchAsyncSelectInit());
    const baseUrl = "https://www.omdbapi.com";
    let APIkey = "5cea0b7c";
    

    axios
      .get(`${baseUrl}?apikey=${APIkey}&i=${id}&plot=full`)
      .then((response) => {
        if (response !== undefined) {
          dispatch(fetchAsyncSelectSuccess(response.data));
          // console.warn("data:--", response.data);
        }
      })
      .catch(function (error) {
        dispatch(fetchAsyncSelectFailure());
      });
  };
};

export const fetchAsyncSelectInit = () => ({
  type: actionTypes.FETCH_SELECT,
});
export const fetchAsyncSelectFailure = (data) => ({
  type: actionTypes.FETCH_SELECT_FAILURE,
});
export const fetchAsyncSelectSuccess = (data) => ({
  type: actionTypes.FETCH_SELECT_SUCCESS,
  payload: { data },
});
