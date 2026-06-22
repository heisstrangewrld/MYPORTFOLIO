"use client";

import { useEffect, useRef, useState } from "react";
import { Sliders, RefreshCw, Play, Pause, Music, Volume2, VolumeX } from "lucide-react";

export default function VibeLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [speed, setSpeed] = useState(0.005);
  const [complexity, setComplexity] = useState(6);
  const [scale, setScale] = useState(1.5);
  const [theme, setTheme] = useState<"cyber" | "acid" | "aurora">("cyber");

  // Track coordinates for audio synth trigger
  const mouseCoords = useRef({ x: 0, y: 0 });

  // Web Audio Setup
  const initAudio = () => {
    if (audioCtxRef.current) return;

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      // Low-frequency ambient vibe note
      osc.frequency.setValueAtTime(110, ctx.currentTime); 
      gain.gain.setValueAtTime(0, ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      audioCtxRef.current = ctx;
      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } catch (e) {
      console.warn("Audio Context failed to start:", e);
    }
  };

  const handleSoundToggle = () => {
    if (!soundEnabled) {
      initAudio();
      setSoundEnabled(true);
      // Fade in sound slightly
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.08, audioCtxRef.current.currentTime + 0.5);
      }
    } else {
      setSoundEnabled(false);
      // Fade out sound
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.3);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 420);

    let angle = 0;

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 600;
      height = canvas.height = 420;
    };
    window.addEventListener("resize", handleResize);

    const getThemeColors = () => {
      switch (theme) {
        case "acid":
          return {
            bg: "rgba(3, 3, 3, 0.08)",
            stroke: (i: number, time: number) =>
              `hsla(${75 + Math.sin(time + i * 0.05) * 30}, 100%, 55%, 0.15)`,
          };
        case "aurora":
          return {
            bg: "rgba(3, 3, 3, 0.08)",
            stroke: (i: number, time: number) =>
              `hsla(${170 + Math.sin(time + i * 0.03) * 50}, 90%, 50%, 0.15)`,
          };
        default: // Cyber (Cyan/Pink/Purple)
          return {
            bg: "rgba(3, 3, 3, 0.08)",
            stroke: (i: number, time: number) =>
              `hsla(${280 + Math.sin(time + i * 0.02) * 60}, 100%, 65%, 0.15)`,
          };
      }
    };

    const draw = () => {
      if (!isPlaying) return;

      const themeConfig = getThemeColors();
      
      // Motion trails
      ctx.fillStyle = themeConfig.bg;
      ctx.fillRect(0, 0, width, height);

      // Increment rotation/angle
      angle += speed;

      // Draw mathematical orbital patterns
      const lines = 120;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.lineWidth = 1.2;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        // Complex mathematical orbits mapping sine waves and trigonometry
        const r1 = (i * scale) + Math.sin(angle + i * 0.1) * (50 * (complexity / 6));
        const r2 = (i * scale) + Math.cos(angle + i * 0.08) * (80 * (complexity / 6));
        
        const x1 = centerX + Math.sin(angle + i * 0.05) * r1;
        const y1 = centerY + Math.cos(angle + i * 0.05) * r2;
        
        const x2 = centerX + Math.sin(angle + i * 0.05 + Math.PI) * r1;
        const y2 = centerY + Math.cos(angle + i * 0.05 + Math.PI) * r2;

        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(
          centerX + Math.cos(angle) * 30,
          centerY + Math.sin(angle) * 30,
          centerX - Math.sin(angle) * 50,
          centerY - Math.cos(angle) * 50,
          x2,
          y2
        );

        ctx.strokeStyle = themeConfig.stroke(i, angle * 10);
        ctx.stroke();
      }

      // Audio frequency modulation based on draw state & mouse coordinates
      if (soundEnabled && oscillatorRef.current && audioCtxRef.current) {
        // Map centerX/mouse positions to pleasant frequency pitches (Pentatonic scale references)
        const mouseRatio = (mouseCoords.current.x / width) || 0.5;
        const baseFreq = 82.41; // E2 note
        const multiplier = 1 + Math.floor(mouseRatio * 8) * 0.25; // Pentatonic steps
        const targetFreq = baseFreq * multiplier;

        oscillatorRef.current.frequency.setTargetAtTime(targetFreq, audioCtxRef.current.currentTime, 0.1);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isPlaying, speed, complexity, scale, theme, soundEnabled]);

  // Handle canvas mouse move to feed audio frequency
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseCoords.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // Stop sound node when component unmounts
  useEffect(() => {
    return () => {
      if (oscillatorRef.current) {
        try { oscillatorRef.current.stop(); } catch (e) {}
      }
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch (e) {}
      }
    };
  }, []);

  const handleReset = () => {
    setSpeed(0.005);
    setComplexity(6);
    setScale(1.5);
    setTheme("cyber");
  };

  return (
    <section id="vibe-lab" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Decorative Glow elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Mock Editor and Live Canvas */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Editor Header Bar */}
          <div className="bg-brand-dark border border-white/10 border-b-0 rounded-t-2xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-[10px] font-mono text-gray-500 ml-4">vibe_composer.glsl</span>
            </div>
            
            {/* Audio Toggle button */}
            <button
              onClick={handleSoundToggle}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border transition-all cursor-pointer ${
                soundEnabled
                  ? "bg-brand-pink/15 border-brand-pink text-brand-pink neon-glow-pink"
                  : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3 h-3" /> Synth Active
                </>
              ) : (
                <>
                  <VolumeX className="w-3 h-3" /> Turn Synth On
                </>
              )}
            </button>
          </div>

          {/* Interactive Canvas Container */}
          <div className="relative border border-white/10 rounded-b-2xl overflow-hidden bg-[#030303]">
            <canvas
              ref={canvasRef}
              onMouseMove={handleMouseMove}
              className="w-full block bg-black/50 cursor-crosshair"
            />
            {/* Canvas overlay instructions */}
            <div className="absolute bottom-3 left-4 pointer-events-none bg-black/60 backdrop-blur-sm border border-white/5 px-2.5 py-1.5 rounded-lg">
              <p className="font-mono text-[9px] text-gray-400">
                {soundEnabled ? "💡 Drag mouse across canvas to modulate synth pitch" : "💡 Click 'Turn Synth On' to hear creative code synth"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Vibe Lab Description and Controls */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-xs font-bold tracking-widest text-brand-pink uppercase bg-brand-pink/10 px-3 py-1 rounded-full mb-4 self-start">
            Interactive Node
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Vibe Coding <span className="text-gradient">Playground</span>
          </h2>
          <p className="font-jakarta text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
            As a <b>Vibe Coder</b>, I merge audio synthesis and visual geometry. Play with the controls below to alter the orbital trajectory equations running in the live script on the left.
          </p>

          <div className="border-t border-white/10 my-6" />

          {/* Theme Selector */}
          <div className="mb-6">
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-3">Color Space Theme</span>
            <div className="flex gap-2">
              {(["cyber", "aurora", "acid"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all duration-300 ${
                    theme === t
                      ? "bg-white/10 text-white border border-white/20"
                      : "bg-white/5 text-gray-500 hover:text-gray-300 border border-transparent"
                  }`}
                >
                  {t === "cyber" ? "🟣 Cyber" : t === "aurora" ? "🟢 Aurora" : "🟡 Acid"}
                </button>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-mono text-[10px] text-gray-400 mb-1.5">
                <span>MUTATION SPEED (TIME STEP)</span>
                <span>{(speed * 1000).toFixed(0)}x</span>
              </div>
              <input
                type="range"
                min="0.001"
                max="0.02"
                step="0.001"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
            </div>

            <div>
              <div className="flex justify-between font-mono text-[10px] text-gray-400 mb-1.5">
                <span>ORBIT COMPLEXITY (HARMONICS)</span>
                <span>{complexity}</span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                step="1"
                value={complexity}
                onChange={(e) => setComplexity(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-pink"
              />
            </div>

            <div>
              <div className="flex justify-between font-mono text-[10px] text-gray-400 mb-1.5">
                <span>SPATIAL SCALE</span>
                <span>{scale.toFixed(1)}px</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
              />
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" /> Pause Script
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" /> Run Script
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
