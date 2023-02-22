import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/avtarLogo.png"

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user_image">
        <img src={Logo} alt="userImg" />
      </div>
    </div>
  );
}

export default Header;
