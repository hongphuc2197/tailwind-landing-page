import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Get In Touch
        </motion.h2>
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Your message"
                  required
                ></textarea>
              </motion.div>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <motion.div variants={containerVariants} className="space-y-4">
              <motion.div variants={itemVariants}>
                <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Ho Chi Minh City, Vietnam</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-1">Professional Profiles</h4>
                <div className="flex flex-col space-y-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://github.com/hongphuc2197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://www.linkedin.com/in/h%E1%BB%93ng-ph%C3%BAc-7337421a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact; 