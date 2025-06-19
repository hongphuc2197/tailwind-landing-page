import React from 'react'
import { ThemeProvider } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20 transition-all duration-300">
        <Header />
        <main className="pt-16 relative">
          {/* Floating Theme Toggle */}
          <div className="fixed top-24 right-4 z-50">
            <ThemeToggle />
          </div>
          
          {/* Main Content */}
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <Stats />
              <Experience />
              <Skills />
              <Projects />
              <Testimonials />
              <Newsletter />
              <Contact />
            </motion.div>
          </AnimatePresence>

          {/* Background Decorations */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/10 dark:bg-primary-800/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-accent-200/10 dark:bg-accent-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-secondary-200/10 dark:bg-secondary-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

// Skill Card Component
function SkillCard({ title, skills }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600">{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
