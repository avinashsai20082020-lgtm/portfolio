import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Hero */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Avinash Sai<br />
          <span className="text-zinc-400 text-3xl md:text-4xl">Junior Web Developer</span>
        </motion.h1>
        <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
          I build clean, functional web applications using HTML, CSS, JavaScript, and modern AI tools like GitHub Copilot.
          I focus on learning fast, shipping fast, and improving every iteration.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-white text-black rounded-xl font-medium">View Projects</a>
          <a href="#contact" className="px-6 py-3 border border-zinc-700 rounded-xl">Contact Me</a>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["HTML", "CSS", "JavaScript", "GitHub", "GitHub Copilot", "Basic React", "AI-assisted Development", "Problem Solving"].map(skill => (
              <div key={skill} className="p-4 bg-zinc-800 rounded-xl text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Brototype Voice Project */}
            <div className="p-6 bg-zinc-900 rounded-2xl">
              <img
                src="D:\Portfolio\img\Screenshot 2025-12-16 022300.png"
                alt="Brototype Voice thumbnail"
                className="rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold">Brototype Voice</h3>
              <p className="mt-3 text-zinc-400">
                A complaint management system built for Brototype students to raise, track, and manage complaints efficiently. Designed to improve communication and issue resolution within the Brototype ecosystem.
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://github.com/avinashsai20082020-lgtm/Brototype-Voice"
                  target="_blank"
                  className="text-sm underline text-zinc-300"
                >
                  GitHub Repo
                </a>
                <a href="https://brototypevoice.lovable.app" target="_blank" className="text-sm underline text-emerald-400 hover:text-emerald-300">Live Preview</a>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className="p-6 bg-zinc-900 rounded-2xl">
              <h3 className="text-xl font-semibold">Portfolio Website</h3>
              <p className="mt-3 text-zinc-400">
                Personal portfolio built using HTML,CSS and JS to showcase my skills and projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Contact</h2>
          <div className="flex gap-6">
            <a href="mailto:avinashsai20082020@gmail.com" className="flex items-center gap-2 text-zinc-400 hover:text-white">
              <Mail size={20} /> Email
            </a>
            <a href="https://github.com/avinashsai20082020-lgtm" className="flex items-center gap-2 text-zinc-400 hover:text-white">
              <Github size={20} /> GitHub
            </a>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-zinc-500">
        © {new Date().getFullYear()} Avinash Sai. Built with React.
      </footer>
    </div>
  );
}
