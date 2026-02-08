"use client";

import { useState, useRef, useCallback, useEffect, memo } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Clock,
  Layers,
  Brain,
  MessageCircle,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import {
  SiPython,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
} from "react-icons/si";
import { cn } from "@/lib/utils";

// Tech Stack Icons - AI/ML focused
const techStack = [
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
  { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
  { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "text-blue-500" },
  { name: "Pandas", icon: SiPandas, color: "text-purple-500" },
  { name: "NumPy", icon: SiNumpy, color: "text-blue-400" },
  { name: "OpenCV", icon: SiOpencv, color: "text-green-500" },
];

// Learning areas data
const learningAreas = [
  { topic: "LLMs & RAG", status: "Active" },
  { topic: "MLOps", status: "Active" },
  { topic: "Computer Vision", status: "Ongoing" },
];

// GlowingEffect Component
const GlowingEffect = memo(({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  variant = "default",
  glow = false,
  className,
  movementDuration = 2,
  borderWidth = 1,
  disabled = true,
}: {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  movementDuration?: number;
  borderWidth?: number;
  disabled?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  const updateGlow = useCallback(
    (e?: { x: number; y: number }) => {
      if (!containerRef.current) return;

      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      animationRef.current = requestAnimationFrame(() => {
        const element = containerRef.current;
        if (!element) return;

        const { left, top, width, height } = element.getBoundingClientRect();
        const posX = e?.x ?? lastPosition.current.x;
        const posY = e?.y ?? lastPosition.current.y;

        if (e) lastPosition.current = { x: posX, y: posY };

        const center = [left + width * 0.5, top + height * 0.5];
        const distanceToCenter = Math.hypot(posX - center[0], posY - center[1]);

        if (distanceToCenter < Math.min(width, height) * 0.5 * inactiveZone) {
          element.style.setProperty("--active", "0");
          return;
        }

        const isInProximity =
          posX > left - proximity &&
          posX < left + width + proximity &&
          posY > top - proximity &&
          posY < top + height + proximity;

        element.style.setProperty("--active", isInProximity ? "1" : "0");

        if (!isInProximity) return;

        const currentStart = parseFloat(element.style.getPropertyValue("--start")) || 0;
        const targetAngle = (Math.atan2(posY - center[1], posX - center[0]) * 180) / Math.PI + 90;
        const angleDiff = ((targetAngle - currentStart + 180) % 360) - 180;

        animate(currentStart, currentStart + angleDiff, {
          duration: movementDuration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (value) => {
            element.style.setProperty("--start", String(value));
          },
        });
      });
    },
    [inactiveZone, proximity, movementDuration]
  );

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => updateGlow();
    const handlePointerMove = (e: PointerEvent) => updateGlow(e);

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.body.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, [updateGlow, disabled]);

  const gradient =
    variant === "white"
      ? `repeating-conic-gradient(from 236.84deg at 50% 50%, var(--black), var(--black) calc(25% / var(--repeating-conic-gradient-times)))`
      : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
         radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
         radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
         radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
         repeating-conic-gradient(
           from 236.84deg at 50% 50%,
           #dd7bbb 0%,
           #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
           #5a922c calc(50% / var(--repeating-conic-gradient-times)), 
           #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
           #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
         )`;

  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
          glow && "opacity-100",
          variant === "white" && "border-white",
          disabled && "!block"
        )}
      />
      <div
        ref={containerRef}
        style={{
          "--blur": `${blur}px`,
          "--spread": spread,
          "--start": "0",
          "--active": "0",
          "--glowingeffect-border-width": `${borderWidth}px`,
          "--repeating-conic-gradient-times": "5",
          "--gradient": gradient,
        } as React.CSSProperties}
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
          glow && "opacity-100",
          blur > 0 && "blur-[var(--blur)]",
          className,
          disabled && "!hidden"
        )}
      >
        <div
          className={cn(
            "glow rounded-[inherit]",
            'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
            "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
            "after:[background:var(--gradient)] after:[background-attachment:fixed]",
            "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
            "after:[mask-clip:padding-box,border-box]",
            "after:[mask-composite:intersect]",
            "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
          )}
        />
      </div>
    </>
  );
});

GlowingEffect.displayName = "GlowingEffect";

// BentoCard Component
interface BentoCardProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  id: number;
}

const BentoCard = ({ area, icon, title, description, id }: BentoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderContent = () => {
    switch (id) {
      case 1:
        // Research to Production - links to Experience
        return (
          <Link href="/experience" className="block h-full">
            <div
              className="relative h-full group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="relative flex flex-1 flex-col justify-between gap-3 h-full"
                animate={{
                  filter: isHovered ? "blur(4px)" : "blur(0px)",
                  opacity: isHovered ? 0.3 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
                <div className="space-y-3">
                  <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                    {title}
                  </h3>
                  <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                    {description}
                  </p>
                </div>
              </motion.div>
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                  >
                    <Briefcase className="w-12 h-12 text-violet-500 mb-4" />
                    <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                      View Experience
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      IIT Madras, Deloitte and more
                    </p>
                    <div className="flex items-center gap-2 text-violet-500 font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        );

      case 2:
        // Continuous Learning - shows learning areas
        return (
          <div
            className="relative h-full group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="relative flex flex-1 flex-col justify-between gap-3 h-full"
              animate={{
                filter: isHovered ? "blur(4px)" : "blur(0px)",
                opacity: isHovered ? 0.3 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
              <div className="space-y-3">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                  {title}
                </h3>
                <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                  {description}
                </p>
              </div>
            </motion.div>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex flex-col justify-center p-4"
                >
                  <div className="text-center mb-3">
                    <Brain className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <h4 className="text-base font-bold text-black dark:text-white">
                      Currently Exploring
                    </h4>
                  </div>
                  <div className="space-y-1">
                    {learningAreas.map((area, index) => (
                      <motion.div
                        key={area.topic}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-2 bg-background/90 dark:bg-white/15 rounded-md backdrop-blur-sm border border-border/20"
                      >
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-blue-500" />
                          <span className="text-xs font-medium text-black dark:text-white">
                            {area.topic}
                          </span>
                        </div>
                        <span className="text-xs text-blue-500 font-medium">{area.status}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 3:
        // My Skills & Tools - shows tech icons
        return (
          <div
            className="block h-full group cursor-pointer"
            onClick={() => (window.location.href = "/about#tech-stack-section")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="relative flex flex-1 flex-col gap-3 h-full"
              animate={{
                filter: isHovered ? "blur(4px)" : "blur(0px)",
                opacity: isHovered ? 0.3 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
              <div className="space-y-3">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                  {title}
                </h3>
                <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                  AI/ML frameworks and deployment tools I work with
                </p>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-10">
                {techStack.slice(0, 8).map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center gap-1 p-2 bg-white/60 dark:bg-black/40 rounded-lg backdrop-blur-sm border border-gray-200/70 dark:border-gray-800/30"
                  >
                    <tech.icon className={`w-5 h-5 md:w-6 md:h-6 ${tech.color}`} />
                    <span className="text-[10px] font-medium text-center leading-tight text-black dark:text-white">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                >
                  <Layers className="w-12 h-12 text-purple-500 mb-4" />
                  <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                    Full Skills Stack
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Click to see all my skills and tools
                  </p>
                  <div className="flex items-center gap-2 text-purple-500 font-medium group">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 4:
        // End-to-End ML Systems - links to Case Studies
        return (
          <Link href="/case-studies" className="block h-full">
            <div
              className="relative h-full group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="relative flex flex-1 flex-col justify-between gap-3 h-full"
                animate={{
                  filter: isHovered ? "blur(4px)" : "blur(0px)",
                  opacity: isHovered ? 0.3 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
                <div className="space-y-3">
                  <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                    {title}
                  </h3>
                  <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                    {description}
                  </p>
                </div>
              </motion.div>
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                  >
                    <Brain className="w-12 h-12 text-teal-500 mb-4" />
                    <h4 className="text-xl font-bold text-black dark:text-white mb-2">
                      Case Studies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Explore my ML pipeline projects and deployments
                    </p>
                    <div className="flex items-center gap-2 text-teal-500 font-medium">
                      <span>View Projects</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        );

      case 5:
        // Ready to Collaborate - Contact links
        return (
          <div
            className="relative h-full group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="relative flex flex-1 flex-col justify-between gap-3 h-full"
              animate={{
                filter: isHovered ? "blur(4px)" : "blur(0px)",
                opacity: isHovered ? 0.3 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
              <div className="space-y-3">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                  {title}
                </h3>
                <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                  Let&apos;s create something amazing together
                </p>
              </div>
            </motion.div>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex flex-col justify-center p-6"
                >
                  <div className="text-center mb-4">
                    <Mail className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                    <h4 className="text-lg font-bold text-black dark:text-white">
                      Let&apos;s Connect
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 p-3 bg-indigo-500/20 hover:bg-indigo-500/30 rounded-lg transition-colors group w-full justify-center"
                    >
                      <Mail className="w-4 h-4 text-indigo-500" />
                      <span className="text-sm font-medium text-indigo-500">Get in Touch</span>
                      <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <div className="flex gap-2">
                      <a
                        href="https://www.linkedin.com/in/elango-m-9b4b76310/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors group"
                      >
                        <Linkedin className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-medium text-blue-500">LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/Elango-spidy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 p-2 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg transition-colors group"
                      >
                        <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                          GitHub
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm border border-gray-300/80 dark:border-gray-800/50 shadow-lg dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          {renderContent()}
        </div>
      </div>
    </li>
  );
};

// Main BentoGrid Component
export default function BentoGrid() {
  return (
    <section
      id="about"
      className="bg-background dark:bg-black relative overflow-hidden py-1"
    >
      {/* Background blurs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6"
      >
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <BentoCard
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Briefcase className="h-5 w-5 text-black dark:text-neutral-400" />}
            title="Research to Production"
            description="Turning ML research into deployable, scalable systems that deliver real impact."
            id={1}
          />
          <BentoCard
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Clock className="h-5 w-5 text-black dark:text-neutral-400" />}
            title="Continuous Learning"
            description="Staying current with evolving AI techniques and best practices."
            id={2}
          />
          <BentoCard
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Layers className="h-5 w-5 text-black dark:text-neutral-400" />}
            title="My Skills & Tools"
            description="Python, TensorFlow, PyTorch, FastAPI, Azure and more."
            id={3}
          />
          <BentoCard
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Brain className="h-5 w-5 text-black dark:text-neutral-400" />}
            title="End-to-End ML Systems"
            description="Building complete pipelines from data to deployed models with FastAPI."
            id={4}
          />
          <BentoCard
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<MessageCircle className="h-5 w-5 text-black dark:text-neutral-400" />}
            title="Ready to Collaborate"
            description="Let's create something amazing together."
            id={5}
          />
        </ul>
      </motion.div>
    </section>
  );
}
