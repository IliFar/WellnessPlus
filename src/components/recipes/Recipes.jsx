import React, { useEffect, useState } from "react";
import { getRecipesData, getRecipeById } from "../../../api_req/recipesReqs";
import RecipesCard from "./RecipesCard";
import icons from "../icons/Icons";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

const Recipes = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipesData(setData);
  }, []);

  const handleClick = (id) => {
    data.map((recipe) => {
      navigate(`/recipes/${recipe.id}`);
    });
  };

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
                navigate(`/recipes/${recipe.id}`);
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
