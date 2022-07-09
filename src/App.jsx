import React from "react";
import Contact from "./components/contact/Contact";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Profile from "./components/profile/profile";
import Recipes from "./components/recipes/Recipes";
import SavedRecipes from "./components/savedRecipes/SavedRecipes";
import SignUp from "./components/signUp/SignUp";
import Statistics from "./components/statistics/Statistics";

const App = () => {
  return (
    <>
      <Header />
      <SignUp />
      <Dashboard />
      <Profile />
      <Statistics />
      <Recipes />
      <SavedRecipes />
      <Contact />
    </>
  );
};

export default App;
