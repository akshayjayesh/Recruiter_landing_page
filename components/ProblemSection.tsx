"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Clock, Sliders, HelpCircle, Layers } from "lucide-react";
import GlassCard from "./GlassCard";

export default function ProblemSection() {
  const problems = [
    {
      icon: FileText,
      title: "Manual JD Writing",
      desc: "Hours wasted crafting repetitive descriptions from client requirements, delaying role kickoff.",
    },
    {
      icon: Clock,
      title: "CV Screening",
      desc: "Manually sifting through hundreds of resumes leading to fatigue, delays, and missed talent.",
    },
    {
      icon: Sliders,
      title: "No Weighted Ranking",
      desc: "Subjective, inconsistent screening decisions based on keyword matching rather than skills.",
    },
    {
      icon: HelpCircle,
      title: "Generic Questions",
      desc: "Standard, boilerplate interview templates that fail to test candidate-specific experience gaps.",
    },
    {
      icon: Layers,
      title: "Scattered Sheets",
      desc: "Hiring tracking scattered across sheets, emails, and external documents with zero audit trails.",
    },
  ];

  return (
    <section id="product" className="py-24 px-6 md:px-8 bg-muted/30 border-y border-border relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-[10px] uppercase tracking-widest"
          >
            [ The Recruitment Bottleneck ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-tight font-extrabold text-foreground uppercase tracking-wider"
          >
            Recruitment teams lose time between requirements, resumes, and decisions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground font-sans text-xs md:text-sm"
          >
            Legacy ATS systems act as databases. Kozker acts as an intelligent execution partner.
          </motion.p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <GlassCard
                key={prob.title}
                hoverEffect
                delay={idx * 0.1}
                className="flex flex-col justify-between h-56 min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-muted border border-border flex items-center justify-center rounded-sm">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                    {prob.title}
                  </h3>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
