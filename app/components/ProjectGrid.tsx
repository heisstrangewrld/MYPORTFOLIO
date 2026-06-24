"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Sparkles, Code2, Play, Eye, Palette, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Creative Direction" | "Brand Design" | "Cover Art" | "Web Development";
  image: string;
  gallery?: string[];
  description: string;
  stack: string[];
  story: string;
  client: string;
  date: string;
}

const projects: Project[] = [
  {
    id: "crova-delivery",
    title: "Crova Food Delivery Platform",
    category: "Creative Direction",
    image: "/CROVA WEBP IMAGES/mock up 2.webp",
    gallery: [
      "/CROVA WEBP IMAGES/mock up 2.webp",
      "/CROVA WEBP IMAGES/Artboard 1.webp",
      "/CROVA WEBP IMAGES/LOGO 4.webp",
      "/CROVA WEBP IMAGES/mockup 1.webp",
      "/CROVA WEBP IMAGES/cap mockup 1.webp",
      "/CROVA WEBP IMAGES/shirt mockup 1.webp",
      "/CROVA WEBP IMAGES/shirt mockup 6.webp",
      "/CROVA WEBP IMAGES/watch mockup 1.webp",
      "/CROVA WEBP IMAGES/AMALA.webp",
      "/CROVA WEBP IMAGES/PIZZA.webp",
      "/CROVA WEBP IMAGES/bole and turkey.webp",
      "/CROVA WEBP IMAGES/GOLD PLATTER.webp",
    ],
    description: "Creative direction, brand identity, and mobile app design systems for a next-gen food delivery ecosystem.",
    stack: ["Figma", "Adobe Illustrator", "Brand Strategy", "UI/UX Design"],
    story: "As Creative Director & COO of Crova Ltd, I led the brand identity development, packaging designs, merchandise, and mobile app UI/UX workflows. The system is designed to connect customers with premium cuisines through a vibrant, high-fidelity user interface. I created custom brand sheets, packaging concepts, and high-fidelity prototypes to establish a cohesive cross-channel brand presence.",
    client: "Crova Ltd",
    date: "Jan 2026 – Jun 2026",
  },
  {
    id: "colors-beverages",
    title: "Colors Beverages Brand Identity",
    category: "Brand Design",
    image: "/portfolio_3d_render.png",
    description: "Premium visual identity, structural packaging layouts, and 3D product renders.",
    stack: ["Blender", "Photoshop", "Illustrator", "Product Design"],
    story: "Designed a clean and modern brand identity system for Colors Beverages (Ireland). The creative package features custom structural packaging design layout guides and high-fidelity 3D CGI product renders that convey an energetic, premium retail presence.",
    client: "Colors Beverages",
    date: "Jun – Jul 2024",
  },
  {
    id: "takeover-cover",
    title: "Takeover – Vuga KVNGZ LP",
    category: "Cover Art",
    image: "/portfolio_cover_art.png",
    description: "Surreal geometric album cover art that gained massive international music scene traction.",
    stack: ["Cinema4D", "Octane Render", "Photoshop", "Digital Art"],
    story: "Commissioned to design the official album art for 'Takeover' by Vuga KVNGZ. Featuring levitating neon structures and spectral reflections, the design stood out globally, establishing deep resonance in music communities and gaining viral traction in Turkey.",
    client: "Vuga KVNGZ",
    date: "2024",
  },
  {
    id: "fluxfunded-web",
    title: "Fluxfunded.com & Web Ecosystems",
    category: "Web Development",
    image: "/portfolio_vibe_code.png",
    description: "High-performance responsive frontend development and interactive styling for financial platforms.",
    stack: ["Next.js", "React", "Tailwind CSS", "GitHub", "Vercel"],
    story: "Built clean frontend systems for high-traffic financial platforms like Fluxfunded.com, Cresthood.com, Coinpek.com, Fxcntrl.com, and Risinghood.com. Developed modular, responsive layouts optimized for page speed, client trust, and clear UX routing.",
    client: "Fluxfunded / Various",
    date: "2016 – Present",
  },
];

