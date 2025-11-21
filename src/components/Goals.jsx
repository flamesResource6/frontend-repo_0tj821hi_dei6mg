import React from 'react'

export default function Goals() {
  return (
    <section id="goals" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Goals & Vision</h2>
      <p className="mt-2 text-blue-100/80 max-w-3xl">
        I aim to become a well-rounded engineer who can turn ideas into meaningful, real-world solutions. In the long run, I want to build AI-driven tools that empower the next wave of innovation.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100/90">
          <h3 className="text-white font-semibold">Craft</h3>
          <p className="mt-2">Build polished, user-centric products that feel delightful and intuitive.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100/90">
          <h3 className="text-white font-semibold">Impact</h3>
          <p className="mt-2">Solve real problems — from education to productivity — with scalable solutions.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100/90">
          <h3 className="text-white font-semibold">Growth</h3>
          <p className="mt-2">Keep learning — AI/ML, systems, security — and collaborate with great teams.</p>
        </div>
      </div>
    </section>
  )
}
