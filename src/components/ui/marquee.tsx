"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useRef, useEffect, useState } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

export default function Marquee({
  children,
  className,
  pauseOnHover = true,
  direction = "left",
  speed = 40,
}: MarqueeProps) {
  const [duration, setDuration] = useState(20);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const contentWidth = marqueeRef.current.scrollWidth / 2;
      setDuration(contentWidth / speed);
    }
  }, [speed]);

  return (
    <div
      className={cn(
        "relative flex overflow-hidden",
        pauseOnHover && "[&:hover>div]:pause",
        className
      )}
    >
      <div
        ref={marqueeRef}
        className={cn(
          "flex shrink-0 gap-4",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
