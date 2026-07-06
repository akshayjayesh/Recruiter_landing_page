"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, SlidersHorizontal, UploadCloud, Binary, HelpCircle, Activity } from "lucide-react";
import GlassCard from "./GlassCard";

export default function ProductPromiseSection() {
  const promises = [
    {
      icon: Sparkles,
      tag: "[ MODULE_01 ]",
      title: "AI Job Description Generation",
      desc: "Convert raw client requirements into professional, structured job description drafts in seconds. Customize tone or senior focus with simple text prompts.",
    },
    {
      icon: SlidersHorizontal,
      tag: "[ MODULE_02 ]",
      title: "Weighted Skills Approval",
      desc: "AI extracts top core skills (hard, soft, and values) directly from hiring mandates. Recruiters approve or edit the skill weights before matching.",
    },
    {
      icon: UploadCloud,
      tag: "[ MODULE_03 ]",
      title: "Resume Ingestion & Parsing",
      desc: "Seamlessly ingest candidates via PDF, DOCX, or bulk CSV. Our parsing pipeline extracts structured metadata and work history instantly.",
    },
    {
      icon: Binary,
      tag: "[ MODULE_04 ]",
      title: "Candidate Score Matching",
      desc: "Rank candidates using a semantic candidate score (0-100). AI explains candidate fit, highlights strengths, and flags skill gaps relative to the job requirements.",
    },
    {
      icon: HelpCircle,
      tag: "[ MODULE_05 ]",
      title: "Personalized Screening Questions",
      desc: "AI automatically drafts candidate-specific interview questions targeting identified skill gaps. Recruiters review and refine questions directly.",
    },
    {
      icon: Activity,
      tag: "[ MODULE_06 ]",
      title: "Stage Tracking & Activity Logs",
      desc: "Manage pipeline flows from screening to final offer. View full activity audit trails for every requirement, client, and candidate application.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-8 bg-background relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-[10px] uppercase tracking-widest"
          >
            [ Core Capabilities ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-tight font-extrabold text-foreground uppercase tracking-wider"
          >
            One command center for AI-assisted hiring operations.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground font-sans text-xs md:text-sm"
          >
            Empower your recruitment team with deep automations built on recruiter-approved models.
          </motion.p>
        </div>

        {/* 6-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((promise, idx) => {
            const Icon = promise.icon;
            // The first module is styled larger (col-span-2) if on large screen to create a Bento Grid effect
            const isFirst = idx === 0;
            return (
              <GlassCard
                key={promise.title}
                hoverEffect
                delay={idx * 0.08}
                className={`flex flex-col justify-between ${
                  isFirst ? "lg:col-span-2 bg-gradient-to-br from-primary/5 via-transparent to-transparent border-primary/10" : ""
                }`}
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-primary text-[10px] uppercase tracking-widest">
                      {promise.tag}
                    </span>
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                      {promise.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {promise.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
