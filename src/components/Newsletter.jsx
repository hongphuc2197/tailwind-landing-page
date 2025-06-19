import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  EnvelopeIcon, 
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing! You\'ll receive updates soon.');
      setEmail('');
    }, 1500);
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'error':
        return <ExclamationCircleIcon className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'text-green-600 dark:text-green-400';
      case 'error':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-900/20 dark:via-gray-800 dark:to-accent-900/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-glow">
              <EnvelopeIcon className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get the latest insights on web development, new projects, and industry trends delivered straight to your inbox.
          </p>

          {/* Newsletter Form */}
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-primary-400/20 dark:focus:border-primary-400 transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                  disabled={status === 'loading'}
                />
                {status !== 'idle' && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    {getStatusIcon()}
                  </div>
                )}
              </div>

              {/* Status Message */}
              {status !== 'idle' && message && (
                <motion.div 
                  className={`text-sm font-medium ${getStatusColor()} flex items-center justify-center space-x-2`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {getStatusIcon()}
                  <span>{message}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-4 focus:ring-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'loading' ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  'Subscribe to Newsletter'
                )}
              </button>
            </form>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Weekly Updates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Get the latest news and insights delivered weekly</p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Exclusive Content</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Access to exclusive tutorials and resources</p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Spam</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Unsubscribe anytime, no questions asked</p>
            </div>
          </motion.div>

          {/* Privacy Notice */}
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 mt-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            By subscribing, you agree to receive email updates. We respect your privacy and will never share your information.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter; 