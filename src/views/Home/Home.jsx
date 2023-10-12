import { React } from "react";
import "./Home.css";
import MovieListing from "../MovieListing/MovieListing";

function Home() {
  return (
    <div className="banner_img">
      <MovieListing />
    </div>
  );
}

export default Home;
