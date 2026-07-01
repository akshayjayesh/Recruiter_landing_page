"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta" className="py-32 px-6 md:px-8 relative overflow-hidden bg-[#12100E] border-t border-white/5 text-center">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        
        {/* Glow Sparkle decoration */}
        <div className="flex justify-center">
          <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-sm">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-tight font-extrabold text-white tracking-tight leading-tight uppercase"
          >
            Ready to simplify recruitment operations with AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 font-sans text-xs md:text-sm max-w-xl mx-auto leading-relaxed"
          >
            Move from scattered hiring workflows to one AI-assisted command center for jobs, candidates, screening, and stage tracking. No credit card required.
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => alert("Demo request captured. Our sales team will follow up via email.")}
            className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary/95 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            Request Demo
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/10 hover:bg-white/5 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            Login to Recruiter App
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
