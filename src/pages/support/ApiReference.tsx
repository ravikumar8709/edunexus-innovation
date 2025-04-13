import React from 'react';
import { Code, Search, Terminal, Database, Lock, Zap } from 'lucide-react';
import PageTransition from '../../components/PageTransition';

const ApiReference = () => {
  const endpoints = [
    {
      category: "Authentication",
      items: [
        {
          method: "POST",
          path: "/api/auth/login",
          description: "Authenticate user and retrieve token"
        },
        {
          method: "POST",
          path: "/api/auth/refresh",
          description: "Refresh authentication token"
        }
      ]
    },
    {
      category: "Users",
      items: [
        {
          method: "GET",
          path: "/api/users",
          description: "List all users"
        },
        {
          method: "POST",
          path: "/api/users",
          description: "Create a new user"
        }
      ]
    },
    {
      category: "Courses",
      items: [
        {
          method: "GET",
          path: "/api/courses",
          description: "List all courses"
        },
        {
          method: "POST",
          path: "/api/courses",
          description: "Create a new course"
        }
      ]
    }
  ];

  const features = [
    {
      icon: Terminal,
      title: "RESTful API",
      description: "Modern REST API with JSON payloads"
    },
    {
      icon: Lock,
      title: "Secure",
      description: "OAuth2 and JWT authentication"
    },
    {
      icon: Database,
      title: "Scalable",
      description: "Built for high performance"
    },
    {
      icon: Zap,
      title: "Real-time",
      description: "WebSocket support for live updates"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              API Reference
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete documentation for the EduNexus API. Integrate our platform into your applications.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search API documentation..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <feature.icon className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* API Endpoints */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-2xl font-display font-semibold text-gray-900">
                API Endpoints
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {endpoints.map((category, index) => (
                <div key={index} className="px-6 py-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                          ${item.method === 'GET' ? 'bg-green-100 text-green-800' : 
                            item.method === 'POST' ? 'bg-blue-100 text-blue-800' : 
                            item.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {item.method}
                        </span>
                        <code className="mx-3 font-mono text-sm text-gray-900">
                          {item.path}
                        </code>
                        <span className="text-gray-600">{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Example */}
          <div className="mt-12 bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Example Request</h3>
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`fetch('https://api.edunexus.com/v1/courses', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
              </pre>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-6">
              Sign up for an API key and start building with EduNexus
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Get API Key
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ApiReference;