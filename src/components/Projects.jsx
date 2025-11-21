import React from 'react'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A clean personal site showcasing my journey, skills, and projects.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: '#'
  },
  {
    title: 'Smart Attendance System',
    desc: 'Face-recognition powered attendance tracking built with OpenCV.',
    stack: ['Python', 'OpenCV', 'MySQL'],
    link: '#'
  },
  {
    title: 'ChatMate AI',
    desc: 'A helpful chatbot leveraging NLP to answer everyday queries.',
    stack: ['Python', 'TensorFlow'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
      <p className="mt-2 text-blue-100/80">Things I’ve built to learn, solve problems, and explore ideas.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <a href={p.link} className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 transition group-hover:bg-white/10">
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="mt-3 text-blue-100/80">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md bg-blue-500/20 px-2 py-1 text-xs text-blue-200">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
