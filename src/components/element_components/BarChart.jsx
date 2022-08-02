import React from "react";
import { Doughnut } from "react-chartjs-2";

const BarChart = (props) => {
  return <Doughnut data={props.data} />;
};

export default BarChart;
