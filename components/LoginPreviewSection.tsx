"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import KozkerLogo from "./KozkerLogo";

export default function LoginPreviewSection() {
  return (
    <section id="login-preview" className="relative py-24 px-6 md:px-8 overflow-hidden bg-[#0C0A09]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-tight font-extrabold text-white mb-4"
          >
            Secure, Enterprise-Grade Access
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 font-sans max-w-2xl mx-auto"
          >
            Your recruitment data is sensitive. The platform enforces strict role-based access controls and encrypted authentication.
          </motion.p>
        </div>

        {/* Login UI Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch min-h-[600px]"
        >
          {/* Left Branding Side */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-between relative bg-[#12100E] border-r border-white/5 overflow-hidden">
            {/* Center orange glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 flex items-center gap-3">
              <KozkerLogo className="w-5 h-5" />
              <span className="font-sans font-bold tracking-widest text-[11px] text-white uppercase">KOZKER RECRUITER AI</span>
            </div>

            <div className="relative z-10 max-w-sm mt-8 md:mt-0">
              <h3 className="text-3xl md:text-[34px] font-sans font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Enterprise ATS powered by Machine Intelligence.
              </h3>
              <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                Accelerate client recruitment, auto-generate job descriptions,
                match talent using high-fidelity skills alignment, and automate
                personalized candidate review questions.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-12 md:mt-0 text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
              <span>PLATFORM: v1.0.8-PRO</span>
              <span>DESIGN: LINEAR INSPIRATION</span>
            </div>
          </div>

          {/* Right Login Form Side */}
          <div className="w-full md:w-1/2 p-10 md:p-16 flex items-center justify-center bg-[#0C0C0C]">
            <div className="w-full max-w-[320px] space-y-8 animate-in fade-in duration-500">
              <div className="space-y-2 text-left">
                <h2 className="text-[22px] font-sans font-semibold text-white tracking-tight">
                  Welcome back
                </h2>
                <p className="text-[#888888] text-[11px] font-sans">
                  Log in to manage requirements & pipelines
                </p>
              </div>

              <div className="space-y-5 font-sans text-[11px]">
                <div className="space-y-2">
                  <label className="text-[#888888] font-bold uppercase tracking-wider block">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#555555]" />
                    <input
                      type="email"
                      placeholder="recruiter@kozker.ai"
                      readOnly
                      className="w-full pl-9 pr-3 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm text-[#CCCCCC] placeholder:text-[#555555] transition-all focus:border-primary outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[#888888] font-bold uppercase tracking-wider block">Password</label>
                    <span className="text-[#FF6B00] hover:text-[#E56000] transition-colors cursor-pointer text-[10px]">
                      Forgot?
                    </span>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#555555]" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      readOnly
                      className="w-full pl-9 pr-10 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm text-[#CCCCCC] placeholder:text-[#555555] transition-all focus:border-primary outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-2.5 text-[#555555] hover:text-[#888888] cursor-default pointer-events-none"
                    >
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-2.5 bg-[#FF6B00] hover:bg-[#E56000] text-white font-bold tracking-widest uppercase transition-colors rounded-sm cursor-default mt-2"
                >
                  LOG IN
                </button>
              </div>

              <div className="text-center font-sans text-[11px] pt-4">
                <span className="text-[#888888] hover:text-[#CCCCCC] transition-colors cursor-pointer underline underline-offset-4">
                  Need an account? Sign up
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
