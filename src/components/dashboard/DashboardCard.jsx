import React from "react";
import "./Dashboard.css";
import PropTypes from "prop-types";

const DashboardCard = (props) => {
  return (
    <div className="dashboard-card" onClick={props.onClick}>
      <div className="title-icon">
        <h4>{props.title}</h4>
        <div className="dashboard-icon">{props.icon}</div>
      </div>
      <div className="dashboard-card-body">
        <h5>{props.action}</h5>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  icon: PropTypes.object,
  action: PropTypes.string,
};

export default DashboardCard;
