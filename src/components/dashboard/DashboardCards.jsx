import React from 'react';
import "./Dashboard.css";

const DashboardCards = (props) => {
  return (
    <div className='dashboard-card'>
      <div className="title-icon">
        <h4>{props.title}</h4>
        <div className="dashboard-icon">
            {props.icon}
        </div>
      </div>
      <div className='dashboard-card-body'>
        <h5>{props.action}</h5>
      </div>
    </div>
  )
}

export default DashboardCards