import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-screen font-sans" style={{ backgroundColor: '#F0EFE9' }}>
      <div className="lg:h-[38rem] mx-auto flex max-w-screen-xl flex-col space-y-6 overflow-hidden px-6 pb-16 lg:flex-row lg:items-center">
        
        {/* Left: Content */}
        <div className="w-full lg:w-1/2">
          <div className="mt-10 lg:max-w-lg">
            <p className="mb-4 text-blue-700 font-medium tracking-wide">
              — &nbsp;&nbsp; Smarter Hospital Management
            </p>
            <h1 className="font-black text-3xl text-gray-900 lg:text-5xl lg:leading-snug">
              Predict & Optimize Hospital Resources with AdmitPlus
            </h1>

            <p className="mt-6 text-gray-600">
              AdmitPlus helps hospitals forecast bed usage, optimize staff schedules, and prevent ICU overloads with AI-powered insights — all from a single dashboard.
            </p>
          </div>

          {/* Call to action */}
          <div className="mt-8 w-full rounded-md bg-transparent lg:max-w-md">
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="m-1 h-12 flex-1 rounded-lg bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="button"
                className="m-1 h-12 rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 transition"
              >
                Get Demo Access
              </button>
            </form>
          </div>
        </div>

        {/* Right: Image + Analytics */}
     
      </div>
    </div>
  );
};

export default HeroSection;
