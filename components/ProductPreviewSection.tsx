"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Users, Briefcase, BarChart3, CheckSquare, Search, Sparkles } from "lucide-react";
import GlassCard from "./GlassCard";

export default function ProductPreviewSection() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const previews = [
    {
      id: "dashboard",
      label: "Operations Dashboard",
      icon: LayoutDashboard,
      title: "Recruitment Operations Command Center",
      desc: "Get an overview of active open jobs, candidate sourcing velocity, and pending reviews. Monitor pipeline health and pending AI-driven tasks from a single page.",
      mockup: (
        <div className="bg-muted border border-border rounded-sm p-4 space-y-4 font-mono text-[10px]">
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span className="text-foreground font-bold text-xs uppercase tracking-wider">Metrics Console</span>
            <span className="text-muted-foreground text-[8px]">REFRESH_STABLE</span>
          </div>
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-muted-foreground">
            <div className="bg-card p-2.5 border border-border rounded-sm">
              <span className="text-[8px] text-muted-foreground block uppercase">Client Mandates</span>
              <span className="text-foreground font-bold text-sm block mt-1">24 Active</span>
            </div>
            <div className="bg-card p-2.5 border border-border rounded-sm">
              <span className="text-[8px] text-muted-foreground block uppercase">Open Job Drafts</span>
              <span className="text-primary font-bold text-sm block mt-1">8 Pending</span>
            </div>
            <div className="bg-card p-2.5 border border-border rounded-sm">
              <span className="text-[8px] text-muted-foreground block uppercase">Candidates Ranked</span>
              <span className="text-foreground font-bold text-sm block mt-1">1,245 Profiles</span>
            </div>
            <div className="bg-card p-2.5 border border-border rounded-sm">
              <span className="text-[8px] text-muted-foreground block uppercase">Matching Acc.</span>
              <span className="text-[#16A34A] font-bold text-sm block mt-1">98.2%</span>
            </div>
          </div>
          {/* Active Job list mock */}
          <div className="space-y-1.5 pt-2">
            <span className="text-[9px] text-muted-foreground uppercase block tracking-wider">Recent Operational Events</span>
            <div className="p-2 bg-card/60 border border-border rounded-sm flex justify-between text-muted-foreground">
              <span>[12:14:02] Mandate generated: Sr. Go Engineer</span>
              <span className="text-primary">Skills Extracted</span>
            </div>
            <div className="p-2 bg-card/60 border border-border rounded-sm flex justify-between text-muted-foreground">
              <span>[11:58:30] Candidates ranked for UI Designer</span>
              <span className="text-[#16A34A]">Matching Done</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "pool",
      label: "Candidate Pool",
      icon: Users,
      title: "Talent Sourcing Pool",
      desc: "Ingest, parse, and browse your global candidate profiles. Automatically parse resumes and search through candidates with candidate score matching.",
      mockup: (
        <div className="bg-muted border border-border rounded-sm p-4 space-y-3 text-[10px]">
          <div className="flex gap-2 items-center bg-card border border-border px-2.5 py-1.5 rounded-sm">
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-muted-foreground font-mono text-[9px]">Candidate score query: "Go developer with kubernetes"</span>
          </div>
          {/* Candidate list table preview */}
          <div className="space-y-2 font-mono">
            <div className="flex justify-between items-center p-2.5 bg-card/60 border border-border rounded-sm">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-muted rounded-sm flex items-center justify-center text-[9px] text-foreground">AM</span>
                <div>
                  <div className="text-foreground text-[11px] font-semibold">Alex Mercer</div>
                  <div className="text-[8px] text-muted-foreground mt-0.5">go, docker, kubernetes, postgres</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[#16A34A] font-bold">92% Match</span>
                <div className="text-[8px] text-muted-foreground mt-0.5">Exp: 6 Years</div>
              </div>
            </div>

            <div className="flex justify-between items-center p-2.5 bg-card/60 border border-border rounded-sm">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-muted rounded-sm flex items-center justify-center text-[9px] text-foreground">JC</span>
                <div>
                  <div className="text-foreground text-[11px] font-semibold">John Carter</div>
                  <div className="text-[8px] text-muted-foreground mt-0.5">go, python, aws, terraform</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[#16A34A] font-bold">88% Match</span>
                <div className="text-[8px] text-muted-foreground mt-0.5">Exp: 5 Years</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "catalog",
      label: "Job Catalog",
      icon: Briefcase,
      title: "Job Catalog Workspace",
      desc: "Manage, review, and group job openings by clients. Monitor publishing status (Draft, Published, Review Ready) and quickly edit AI-generated descriptions.",
      mockup: (
        <div className="bg-muted border border-border rounded-sm p-4 space-y-4 text-[10px]">
          <div className="flex justify-between items-center">
            <span className="font-mono text-foreground font-semibold">Active Catalog</span>
            <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary text-[8px] font-mono rounded-sm">
              JOBS_CATALOG_SYNCED
            </span>
          </div>
          <div className="space-y-2 font-mono">
            <div className="p-3 bg-card/60 border border-border rounded-sm space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-bold text-[11px]">Senior backend Go Engineer</span>
                <span className="text-[8px] bg-muted px-1 py-0.2 rounded-sm text-muted-foreground border border-border">DRAFT</span>
              </div>
              <div className="flex justify-between text-[9px] text-muted-foreground">
                <span>Client: Acme Corp</span>
                <span>Skills: Go, Kubernetes, REST APIs</span>
              </div>
              <div className="h-1 bg-border w-full rounded-sm overflow-hidden">
                <div className="h-full bg-primary w-2/3"></div>
              </div>
            </div>

            <div className="p-3 bg-card/60 border border-border rounded-sm space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-bold text-[11px]">Staff Cloud Infrastructure Architect</span>
                <span className="text-[8px] bg-[#16A34A]/10 px-1 py-0.2 rounded-sm text-[#16A34A]">PUBLISHED</span>
              </div>
              <div className="flex justify-between text-[9px] text-muted-foreground">
                <span>Client: Cyberdyne Systems</span>
                <span>Skills: AWS, Terraform, Python</span>
              </div>
              <div className="h-1 bg-border w-full rounded-sm overflow-hidden">
                <div className="h-full bg-[#16A34A] w-full"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "stages",
      label: "Stage Monitoring",
      icon: CheckSquare,
      title: "Stage Tracking & Review",
      desc: "Kanban pipeline visualization of candidates grouped by active hiring phases. Easily transition candidates between screening, technical evaluation, and final offers.",
      mockup: (
        <div className="bg-muted border border-border rounded-sm p-4 space-y-3 text-[10px]">
          <div className="grid grid-cols-3 gap-2 font-mono text-[9px]">
            {/* Column 1 */}
            <div className="space-y-2">
              <span className="text-muted-foreground uppercase block tracking-wider font-bold">Screening (2)</span>
              <div className="p-2 bg-card/80 border border-border rounded-sm space-y-1">
                <div className="text-foreground text-[10px] font-semibold truncate">Alex Mercer</div>
                <div className="text-[#16A34A] text-[8px] font-bold">Score: 92%</div>
              </div>
              <div className="p-2 bg-card/80 border border-border rounded-sm space-y-1">
                <div className="text-foreground text-[10px] font-semibold truncate">John Carter</div>
                <div className="text-[#16A34A] text-[8px] font-bold">Score: 88%</div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="space-y-2 border-l border-border pl-2">
              <span className="text-muted-foreground uppercase block tracking-wider font-bold">Technical (1)</span>
              <div className="p-2 bg-card/80 border border-border rounded-sm space-y-1">
                <div className="text-foreground text-[10px] font-semibold truncate">Sarah Chen</div>
                <div className="text-primary text-[8px] font-bold">Score: 84%</div>
              </div>
            </div>
            {/* Column 3 */}
            <div className="space-y-2 border-l border-border pl-2">
              <span className="text-muted-foreground uppercase block tracking-wider font-bold">Final (1)</span>
              <div className="p-2 bg-card/80 border border-primary/20 bg-primary/5 rounded-sm space-y-1">
                <div className="text-foreground text-[10px] font-semibold truncate">Jane Smith</div>
                <div className="text-[#16A34A] text-[8px] font-bold">Score: 95%</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const activeData = previews.find((p) => p.id === activeTab) || previews[0];

  return (
    <section className="py-24 px-6 md:px-8 bg-muted/30 border-y border-border relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-[10px] uppercase tracking-widest"
          >
            [ Interactive Walkthrough ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-tight font-extrabold text-foreground uppercase tracking-wider"
          >
            Inside the Platform
          </motion.h2>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 justify-center border-b border-border pb-6">
          {previews.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-primary border-primary text-white"
                    : "bg-muted/50 border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Preview Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[350px]">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-5.5 h-5.5 bg-primary/10 rounded-sm flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </span>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                {activeData.title}
              </h3>
            </div>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-sans">
              {activeData.desc}
            </p>
          </div>

          {/* Right Visual Mockup with Tab Switch Fade */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative bg-card border border-border rounded-sm p-4.5 glow-orange"
              >
                {/* Browser Frame Accent */}
                <div className="flex justify-between items-center border-b border-border pb-3 mb-4">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted"></span>
                    <span className="w-2 h-2 rounded-full bg-muted"></span>
                    <span className="w-2 h-2 rounded-full bg-muted"></span>
                  </div>
                  <span className="font-mono text-[8px] text-muted-foreground uppercase tracking-widest">
                    kozker_recruiter_preview.log
                  </span>
                  <div className="w-6"></div>
                </div>

                {activeData.mockup}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
