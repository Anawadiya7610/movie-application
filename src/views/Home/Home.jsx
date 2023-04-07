import { React, useEffect } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import moment from 'moment';


function Home() {
  return (

   

    <div className="banner_img">
      <MovieListing />
    </div>
  );
}

export default Home;
