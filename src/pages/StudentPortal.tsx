import React from 'react';
import { ChevronLeft, BookOpen, Calendar, MessageSquare, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const StudentPortal = () => {
  const features = [
    {
      title: "Course Dashboard",
      description: "Centralized dashboard for accessing course materials, assignments, and grades.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: BookOpen,
      demoUrl: "#demo-1"
    },
    {
      title: "Assignment Management",
      description: "Easy-to-use interface for submitting assignments and tracking deadlines.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: Calendar,
      demoUrl: "#demo-2"
    },
    {
      title: "Communication Hub",
      description: "Integrated messaging system for connecting with professors and peers.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: MessageSquare,
      demoUrl: "#demo-3"
    }
  ];

  const demoScreens = [
    {
      id: "demo-1",
      title: "Student Dashboard",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Course overview and progress",
        "Upcoming assignments",
        "Recent grades",
        "Course materials access"
      ]
    },
    {
      id: "demo-2",
      title: "Assignment Interface",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Assignment submission",
        "Deadline tracking",
        "Feedback review",
        "Grade history"
      ]
    },
    {
      id: "demo-3",
      title: "Communication Center",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Direct messaging",
        "Discussion forums",
        "Group collaboration",
        "File sharing"
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Portal</h1>
            <p className="text-xl text-gray-600">Your gateway to seamless learning and academic management</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to enhance your learning experience?</h2>
              <p className="text-xl mb-8">Join students already succeeding with our platform</p>
              <div className="space-x-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default StudentPortal;