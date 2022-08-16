import React from "react";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";


const BarChart = (props) => {
  return <Doughnut data={props.data} />;
};

BarChart.propTypes = {
  data: PropTypes.object
}

export default BarChart;
