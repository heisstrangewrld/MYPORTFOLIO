"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { X, Sparkles, Code2, Eye, Palette, ChevronLeft, ChevronRight } from "lucide-react";

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
    image: "/COLORS WEP IMAGES/FRONT PREVIEW 1.webp",
    gallery: [
      "/COLORS WEP IMAGES/FRONT PREVIEW 1.webp",
      "/COLORS WEP IMAGES/FRONT PREVIEW 2.webp",
      "/COLORS WEP IMAGES/COLORS LOGO.webp",
      "/COLORS WEP IMAGES/01.webp",
      "/COLORS WEP IMAGES/03.webp",
      "/COLORS WEP IMAGES/03new.webp",
      "/COLORS WEP IMAGES/06.webp",
      "/COLORS WEP IMAGES/CONCEPT02.webp",
      "/COLORS WEP IMAGES/CONCEPT 03.webp",
    ],
    description: "Premium visual identity, structural packaging layouts, and 3D product renders for an Irish beverage brand.",
    stack: ["Blender", "Photoshop", "Illustrator", "Product Design"],
    story: "Designed a clean and modern brand identity system for Colors Beverages (Ireland). The creative package features custom structural packaging design layout guides and high-fidelity 3D CGI product renders that convey an energetic, premium retail presence. Delivered a full suite of brand assets including logo, label concepts, and packaging mockups across multiple flavour variants.",
    client: "Colors Beverages",
    date: "Jun – Jul 2024",
  },
  {
    id: "cover-art-portfolio",
    title: "Cover Art Portfolio",
    category: "Cover Art",
    image: "/COVER ARTS/COVER 1 FULL.webp",
    gallery: [
      "/COVER ARTS/COVER 1 FULL.webp",
      "/COVER ARTS/COVER NEW EDIT 1.webp",
      "/COVER ARTS/FINAL 1newwith name.jpg",
      "/COVER ARTS/DEMON MODE 1.webp",
      "/COVER ARTS/THIS YEAR 01.webp",
      "/COVER ARTS/TRIIPY'S WRLD 1.webp",
      "/COVER ARTS/TRIIPYS WORLD 1.webp",
      "/COVER ARTS/VINDICVATION1.webp",
      "/COVER ARTS/VINDICVATION4.webp",
      "/COVER ARTS/PALOMA XEXPORT 4.webp",
      "/COVER ARTS/paloma x2.webp",
      "/COVER ARTS/SAMBOL  1 EXPORT.webp",
      "/COVER ARTS/THAT LOV 1.webp",
      "/COVER ARTS/MANY THINGS 22.webp",
      "/COVER ARTS/feel.webp",
      "/COVER ARTS/lonely cove bar code.webp",
      "/COVER ARTS/sticks and stones2 NEW.webp",
      "/COVER ARTS/SS 3-Recovered.webp",
      "/COVER ARTS/WNT 1.webp",
      "/COVER ARTS/WNT 2.webp",
      "/COVER ARTS/WNT 011.webp",
      "/COVER ARTS/14 DND.webp",
      "/COVER ARTS/01.webp",
      "/COVER ARTS/01back cover.webp",
      "/COVER ARTS/03.webp",
      "/COVER ARTS/03jp.webp",
      "/COVER ARTS/bm2 under.webp",
      "/COVER ARTS/01 SKETCHES.webp",
      "/COVER ARTS/02 SKETCHES.webp",
      "/COVER ARTS/rough sketchn 2.jpg",
      "/COVER ARTS/untitled (1).webp",
    ],
    description: "A collection of album cover art, single covers, and visual design work for musicians and artists.",
    stack: ["Photoshop", "Illustrator", "Cinema4D", "Digital Art"],
    story: "A curated archive of album and single cover art commissions across multiple artists and genres. Each piece is built around the artist's sonic identity — translating mood, tempo, and narrative into striking visual compositions. Projects span conceptual sketches through to high-fidelity final exports, delivering standout artwork for streaming platforms and physical releases.",
    client: "Various Artists",
    date: "2020 – Present",
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
  const [slideDir, setSlideDir] = useState<"left" | "right">("left");

  // Touch tracking refs for swipe gestures
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

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

  const goNext = () => {
    if (!selectedProject?.gallery) return;
    setSlideDir("left");
    setActiveImageIndex((prev) => (prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    if (!selectedProject?.gallery) return;
    setSlideDir("right");
    setActiveImageIndex((prev) => (prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
    touchStartY.current = e.changedTouches[0].clientY;
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const dx = Math.abs(e.changedTouches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (dx > dy && dx > 8) isDragging.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!selectedProject?.gallery || selectedProject.gallery.length <= 1) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (!isDragging.current || Math.abs(dx) < 40) return;
    if (dx < 0) goNext(); else goPrev();
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    setSlideDir("left");
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
        <>
          {/* CSS keyframes for slide animations — injected inline */}
          <style>{`
            @keyframes slideInFromRight { from { opacity: 0; transform: translateX(48px); } to { opacity: 1; transform: translateX(0); } }
            @keyframes slideInFromLeft  { from { opacity: 0; transform: translateX(-48px); } to { opacity: 1; transform: translateX(0); } }
            .slide-from-right { animation: slideInFromRight 0.28s cubic-bezier(0.25,0.46,0.45,0.94) both; }
            .slide-from-left  { animation: slideInFromLeft  0.28s cubic-bezier(0.25,0.46,0.45,0.94) both; }
          `}</style>

          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-brand-dark/95 backdrop-blur-lg"
            onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}
          >
            {/* Modal container: full-screen on mobile, capped on desktop */}
            <div
              className="glass w-full sm:max-w-4xl sm:w-[94vw] sm:rounded-3xl rounded-t-3xl overflow-hidden border border-white/10 flex flex-col shadow-2xl relative"
              style={{ maxHeight: "100dvh", height: "100dvh" }}
            >
              {/* ── Always-visible close button (top-right corner of modal) ── */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-30 flex items-center justify-center p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all cursor-pointer shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* ── Mobile sticky title bar (no close btn — handled above) ── */}
              <div className="flex items-center px-5 py-3 pr-14 bg-[#07070a]/90 border-b border-white/10 flex-shrink-0 sm:hidden">
                <span className="font-syne font-bold text-sm text-white truncate">{selectedProject.title}</span>
              </div>

              {/* ── Main image area with swipe support ── */}
              <div
                className="relative w-full bg-black flex-shrink-0 overflow-hidden"
                style={{ height: "55dvh", minHeight: "260px" }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Keyed wrapper drives the slide-in animation on each image change */}
                <div
                  key={`${selectedProject.id}-${activeImageIndex}`}
                  className={`absolute inset-0 ${ slideDir === "left" ? "slide-from-right" : "slide-from-left" }`}
                >
                  <Image
                    src={selectedProject.gallery ? selectedProject.gallery[activeImageIndex] : selectedProject.image}
                    alt={`${selectedProject.title} view ${activeImageIndex + 1}`}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                {/* Navigation Arrows */}
                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-dark/80 hover:bg-brand-dark/95 text-white border border-white/15 hover:border-white/30 transition-all cursor-pointer z-10 hover:scale-105 active:scale-95"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-dark/80 hover:bg-brand-dark/95 text-white border border-white/15 hover:border-white/30 transition-all cursor-pointer z-10 hover:scale-105 active:scale-95"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Swipe hint — fades out after first interaction */}
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-brand-dark/85 text-white border border-white/10 select-none pointer-events-none">
                      {activeImageIndex + 1} / {selectedProject.gallery.length}
                      <span className="text-gray-500 text-[10px] hidden sm:inline">· swipe or use arrows</span>
                    </span>
                  </>
                )}
              </div>

              {/* ── Thumbnail strip ── */}
              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-none select-none bg-[#07070a] border-b border-white/5 flex-shrink-0">
                  {selectedProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSlideDir(idx > activeImageIndex ? "left" : "right");
                        setActiveImageIndex(idx);
                      }}
                      className={`relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? "border-brand-cyan shadow-md shadow-brand-cyan/20 scale-95"
                          : "border-white/10 hover:border-white/30"
                      }`}
                      style={{ width: 64, height: 42 }}
                    >
                      <Image src={img} alt={`thumb ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* ── Scrollable info ── */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-5 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                    {getIconForCategory(selectedProject.category)}
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {selectedProject.client}
                  </span>
                  <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {selectedProject.date}
                  </span>
                </div>

                {/* Title — hidden on mobile (sticky header shows it) */}
                <h3 className="hidden sm:block font-syne font-bold text-2xl md:text-3xl text-white mb-3">
                  {selectedProject.title}
                </h3>

                <div className="border-t border-white/10 my-3" />

                <h4 className="font-syne font-bold text-xs text-gray-300 uppercase tracking-widest mb-2">
                  Project Journey
                </h4>
                <p className="font-jakarta text-gray-400 text-sm leading-relaxed mb-5">
                  {selectedProject.story}
                </p>

                <h4 className="font-syne font-bold text-xs text-gray-300 uppercase tracking-widest mb-2">
                  Technical Blueprint
                </h4>
                <div className="flex flex-wrap gap-2 pb-4">
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
        </>
      )}
    </section>
  );
}
