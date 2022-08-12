import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../../api_req/recipesReqs";
import Button from "../element_components/Button";
import RecipesCard from "../recipes/RecipesCard";

const RecipeDetails = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("description");
  let params = useParams();

  useEffect(() => {
    getRecipeById(params.id, setDetails);
  }, []);

  return (
    <>
      <h1>Recipe Details</h1>
      <div className="recipe-details">
        <RecipesCard image={details.image} title={details.title} />
        <div className="recipe-info">
          <div className="recipe-btns">
            <Button
              class={`recipe-btn ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </Button>
            <Button
              class={`recipe-btn ${
                activeTab === "ingredients" ? "active" : ""
              }`}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </Button>
            <Button
              class={`recipe-btn ${
                activeTab === "instructions" ? "active" : ""
              }`}
              onClick={() => setActiveTab("instructions")}
            >
              How To Make
            </Button>
          </div>
          <div className="recipe-info-d">
            {activeTab === "description" && (
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            )}
            {activeTab === "instructions" && (
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            )}
            {activeTab === "ingredients" && (
              <ul>
                {details.extendedIngredients?.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
