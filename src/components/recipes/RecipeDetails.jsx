import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../../api_req/recipesReqs";
import RecipesCard from "./RecipesCard";

const RecipeDetails = () => {
  const [details, setDetails] = useState({});
  let params = useParams();

  useEffect(() => {
    getRecipeById(params.id, setDetails);
  }, []);

  return (
    <>
      <RecipesCard image={details.image} title={details.title} />
    </>
  );
};

export default RecipeDetails;
