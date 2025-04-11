import React from 'react';
import { UploadCloud, BrainCog, LayoutDashboard, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Step 1: Load Your Data',
    description: 'Connect your hospital’s EMR system or upload patient admission data securely.',
    icon: <UploadCloud className="w-8 h-8 text-blue-700" />,
  },
  {
    title: 'Step 2: AI Forecasting',
    description: 'Our engine analyzes patterns and predicts beds, staff needs, and ICU loads.',
    icon: <BrainCog className="w-8 h-8 text-blue-700" />,
  },
  {
    title: 'Step 3: See Visual Insights',
    description: 'Get real-time dashboards with daily breakdowns and capacity risk levels.',
    icon: <LayoutDashboard className="w-8 h-8 text-blue-700" />,
  },
  {
    title: 'Step 4: Take Action',
    description: 'Reallocate staff, arrange beds, and communicate proactively — all in one place.',
    icon: <CheckCircle className="w-8 h-8 text-blue-700" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-blue-50 py-20 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How AdmitPlus Works</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          From patient data to precise predictions — AdmitPlus makes hospital operations smarter and smoother.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left mt-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start hover:shadow-xl transition">
              <div className="bg-blue-100 p-3 rounded-md mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
