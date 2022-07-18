import React, { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Recipes from "./components/recipes/Recipes";
import SavedRecipes from "./components/savedRecipes/SavedRecipes";
import SignUp from "./components/signUp/SignUp";
import Statistics from "./components/statistics/Statistics";
import { getData } from "../api_req/signupReqs";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getData(setUser);
  }, []);

  const length = user.length <= 0;
  console.log(length);

  return (
    <>
      {length ? (
        <SignUp />
      ) : (
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
      )}
    </>
  );
};

export default App;
