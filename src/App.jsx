import React, { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Recipes from "./components/recipes/Recipes";
import SavedRecipes from "./components/saved_recipes/SavedRecipes";
import RecipeDetails from "./components/recipe_details/RecipeDetails";
import SignUp from "./components/signUp/SignUp";
import Statistics from "./components/statistics/Statistics";
import { getUserData } from "../api_req/signupReqs";
import { AppContext } from "../context/appContext";
import { getProfileData } from "../api_req/profileReqs";
import ErrorBoundary from "./components/error_boundary/ErrorBoundary";

const App = () => {
  const [user, setUser] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [bmi, setBMI] = useState(null);
  const [bmiRange, setBmiRange] = useState("");

  useEffect(() => {
    getUserData(setUser);
    getProfileData(setProfileData);
  }, []);

  const length = user.length <= 0;
  // console.log(length);

  return (
    <ErrorBoundary>
      <AppContext.Provider
        value={{
          user,
          setUser,
          profileData,
          setProfileData,
          bmi,
          setBMI,
          bmiRange,
          setBmiRange,
        }}
      >
        {length ? (
          <SignUp />
        ) : (
          <>
            <Router>
              <Header />
              <div className="container d-flex flex-column justify-content-center align-items-center">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="statistics" element={<Statistics />} />
                  <Route path="recipes" element={<Recipes />} />
                  <Route path="recipes/:id" element={<RecipeDetails />} />
                  <Route path="savedrecipes" element={<SavedRecipes />} />
                  <Route path="contact" element={<Contact />} />
                </Routes>
              </div>
            </Router>
          </>
        )}
      </AppContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
