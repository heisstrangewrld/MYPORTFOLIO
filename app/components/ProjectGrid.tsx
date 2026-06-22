"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Sparkles, Code2, Play, Eye } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "3D & Motion" | "Cover Art" | "Music Visualizer" | "Vibe Coding";
  image: string;
  description: string;
  stack: string[];
  story: string;
  client: string;
  date: string;
}

const projects: Project[] = [
  {
    id: "vibe-fields",
    title: "Astral Flow Fields v3.1",
    category: "Vibe Coding",
    image: "/portfolio_vibe_code.png",
    description: "An interactive math-driven fluid flow field explorer rendering complex vector math real-time on GPU.",
    stack: ["WebGL", "HTML5 Canvas", "React", "GLSL Shaders"],
    story: "Built as a live web showcase, this project maps mathematical vector flow fields (using custom simplex noise arrays) to millions of glowing paint particles. Users can adjust control parameters like particle lifespan, speed, color gradients, and turbulence overlays. The custom WebGL rendering engine keeps frame rates at a locked 60 FPS even on mobile browsers.",
    client: "Personal Showcase",
    date: "June 2026",
  },
  {
    id: "fluid-sculpture",
    title: "Fluid Chrome Core 01",
    category: "3D & Motion",
    image: "/portfolio_3d_render.png",
    description: "A premium ray-traced abstract 3D sculpture study featuring organic refraction and metallic liquid core physics.",
    stack: ["Blender", "Octane Render", "Simulation Nodes", "Photoshop"],
    story: "This artwork is a visual exploration of glass refractivity and liquid metal behaviors under high pressure. Simulated with Blender's fluid nodes, the sculpture undergoes organic twisting loops. The final image was ray-traced in Octane using a custom spectral dispersion glass shader to separate light rays, producing the rainbow chromatics seen in the glows.",
    client: "Design Lab Studio",
    date: "May 2026",
  },
  {
    id: "aether-cover",
    title: "Aether Vibes LP Cover",
    category: "Cover Art",
    image: "/portfolio_cover_art.png",
    description: "Surreal cyberpunk album art commission featuring levitating neon geometries for a synthwave producer.",
    stack: ["Cinema4D", "Octane Render", "Adobe Photoshop"],
    story: "Commissioned by electronic music artist heisstrangewrld for their album 'Aether Vibes', this cover design features floating geometric nodes that represent a physical interpretation of synthetic audio wave resonance. Glowing neon magenta wireframes map across the chrome structure, floating against a hyper-detailed deep space nebula background.",
    client: "heisstrangewrld",
    date: "April 2026",
  },
  {
    id: "bass-reactor",
    title: "Live Show Bass Reactor v2",
    category: "Music Visualizer",
    image: "/portfolio_music_viz.png",
    description: "Real-time sound-reactive stage visualizer mapping audio spectrums directly to terrain mesh deformation.",
    stack: ["Resolume Arena", "GLSL Shaders", "After Effects", "WebAudio API"],
    story: "Designed as a live backdrop visualizer for festival stages, this system feeds a stereophonic audio spectrum analyser into a GLSL shader. Low frequencies (bass) deform the grid-based wireframe landscape, while high-frequency percussion controls particle bursts and neon strobe pulses, forming a completely synchronized sensory experience.",
    client: "Lumina Festivals",
    date: "March 2026",
  },
];

type CategoryFilter = "All" | "3D & Motion" | "Cover Art" | "Music Visualizer" | "Vibe Coding";

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: CategoryFilter[] = ["All", "3D & Motion", "Cover Art", "Music Visualizer", "Vibe Coding"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Vibe Coding": return <Code2 className="w-4 h-4 text-brand-cyan" />;
      case "3D & Motion": return <Sparkles className="w-4 h-4 text-brand-pink" />;
      case "Music Visualizer": return <Play className="w-4 h-4 text-brand-purple" />;
      default: return <Eye className="w-4 h-4 text-brand-cyan" />;
    }
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
            onClick={() => setSelectedProject(project)}
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
            {/* Modal Image */}
            <div className="aspect-video relative w-full min-h-[220px] sm:min-h-[300px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/10 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-brand-dark/80 hover:bg-brand-dark text-white border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

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
