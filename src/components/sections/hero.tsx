"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Download, Calendar } from "lucide-react";

const typewriterTexts = [
  "Hi, I'm Elango",
  "Hola, soy Elango",
  "Bonjour, je suis Elango",
  "Ciao, sono Elango"
];

// Particle Background Component
const ParticleBackground = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }>
  >([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const createParticles = () =>
      setParticles(
        Array.from({ length: 50 }, (_, index) => ({
          id: index,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        }))
      );

    createParticles();
    window.addEventListener("resize", createParticles);
    return () => window.removeEventListener("resize", createParticles);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/30 rounded-full"
          initial={{ x: particle.x, y: particle.y, scale: 0, opacity: 0 }}
          animate={{
            x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 20,
            y: particle.y + Math.cos(Date.now() * 0.001 + particle.id) * 20,
            scale: particle.size,
            opacity: particle.opacity,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{ width: particle.size, height: particle.size }}
        />
      ))}
    </div>
  );
};

// Typewriter Component
const Typewriter = ({
  texts,
  speed = 150,
  pauseDuration = 2500,
}: {
  texts: string[];
  speed?: number;
  pauseDuration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentIndex] || "";

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        } else {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setIsPaused(true);
          }
        }
      },
      isDeleting ? speed / 3 : speed
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, texts, speed, pauseDuration]);

  return (
    <span className="inline-flex items-baseline min-h-[1.2em]">
      <span className="text-left">{displayText}</span>
      <motion.span
        className="inline-block w-0.5 h-[0.8em] bg-primary ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </span>
  );
};

// Geometric Shapes Animation
const GeometricShapes = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Center rotating 3D cube */}
    <motion.div
      animate={{
        rotateY: [0, 360],
        rotateX: [0, 20, 0],
        rotateZ: [0, 10, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-80 h-80 border-2 border-primary/30 transform rotate-45 relative">
        <div className="absolute inset-4 border-2 border-blue-500/25 transform -rotate-45 rounded-lg" />
        <div className="absolute inset-8 border-2 border-purple-500/25 transform rotate-45 rounded-lg" />
        <div className="absolute inset-12 border-2 border-cyan-500/25 transform -rotate-45 rounded-lg" />
        <div className="absolute inset-16 border border-emerald-500/20 transform rotate-45 rounded-full" />
      </div>
    </motion.div>

    {/* Top right rotating circles */}
    <motion.div
      animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/40 rounded-full"
    >
      <div className="absolute inset-2 border-2 border-blue-500/35 rounded-full">
        <div className="absolute inset-2 border border-purple-500/30 rounded-full">
          <div className="absolute inset-2 border border-cyan-500/25 rounded-full" />
        </div>
      </div>
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary/60 rounded-full transform -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>

    {/* Bottom left diamond */}
    <motion.div
      animate={{ rotate: [0, 360], y: [0, -30, 0], x: [0, 15, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-20 left-20 w-28 h-28 border-2 border-cyan-500/40 transform rotate-45"
    >
      <div className="absolute inset-2 border-2 border-primary/35 transform -rotate-45 rounded-lg" />
      <div className="absolute inset-4 border border-blue-500/30 transform rotate-45 rounded-lg" />
    </motion.div>

    {/* Top left small square */}
    <motion.div
      animate={{ rotateY: [0, 180, 360], y: [0, -20, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-32 left-32 w-16 h-16 border border-emerald-500/30 rounded-lg transform rotate-12"
    >
      <div className="absolute inset-1 border border-primary/25 rounded-lg transform -rotate-12" />
    </motion.div>

    {/* Bottom right circle */}
    <motion.div
      animate={{ rotate: [0, -180, -360], scale: [1, 1.1, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-32 right-32 w-20 h-20 border border-purple-500/30 rounded-full"
    >
      <div className="absolute inset-2 border border-cyan-500/25 rounded-full">
        <div className="absolute inset-2 border border-primary/20 rounded-full" />
      </div>
    </motion.div>

    {/* Triangle shape */}
    <motion.div
      animate={{ rotateZ: [0, 120, 240, 360] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/4 right-1/4 w-24 h-24"
    >
      <div
        className="absolute inset-0 border-l-2 border-r-2 border-b-2 border-primary/25"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
    </motion.div>
  </div>
);

export default function Hero() {
  const { scrollY } = useScroll();
  const topBlobY = useTransform(scrollY, [0, 300], [0, -50]);
  const bottomBlobY = useTransform(scrollY, [0, 300], [0, -100]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background dark:bg-black overflow-hidden">
      {/* Particles */}
      <ParticleBackground />

      {/* Gradient blobs with parallax */}
      <motion.div
        style={{ y: topBlobY }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: bottomBlobY }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-primary/10 rounded-full blur-3xl"
      />

      {/* Geometric shapes */}
      <GeometricShapes />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Typewriter Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 h-auto min-h-[1.2em] flex items-center justify-center text-center w-full"
        >
          <div className="bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent leading-tight">
            <Typewriter texts={typewriterTexts} speed={120} pauseDuration={2500} />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 flex items-center justify-center text-center px-4"
        >
          <span className="font-bold text-primary dark:text-[#E0D7FF] dark:drop-shadow-[0_1px_8px_rgba(167,139,250,0.25)]">
            AI/ML Systems Engineer
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed px-4"
        >
          Building deployable AI systems that turn research into real-world impact
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 w-full max-w-lg mx-auto"
        >
          <motion.a
            href="/Elango_Resume.pdf"
            download
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-2 justify-center transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/90 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            <Download className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Download Resume</span>
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-primary text-foreground hover:text-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center transition-all duration-300 hover:bg-primary/5"
          >
            <Calendar className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
            <span>Let&apos;s Build Together</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{ opacity: scrollIndicatorOpacity }}
          className="mt-8 flex flex-col items-center text-muted-foreground"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
          <span className="text-xs mt-2">Scroll to explore</span>
        </motion.div>
      </div>
    </div>
  );
}
