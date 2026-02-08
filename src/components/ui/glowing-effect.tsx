"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowingEffectProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string;
  blur?: number;
  spread?: number;
  disabled?: boolean;
}

export default function GlowingEffect({
  children,
  className,
  glowColor = "hsl(var(--primary))",
  borderRadius = "1rem",
  blur = 15,
  spread = 2,
  disabled = false,
}: GlowingEffectProps) {
  return (
    <div
      className={cn("relative group", className)}
      style={{ borderRadius }}
    >
      {!disabled && (
        <motion.div
          className="absolute -inset-[1px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(120deg, transparent 20%, ${glowColor} 50%, transparent 80%)`,
            filter: `blur(${blur}px)`,
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
      <div
        className="relative rounded-[inherit] bg-card border border-border overflow-hidden h-full"
        style={{ borderRadius }}
      >
        {children}
      </div>
    </div>
  );
}
