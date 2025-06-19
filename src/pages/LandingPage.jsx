import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 p-4 w-full">
      <motion.div
        className="z-10 flex flex-col items-center text-center max-w-xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-blue-700 dark:text-white drop-shadow-lg leading-tight">
          Welcome to Task Manager
        </h1>
        <p className="mb-10 text-lg sm:text-xl text-gray-700 dark:text-gray-200">
          Organize your tasks efficiently and securely.
        </p>
        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 text-lg sm:text-xl shadow-lg transform"
          >
            Go to Dashboard
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
