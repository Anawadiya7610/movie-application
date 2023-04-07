import appReducer from "./appReducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const store = configureStore(
    {reducer: appReducer},
    composeWithDevTools(applyMiddleware(thunk))
  );



export default store;
