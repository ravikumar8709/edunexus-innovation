import React from 'react';
import { ChevronLeft, BarChart2, PieChart, TrendingUp, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const LearningAnalytics = () => {
  const features = [
    {
      title: "Performance Analytics",
      description: "Advanced analytics tools to track and analyze student performance across multiple parameters.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: BarChart2,
      demoUrl: "#demo-1"
    },
    {
      title: "Learning Patterns",
      description: "AI-powered analysis of learning patterns to identify areas for improvement and optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: PieChart,
      demoUrl: "#demo-2"
    },
    {
      title: "Predictive Insights",
      description: "Predictive analytics to forecast student performance and identify early intervention needs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      icon: TrendingUp,
      demoUrl: "#demo-3"
    }
  ];

  const demoScreens = [
    {
      id: "demo-1",
      title: "Performance Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Real-time performance tracking",
        "Customizable metrics",
        "Comparative analysis",
        "Detailed reports generation"
      ]
    },
    {
      id: "demo-2",
      title: "Learning Pattern Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "AI-driven pattern recognition",
        "Learning style identification",
        "Progress tracking",
        "Personalized recommendations"
      ]
    },
    {
      id: "demo-3",
      title: "Predictive Analytics Interface",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Performance forecasting",
        "Risk assessment",
        "Intervention suggestions",
        "Success probability analysis"
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Analytics Platform</h1>
            <p className="text-xl text-gray-600">Transform learning outcomes with data-driven insights and predictive analytics</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to harness the power of data?</h2>
              <p className="text-xl mb-8">Join institutions using analytics to transform education</p>
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

export default LearningAnalytics;