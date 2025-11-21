import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s connect</h2>
            <p className="mt-2 text-blue-100/80">Guwahati, Assam, India</p>
            <p className="mt-2 text-blue-100/80">Email: rishibhargavkataki@gmail.com</p>
            <div className="mt-4 flex gap-3 text-blue-200">
              <a href="https://linkedin.com/" className="underline hover:text-white">LinkedIn</a>
              <a href="https://github.com/" className="underline hover:text-white">GitHub</a>
            </div>
          </div>

          <form className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/70 outline-none" />
            <input placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/70 outline-none" />
            <textarea placeholder="Message" rows={4} className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/70 outline-none" />
            <button type="button" className="sm:col-span-2 rounded-xl bg-blue-500 px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
