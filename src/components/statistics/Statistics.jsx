import React, { useEffect, useState } from "react";
import GetNutrients from "../../../api_req/statisticsReqs";
import StatisticsChartUI from "./StatisticsChartUI";
import "./Statistics.css";
import Button from "../element_components/Button";
import { useNavigate } from "react-router-dom";

const Statistics = () => {
  const [nutrients, setNutrients] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    GetNutrients(setNutrients);
  }, []);

  const navigateToRecipes = () => {
    navigate("/recipes");
  };

  return (
    <>
      <h1>Statistics</h1>
      <div className="statistics">
        <h4 className="h4">Here is your nutrients statistics RDV</h4>
        <p className="p">Recommended Daily Value</p>
        <div className="chart">
          {nutrients && <StatisticsChartUI nutrients={nutrients} />}
        </div>
        <Button class="rec-recipes" type="submit" onClick={navigateToRecipes}>
          Recommended Recipes
        </Button>
      </div>
    </>
  );
};

export default Statistics;
