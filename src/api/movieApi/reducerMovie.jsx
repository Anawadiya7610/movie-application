import * as actionTypes from "./ConstTypes";

const initialState = {
  moviesData: null,
};

export const moviesReducer = (state = {initialState}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE:
      return {
        ...state,
        isError: false,
        moviesData: null,
        isLoading: true,
      };
    case actionTypes.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isError: false,
        moviesData: action.payload.data,
        isLoading: false,
      };
      case actionTypes.FETCH_MOVIE_REMOVEDATA:
        return {
          ...state
        }
        
    default:
      return state;
  }
};
