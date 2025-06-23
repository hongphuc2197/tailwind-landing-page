import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  RocketLaunchIcon, 
  UserGroupIcon, 
  TrophyIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const stats = [
  {
    id: 1,
    name: 'Years of Experience',
    value: '5+',
    icon: ClockIcon,
    color: 'primary',
    description: 'Professional software development'
  },
  {
    id: 2,
    name: 'Projects Completed',
    value: '50+',
    icon: RocketLaunchIcon,
    color: 'accent',
    description: 'Web and mobile applications'
  },
  {
    id: 3,
    name: 'Technologies',
    value: '20+',
    icon: CodeBracketIcon,
    color: 'secondary',
    description: 'Programming languages & frameworks'
  },
  {
    id: 4,
    name: 'Team Leadership',
    value: '10+',
    icon: UserGroupIcon,
    color: 'primary',
    description: 'Team members managed'
  },
  {
    id: 5,
    name: 'Awards & Recognition',
    value: '5+',
    icon: TrophyIcon,
    color: 'accent',
    description: 'Professional achievements'
  },
  {
    id: 6,
    name: 'Client Satisfaction',
    value: '98%',
    icon: StarIcon,
    color: 'secondary',
    description: 'Positive feedback rate'
  }
];

const getColorClasses = (color) => {
  const colors = {
    primary: {
      bg: 'bg-primary-50 dark:bg-primary-900/20',
      text: 'text-primary-600 dark:text-primary-400',
      border: 'border-primary-200 dark:border-primary-700',
      hover: 'hover:bg-primary-100 dark:hover:bg-primary-900/30'
    },
    secondary: {
      bg: 'bg-secondary-50 dark:bg-secondary-900/20',
      text: 'text-secondary-600 dark:text-secondary-400',
      border: 'border-secondary-200 dark:border-secondary-700',
      hover: 'hover:bg-secondary-100 dark:hover:bg-secondary-900/30'
    },
    accent: {
      bg: 'bg-accent-50 dark:bg-accent-900/20',
      text: 'text-accent-600 dark:text-accent-400',
      border: 'border-accent-200 dark:border-accent-700',
      hover: 'hover:bg-accent-100 dark:hover:bg-accent-900/30'
    }
  };
  return colors[color] || colors.primary;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="gradient-text">Key Statistics</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my professional journey and achievements in software development
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl border ${colors.border} ${colors.bg} p-8 transition-all duration-500 ${colors.hover} hover:scale-105 hover:shadow-large`}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-current to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-current to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </span>
                    {stat.value.includes('%') && (
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        ↑ 2.5%
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {stat.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-soft border border-gray-200 dark:border-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Continuously growing and learning
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats; 