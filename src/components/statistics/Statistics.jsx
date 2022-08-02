import React, { useEffect, useState } from "react";
import axiosGet from "../../../api_req/statisticsReqs";
import { Chart, registerables } from "chart.js";
import BarChart from "../element_components/BarChart";
import StatisticsChartUI from "./StatisticsChartUI";
import "./Statistics.css";

const Statistics = () => {
  const [nutrients, setNutrients] = useState([]);

  useEffect(() => {
    axiosGet(setNutrients);
  }, []);

  return (
    <>
      <h1>Statistics</h1>
      <div className="statistics">
        <h4 className="h4">Here is your nutrients statistics RDV</h4>
        <p className="p">Recommended Daily Value</p>
        <div className="chart">
        {nutrients && <StatisticsChartUI nutrients={nutrients} />}
        </div>
        <button>Wow</button>
      </div>
    </>
  );
};

export default Statistics;
