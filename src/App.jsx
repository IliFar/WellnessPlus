import React, { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  // console.log(length);

  return (
    <>
      {length ? (
        <SignUp />
      ) : (
        <>
          <Router>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
                <Route path="/recipes" element={<Recipes/>}/>
                <Route path="/savedrecipes" element={<SavedRecipes/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
            </div>
          </Router>
        </>
      )}
    </>
  );
};

export default App;
