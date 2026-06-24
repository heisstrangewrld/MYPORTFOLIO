"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Works", href: "#works" },
    { name: "Vibe Lab", href: "#vibe-lab" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 glass border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-syne font-bold text-xl md:text-2xl tracking-tighter text-white">
            SA<span className="text-gradient">.</span>
          </span>
          <span className="hidden sm:inline font-jakarta text-xs text-gray-400 tracking-widest uppercase transition-all duration-300 group-hover:text-brand-cyan">
            Creative Director & Developer
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-jakarta text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/10 hover:border-brand-purple/50 bg-white/5 hover:bg-brand-purple/10 text-white transition-all duration-300 glass hover:neon-glow-purple"
          >
            Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-brand-dark/95 backdrop-blur-xl md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-syne text-2xl font-bold text-gray-300 hover:text-white transition-colors text-gradient-cyan-purple"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center gap-1.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 transition-all duration-300"
          >
            Hire Me <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
