"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import KozkerLogo from "./KozkerLogo";
import { ThemeToggle } from "./ThemeToggle";

export default function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
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

  const navItems = [
    { label: "Product", id: "product" },
    { label: "How It Works", id: "how-it-works" },
    { label: "AI Workflow", id: "ai-workflow" },
    { label: "Benefits", id: "benefits" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="#" 
          className="flex items-center gap-2.5 group"
          onClick={(e) => handleScrollTo(e, 'hero')}
        >
          <KozkerLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
          <span className="font-bold text-xl tracking-tight text-foreground">
            Kozker Recruiter <span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#cta"
            onClick={(e) => handleScrollTo(e, "cta")}
            className="hidden md:flex h-10 px-6 items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border px-6 py-6 space-y-6 flex flex-col animate-in slide-in-from-top duration-250">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className="text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-primary py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="w-full h-px bg-border"></div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-start">
              <ThemeToggle />
            </div>
            <a
              href="#cta"
              onClick={(e) => handleScrollTo(e, "cta")}
              className="flex h-12 w-full items-center justify-center rounded-lg bg-primary hover:bg-primary/95 text-white font-medium transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
