import React from "react";

interface KozkerLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function KozkerLogo({ className = "w-8 h-8", style }: KozkerLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left stem with slanted bottom */}
      <polygon points="5,15 20,15 20,70 5,85" fill="#FF6B00" />
      
      {/* Inner Chevron */}
      <polygon points="20,50 55,15 70,15 35,50 70,85 55,85" fill="#FF6B00" />
      
      {/* Outer Chevron */}
      <polygon points="45,50 80,15 95,15 60,50 95,85 80,85" fill="#FF6B00" />
    </svg>
  );
}
