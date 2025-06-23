<<<<<<< HEAD
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React, Next.js, and Tailwind CSS. Features include product search, filtering, cart management, and secure checkout.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "https://placehold.co/600x400",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      image: "https://placehold.co/600x400",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work and skills, built with modern web technologies and animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://placehold.co/600x400",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowTopRightOnSquareIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Starbucks Singapore",
      company: "Kyanon Digital & Ascentis",
      website: "https://shop.starbucks.com.sg/",
      summary: "The Starbucks® Singapore app is a comprehensive mobile platform designed to enhance customer convenience and engagement. Developed collaboratively by Kyanon Digital and Ascentis, the app integrates various features to streamline the Starbucks experience for users in Singapore.",
      teamSize: 8,
      techStack: ["ReactJS", "Javascript"],
      responsibilities: [
        "Worked as a Frontend Developer",
        "Developed project features based on requirements",
        "Participated in daily meetings with the client",
        "Handled bug fixing during development"
      ],
      features: [
        "Mobile ordering and payment",
        "Rewards program integration",
        "Store locator with real-time updates",
        "Personalized offers and promotions",
        "Digital Starbucks Card management"
      ],
      challenges: [
        "Implementing complex reward system logic",
        "Ensuring seamless integration with existing backend systems",
        "Optimizing app performance for various devices"
      ]
    },
    {
      title: "Coway",
      company: "E-commerce Platform",
      website: "https://www.coway.com/",
      summary: "Coway eCommerce Is a platform that facilitates the online purchase of Coway products. This platform is to facilitate customers in buying a product online with their Coway Agent.",
      teamSize: 4,
      techStack: ["Javascript", "CSS", "HTML"],
      responsibilities: [
        "Worked as a Frontend Developer",
        "Developed UI components and styled interfaces based on client requirements",
        "Implemented newly requested features"
      ]
    },
    {
      title: "Sunway",
      company: "E-commerce Mall",
      website: "https://www.sunwayemall.com/",
      summary: "To create a one-stop shopping experience, Sunway eMall offers consolidated online shopping across all Sunway Malls in Malaysia with genuine goods from reliable brands in fashion, beauty, consumer electronics, household items, sports equipment, health and wellness, toys and more.",
      teamSize: 10,
      techStack: ["CSS", "HTML", "Javascript"],
      responsibilities: [
        "Worked as a Frontend Developer",
        "Styled the project interface according to client preferences",
        "Made UI adjustments and refinements as needed"
      ]
    },
    {
      title: "Phú Hưng Life",
      company: "Insurance Platform",
      website: "https://www.phuhunglife.com/",
      summary: "PHL is a project for a life insurance company headquartered in Vietnam. The company specializes in providing life and property insurance services to individuals and businesses.",
      teamSize: 3,
      techStack: ["CSS", "React JS", "HTML", "Javascript"],
      responsibilities: [
        "Worked as a Frontend Developer",
        "Developed and styled the UI based on the client's needs",
        "Modified interface elements according to feedback",
        "Attended client meetings to gather and clarify requirements"
      ]
    },
    {
      title: "Grand Indo",
      company: "Mall Loyalty App",
      website: "https://www.grand-indonesia.com/shop/",
      summary: "Developed a cross-platform loyalty app for Grand Indonesia Mall, enabling users to scan receipts, earn and redeem points, view events, and play mini-games. Improved customer engagement through a seamless web and mobile experience.",
      teamSize: 6,
      techStack: ["React Native", "React JS", "CSS", "HTML"],
      responsibilities: [
        "Worked as both Frontend and Mobile Developer",
        "Developed new features for the mobile app and released it to app stores",
        "Styled and tested the user interface for both mobile and web platforms",
        "Conducted functional testing across platforms to ensure quality",
        "Participated in client meetings to gather and clarify requirements"
      ]
    },
    {
      title: "LIHO App",
      company: "Mobile Loyalty App",
      website: "https://play.google.com/store/apps/details?id=com.liho.app.production&hl=en_SG",
      summary: "LiHO loyalty & ordering app based in Singapore, written in React Native",
      teamSize: 4,
      techStack: ["React Native", "Javascript", "CSS"],
      responsibilities: [
        "Worked as a Mobile Developer",
        "Built and updated the app interface",
        "Replaced the app logo throughout the application",
        "Built and released the app to production on app stores"
      ]
    },
    {
      title: "KOI Thé",
      company: "Mobile Ordering App",
      website: "https://play.google.com/store/apps/details?id=com.koi.sg&hl=en_SG&pli=1",
      summary: "This is a mobile app ordering. Users can order drinks on the app, use vouchers, payment by OxPay, and manage profile Koi cards. Admin can manage user's order and profile by Ascentis CRM and Ascentis Ecommerce.",
      teamSize: 6,
      techStack: ["React Native", "Javascript", "HTML"],
      responsibilities: [
        "Worked as a Mobile Developer",
        "Developed new features based on change requests (CRs)",
        "Released the app to app stores",
        "Adjusted and updated the app UI"
      ],
      features: [
        "Mobile ordering system",
        "Voucher management",
        "OxPay integration",
        "Profile and loyalty card management",
        "Real-time order tracking"
      ],
      challenges: [
        "Implementing secure payment gateway",
        "Optimizing app performance",
        "Managing complex state for order tracking"
      ]
    },
    {
      title: "Metro",
      company: "CRM System",
      website: "https://www.metro.com/",
      summary: "The project focuses on enhancing the Metro CRM system by adding a new 'Rewards Catalogue' tab to the left navigation menu and improving how rebate information is displayed based on different member tiers.",
      teamSize: 6,
      techStack: ["React Native", "React JS", "HTML", "CSS", "Javascript"],
      responsibilities: [
        "Worked as a Mobile Developer",
        "Designed and developed new web UI features",
        "Added new functionalities to the CRM system",
        "Tracked and resolved maintenance tickets",
        "Built and released web and mobile app versions",
        "Made UI adjustments for the mobile app and released it to stores"
      ]
    },
    {
      title: "Nippon Paint",
      company: "Website Development",
      website: "https://nipponpaint.com.vn/matex-sac-mau-diu-mat/",
      summary: "Create new UI for Nippon Vietnam Website and integrate with Nippon internally developed named 'Công cụ phối màu sơn'",
      teamSize: 5,
      techStack: ["CSS", "HTML", "Javascript"],
      responsibilities: [
        "Designed and implemented the website UI",
        "Styled and built the website according to project requirements",
        "Performed testing before deployment"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Projects
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">{project.company}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Team Size: {project.teamSize}
                  </span>
                  <div className="flex items-center space-x-2">
                    {project.website && (
                      <motion.a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GlobeAltIcon className="w-4 h-4" />
                      </motion.a>
                    )}
                    <button
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400">
                        {selectedProject.company}
                      </p>
                      {selectedProject.website && (
                        <motion.a
                          href={selectedProject.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center space-x-2 mt-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                        >
                          <GlobeAltIcon className="w-4 h-4" />
                          <span>Visit Website</span>
                          <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                        </motion.a>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Project Summary
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {selectedProject.summary}
                      </p>
                    </div>

                    {selectedProject.features && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Key Features
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                          {selectedProject.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Responsibilities
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        {selectedProject.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    {selectedProject.challenges && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Challenges & Solutions
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                          {selectedProject.challenges.map((challenge, idx) => (
                            <li key={idx}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">
                        Team Size: {selectedProject.teamSize}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
>>>>>>> update-contact-page
      </div>
    </section>
  );
};

export default Projects; 