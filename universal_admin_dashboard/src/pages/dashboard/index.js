import React from 'react';
import Shortcuts from '../../components/widgets/shortcuts/index.js';
import Reports from '../../components/widgets/reports/index.js';
import Analytics from '../../components/widgets/analytics/index.js';
import Orders from '../../components/widgets/orders/index.js';
import Products from '../../components/widgets/products/index.js';

import './style.css';

const Dashboard = () => (
  <div className="dashboard">
    <div className="tittle">
      <h1>Dashboard</h1>
    </div>
    <Shortcuts />
    <div className="container">
      <Reports />
      <Analytics />
      <Orders />
      <Products />
    </div>
  </div>
);

export default Dashboard;
