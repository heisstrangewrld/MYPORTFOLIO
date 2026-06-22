"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import CanvasVibeBackground from "./components/CanvasVibeBackground";
import ProjectGrid from "./components/ProjectGrid";
import VibeLab from "./components/VibeLab";
import { Sparkles, Code2, Music, Palette, Send, ArrowRight, Layers } from "lucide-react";

export default function Home() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    vibe: "music-visualizer",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", vibe: "music-visualizer", message: "" });
    }, 1800);
  };

  const skills = [
    {
      icon: <Sparkles className="w-5 h-5 text-brand-pink" />,
      title: "3D & Motion Design",
      desc: "Simulating physical fluid states, metallic chrome refractions, and looping animations in Blender & Cinema4D.",
      tools: ["Blender", "Cinema4D", "Octane Render", "After Effects"],
    },
    {
      icon: <Code2 className="w-5 h-5 text-brand-cyan" />,
      title: "Vibe Coding",
      desc: "Generative art algorithms, interactive Canvas APIs, and high-performance WebGL GLSL shaders.",
      tools: ["GLSL Shaders", "HTML5 Canvas", "WebGL", "React"],
    },
    {
      icon: <Music className="w-5 h-5 text-brand-purple" />,
      title: "Music Visualizers",
      desc: "Sound-reactive digital stage backdrops mapped to low-frequency audio tracking for live sets.",
      tools: ["Web Audio API", "Resolume Arena", "GLSL", "Premiere"],
    },
    {
      icon: <Palette className="w-5 h-5 text-brand-cyan" />,
      title: "Cover Arts & Identity",
      desc: "Surreal geometric album jackets, typography branding, and digital visual assets for electronic musicians.",
      tools: ["Photoshop", "Illustrator", "Figma", "Digital Art"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark overflow-x-hidden relative">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(112,0,255,0.08),transparent_50%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Header */}
      <Header />

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 md:px-12 z-10 overflow-hidden">
        {/* Generative Interactive Canvas Background */}
        <CanvasVibeBackground />

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center select-none">
          {/* Creative Tag */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-bold text-brand-cyan tracking-widest uppercase mb-6 animate-pulse-slow">
            <Layers className="w-3.5 h-3.5" /> Creative Technologist
          </div>

          {/* Heading */}
          <h1 className="font-syne font-bold text-4xl sm:text-6xl md:text-8.5xl text-white tracking-tight leading-none mb-6">
            Kaelen Voss<span className="text-gradient">.</span>
          </h1>

          {/* Subheading */}
          <p className="font-syne font-bold text-lg sm:text-2xl text-gray-300 max-w-2xl tracking-wide mb-8">
            Multidisciplinary Visual Artist, Motion Designer, &{" "}
            <span className="text-gradient-cyan-purple">Vibe Coder</span>
          </p>

          {/* Description */}
          <p className="font-jakarta text-gray-400 text-sm md:text-base max-w-xl mb-10 leading-relaxed">
            Crafting fluid 3D loops, interactive WebGL shaders, neon record jackets, and sound-reactive concert visualizers where code meets cosmic frequencies.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
            <a
              href="#works"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-brand-dark hover:bg-transparent hover:text-white border border-white transition-all duration-300"
            >
              Explore Works
            </a>
            <a
              href="#vibe-lab"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-purple/10 hover:bg-brand-purple/20 border border-brand-purple/30 text-white transition-all duration-300 glass hover:neon-glow-purple"
            >
              Vibe Lab <ArrowRight className="w-4 h-4 text-brand-pink" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="font-mono text-[9px] uppercase tracking-widest text-gray-500">Scroll Down</span>
          <div className="w-1 h-3 bg-white rounded" />
        </div>
      </section>

      {/* 2. Core Pillars / Services */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section info */}
          <div className="lg:col-span-4 sticky top-28">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full mb-4 inline-block">
              Skill Pillars
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white tracking-tight">
              The Creative <span className="text-gradient">Abstractions</span>
            </h2>
            <p className="font-jakarta text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
              Bridging the gap between organic animation and cold logic. I build cohesive aesthetics across digital interfaces and physical screens.
            </p>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-brand-purple/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-purple/15 transition-all">
                  {skill.icon}
                </div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">{skill.title}</h3>
                <p className="font-jakarta text-xs text-gray-400 leading-relaxed mb-6">{skill.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Portfolio Archive Section */}
      <div className="border-t border-white/5" />
      <ProjectGrid />

      {/* 4. Vibe Lab Interactive Sandbox */}
      <div className="border-t border-white/5" />
      <VibeLab />

      {/* 5. About & Clients Section */}
      <div className="border-t border-white/5" />
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/10 px-3 py-1 rounded-full mb-4 inline-block">
              Biography
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl text-white tracking-tight">
              Decoding the <span className="text-gradient">Aesthetic</span>
            </h2>
            <p className="font-jakarta text-gray-400 text-sm md:text-base mt-6 leading-relaxed">
              I’m a digital artist working at the intersection of geometry, sound, and code. Collaborating with record labels, visual arts producers, and modern tech companies, I construct customized visual identities.
            </p>
            <p className="font-jakarta text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
              My philosophy: every frequency has a shape, and every system has a vibe. By combining 3D simulation nodes, custom browser rendering scripts, and audio tracking variables, I help artists materialize their auditory landscapes.
            </p>

            {/* Clients Grid */}
            <div className="mt-12">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block mb-4">
                Creative Collaborations
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Aether Recs", "Lumina Fest", "Warp Space", "Vibe Engine"].map((client) => (
                  <div
                    key={client}
                    className="glass border border-white/5 px-4 py-3.5 rounded-xl flex items-center justify-center"
                  >
                    <span className="font-syne font-bold text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Aesthetic Decorative Visual Panel */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-white/10 glass shadow-2xl p-4 animate-float">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brand-dark flex items-center justify-center">
                <Image
                  src="/portfolio_3d_render.png"
                  alt="3D Fluid chrome rendering artwork"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/20" />
                <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border border-white/10">
                  <p className="font-mono text-[9px] text-brand-cyan tracking-wider uppercase mb-1">
                    RENDER SEQUENCE // FLUID.CORE
                  </p>
                  <p className="font-syne font-bold text-xs text-white">
                    Simulating Glass refraction and liquid chrome physics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Form Section */}
      <div className="border-t border-white/5" />
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-3xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-pink uppercase bg-brand-pink/10 px-3 py-1 rounded-full mb-4">
            Initialize Contact
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl text-white tracking-tight">
            Transmit Your <span className="text-gradient">Project Vibe</span>
          </h2>
          <p className="font-jakarta text-gray-400 text-sm mt-4">
            Have a music release, show visualizer, or generative art installation in mind? Connect and let's compile it.
          </p>
        </div>

        {submitSuccess ? (
          <div className="glass border border-brand-cyan/20 p-8 rounded-3xl text-center flex flex-col items-center animate-float">
            <div className="w-12 h-12 rounded-full bg-brand-cyan/15 flex items-center justify-center text-brand-cyan text-xl mb-4 font-bold">
              ✓
            </div>
            <h3 className="font-syne font-bold text-xl text-white">Vibe Transmitted!</h3>
            <p className="font-jakarta text-sm text-gray-400 mt-2 max-w-sm">
              Your signal has been successfully routed. Kaelen Voss will decode your frequencies and get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="mt-6 text-xs font-bold text-brand-cyan uppercase tracking-wider hover:underline"
            >
              Send Another Signal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest mb-2">
                  Name / Identifier
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Aether Records"
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-xl font-jakarta text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest mb-2">
                  Routing Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="e.g. sync@aether.recs"
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-xl font-jakarta text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-pink transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest mb-2">
                Project Category Vibe
              </label>
              <select
                name="vibe"
                value={formState.vibe}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-brand-dark/80 border border-white/10 rounded-xl font-jakarta text-xs text-white focus:outline-none focus:border-brand-purple transition-colors cursor-pointer"
              >
                <option value="music-visualizer">🎵 Live Music Stage Visualizer</option>
                <option value="3d-animation">✨ 3D Simulation Loop / Animation</option>
                <option value="cover-art">💿 Album Cover Art</option>
                <option value="vibe-coding">💻 Generative Coding / WebGL Experience</option>
                <option value="other">🔮 Other Creative Sync</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest mb-2">
                Project Frequency / Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Describe the aesthetic direction, deadline parameters, or musical BPM..."
                className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-xl font-jakarta text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink text-white hover:opacity-90 shadow-lg shadow-brand-purple/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                "Transmitting signal..."
              ) : (
                <>
                  Transmit Vibe Signal <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 px-6 md:px-12 border-t border-white/5 bg-[#030303] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-syne font-bold text-lg text-white">KV.</span>
            <span className="font-jakarta text-[10px] text-gray-500 tracking-wider">
              © {new Date().getFullYear()} KAELEN VOSS. ALL RIGHTS COMPILED.
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-dark transition-all text-gray-400"
              aria-label="GitHub Link"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink hover:text-brand-dark transition-all text-gray-400"
              aria-label="Twitter Link"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-brand-dark transition-all text-gray-400"
              aria-label="Instagram Link"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" y2="6.5" x2="17.51"></line></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
