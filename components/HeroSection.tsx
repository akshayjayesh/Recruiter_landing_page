"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, CheckCircle2, Shield, Eye, Lock, Mail, Users, Briefcase } from "lucide-react";
import GlassCard from "./GlassCard";

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
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
    <section className="relative pt-36 pb-24 px-6 md:px-8 overflow-hidden bg-background min-h-screen flex items-center">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#16A34A]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full z-10">
        
        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-mono text-[10px] uppercase tracking-wider">Enterprise Intelligence v3.0</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[54px] font-tight font-extrabold text-foreground tracking-tight leading-[1.1]"
            >
              AI Recruitment Operations, Built for <span className="bg-gradient-to-r from-primary to-[#ffab8b] bg-clip-text text-transparent">High-Speed Hiring</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed max-w-lg"
            >
              Kozker Recruiter AI helps recruitment teams convert client requirements into job openings, parse candidates, rank talent using weighted skills, generate screening questions, and track hiring stages from one intelligent workspace.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => handleScrollTo("cta")}
              className="px-6 py-3.5 bg-primary hover:bg-primary/95 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
            >
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo("how-it-works")}
              className="px-6 py-3.5 border border-border hover:bg-muted text-foreground font-mono text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
            >
              <Play className="w-3.5 h-3.5 text-primary fill-primary" />
              See Workflow
            </button>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-8 border-t border-border pt-8 max-w-md"
          >
            <div>
              <div className="text-2xl font-tight font-extrabold text-foreground">4.8k+</div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">Active Placements</div>
            </div>
            <div>
              <div className="text-2xl font-tight font-extrabold text-foreground">84%</div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">Efficiency Gain</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Mockup Panel */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Preview Card */}
            <div className="relative border border-border rounded-sm bg-card/70 backdrop-blur-lg overflow-hidden shadow-2xl p-4">
              
              {/* Window Controls */}
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-muted"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-muted"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-muted"></span>
                </div>
                <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">
                  command_center_v3.0.sys
                </div>
                <div className="w-10"></div>
              </div>

              {/* Status Header Block */}
              <div className="mb-4 bg-primary/10 border border-primary/20 p-2.5 rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">
                    AI Pipeline Active
                  </span>
                </div>
                <span className="text-[9px] font-mono text-muted-foreground bg-muted border border-border px-2 py-0.5 rounded-sm">
                  RUNNING_ANALYSIS
                </span>
              </div>

              {/* Stat Boxes */}
              <div className="grid grid-cols-3 gap-3 mb-4 text-[10px] font-mono">
                <div className="p-2 border border-border bg-muted/50 rounded-sm">
                  <div className="text-muted-foreground uppercase tracking-wider text-[8px]">Active Jobs</div>
                  <div className="text-foreground font-bold mt-1 text-xs">12 Open</div>
                </div>
                <div className="p-2 border border-border bg-muted/50 rounded-sm">
                  <div className="text-muted-foreground uppercase tracking-wider text-[8px]">Candidates Parsed</div>
                  <div className="text-foreground font-bold mt-1 text-xs">342 Profiles</div>
                </div>
                <div className="p-2 border border-border bg-muted/50 rounded-sm">
                  <div className="text-muted-foreground uppercase tracking-wider text-[8px]">Skills Matched</div>
                  <div className="text-foreground font-bold mt-1 text-xs">96.8% Acc.</div>
                </div>
              </div>

              {/* Candidate Pipeline Rows */}
              <div className="space-y-2">
                <div className="p-2.5 bg-muted/40 border border-border hover:border-primary/20 transition-all rounded-sm flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5.5 h-5.5 bg-muted border border-border flex items-center justify-center text-[9px] font-bold text-foreground font-mono">
                      AM
                    </span>
                    <div>
                      <div className="text-foreground font-semibold text-[11px]">Alex Mercer</div>
                      <div className="text-[9px] text-muted-foreground font-mono mt-0.5 flex gap-2">
                        <span>Lead Go Developer</span>
                        <span className="text-[#16A34A] bg-[#16A34A]/10 px-1 rounded-sm">Screening</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#16A34A] font-mono font-bold text-[11px]">92% Match</div>
                    <div className="text-[8px] font-mono text-muted-foreground mt-0.5">5/5 Skills Checked</div>
                  </div>
                </div>

                <div className="p-2.5 bg-muted/40 border border-border hover:border-primary/20 transition-all rounded-sm flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5.5 h-5.5 bg-muted border border-border flex items-center justify-center text-[9px] font-bold text-foreground font-mono">
                      SC
                    </span>
                    <div>
                      <div className="text-foreground font-semibold text-[11px]">Sarah Chen</div>
                      <div className="text-[9px] text-muted-foreground font-mono mt-0.5 flex gap-2">
                        <span>Senior React Architect</span>
                        <span className="text-primary bg-primary/10 px-1 rounded-sm">Technical</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-mono font-bold text-[11px]">84% Match</div>
                    <div className="text-[8px] font-mono text-muted-foreground mt-0.5">4/5 Skills Checked</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Small Mockup of Login Page */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 w-60 bg-background/95 border border-primary/20 rounded-sm p-4.5 glow-orange shadow-2xl hidden md:block z-30"
            >
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-primary font-mono text-[9px] font-bold uppercase tracking-wider">
                  Kozker Auth
                </span>
                <span className="text-[8px] font-mono text-muted-foreground flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5 text-primary" /> SECURE
                </span>
              </div>

              <div className="space-y-1 mb-3">
                <h3 className="text-foreground font-semibold text-[11px] font-tight tracking-tight">Welcome back</h3>
                <p className="text-muted-foreground text-[8px]">Log in to manage requirements</p>
              </div>

              <div className="space-y-2.5">
                <div>
                  <div className="text-[8px] font-mono text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                    Email Address
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-2 top-1.5 h-3 w-3 text-muted-foreground" />
                    <div className="w-full bg-muted border border-border rounded-sm pl-7 py-1.5 text-[9px] text-foreground">
                      recruiter@kozker.ai
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[8px] font-mono text-muted-foreground font-semibold uppercase tracking-wider block">Password</span>
                    <span className="text-[8px] text-primary">Forgot?</span>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-2 top-1.5 h-3 w-3 text-muted-foreground" />
                    <div className="w-full bg-muted border border-border rounded-sm pl-7 pr-7 py-1.5 text-[9px] text-foreground">
                      ••••••••
                    </div>
                    <Eye className="absolute right-2 top-1.5 h-3 w-3 text-muted-foreground" />
                  </div>
                </div>

                <div className="w-full bg-primary text-white font-medium text-[9px] tracking-wider uppercase flex items-center justify-center py-2 rounded-sm select-none">
                  Log In
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
