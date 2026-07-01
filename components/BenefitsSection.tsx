"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Eye, Zap, Scale, Command, History, MessageSquare, ListTodo } from "lucide-react";
import GlassCard from "./GlassCard";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: UserCheck,
      title: "Human-in-the-Loop AI",
      desc: "Maintain absolute control. AI drafts and suggests, but recruiters approve skill weights, shortlist candidates, and refine interview questions.",
    },
    {
      icon: Eye,
      title: "Transparent Fuzzy Scores",
      desc: "No black boxes. Detailed text explanations break down exact candidate strengths, skill gaps, and match justifications.",
    },
    {
      icon: Zap,
      title: "Rapid Shortlisting",
      desc: "Drastically reduce time-to-hire. Go from receiving client mandates to viewing candidate match scoring within minutes.",
    },
    {
      icon: Scale,
      title: "Consistent Evaluations",
      desc: "Remove human bias and inconsistency. Grade all candidates against the exact same approved weighted skill criteria.",
    },
    {
      icon: Command,
      title: "Centralized Workspace",
      desc: "Keep operations organized. Manage requirements, open positions, candidate parsing, and communication templates from one hub.",
    },
    {
      icon: History,
      title: "Application History",
      desc: "Track candidate interactions across multiple roles over time to prevent recruiter duplication and duplicate outreach.",
    },
    {
      icon: MessageSquare,
      title: "AI Copilot Sidecar",
      desc: "An intelligent context-aware chat assistant that automatically syncs with your active dashboard screen for page-level helpers.",
    },
    {
      icon: ListTodo,
      title: "Activity Timeline",
      desc: "Keep records of all client requests, candidate status changes, and AI generations on a clean system audit timeline.",
    },
  ];

  return (
    <section id="benefits" className="py-24 px-6 md:px-8 bg-[#0C0A09] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-[10px] uppercase tracking-widest"
          >
            [ Operational Advantage ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-tight font-extrabold text-white uppercase tracking-wider"
          >
            Built for recruiters who need speed, control, and clarity.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 font-sans text-xs md:text-sm"
          >
            Engineered from the ground up for elite executive search firms and internal high-growth hiring teams.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <GlassCard
                key={benefit.title}
                hoverEffect
                delay={idx * 0.08}
                className="flex flex-col justify-between h-56 min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="w-9 h-9 bg-neutral-900 border border-white/5 flex items-center justify-center rounded-sm">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">
                    {benefit.desc}
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
