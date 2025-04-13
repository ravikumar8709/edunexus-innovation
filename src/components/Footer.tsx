import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Instagram } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <img
                src={logo}
                alt="EduNexus Logo"
                className="h-12 w-12 rounded-full"
              />
            </div>
            <p className="text-gray-300 text-base">
              Transforming education management through innovative technology
              solutions. Empowering institutions to deliver exceptional learning
              experiences.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/edunexus_innovations?igsh=MWkxOXBxdmw2ZnU3eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>

              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Mail</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      onClick={() => handleNavigation("/school-management")}
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      School Management
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      onClick={() => handleNavigation("/college-management")}
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      College Management
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      onClick={() => handleNavigation("/learning-analytics")}
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      Learning Analytics
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      onClick={() => handleNavigation("/student-portal")}
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      Student Portal
                    </motion.button>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      Documentation
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      API Reference
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      Help Center
                    </motion.button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      About Us
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      Blog
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      Careers
                    </motion.button>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      Privacy
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={linkVariants}
                      whileHover="hover"
                      className="text-base text-gray-300 hover:text-white cursor-pointer w-full text-left"
                    >
                      Terms
                    </motion.button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 EduNexus Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
