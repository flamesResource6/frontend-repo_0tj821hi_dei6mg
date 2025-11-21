import React from 'react'
import { Menu, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-3 backdrop-blur">
          <a href="#home" className="text-white font-semibold tracking-tight">RBK</a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/90">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#goals" className="hover:text-white">Goals</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10">
              <Linkedin size={18} />
            </a>
            <button className="md:hidden rounded-lg border border-white/10 bg-white/5 p-2 text-white/80">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
