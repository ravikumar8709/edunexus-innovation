import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Heart, Star } from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Join Our Team
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Help us transform education through technology and innovation
        </p>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Professional Growth</h3>
            <p className="text-gray-600">Continuous learning and development opportunities</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <Users className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Inclusive Culture</h3>
            <p className="text-gray-600">Diverse and welcoming environment for all</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <Heart className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Work-Life Balance</h3>
            <p className="text-gray-600">Flexible schedules and remote options</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <Star className="w-8 h-8 text-yellow-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Impact</h3>
            <p className="text-gray-600">Make a difference in education globally</p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600">{job.department} • {job.location}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {job.type}
                </span>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Careers;