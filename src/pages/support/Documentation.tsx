import React from 'react';
import { Book, FileText, Code, Search } from 'lucide-react';
import PageTransition from '../../components/PageTransition';

const Documentation = () => {
  const sections = [
    {
      title: "Getting Started",
      description: "Learn the basics of EduNexus platform and set up your first project",
      icon: Book,
      links: [
        "Platform Overview",
        "Quick Start Guide",
        "System Requirements",
        "Installation Guide"
      ]
    },
    {
      title: "User Guides",
      description: "Detailed guides for different user roles and features",
      icon: FileText,
      links: [
        "Administrator Guide",
        "Teacher Guide",
        "Student Guide",
        "Parent Portal Guide"
      ]
    },
    {
      title: "Technical Documentation",
      description: "In-depth technical details and integration guides",
      icon: Code,
      links: [
        "API Documentation",
        "Integration Guide",
        "Security Guidelines",
        "Data Management"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <section.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        <span className="mr-2">→</span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Getting Started",
                "API Integration",
                "Security Best Practices",
                "Troubleshooting",
                "Data Migration",
                "User Management",
                "System Updates",
                "FAQs"
              ].map((topic, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center text-blue-600 hover:text-blue-800"
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Documentation;