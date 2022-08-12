import React, { useEffect, useState } from "react";
import Button from "../element_components/Button";
import RecipesCard from "../recipes/RecipesCard";
import RecipeDetailsLogic from "./RecipeDetailsLogic";

const RecipeDetails = () => {
  const {
    descriptionClassName,
    ingredientsClassName,
    instructionsClassName,
    handle_Description_Button_Click,
    handle_Ingredients_Button_Click,
    handle_Instructions_Button_Click,
    showContent,
    image,
    title,
  } = RecipeDetailsLogic();

  return (
    <>
      <h1>Recipe Details</h1>
      <div className="recipe-details">
        <RecipesCard image={image} title={title} />
        <div className="recipe-info">
          <div className="recipe-btns">
            <Button
              class={descriptionClassName}
              onClick={handle_Description_Button_Click}
            >
              Description
            </Button>
            <Button
              class={ingredientsClassName}
              onClick={handle_Ingredients_Button_Click}
            >
              Ingredients
            </Button>
            <Button
              class={instructionsClassName}
              onClick={handle_Instructions_Button_Click}
            >
              How To Make
            </Button>
          </div>
          <div className="recipe-info-d">
            {showContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
