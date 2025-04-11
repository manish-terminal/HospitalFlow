import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* 🔷 Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-700">Admit<span className="text-gray-800">Plus</span></h2>
          <p className="text-sm text-gray-500 mt-2 max-w-xs">
            AI-powered hospital resource management. Forecast, plan, and prevent — smarter than ever.
          </p>
        </div>

        {/* 🧭 Navigation */}
        <div className="flex flex-col sm:flex-row gap-6 text-sm">
          <a href="/" className="hover:text-blue-600 transition">Dashboard</a>
          <a href="/forecast" className="hover:text-blue-600 transition">Forecast</a>
          <a href="/report" className="hover:text-blue-600 transition">Reports</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>

      {/* 📜 Bottom */}
      <div className="mt-8 border-t pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AdmitPlus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
