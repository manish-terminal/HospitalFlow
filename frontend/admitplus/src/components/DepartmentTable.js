import React from 'react';
import { Hospital, BedDouble } from 'lucide-react';

const DepartmentTable = ({data}) => {


  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 mt-10 overflow-x-auto border border-blue-100">
      <div className="flex items-center gap-2 mb-4">
        <Hospital className="text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Department Forecast</h2>
      </div>

      <table className="w-full min-w-[700px] text-sm text-left border-collapse">
        <thead>
          <tr className="bg-blue-50 text-blue-700 uppercase text-xs tracking-wider">
            <th className="px-4 py-3 rounded-tl-lg">📅 Date</th>
            <th className="px-4 py-3">🏥 Department</th>
            <th className="px-4 py-3">🔢 Total</th>
            <th className="px-4 py-3">🛏 ICU</th>
            <th className="px-4 py-3 rounded-tr-lg">🛋 Non-ICU</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr
              key={index}
              className={`border-t transition hover:bg-blue-50 ${
                entry['ICU Patients'] > 0 ? 'bg-red-50' : ''
              }`}
            >
              <td className="px-4 py-3 text-gray-700">{entry.Date}</td>
              <td className="px-4 py-3 text-gray-700 font-medium">{entry.Department}</td>
              <td className="px-4 py-3 text-center">{entry['Predicted Total']}</td>
              <td className="px-4 py-3 text-center text-red-600 font-semibold">
                {entry['ICU Patients']}
              </td>
              <td className="px-4 py-3 text-center">{entry['Non-ICU Patients']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;
