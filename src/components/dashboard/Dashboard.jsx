import React from "react";
import DashboardCards from "./DashboardCards";
import "./Dashboard.css";
import icons from "../icons/Icons";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard">
        <DashboardCards
          title="Statistics"
          icon={icons.stats}
          action="See Your Stats"
        />
        <DashboardCards
          title="Profile"
          icon={icons.goPerson}
          action="See Your Profile"
        />
        <DashboardCards
          title="Recipes"
          icon={icons.biDish}
          action="See Your Recipes"
        />
        <DashboardCards
          title="Saved Recipes"
          icon={icons.saved}
          action="See Your Saved Recipes"
        />
        <DashboardCards
          title="Contact Us"
          icon={icons.email}
          action="Contact us"
        />
      </div>
    </>
  );
};

export default Dashboard;
