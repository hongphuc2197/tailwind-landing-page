import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  StarIcon, 
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/solid';
import { 
  UserCircleIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Product Manager",
    company: "TechCorp Solutions",
    avatar: null,
    rating: 5,
    content: "Working with this developer was an absolute pleasure. Their attention to detail and ability to deliver high-quality code on time exceeded our expectations. The project was completed ahead of schedule with zero bugs.",
    project: "E-commerce Platform Redesign"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    avatar: null,
    rating: 5,
    content: "Exceptional technical skills combined with excellent communication. They not only delivered a great product but also helped us understand the technical decisions and provided valuable insights for future development.",
    project: "Mobile App Development"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Project Lead",
    company: "Digital Innovations Inc",
    avatar: null,
    rating: 5,
    content: "The level of professionalism and technical expertise is outstanding. They consistently delivered clean, maintainable code and were always available to address any concerns. Highly recommended for any development project.",
    project: "CRM System Integration"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Engineering Manager",
    company: "Global Tech Solutions",
    avatar: null,
    rating: 5,
    content: "Outstanding problem-solving skills and deep technical knowledge. They quickly understood our complex requirements and implemented solutions that were both elegant and efficient. A true professional.",
    project: "API Development & Integration"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Director of Technology",
    company: "Innovation Labs",
    avatar: null,
    rating: 5,
    content: "Working with this developer transformed our development process. Their expertise in modern technologies and best practices helped us build a robust, scalable application that our users love.",
    project: "Web Application Development"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about working together.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div 
          className="max-w-4xl mx-auto"
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-glow">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Content */}
            <blockquote className="text-center mb-8">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                "{currentTestimonial.content}"
              </p>
            </blockquote>

            {/* Project Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-500/20 text-primary-200 border border-primary-400/30">
                <BuildingOfficeIcon className="w-4 h-4 mr-2" />
                {currentTestimonial.project}
              </span>
            </div>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                {currentTestimonial.avatar ? (
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                ) : (
                  <UserCircleIcon className="w-8 h-8 text-white" />
                )}
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-300">
                  {currentTestimonial.role}
                </p>
                <p className="text-sm text-gray-400">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 group"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 group"
          >
            <ChevronRightIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5.0</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 