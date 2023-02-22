import React from "react";
import "./App.css"
import { Route,Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Notfound from "./components/PagenotFound/PagenotFound";


function App() {
  return (
    <div className="App">
        <Header />
        <div className="container">
        <Routes>
           <Route path="/"  exact element={<Home/>}/>
           <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
           <Route path="*" element={<Notfound/>}/>
        
        </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
