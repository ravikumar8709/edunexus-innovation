import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition'; // Make sure it's imported!

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

  // Smooth scroll for anchor links
  React.useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      <main className={`${isDarkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-gray-900'}`}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/school-management" element={<PageTransition><SchoolManagement /></PageTransition>} />
            <Route path="/college-management" element={<PageTransition><CollegeManagement /></PageTransition>} />
            <Route path="/learning-analytics" element={<PageTransition><LearningAnalytics /></PageTransition>} />
            <Route path="/student-portal" element={<PageTransition><StudentPortal /></PageTransition>} />
            <Route path="/signin" element={<PageTransition><SignIn /></PageTransition>} />
            <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
            
            {/* Support Routes */}
            <Route path="/documentation" element={<PageTransition><Documentation /></PageTransition>} />
            <Route path="/api-reference" element={<PageTransition><ApiReference /></PageTransition>} />
            <Route path="/help-center" element={<PageTransition><HelpCenter /></PageTransition>} />
            
            {/* Company Routes */}
            <Route path="/about-us" element={<PageTransition><AboutUs /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
            <Route path="/freelance" element={<PageTransition><Freelance /></PageTransition>} />
            <Route path="/freelance/create-profile" element={<PageTransition><CreateProfile /></PageTransition>} />
            
            {/* Legal Routes */}
            <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
