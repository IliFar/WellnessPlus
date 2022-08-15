import React, { useEffect, useState } from "react";
import { getRecipesData, getRecipeById } from "../../../api_req/recipesReqs";
import RecipesCard from "./RecipesCard";
import icons from "../icons/Icons";
import { Outlet, useNavigate } from "react-router-dom";
import RecipesLogic from "./RecipesLogic";
import "./Recipes.css";


const Recipes = () => {
  const navigate = useNavigate();
  const {data} = RecipesLogic();

  return (
    <>
      <h1>Recipes</h1>
      <div className="recipes">
        {data.map((recipe) => {
          return (
            <RecipesCard
              image={recipe.image}
              key={recipe.id}
              title={recipe.title}
              icon={icons.biDish}
              onClick={() => {
                navigate(`/recipes/${recipe.id}`)
              }}
            />
          );
        })}
      </div>

      <Outlet />
    </>
  );
};

export default Recipes;
