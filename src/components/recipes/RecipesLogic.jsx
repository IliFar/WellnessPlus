import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipesData } from "../../../api_req/recipesReqs";

const RecipesLogic = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipesData(setData);
  }, []);

  const handleClick = (id) => {
    return navigate(`/recipes/${id}`);
  }

  return {data, handleClick};
};

export default RecipesLogic;
