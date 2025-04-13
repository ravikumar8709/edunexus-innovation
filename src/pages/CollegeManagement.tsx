import React from 'react';
import { ChevronLeft, BookOpen, Users, Calendar, Settings, Database, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const CollegeManagement = () => {
  const features = [
    {
      title: "Course Management",
      description: "Comprehensive course planning and scheduling system with integrated faculty allocation.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: BookOpen,
      demoUrl: "#demo-1"
    },
    {
      title: "Faculty Portal",
      description: "Dedicated portal for faculty to manage courses, assignments, and student performance.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: Users,
      demoUrl: "#demo-2"
    },
    {
      title: "Resource Allocation",
      description: "Smart resource management system for classrooms, labs, and equipment scheduling.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: Settings,
      demoUrl: "#demo-3"
    }
  ];

  const demoScreens = [
    {
      id: "demo-1",
      title: "Course Management Dashboard",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Course scheduling and planning",
        "Faculty assignment",
        "Resource allocation",
        "Student enrollment tracking"
      ]
    },
    {
      id: "demo-2",
      title: "Faculty Portal Interface",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Course materials management",
        "Assignment creation and grading",
        "Student performance tracking",
        "Communication tools"
      ]
    },
    {
      id: "demo-3",
      title: "Resource Management System",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Classroom scheduling",
        "Lab equipment tracking",
        "Maintenance scheduling",
        "Usage analytics"
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">College Management System</h1>
            <p className="text-xl text-gray-600">Streamline your college operations with our advanced management solution</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to transform your college?</h2>
              <p className="text-xl mb-8">Join leading institutions already using our platform</p>
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

export default CollegeManagement;