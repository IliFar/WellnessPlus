import React from "react";
import "./header.css";
import icons from "../icons/Icons";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <div className="home icon" title="Dashboard">
          {icons.hiHome}
        </div>
        <div className="icon" title="Profile">
          {icons.goPerson}
        </div>
        <div className="statistics icon" title="Statistics">
          {icons.stats}
        </div>
        <div className="recipes icon" title="Recipes">
          {icons.biDish}
        </div>
        <div className="contact icon" title="Contact">
          {icons.email}
        </div>
      </div>
    </div>
  );
};

export default Header;
