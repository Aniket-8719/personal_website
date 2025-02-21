import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-900">
        <nav>
          <div>
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              >
                Aniket Savita
              </motion.h1>
              <div className="space-x-8">
                {["About", "Skills", "Experience", "Education"].map((item) => (
                  <NavLink
                    key={item}
                    to={`#${item.toLowerCase()}`}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 pt-24">{children}</main>
        <footer className="mt-24 py-8 bg-gray-800">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              {["github", "linkedin", "twiter"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="text-2xl hover:text-purple-400 transition-colors"
                >
                  <i className={`fab fa-${icon}`} />
                </a>
              ))}
              <p className="text-gray-400">
                @ 2025 Aniket Savita. All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
