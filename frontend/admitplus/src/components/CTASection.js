import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-blue-700 py-16 px-6 text-white text-center">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Revolutionize Your Hospital Management?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Join healthcare leaders who rely on AdmitPlus to forecast, plan, and deliver better care with precision.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/demo"
            className="bg-white text-blue-700 px-6 py-3 font-semibold rounded-md hover:bg-blue-100 transition"
          >
            Request a Free Demo
          </a>
          <a
            href="/features"
            className="text-white underline hover:text-blue-300"
          >
            Learn More About Features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
