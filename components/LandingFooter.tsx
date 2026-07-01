"use client";

import React from "react";
import Link from "next/link";
import KozkerLogo from "./KozkerLogo";

export default function LandingFooter() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#0C0A09] border-t border-white/5 py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-mono text-neutral-500 uppercase">
        
        {/* Brand Group */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 select-none group">
            <KozkerLogo className="w-5 h-5 transition-transform group-hover:scale-105" />
            <span className="font-tight font-extrabold text-[12px] tracking-wider text-white">KOZKER</span>
          </div>
          <span className="text-neutral-600 font-mono text-[9px]">v3.0.0-stable</span>
        </div>

        {/* Links Group */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#product"
            onClick={(e) => handleScrollTo(e, "product")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Product
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => handleScrollTo(e, "how-it-works")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            How It Works
          </a>
          <a href="#" className="hover:text-primary transition-colors cursor-pointer">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors cursor-pointer">
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <p className="text-neutral-650 text-[9px] text-center md:text-right">
          © {new Date().getFullYear()} Kozker Recruiter AI. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
