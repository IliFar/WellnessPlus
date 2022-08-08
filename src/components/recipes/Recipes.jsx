import React, { useEffect, useState } from "react";
import getRecipesData from "../../../api_req/recipesReqs";
import RecipesCard from "./RecipesCard";
import icons from "../icons/Icons";

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRecipesData(setData);
  }, []);

  return (
    <>
      <h1>Recipes</h1>
      <div className="recipes">
        {data.map((item) => {
          return (
            <RecipesCard image={item.image} key={item.id} title={item.title} icon={icons.biDish}/>
          );
        })}
      </div>
    </>
  );
};

export default Recipes;
