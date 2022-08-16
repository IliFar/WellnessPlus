import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipesData } from "../../../api_req/recipesReqs";

const RecipesLogic = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(undefined);
  const navigate = useNavigate();

  try {
    useEffect(() => {
      getRecipesData(setData, setError);
    }, []);
  } catch (err) {
    console.log(err);
    setError({ error: err.message });
  }

  const handleClick = (id) => {
    return navigate(`/recipes/${id}`);
  };

  const MessageToDisplay = "Try later or refresh the page";

  return { data, handleClick, MessageToDisplay, error };
};

export default RecipesLogic;
