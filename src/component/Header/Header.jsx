import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/avtarLogo.png";
import moment from "moment";

function Header() {
  const [hourdata, setHour] = useState(0);
  const [minutedata, setMinute] = useState(0);
  const [seconddata, setSecond] = useState(0);
  const [ampm, setAmPm] = useState("am");

  const timeUpdate = () => {
    let time = moment().format();
    let timeSplit = time.split("T")[1].split("+")[0];
    let hour = timeSplit.split(":")[0];
    let minutes = timeSplit.split(":")[1];
    let seconds = timeSplit.split(":")[2];

    setMinute(minutes);
    setSecond(seconds);

    if (hour > 12) {
      hour = hour - 12;
      setAmPm("pm");
      setHour(hour);
    }
  };

  setInterval(timeUpdate, 1000);

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Magic-Movie</div>
      </Link>
      <div className="img_prant" >
        <div className="user_image">
          <img src={Logo} alt="userImg" />
        </div>
        <div className="time" style={{ color: "white" }}>
          {hourdata}:{minutedata}:{seconddata} {ampm}
        </div>
      </div>
    </div>
  );
}

export default Header;
