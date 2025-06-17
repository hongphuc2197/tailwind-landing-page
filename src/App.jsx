import React from 'react'
import { ThemeProvider } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider attribute="class">
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeToggle />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
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
