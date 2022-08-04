import React from "react";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";
import icons from "../icons/Icons";
import {useNavigate} from "react-router-dom"

const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard">
        <DashboardCard
          title="Statistics"
          icon={icons.stats}
          action="See Your Stats"
          onClick={() => navigate("/statistics")}
        />
        <DashboardCard
          title="Profile"
          icon={icons.goPerson}
          action="See Your Profile"
          onClick={() => navigate("/profile")}
        />
        <DashboardCard
          title="Recipes"
          icon={icons.biDish}
          action="See Your Recipes"
          onClick={() => navigate("/recipes")}
        />
        <DashboardCard
          title="Saved Recipes"
          icon={icons.saved}
          action="See Your Saved Recipes"
          onClick={() => navigate("/savedrecipes")}
        />
        <DashboardCard
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
