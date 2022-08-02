import React, { useEffect, useState } from "react";
import axiosGet from "../../../api_req/statisticsReqs";
import { Chart, registerables } from "chart.js";
import BarChart from "../element_components/BarChart";

const Statistics = () => {
  const [nutrients, setNutrients] = useState([]);

  useEffect(() => {
    axiosGet(setNutrients);
  }, []);

  Chart.register(...registerables);

  const nutrientsData = {
    labels: nutrients.map((nutrient) => nutrient.name).slice(" "),
    datasets: [
      {
        label: "Vitamins",
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: nutrients.map((rec) => rec.DailyValue),
      },
    ],
  };
  return (
    <>

      <BarChart data={nutrientsData} />
    </>
  );
};

export default Statistics;
