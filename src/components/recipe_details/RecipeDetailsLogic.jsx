import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../../api_req/recipesReqs";

const RecipeDetailsLogic = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("description");
  let params = useParams();

  useEffect(() => {
    getRecipeById(params.id, setDetails);
  }, []);

  let descriptionClassName = `recipe-btn ${
    activeTab === "description" ? "active" : ""
  }`;

  let ingredientsClassName = `recipe-btn ${
    activeTab === "ingredients" ? "active" : ""
  }`;

  let instructionsClassName = `recipe-btn ${
    activeTab === "instructions" ? "active" : ""
  }`;

  let image = details.image;
  let title = details.title;

  const handle_Description_Button_Click = () => {
    setActiveTab("description");
  };
  const handle_Ingredients_Button_Click = () => {
    setActiveTab("ingredients");
  };
  const handle_Instructions_Button_Click = () => {
    setActiveTab("instructions");
  };

  const showContent = () => {
    if (activeTab === "ingredients") {
      return (
        <ul>
          {details.extendedIngredients?.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      );
    } else if (activeTab === "instructions") {
      return <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>;
    }
    return <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>;
  };

  return {
    descriptionClassName,
    ingredientsClassName,
    instructionsClassName,
    handle_Description_Button_Click,
    handle_Ingredients_Button_Click,
    handle_Instructions_Button_Click,
    showContent,
    image,
    title
  };
};

export default RecipeDetailsLogic;
