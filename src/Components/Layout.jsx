import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Aniket Savita
        </motion.h1>
        <div className="space-x-8">
          {["About", "Skills", "Experience", "Education"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24">{children}</main>

      <footer className="mt-24 py-8 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          {[
            { icon: <FaGithub />, link: "https://github.com/Aniket-8719" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aniket-savita-bb295a230/e" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-purple-400 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-400">© 2025 Aniket Savita. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Layout;
