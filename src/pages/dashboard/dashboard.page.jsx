import React from 'react';
import DashboardBody from '../../components/dashboard-components/dashboard-body/dashboard-body.component';
import DashboardHead from '../../components/dashboard-components/dashboard-head/dashboard-head.component';

import './dashboard.style.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHead />
      <DashboardBody />
    </div>
  );
};

export default Dashboard;
