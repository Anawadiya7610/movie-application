import { combineReducers } from "redux";
import  {moviesReducer}  from "./Moviereducer";

const reducers = combineReducers({
    allMovies:moviesReducer,   
});

export default reducers;