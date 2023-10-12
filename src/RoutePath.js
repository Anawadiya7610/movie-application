import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import MovieDetail from "./views/MovieDetail/MovieDetail";
import Notfound from "./views/PagenotFound/PagenotFound";
import "./App.css";

function RoutePath() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default RoutePath;
