import React from 'react';
import { Activity, Bell, BedDouble, BarChart3, UserCog, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Bed Forecasting',
    description: 'Predict daily bed requirements across departments using real-time patient admission trends.',
    icon: <BedDouble className="w-6 h-6 text-blue-700" />,
  },
  {
    title: 'ICU Overload Alerts',
    description: 'Receive early warnings when ICU capacity approaches critical levels — stay prepared.',
    icon: <Bell className="w-6 h-6 text-blue-700" />,
  },
  {
    title: 'Automated Staff Planning',
    description: 'Optimize staffing schedules based on projected patient loads and resource strain.',
    icon: <UserCog className="w-6 h-6 text-blue-700" />,
  },
  {
    title: 'Live Analytics Dashboard',
    description: 'Track admissions, discharges, occupancy, and staffing insights in real time.',
    icon: <BarChart3 className="w-6 h-6 text-blue-700" />,
  },
  {
    title: 'Secure Patient Insights',
    description: 'Built with privacy-first architecture to ensure data security and compliance.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-700" />,
  },
  {
    title: 'Seamless Integration',
    description: 'Easily plug AdmitPlus into your existing HIS, EMR, or scheduling system.',
    icon: <Activity className="w-6 h-6 text-blue-700" />,
  },
];

const Features = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What AdmitPlus Can Do</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Your intelligent hospital partner for smarter decisions, faster action, and better outcomes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-md">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
