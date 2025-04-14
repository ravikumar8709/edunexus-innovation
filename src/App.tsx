import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BookOpen, Shield, BarChart3, Users, Mail, ChevronRight } from 'lucide-react';
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SchoolManagement from './pages/SchoolManagement';
import CollegeManagement from './pages/CollegeManagement';
import LearningAnalytics from './pages/LearningAnalytics';
import StudentPortal from './pages/StudentPortal';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Documentation from './pages/support/Documentation';
import ApiReference from './pages/support/ApiReference';
import HelpCenter from './pages/support/HelpCenter';
import AboutUs from './pages/company/AboutUs';
import Blog from './pages/company/Blog';
import Careers from './pages/company/Careers';
import Freelance from './pages/company/Freelance';
import CreateProfile from './pages/freelance/CreateProfile';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';

function App() {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      <main className={`${isDarkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-gray-900'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/school-management" element={<SchoolManagement />} />
            <Route path="/college-management" element={<CollegeManagement />} />
            <Route path="/learning-analytics" element={<LearningAnalytics />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Support Routes */}
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/help-center" element={<HelpCenter />} />
            
            {/* Company Routes */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/freelance" element={<Freelance />} />
            <Route path="/freelance/create-profile" element={<CreateProfile />} />
            
            {/* Legal Routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;