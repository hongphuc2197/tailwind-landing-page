import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks",
      skills: ["Next.js", "Gatsby", "ReactJS", "React Native", "NestJS", "NodeJS"]
    },
    {
      title: "Libraries & Tools",
      skills: [
        "Apollo Client",
        "Apollo Server",
        "React-sweet-state",
        "CSS-in-JS",
        "Jest Testing",
        "Unit Testing",
        "Typeform",
        "WebSocket"
      ]
    },
    {
      title: "Database & APIs",
      skills: [
        "MongoDB",
        "GraphQL",
        "RESTful APIs",
        "Jest Testing",
        "Apollo Server"
      ]
    }
  ];

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
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
          Technical Expertise
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills; 