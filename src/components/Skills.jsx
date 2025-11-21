import React from 'react'
import { Code2, Cpu, ShieldCheck, Database } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Programming', items: ['C', 'C++', 'Python', 'Java'] },
  { icon: Cpu, title: 'Web Tech', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { icon: Database, title: 'Databases', items: ['MySQL', 'MongoDB'] },
  { icon: ShieldCheck, title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Linux'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Expertise</h2>
      <p className="mt-2 text-blue-100/80">A blend of fundamentals and modern tech I use to build end-to-end solutions.</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map(({ icon: Icon, title, items }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100/90 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500/20 p-2 text-blue-300"><Icon size={20} /></div>
              <h3 className="text-white font-semibold">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li key={item} className="text-sm">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
