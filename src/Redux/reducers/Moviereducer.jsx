import moviseAction from "../action/Action";
import { ActionTypes } from "../constant/ConstTypes";

const initialState = {
  movies: {},
};

export const moviesReducer = (state = { initialState }, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};
