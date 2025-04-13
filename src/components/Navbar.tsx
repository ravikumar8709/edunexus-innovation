import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
          <div className="absolute top-4 left-4 flex items-center">
  <img src={logo} alt="EduNexus Logo" className="h-12 w-12 rounded-full" />
</div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className={`${isDarkMode ? 'text-white border-blue-400' : 'text-gray-900 border-blue-500'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Home
              </Link>
              <Link to="/about" className={`${isDarkMode ? 'text-gray-300 border-transparent hover:text-white' : 'text-gray-500 border-transparent hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                About
              </Link>
              <Link to="/services" className={`${isDarkMode ? 'text-gray-300 border-transparent hover:text-white' : 'text-gray-500 border-transparent hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Services
              </Link>
              <Link to="/solutions" className={`${isDarkMode ? 'text-gray-300 border-transparent hover:text-white' : 'text-gray-500 border-transparent hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Solutions
              </Link>
              <Link to="/freelance" className={`${isDarkMode ? 'text-gray-300 border-transparent hover:text-white' : 'text-gray-500 border-transparent hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Freelance
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className={`block w-full pl-10 pr-3 py-2 border rounded-md text-sm ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                }`}
              />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Sign In/Up Buttons */}
            <div className="hidden sm:flex sm:items-center sm:space-x-2">
              <Link to="/signin" className={`px-4 py-2 text-sm font-medium rounded-md ${
                isDarkMode 
                  ? 'text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}>
                Sign In
              </Link>
              <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className={`block pl-3 pr-4 py-2 text-base font-medium ${
            isDarkMode 
              ? 'text-white bg-gray-800 border-blue-500' 
              : 'text-gray-900 bg-blue-50 border-blue-500'
          } border-l-4`}>
            Home
          </Link>
          {[
            ['About', '/about'],
            ['Services', '/services'],
            ['Solutions', '/solutions'],
            ['Freelance', '/freelance'],
            ['Sign In', '/signin'],
            ['Sign Up', '/signup']
          ].map(([name, path]) => (
            <Link
              key={name}
              to={path}
              className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
                isDarkMode 
                  ? 'text-gray-300 border-transparent hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;