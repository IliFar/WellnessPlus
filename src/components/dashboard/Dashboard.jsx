import React from "react";
import DashboardCards from "./DashboardCards";
import "./Dashboard.css";
import icons from "../icons/Icons";
import {useNavigate} from "react-router-dom"

const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard">
        <DashboardCards
          title="Statistics"
          icon={icons.stats}
          action="See Your Stats"
          onClick={() => navigate("/statistics")}
        />
        <DashboardCards
          title="Profile"
          icon={icons.goPerson}
          action="See Your Profile"
          onClick={() => navigate("/profile")}
        />
        <DashboardCards
          title="Recipes"
          icon={icons.biDish}
          action="See Your Recipes"
          onClick={() => navigate("/recipes")}
        />
        <DashboardCards
          title="Saved Recipes"
          icon={icons.saved}
          action="See Your Saved Recipes"
          onClick={() => navigate("/savedrecipes")}
        />
        <DashboardCards
          title="Contact Us"
          icon={icons.email}
          action="Contact us"
          onClick={() => navigate("/contact")}
        />
      </div>
    </>
  );
};

export default Dashboard;
