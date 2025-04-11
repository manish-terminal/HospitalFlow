import React, { useEffect, useState } from 'react';

import axios from 'axios';
import AlertBanner from '../components/AlertBanner';
import DepartmentTable from '../components/DepartmentTable';
import { data } from 'react-router-dom';
import ICUUtilizationChart from '../components/ICUUtilization';

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [departments, setDepartments] = useState([]);
//   const [alerts, setAlerts] = useState([]);
const data = [
    {
      Date: '2025-04-12',
      Department: 'Cardiology',
      'Predicted Total': 1,
      'ICU Patients': 0,
      'Non-ICU Patients': 1,
    },
    {
      Date: '2025-04-12',
      Department: 'Endocrinology',
      'Predicted Total': 1,
      'ICU Patients': 0,
      'Non-ICU Patients': 1,
    },
  ];
  useEffect(() => {
    // Simulated API call - replace with actual backend endpoints
    axios.get('/api/dashboard-data').then((res) => {
      setStats(res.data.stats);
      setForecast(res.data.forecast);
      setDepartments(res.data.departments);
    //   setAlerts(res.data.alerts);
    });
  }, []);

  return (
    <div className="px-6 py-8 bg-gradient-to-br from-blue-50 via-white to-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8 drop-shadow-sm">🏥 AdmitPlus Dashboard</h1>

     
      <div className="mt-8 animate-slide-in-right">
        <DepartmentTable data={data}/>
      </div>

      <div className="mt-8 animate-fade-in-up">
        <ICUUtilizationChart data={data} />
      </div>

   

     
    </div>
  );
};

export default Dashboard;
