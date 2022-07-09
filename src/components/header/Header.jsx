import React from "react";
import "./header.css";
import { HiHome } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { IoMdStats } from "react-icons/io";
import { BiDish } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <div className="dashboard icon" title="Dashboard">
          <HiHome />
        </div>
        <div className="profile icon" title="Profile">
          <GoPerson />
        </div>
        <div className="statistics icon" title="Statistics">
          <IoMdStats />
        </div>
        <div className="recipes icon" title="Recipes">
          <BiDish />
        </div>
        <div className="contact icon" title="Contact">
          <MdAlternateEmail />
        </div>
      </div>
    </div>
  );
};

export default Header;
