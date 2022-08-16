import React from "react";
import "./Recipes.css";

const RecipesCard = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <div className="recipe-header">
        <img src={props.image} />
      </div>
        <div className="recipes-title">
          <h5>{props.title}</h5>
        </div>
    </div>
  );
};

export default RecipesCard;
