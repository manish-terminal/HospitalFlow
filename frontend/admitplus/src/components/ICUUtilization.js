import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from 'recharts';

const ICUUtilizationChart = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">🩺 ICU Bed Utilization</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: '#f9fafb', borderRadius: 8 }}
            labelStyle={{ color: '#374151', fontWeight: 500 }}
          />
          <Legend />
          <Bar dataKey="icuBeds" fill="#ef4444" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ICUUtilizationChart;
