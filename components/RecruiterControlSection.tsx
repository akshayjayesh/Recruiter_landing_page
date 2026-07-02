"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, User, BrainCircuit } from "lucide-react";
import GlassCard from "./GlassCard";

export default function RecruiterControlSection() {
  const recruiterTasks = [
    "Approve and edit auto-generated Job Descriptions",
    "Customize and adjust skill vector weights",
    "Approve candidate matching and candidate scores",
    "Refine customized interview screening scripts",
    "Manage interviews, offers, and final hire approvals",
    "Own client relationships and candidate experiences",
  ];

  const aiTasks = [
    "Generate structured Job Descriptions from raw briefs",
    "Extract key skills and propose initial weights",
    "Parse resume PDFs and extract structured metadata",
    "Calculate semantic candidate scores (0-100)",
    "Draft personalized screening questions based on skill gaps",
    "Sync real-time page context to the Copilot assistant",
  ];

  return (
    <section className="py-24 px-6 md:px-8 bg-[#12100E] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-[10px] uppercase tracking-widest"
          >
            [ Collaborative Intelligence ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-tight font-extrabold text-white uppercase tracking-wider"
          >
            AI does the heavy lifting. Recruiters stay in control.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 font-sans text-xs md:text-sm"
          >
            Kozker Recruiter AI is designed as a human-in-the-loop system. We amplify recruiter capabilities, not replace human judgment.
          </motion.p>
        </div>

        {/* Split Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/15 border border-white/10 rounded-sm overflow-hidden">
          
          {/* Recruiter Decisions Panel */}
          <div className="p-8 md:p-12 bg-neutral-950 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-white/5 flex items-center justify-center">
                  <User className="w-5 h-5 text-neutral-350" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                    Recruiter Decisions
                  </h3>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                    human judgment & strategy
                  </span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs text-neutral-450 font-sans">
                {recruiterTasks.map((task) => (
                  <li key={task} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-350">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider border-t border-white/5 pt-4">
              [ STATUS: DECISION_MAKER_ACTIVE ]
            </div>
          </div>

          {/* AI Assistance Panel */}
          <div className="p-8 md:p-12 bg-primary/5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                    AI Assistance
                  </h3>
                  <span className="text-[9px] font-mono text-primary/70 uppercase tracking-widest">
                    machine parsing & calculations
                  </span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs text-neutral-450 font-sans">
                {aiTasks.map((task) => (
                  <li key={task} className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-350">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-[10px] font-mono text-primary/70 uppercase tracking-wider border-t border-primary/10 pt-4">
              [ MODULE: AUTOMATION_ENGINE_RUNNING ]
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
