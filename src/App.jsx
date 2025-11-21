import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Goals from './components/Goals'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Goals />
      <Contact />
      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-16 text-sm text-blue-300/70">
        © {new Date().getFullYear()} Rishi Bhargav Kataki. Crafted with care.
      </footer>
    </div>
  )
}

export default App
