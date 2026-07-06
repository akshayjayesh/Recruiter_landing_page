"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlusCircle, FileText, CheckSquare, Upload, CheckCircle } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: PlusCircle,
      title: "Add Mandate",
      desc: "Recruiter registers a client and inputs raw text or structured requirements.",
    },
    {
      num: "02",
      icon: FileText,
      title: "AI Job Generation",
      desc: "AI automatically drafts a comprehensive job description based on the mandate.",
    },
    {
      num: "03",
      icon: CheckSquare,
      title: "Approve Skills",
      desc: "AI extracts skills and weights them. Recruiter approves or edits weights.",
    },
    {
      num: "04",
      icon: Upload,
      title: "Ingest & Rank",
      desc: "Upload resumes in bulk. AI parses text and scores candidates from 0 to 100.",
    },
    {
      num: "05",
      icon: CheckCircle,
      title: "Vet & Track",
      desc: "Review match reasons, generate screening questions, and manage stage tracks.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 md:px-8 bg-muted/30 border-y border-border overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-[10px] uppercase tracking-widest"
          >
            [ The Operational Flow ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-tight font-extrabold text-foreground uppercase tracking-wider"
          >
            From requirement to ranked candidates in five steps.
          </motion.h2>
        </div>

        {/* Timeline Component */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-border z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary/40 origin-left"
            ></motion.div>
          </div>

          {/* Mobile Connecting Line */}
          <div className="md:hidden absolute left-6 top-6 bottom-6 w-0.5 bg-border z-0">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-primary/40 origin-top"
            ></motion.div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-0"
                >
                  {/* Step Number / Icon Container */}
                  <div className="relative md:mb-6 flex-shrink-0">
                    <div className="w-12 h-12 bg-muted border border-border hover:border-primary/55 rounded-sm flex items-center justify-center text-foreground transition-all duration-300">
                      <span className="font-mono text-xs font-bold text-muted-foreground group-hover:text-primary">
                        {step.num}
                      </span>
                    </div>
                    {/* Floating smaller active icon badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary border border-background rounded-sm flex items-center justify-center">
                      <Icon className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>

                  {/* Step Copy */}
                  <div className="space-y-2">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-[11px] leading-relaxed max-w-[200px] md:mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
