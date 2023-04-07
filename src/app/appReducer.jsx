import { combineReducers } from "redux";
import { moviesReducer as moviePage } from "./../api/movieApi/reducerMovie";
import { seriesReducer as seriesPage } from "../api/serise/reducerSerise";
import { selectReducer as selectPage } from "../api/selectPageApi/reducerSelect";

const reducers = combineReducers({
  moviePage,
  seriesPage,
  selectPage,
});

export default reducers;
