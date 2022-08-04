import React from "react";

const RecipesCard = (props) => {
  return (
    <div className="recipes-card" onClick={props.onClick}>
      <div className="title-icon">
        <h4>{props.title}</h4>
        <div className="recipes-icon">{props.icon}</div>
      </div>
      <div className="recipes-card-body">
        <h5>{props.action}</h5>
      </div>
    </div>
  );
};

export default RecipesCard;