type CategoryFilter = "All" | "Creative Direction" | "Brand Design" | "Cover Art" | "Web Development";

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories: CategoryFilter[] = ["All", "Creative Direction", "Brand Design", "Cover Art", "Web Development"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Creative Direction": return <Sparkles className="w-4 h-4 text-brand-pink" />;
      case "Brand Design": return <Palette className="w-4 h-4 text-brand-cyan" />;
      case "Cover Art": return <Eye className="w-4 h-4 text-brand-cyan" />;
      case "Web Development": return <Code2 className="w-4 h-4 text-brand-purple" />;
      default: return <Eye className="w-4 h-4 text-brand-cyan" />;
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  return (
    <section id="works" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full mb-4">
          Visual Archive
        </span>
        <h2 className="font-syne font-bold text-3xl md:text-5xl text-white tracking-tight">
          Selected <span className="text-gradient">Creation Lab</span> Projects
        </h2>
        <p className="font-jakarta text-gray-400 text-sm md:text-base max-w-xl mt-4">
          A curate feed of interactive canvas experiments, premium 3D designs, neon album covers, and concert visualizers.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
              activeFilter === cat
                ? "bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-lg shadow-brand-purple/20"
                : "bg-white/5 text-gray-400 hover:text-white border border-white/5 hover:border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleSelectProject(project)}
            className="group relative cursor-pointer glass rounded-2xl overflow-hidden border border-white/5 hover:border-brand-purple/30 transition-all duration-500 hover:neon-glow-purple flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="aspect-video relative overflow-hidden bg-brand-dark">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Blur Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Floating Tag */}
              <span className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-dark/80 backdrop-blur-md border border-white/10 text-white">
                {getIconForCategory(project.category)}
                {project.category}
              </span>
            </div>

            {/* Info Container */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-syne font-bold text-xl text-white group-hover:text-brand-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-jakarta text-xs text-gray-400 mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.stack.slice(0, 3).map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                    {s}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                    +{project.stack.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-md transition-opacity duration-300">
          <div className="glass max-w-3xl w-full rounded-3xl overflow-hidden border border-white/10 flex flex-col max-h-[90vh] shadow-2xl relative animate-float">
            {/* Modal Image & Gallery */}
            <div className="aspect-video relative w-full min-h-[220px] sm:min-h-[320px] bg-brand-dark flex items-center justify-center">
              <Image
                src={selectedProject.gallery ? selectedProject.gallery[activeImageIndex] : selectedProject.image}
                alt={`${selectedProject.title} view ${activeImageIndex + 1}`}
                fill
                priority
                className="object-contain sm:object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/20 pointer-events-none" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-brand-dark/80 hover:bg-brand-dark text-white border border-white/10 hover:border-white/20 transition-colors cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-dark/80 hover:bg-brand-dark/95 text-white border border-white/10 hover:border-white/25 transition-all cursor-pointer z-10 hover:scale-105"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-dark/80 hover:bg-brand-dark/95 text-white border border-white/10 hover:border-white/25 transition-all cursor-pointer z-10 hover:scale-105"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Slide number counter */}
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono bg-brand-dark/85 text-white border border-white/5">
                    {activeImageIndex + 1} / {selectedProject.gallery.length}
                  </span>
                </>
              )}
            </div>

            {/* Gallery Thumbnails List (if gallery exists) */}
            {selectedProject.gallery && selectedProject.gallery.length > 1 && (
              <div className="flex gap-2 px-6 pt-4 overflow-x-auto scrollbar-none select-none max-w-full bg-[#07070a] border-b border-white/5 pb-3">
                {selectedProject.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-10 flex-shrink-0 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? "border-brand-cyan scale-95 shadow-md shadow-brand-cyan/20"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`thumbnail ${idx}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Modal Info (Scrollable content) */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                  {getIconForCategory(selectedProject.category)}
                  {selectedProject.category}
                </span>
                <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  Client: {selectedProject.client}
                </span>
                <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {selectedProject.date}
                </span>
              </div>

              <h3 className="font-syne font-bold text-2xl md:text-3.5xl text-white mb-4">
                {selectedProject.title}
              </h3>

              <div className="border-t border-white/10 my-4" />

              <h4 className="font-syne font-bold text-sm text-gray-300 uppercase tracking-widest mb-2">
                Project Journey
              </h4>
              <p className="font-jakarta text-gray-400 text-sm leading-relaxed mb-6">
                {selectedProject.story}
              </p>

              <h4 className="font-syne font-bold text-sm text-gray-300 uppercase tracking-widest mb-2.5">
                Technical Blueprint
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-purple/10 text-brand-cyan border border-brand-purple/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
