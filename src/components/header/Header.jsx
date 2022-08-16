import React from "react";
import "./header.css";
import icons from "../icons/Icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <div className="home icon" title="Dashboard">
          <Link to="/" className="link">
            {icons.hiHome}
          </Link>
        </div>
        <div className="icon" title="Profile">
          <Link to="/profile" className="link">
            {icons.goPerson}
          </Link>
        </div>
        <div className="stats icon" title="Statistics">
          <Link to="/statistics" className="link">
            {icons.stats}
          </Link>
        </div>
        <div className=" icon" title="Recipes">
          <Link to="/recipes" className="link">
            {icons.biDish}
          </Link>
        </div>
        <div className="saved-recipes icon" title="Saved Recipes">
          <Link to="/savedrecipes" className="link">
            {icons.saved}
          </Link>
        </div>
        <div className="contact icon" title="Contact">
          <Link to="/contact" className="link">
            {icons.email}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
