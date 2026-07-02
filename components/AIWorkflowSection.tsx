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
      name: "Candidate_Score_Layer()",
      summary: "Semantic scoring calculations",
      desc: "Evaluating candidate experience vectors against the job's weighted skill matrix to generate an accurate candidate score.",
    },
    {
      code: "0x06",
      name: "Smart_Questions_Gen()",
      summary: "Interview script tailoring",
      desc: "Automatically drafting custom questions targeting the exact strengths and skill gaps identified during candidate scoring.",
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
              <div className="space-y-4 font-mono text-[10px] min-h-[250px] flex flex-col justify-center">
                
                {activeStep === 0 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                      <div className="text-primary uppercase tracking-widest text-[8px] mb-1.5 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</span> RAW_MANDATE</div>
                      <div className="text-neutral-400 text-[9px] italic">
                        "Looking for a Senior Go Engineer with Kubernetes and clean code architecture experience..."
                      </div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50" /></div>
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                      <div className="text-primary uppercase tracking-widest text-[8px] mb-1.5 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</span> NLP_ENTITY_EXTRACTION</div>
                      <div className="space-y-1">
                        <div className="text-[9px] text-white flex justify-between"><span className="text-neutral-500">Role:</span> Senior Go Engineer</div>
                        <div className="text-[9px] text-white flex justify-between"><span className="text-neutral-500">Stack:</span> Go, Kubernetes</div>
                      </div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50" /></div>
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                      <div className="text-[#16A34A] uppercase tracking-widest text-[8px] mb-1.5 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A] font-bold">3</span> STRUCTURED_JSON_READY</div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                      <div className="text-primary uppercase tracking-widest text-[8px] mb-1.5 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</span> INGEST_STRUCTURED_DATA</div>
                      <div className="text-neutral-400 text-[9px]">Loading parameter tokens...</div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50 animate-bounce" /></div>
                    <div className="bg-primary/5 border border-primary/20 p-3 rounded-sm">
                      <div className="text-primary uppercase tracking-widest text-[8px] mb-1.5 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</span> MARKET_CROSS_REFERENCE</div>
                      <div className="text-[9px] text-neutral-300">Evaluating standard compensations and duties for 'Senior Go Engineer'...</div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50" /></div>
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                      <div className="text-[#16A34A] uppercase tracking-widest text-[8px] mb-1.5 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A] font-bold">3</span> DRAFT_JD_GENERATED</div>
                      <div className="space-y-2 mt-2">
                        <div className="h-1.5 bg-[#16A34A]/50 rounded-full w-full"></div>
                        <div className="h-1.5 bg-[#16A34A]/50 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                      <div className="text-primary uppercase tracking-widest text-[8px] mb-1.5 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</span> EXTRACT_CORE_SKILLS</div>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-0.5 bg-neutral-800 rounded-sm text-[9px]">Golang</span>
                        <span className="px-2 py-0.5 bg-neutral-800 rounded-sm text-[9px]">Kubernetes</span>
                        <span className="px-2 py-0.5 bg-neutral-800 rounded-sm text-[9px]">AWS</span>
                      </div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50" /></div>
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm space-y-2">
                      <div className="text-primary uppercase tracking-widest text-[8px] mb-1.5 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</span> ASSIGN_VECTOR_WEIGHTS</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-300">Golang</span>
                        <span className="text-primary font-bold">1.0 (Must Have)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-300">Kubernetes</span>
                        <span className="text-primary/70">0.8 (Preferred)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-300">AWS</span>
                        <span className="text-neutral-500">0.5 (Bonus)</span>
                      </div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50" /></div>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-sm">
                      <div className="text-yellow-500 uppercase tracking-widest text-[8px] flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold">3</span> RECRUITER_VERIFICATION_REQUIRED</div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[8px]">1</span>
                      <div className="text-primary uppercase tracking-widest text-[8px]">UPLOAD_CANDIDATE.PDF</div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50 animate-bounce" /></div>
                    <div className="bg-primary/5 border border-primary/20 p-3 rounded-sm flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[8px]">2</span>
                      <div className="text-primary uppercase tracking-widest text-[8px]">OCR_&_TEXT_NORMALIZATION</div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50" /></div>
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                      <div className="text-[#16A34A] uppercase tracking-widest text-[8px] mb-2 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A] font-bold">3</span> ENTITIES_EXTRACTED</div>
                      <div className="space-y-2 pl-6">
                        <div className="text-[10px] text-white border-l-2 border-[#16A34A]/50 pl-2">Experience: 5 years</div>
                        <div className="text-[10px] text-white border-l-2 border-[#16A34A]/50 pl-2">Education: BS Computer Science</div>
                        <div className="text-[10px] text-white border-l-2 border-[#16A34A]/50 pl-2">Skills: Go, Docker, K8s, GCP</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 4 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm flex justify-between items-center">
                      <div className="text-primary uppercase tracking-widest text-[8px] flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</span> LOAD_VECTORS</div>
                      <div className="text-[9px] text-neutral-500">Job_Vector vs Candidate_Vector</div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50" /></div>
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                      <div className="text-primary uppercase tracking-widest text-[8px] mb-1.5 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</span> COMPUTE_SEMANTIC_DISTANCE</div>
                      <div className="h-1.5 bg-neutral-800 rounded-full w-full overflow-hidden mt-2 relative">
                        <motion.div initial={{ width: "0%" }} animate={{ width: "98%" }} transition={{ duration: 1 }} className="absolute top-0 left-0 h-full bg-primary"></motion.div>
                      </div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50" /></div>
                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-sm flex flex-col items-center text-center space-y-2">
                      <div className="text-[#16A34A] uppercase tracking-widest text-[8px] flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A] font-bold">3</span> FINAL_CANDIDATE_SCORE</div>
                      <div className="text-2xl text-white font-bold mt-1">98%</div>
                      <p className="text-neutral-500 text-[8px] uppercase tracking-wider">High Match Probability</p>
                    </div>
                  </motion.div>
                )}

                {activeStep === 5 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm">
                      <div className="text-primary uppercase tracking-widest text-[8px] mb-1.5 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</span> IDENTIFY_SKILL_GAPS</div>
                      <div className="text-[9px] text-neutral-400">Candidate scored low on 'AWS deployment experience'</div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50" /></div>
                    <div className="bg-primary/5 border border-primary/20 p-3 rounded-sm flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[8px]">2</span>
                      <div className="text-primary uppercase tracking-widest text-[8px]">QUERY_LLM_FOR_TARGETED_QA</div>
                    </div>
                    <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary/50" /></div>
                    <div className="bg-[#1C1917]/50 border border-white/5 p-3 rounded-sm space-y-2">
                      <div className="text-[#16A34A] uppercase tracking-widest text-[8px] mb-2 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A] font-bold">3</span> TAILORED_SCRIPT_OUTPUT</div>
                      <div className="text-[10px] text-neutral-300 bg-black/40 p-2.5 rounded border border-white/5">
                        <span className="text-primary mr-1">Q1.</span> How would you adapt your Kubernetes experience to an AWS environment using EKS?
                      </div>
                    </div>
                  </motion.div>
                )}
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
