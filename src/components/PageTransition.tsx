import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.645, 0.045, 0.355, 1.000],
        },
      }}
      exit={{
        opacity: 0,
        y: -20,
        transition: {
          duration: 0.3,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
