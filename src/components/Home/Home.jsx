import { React, useEffect } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import APIKey from "../../common/apis/movieApiKey";
import { addmovies } from "../../Redux/action/Action";

function Home() {
  const movies = useSelector((state) => state);
  const dispatch = useDispatch();
  const movieName = "Harry";
  const fetchMovie = async () => {
    const response = await movieApi
      .get(`?apikey=${APIKey}&s=${movieName}&type=movie`)
      .catch((error) => console.log("error : ", error));
    dispatch(addmovies(response.data));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="banner_img">
      <MovieListing />
    </div>
  );
}

export default Home;
