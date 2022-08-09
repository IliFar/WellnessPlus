import React from "react";
import { Link } from "react-router-dom";
import "./Recipes.css";

const RecipesCard = (props) => {
  return (
    <div className="recipes-card" onClick={props.onClick}>
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
