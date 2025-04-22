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
  ChevronLeft,
  Video,
  Accessibility,
  Gauge,
  Bug,
  FileText,
  Book,
  Brush,
  Palette,
  Image,
  Gamepad
} from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import { useTheme } from "../../contexts/ThemeContext";

const Freelance = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { isDarkMode } = useTheme(); // Changed from theme to isDarkMode
  const navigate = useNavigate();

  // ... rest of your component remains exactly the same

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'content', name: 'Content Writing' },
    { id: 'testing', name: 'Testing & QA' }
  ];

  const projects = [
    {
      id: 5,
      title: "Mobile App for Student Collaboration",
      category: "development",
      description: "Build a cross-platform mobile app for student group projects and file sharing",
      skills: ["React Native", "Firebase", "Redux"],
      duration: "3-4 months",
      payment: "₹60,000 - ₹1,00,000",
      experience: "Intermediate",
      icon: Code
    },
    {
      id: 6,
      title: "API Integration for LMS Platform",
      category: "development",
      description: "Integrate third-party APIs for payment processing and video conferencing",
      skills: ["Node.js", "REST APIs", "OAuth"],
      duration: "4-6 weeks",
      payment: "₹25,000 - ₹40,000",
      experience: "Intermediate",
      icon: Code
    },
    {
      id: 7,
      title: "Blockchain-Based Certification System",
      category: "development",
      description: "Develop a system for issuing tamper-proof digital certificates",
      skills: ["Solidity", "Ethereum", "Web3.js"],
      duration: "2-3 months",
      payment: "₹1,00,000 - ₹1,50,000",
      experience: "Advanced",
      icon: Code
    },
    {
      id: 8,
      title: "UI/UX Redesign for Educational Portal",
      category: "design",
      description: "Modernize the user interface and improve user experience for our learning platform",
      skills: ["Figma", "UI/UX Design", "User Research"],
      duration: "4-6 weeks",
      payment: "₹30,000 - ₹45,000",
      experience: "Intermediate",
      icon: Palette
    },
    {
      id: 9,
      title: "Brand Identity for Coding Bootcamp",
      category: "design",
      description: "Create logo, color scheme, and brand guidelines for new tech education startup",
      skills: ["Logo Design", "Branding", "Illustration"],
      duration: "2-3 weeks",
      payment: "₹10,000 - ₹18,000",
      experience: "Entry Level",
      icon: Brush
    },
    {
      id: 10,
      title: "Interactive Course Illustrations",
      category: "design",
      description: "Design engaging illustrations and animations for programming courses",
      skills: ["Adobe Illustrator", "Motion Graphics", "Storyboarding"],
      duration: "Ongoing",
      payment: "₹500 - ₹800/hour",
      experience: "Intermediate",
      icon: Image
    },
    {
      id: 11,
      title: "Technical Blog Articles on AI Education",
      category: "content",
      description: "Write in-depth articles about implementing AI in classroom settings",
      skills: ["Technical Writing", "AI Knowledge", "SEO"],
      duration: "Ongoing",
      payment: "₹1,000 - ₹2,000/article",
      experience: "Intermediate",
      icon: BookOpen
    },
    {
      id: 12,
      title: "Curriculum Development for Python Course",
      category: "content",
      description: "Create lesson plans and exercises for beginner Python programming course",
      skills: ["Curriculum Design", "Python", "Pedagogy"],
      duration: "1-2 months",
      payment: "₹40,000 - ₹60,000",
      experience: "Intermediate",
      icon: Book
    },
    {
      id: 13,
      title: "Documentation for Developer Tools",
      category: "content",
      description: "Write clear documentation for educational technology SDK",
      skills: ["Technical Documentation", "Markdown", "API Concepts"],
      duration: "3-4 weeks",
      payment: "₹300 - ₹600/hour",
      experience: "Entry Level",
      icon: FileText
    },
    {
      id: 14,
      title: "Automated Testing for Student Portal",
      category: "testing",
      description: "Implement end-to-end testing for student management system",
      skills: ["Cypress", "Jest", "Test Automation"],
      duration: "3-5 weeks",
      payment: "₹25,000 - ₹40,000",
      experience: "Intermediate",
      icon: Bug
    },
    {
      id: 15,
      title: "Load Testing for Online Exam Platform",
      category: "testing",
      description: "Simulate high traffic conditions and identify performance bottlenecks",
      skills: ["JMeter", "Load Testing", "Performance Analysis"],
      duration: "2-3 weeks",
      payment: "₹20,000 - ₹35,000",
      experience: "Advanced",
      icon: Gauge
    },
    {
      id: 16,
      title: "Accessibility Audit for Learning App",
      category: "testing",
      description: "Ensure compliance with WCAG 2.1 standards for educational application",
      skills: ["Accessibility", "WCAG", "Screen Readers"],
      duration: "2 weeks",
      payment: "₹15,000 - ₹25,000",
      experience: "Intermediate",
      icon: Accessibility
    },
    {
      id: 17,
      title: "Educational Game Development",
      category: "development",
      description: "Create interactive coding challenge games for kids",
      skills: ["Unity", "C#", "Game Design"],
      duration: "3-5 months",
      payment: "₹1,20,000 - ₹2,00,000",
      experience: "Advanced",
      icon: Gamepad
    },
    {
      id: 18,
      title: "Video Tutorial Production",
      category: "content",
      description: "Script and produce tutorial videos for computer science concepts",
      skills: ["Video Editing", "Screen Recording", "Script Writing"],
      duration: "Ongoing",
      payment: "₹800 - ₹1,500/video",
      experience: "Intermediate",
      icon: Video
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
