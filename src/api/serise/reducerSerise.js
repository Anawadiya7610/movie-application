import * as actionTypes from "./ConstTypeSerise";

const initialState ={
  seriesData: null,
};

export const seriesReducer = (state = {initialState}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SERIES:
      return {
        ...state,
        isError: false,
        seriessData: null,
        isLoading: true,
      };
    case actionTypes.FETCH_SERIES_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionTypes.FETCH_SERIES_SUCCESS:
      return {
        ...state,
        isError: false,
        seriesData: action.payload.data,
        isLoading: false,
      };
    default:
      return state;
  }
};
