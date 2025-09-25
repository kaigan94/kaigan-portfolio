"use client";

import { motion } from "framer-motion";
import React, {
  type ComponentPropsWithoutRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

type TiltCardProps = Omit<
  MotionDivProps,
  "onMouseEnter" | "onMouseMove" | "onMouseLeave"
> & {
  tiltFactor?: number;
  perspective?: number;
  hoverScale?: number;
  glare?: boolean;
  glareIntensity?: number;
  contentClassName?: string;
  innerClassName?: string;
  children?: React.ReactNode;
};

export function TiltCard({
  className,
  children,
  tiltFactor = 5,
  perspective = 900,
  hoverScale = 1.015,
  glare = true,
  glareIntensity = 0.009,
  style,
  contentClassName,
  innerClassName,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [{ x, y }, setTilt] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const node = cardRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((offsetY - centerY) / centerY) * -tiltFactor;
      const rotateY = ((offsetX - centerX) / centerX) * tiltFactor;

      setTilt({ x: rotateX, y: rotateY });
      setCursor({
        x: (offsetX / rect.width) * 100,
        y: (offsetY / rect.height) * 100,
      });
    },
    [tiltFactor]
  );

  const resetTilt = useCallback(() => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
    setCursor({ x: 50, y: 50 });
  }, []);

  const glareStyle = useMemo(() => {
    if (!glare) return undefined;

    return {
      background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(255,255,255,${isHovering ? glareIntensity : 0}) 0%, rgba(255,255,255,0) 100%)`,
    } as React.CSSProperties;
  }, [cursor, glare, glareIntensity, isHovering]);

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative h-full w-full", className)}
      style={{ perspective: `${perspective}px`, ...style }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      {...props}
    >
      <motion.div
        className={cn("relative h-full w-full rounded-3xl", contentClassName)}
        animate={{ rotateX: x, rotateY: y, scale: isHovering ? hoverScale : 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.7 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={cn(
            "relative z-10 h-full w-full rounded-[inherit] p-6",
            innerClassName
          )}
        >
          {children}
        </div>
        {glare && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={glareStyle}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
