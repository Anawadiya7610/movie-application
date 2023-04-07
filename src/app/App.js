import React from "react";
import { AppRootContainer } from "../shared/app-root/Approot.container";
import "../App.css";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AppRootContainer />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
