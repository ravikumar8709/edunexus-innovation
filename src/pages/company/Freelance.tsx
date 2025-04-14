import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Briefcase,
  Clock,
  DollarSign,
  Search,
  BookOpen,
  Code,
  Database,
  Cloud,
  ChevronLeft
} from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import { useTheme } from "../../contexts/ThemeContext";

const Freelance = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { theme } = useTheme();
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'content', name: 'Content Writing' },
    { id: 'testing', name: 'Testing & QA' }
  ];

  const projects = [
    {
      id: 1,
      title: "Educational Platform Frontend Development",
      category: "development",
      description: "Develop responsive React components for our learning management system",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      duration: "2-3 months",
      payment: "$2000-3000",
      experience: "Intermediate",
      icon: Code
    },
    {
      id: 2,
      title: "Database Optimization for Student Portal",
      category: "development",
      description: "Optimize database queries and improve performance of our student management system",
      skills: ["PostgreSQL", "Query Optimization", "Performance Tuning"],
      duration: "1-2 months",
      payment: "$1500-2500",
      experience: "Advanced",
      icon: Database
    },
    {
      id: 3,
      title: "Cloud Infrastructure Setup",
      category: "development",
      description: "Set up and configure cloud infrastructure for educational applications",
      skills: ["AWS", "Docker", "Kubernetes"],
      duration: "2-4 weeks",
      payment: "$1000-2000",
      experience: "Intermediate",
      icon: Cloud
    },
    {
      id: 4,
      title: "Content Creation for Programming Courses",
      category: "content",
      description: "Create engaging content for programming tutorials and courses",
      skills: ["Technical Writing", "Programming Knowledge", "Content Strategy"],
      duration: "Ongoing",
      payment: "$30-50/hour",
      experience: "Entry Level",
      icon: BookOpen
    }
    
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Freelance Opportunities
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find exciting projects, showcase your skills, and earn while learning with EduNexus
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${selectedCategory === category.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <project.icon className="h-8 w-8 text-primary-500" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="h-5 w-5 mr-2 text-gray-400 dark:text-gray-500" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <DollarSign className="h-5 w-5 mr-2 text-gray-400 dark:text-gray-500" />
                        <span>{project.payment}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Experience: {project.experience}
                    </span>
                    <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-700 dark:to-secondary-600 rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
              <p className="text-xl mb-8 opacity-90">
                Create your profile and start applying to projects that match your skills
              </p>
              <button 
                onClick={() => navigate('/freelance/create-profile')}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Create Developer Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Freelance;
