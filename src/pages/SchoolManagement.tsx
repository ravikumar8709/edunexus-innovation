import React from 'react';
import { ChevronLeft, Users, BookOpen, Calendar, Bell, Settings, PieChart, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const SchoolManagement = () => {
  const features = [
    {
      title: "Student Information System",
      description: "Comprehensive student data management with easy access to academic records, attendance, and personal information.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: Users,
      demoUrl: "#demo-1"
    },
    {
      title: "Attendance Tracking",
      description: "Advanced biometric and digital attendance systems for accurate record-keeping and real-time monitoring.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: Calendar,
      demoUrl: "#demo-2"
    },
    {
      title: "Grade Management",
      description: "Streamlined grading system with customizable assessment criteria and automated report generation.",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: FileText,
      demoUrl: "#demo-3"
    }
  ];

  const demoScreens = [
    {
      id: "demo-1",
      title: "Student Dashboard",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Real-time attendance tracking",
        "Grade visualization",
        "Course schedule",
        "Assignment deadlines"
      ]
    },
    {
      id: "demo-2",
      title: "Teacher Portal",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Class management",
        "Grade entry system",
        "Attendance records",
        "Parent communication"
      ]
    },
    {
      id: "demo-3",
      title: "Admin Console",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "School-wide analytics",
        "Resource allocation",
        "Staff management",
        "Financial tracking"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">School Management System</h1>
            <p className="text-xl text-gray-600">Transform your school's administration with our comprehensive management solution</p>
          </div>
          
          {/* Main Features */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <feature.icon className="h-6 w-6 mb-2" />
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <a 
                    href={feature.demoUrl} 
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    View Demo
                    <ChevronLeft className="h-4 w-4 ml-2 transform rotate-180" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Screens */}
          <div className="space-y-16">
            {demoScreens.map((demo) => (
              <div key={demo.id} id={demo.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={demo.image} 
                      alt={demo.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{demo.title}</h3>
                    <ul className="space-y-4">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-green-500 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                      Try Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-blue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to transform your school?</h2>
              <p className="text-xl mb-8">Join thousands of schools already using our platform</p>
              <div className="space-x-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SchoolManagement;