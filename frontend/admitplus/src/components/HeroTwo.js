import React from 'react';

const HeroTwo = () => {
  return (
    <div className="w-screen bg-white py-20 px-4">
      <div className="max-w-screen-xl mx-auto text-center flex flex-col items-center">
        {/* 👋 Tagline */}
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
          Predict. Prepare. Perform.
        </p>

        {/* 🧠 Main Heading */}
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl">
          Smarter Hospital Resource Management Starts Here
        </h1>

        {/* 📝 Description */}
        <p className="mt-6 text-gray-600 max-w-2xl text-lg">
          AdmitPlus empowers hospitals with AI-based forecasts to manage beds, staff, and ICU loads effortlessly — saving lives through precision planning.
        </p>

        {/* 📥 CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your work email"
            className="h-12 w-72 rounded-lg border border-gray-300 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="h-12 px-6 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition">
            Request Early Access
          </button>
        </div>

        {/* 📸 Optional Illustration */}
        <div className="mt-16">
          <img
            src="/images/hero-chart.png"
            alt="Hospital Analytics"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
