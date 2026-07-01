"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = false,
  glowEffect = false,
  delay = 0,
}: GlassCardProps) {
  const baseStyle = "relative overflow-hidden bg-[#1C1917]/60 backdrop-blur-md border border-white/5 rounded-sm p-6";
  const hoverStyle = hoverEffect ? "hover:border-primary/30 hover:bg-[#1C1917]/70 transition-all duration-300" : "";
  const glowStyle = glowEffect ? "shadow-[0_0_30px_rgba(255,110,48,0.05)] border-primary/10" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`${baseStyle} ${hoverStyle} ${glowStyle} ${className}`}
    >
      {children}
    </motion.div>
  );
}
