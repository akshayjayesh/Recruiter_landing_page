"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Cpu, ChevronRight, Terminal } from "lucide-react";
import GlassCard from "./GlassCard";

export default function AIWorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      code: "0x01",
      name: "Requirement_Input()",
      summary: "Client mandate ingestion",
      desc: "Parsing raw, free-text or structured client briefs into structured data tokens (experience stack, tech skills, soft parameters).",
    },
    {
      code: "0x02",
      name: "AI_Job_Generator(v3)",
      summary: "Automated JD drafting",
      desc: "Cross-referencing industry benchmarks for compensation, roles, and competencies to auto-generate a professional JD draft.",
    },
    {
      code: "0x03",
      name: "Weighted_Skills_Vector()",
      summary: "Skill matrix construction",
      desc: "Extracting core skills and assigning weights (must-have vs. nice-to-have). Recruiter reviews and adjusts before locking.",
    },
    {
      code: "0x04",
      name: "Resume_Parse_Engine()",
      summary: "Candidate text extraction",
      desc: "Extracting unstructured resume PDF/DOCX content, structuring work histories, skills, and credentials.",
    },
    {
      code: "0x05",
      name: "Fuzzy_Match_Layer()",
      summary: "Semantic scoring calculations",
      desc: "Evaluating candidate experience vectors against the job's weighted skill matrix, accounting for synonyms and adjacent tech stacks.",
    },
    {
      code: "0x06",
      name: "Smart_Questions_Gen()",
      summary: "Interview script tailoring",
      desc: "Automatically drafting custom questions targeting the exact strengths and skill gaps identified during fuzzy matching.",
    },
  ];

  const badges = [
    "Next.js Frontend",
    "FastAPI Backend",
    "Supabase Database",
    "n8n Workflow Automation",
    "AI Copilot Context",
    "Resume Parsing",
    "Realtime Status Updates",
  ];

  return (
    <section id="ai-workflow" className="py-24 px-6 md:px-8 bg-[#0C0A09] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-[10px] uppercase tracking-widest"
          >
            [ Machine Intelligence Pipeline ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-tight font-extrabold text-white uppercase tracking-wider"
          >
            AI assists every critical recruitment step — with recruiter approval built in.
          </motion.h2>
        </div>

        {/* Interactive Diagram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Logic Steps */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-primary" /> System Execution Log
            </h3>
            <div className="space-y-2">
              {workflowSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.name}
                    onClick={() => setActiveStep(idx)}
                    className={`p-3.5 border rounded-sm transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                      isActive
                        ? "bg-[#1C1917]/70 border-primary/45"
                        : "bg-[#1C1917]/20 border-white/5 hover:border-white/10"
                    }`}
                  >
                    <span className={`font-mono text-xs ${isActive ? "text-primary font-bold" : "text-neutral-500"}`}>
                      {step.code}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs font-semibold ${isActive ? "text-white" : "text-neutral-300"}`}>
                          {step.name}
                        </span>
                        {isActive && <ChevronRight className="w-3 h-3 text-primary animate-ping" />}
                      </div>
                      <p className="text-[10px] font-mono text-primary/70 uppercase tracking-wider">{step.summary}</p>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-neutral-400 text-xs leading-relaxed pt-1.5"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Flow Diagram Mockup */}
          <div className="lg:col-span-6">
            <GlassCard className="bg-neutral-950/80 border-white/5 p-6" glowEffect>
              
              {/* Header Info */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  Workflow_Visualization.sys
                </span>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/60"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]/60"></span>
                </div>
              </div>

              {/* Data Node Flow */}
              <div className="space-y-4 font-mono text-[10px]">
                
                {/* Input Card */}
                <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                  <div className="text-primary uppercase tracking-widest text-[8px] mb-1.5">INPUT_MANDATE</div>
                  <div className="text-neutral-400 text-[9px]">
                    "Looking for a Senior Go Engineer with Kubernetes and clean code architecture experience..."
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
                </div>

                {/* AI Draft Card */}
                <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                  <div className="text-[#16A34A] uppercase tracking-widest text-[8px] mb-1.5">OUTPUT_AI_JOB_DRAFT</div>
                  <div className="space-y-1">
                    <div className="h-1 bg-[#16A34A]/25 rounded-full w-full"></div>
                    <div className="h-1 bg-[#16A34A]/25 rounded-full w-4/5"></div>
                    <div className="h-1 bg-[#16A34A]/25 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-primary" />
                </div>

                {/* Match Layer Card */}
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-sm flex flex-col items-center text-center space-y-3">
                  <div className="w-7 h-7 bg-primary/10 rounded-sm flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs">FUZZY_MATCH_ENGINE</div>
                    <p className="text-neutral-500 text-[8px] uppercase tracking-wider mt-0.5">Vector Similarity Layer</p>
                  </div>
                  <div className="flex gap-4 justify-around w-full border-t border-white/5 pt-3">
                    <div>
                      <div className="text-[8px] text-neutral-500 uppercase tracking-widest">Candidate_V</div>
                      <div className="text-xs text-white font-bold mt-0.5">0.985</div>
                    </div>
                    <div>
                      <div className="text-[8px] text-neutral-500 uppercase tracking-widest">Candidate_A</div>
                      <div className="text-xs text-white font-bold mt-0.5">0.842</div>
                    </div>
                    <div>
                      <div className="text-[8px] text-neutral-500 uppercase tracking-widest">Candidate_S</div>
                      <div className="text-xs text-white font-bold mt-0.5">0.760</div>
                    </div>
                  </div>
                </div>

              </div>
            </GlassCard>
          </div>

        </div>

        {/* Technical Badges Banner */}
        <div className="border-t border-white/5 pt-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 bg-neutral-900 border border-white/5 text-neutral-400 font-mono text-[9px] uppercase tracking-wider rounded-sm select-none"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
