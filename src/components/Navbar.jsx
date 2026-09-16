import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <motion.a 
          href="#" 
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ayush Raj
        </motion.a>
        <div className="nav-links">
          {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
