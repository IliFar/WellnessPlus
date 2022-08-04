import React, { useEffect, useState } from "react";
import getRecipesData from "../../../api_req/recipesReqs";
import RecipesCard from "./RecipesCard";

const Recipes = () => {
  const [data, setData] = useState([]);

  return <RecipesCard />;
};

export default Recipes;
