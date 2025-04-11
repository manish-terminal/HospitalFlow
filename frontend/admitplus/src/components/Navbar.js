import React from 'react';

const Navbar = () => {
  return (
    <header className="shadow mb-4 px-4 bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4">

        {/* 🌐 Brand */}
        <a href="/" className="text-2xl font-extrabold text-blue-700 tracking-tight">
          Admit<span className="text-gray-800">Plus</span>
        </a>

        {/* 🧭 Navigation */}
        <nav className="hidden sm:flex gap-6 items-center text-sm font-medium">
          <a href="/" className="text-gray-600 hover:text-blue-600 transition">Dashboard</a>
          <a href="/forecast" className="text-gray-600 hover:text-blue-600 transition">Forecast</a>
          <a href="/report" className="text-gray-600 hover:text-blue-600 transition">Reports</a>
          <a href="/alerts" className="text-gray-600 hover:text-blue-600 transition">Alerts</a>
          <a href="/about" className="text-gray-600 hover:text-blue-600 transition">About</a>

          {/* 🔐 Login CTA */}
          <a
            href="/login"
            className="border-2 border-blue-600 text-blue-600 px-5 py-1.5 rounded-xl hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
