import React from "react";
import Contact from "./components/contact/Contact";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Recipes from "./components/recipes/Recipes";
import SavedRecipes from "./components/savedRecipes/SavedRecipes";
import Statistics from "./components/statistics/Statistics";

const App = () => {
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        {/* <Dashboard /> */}
        <Profile />
        <Statistics />
        <Recipes />
        <SavedRecipes />
        <Contact />
      </div>
    </>
  );
};

export default App;
