"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Code,
  Trophy,
  Layers,
  CheckCircle2,
  Globe,
  Flame,
  Zap,
  ShieldCheck,
  ExternalLink,
  Calendar,
  MapPin,
  BookOpen,
} from "lucide-react";
import { FLAGSHIP_CONFERENCES, ConferenceItem } from "@/data/conferencesData";

interface TabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  ctaText: string;
  ctaHref: string;
  themeColor: string;
  gradient: string;
  accentGlow: string;
  statLabel: string;
  statValue: string;
  statSubtitle: string;
}

const GENERAL_TABS: TabItem[] = [
  {
    id: "hackathons",
    label: "HackOverflow & Sprints",
    icon: Trophy,
    badge: "36-Hour Hackathon",
    title: "National Level Hackathons & Prototyping Sprints",
    description:
      "Intensive software architecture and AI sprint challenges with participants from 50+ institutes competing for cash prize pools, angel backing, and direct mentorship.",
    highlights: [
      "₹1,00,000+ Total Cash Prize Pool",
      "Live Mentorship from Unicorn Tech Leads",
      "Real-world Industry AI Problem Statements",
      "Fast-track Placement & Internship Connects",
    ],
    tags: ["₹1 Lakh+ Cash Pool", "50+ Colleges", "36-Hour Sprint"],
    ctaText: "View Hackathons",
    ctaHref: "/events",
    themeColor: "sky",
    gradient: "from-[#08214d]/95 via-[#061633]/95 to-[#040914]",
    accentGlow: "rgba(56,189,248,0.25)",
    statLabel: "National Participant Teams",
    statValue: "120+",
    statSubtitle: "50+ Engineering Colleges",
  },
  {
    id: "workshops",
    label: "AI & Tech Bootcamps",
    icon: Code,
    badge: "Hands-on Masterclasses",
    title: "Deep-Dive Technical Masterclasses & Research Labs",
    description:
      "Weekly and monthly hands-on workshops covering Generative AI, Cyber Security, Cloud Native Systems, Embedded Robotics, and Industrial Automation.",
    highlights: [
      "Hands-on Coding on Cloud Sandbox Labs",
      "Official Verified IEEE GU SB Certificates",
      "Production GitHub Repo Deliverables",
      "Direct Q&A with Senior Industry Mentors",
    ],
    tags: ["Cloud Labs", "GenAI & DevOps", "Verified Certs"],
    ctaText: "Explore Bootcamps",
    ctaHref: "/events",
    themeColor: "teal",
    gradient: "from-[#04282a]/95 via-[#031c1d]/95 to-[#030910]",
    accentGlow: "rgba(20,184,166,0.25)",
    statLabel: "Students & Engineers Trained",
    statValue: "1,500+",
    statSubtitle: "Hands-on Skill Certification",
  },
  {
    id: "chapters",
    label: "Societies & Affinity (WIE & CS)",
    icon: Layers,
    badge: "Student Chapters",
    title: "Specialized Society Chapters & Leadership Councils",
    description:
      "IEEE Computer Society (CS), Women in Engineering (WIE), IAS, CIS, and Photonics providing specialized technical tracks, diversity initiatives, and travel grants.",
    highlights: [
      "Women in Tech Mentorship Programs",
      "Computer Society Coding & AI Leagues",
      "Executive Council Leadership Roles",
      "Region 10 Congress Travel & Paper Grants",
    ],
    tags: ["6 Global Societies", "WIE Affinity", "Travel Grants"],
    ctaText: "Join a Chapter",
    ctaHref: "/membership",
    themeColor: "amber",
    gradient: "from-[#2b1803]/95 via-[#1c1003]/95 to-[#060810]",
    accentGlow: "rgba(245,158,11,0.25)",
    statLabel: "Active Society Chapters",
    statValue: "6+",
    statSubtitle: "Global IEEE Professional Networks",
  },
];

export const InteractiveTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("conferences");
  const [selectedConfId, setSelectedConfId] = useState<"iccsai" | "iccca" | "ic2pct">("iccsai");

  const currentConf =
    FLAGSHIP_CONFERENCES.find((c) => c.id === selectedConfId) || FLAGSHIP_CONFERENCES[0];
  const currentGeneralTab = GENERAL_TABS.find((t) => t.id === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Interactive Feature Showcase</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Flagship Programs & Hubs
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
          Explore our premier international IEEE conferences, nationwide hackathons, technical bootcamps, and global society chapters.
        </p>
      </div>

      {/* Primary Top Tab Bar */}
      <div className="flex items-center justify-center flex-wrap gap-2 p-1.5 sm:p-2 bg-[#080e1e]/90 rounded-2xl sm:rounded-3xl border border-white/15 backdrop-blur-2xl max-w-4xl mx-auto shadow-2xl">
        <button
          onClick={() => setActiveTab("conferences")}
          className={`relative flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
            activeTab === "conferences"
              ? "text-white shadow-md"
              : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
          }`}
        >
          {activeTab === "conferences" && (
            <motion.div
              layoutId="interactive-feature-tab"
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <Globe className="w-4 h-4 relative z-10 text-purple-300" />
          <span className="relative z-10">Flagship Conferences (3)</span>
        </button>

        {GENERAL_TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="interactive-feature-tab"
                  className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <TabIcon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Card */}
      <AnimatePresence mode="wait">
        {activeTab === "conferences" ? (
          /* MULTI-CONFERENCE SHOWCASE */
          <motion.div
            key={`conf-${currentConf.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`relative rounded-3xl p-6 sm:p-10 md:p-12 border border-white/15 bg-gradient-to-br ${currentConf.gradient} backdrop-blur-2xl shadow-2xl overflow-hidden`}
          >
            {/* Ambient Radial Glows */}
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
              style={{ background: currentConf.accentGlow }}
            />
            <div
              className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: currentConf.accentGlow }}
            />
            <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />

            {/* Conference Sub-Selector Tabs */}
            <div className="relative z-10 mb-6 sm:mb-8 flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md max-w-fit">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                Select Conference:
              </span>
              {FLAGSHIP_CONFERENCES.map((conf) => {
                const isSelected = conf.id === selectedConfId;
                return (
                  <button
                    key={conf.id}
                    onClick={() => setSelectedConfId(conf.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg font-black"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{conf.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                        isSelected
                          ? "bg-black/20 text-slate-950 font-bold"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {conf.edition}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-5">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-extrabold uppercase tracking-wider shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentConf.badge}</span>
                  </div>
                  {currentConf.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-[11px] font-semibold"
                    >
                      <Zap className="w-3 h-3 text-sky-400" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  {currentConf.fullTitle}
                </h3>

                {/* Metadata Row: Date & Host */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>{currentConf.dates}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-4 h-4 text-red-400" />
                    <span>{currentConf.host}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal">
                  {currentConf.description}
                </p>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {currentConf.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 shadow-xs" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Previous IEEE Xplore Archives if available */}
                {currentConf.previousProceedings && currentConf.previousProceedings.length > 0 && (
                  <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-slate-400 font-medium">IEEE Xplore Archives:</span>
                    {currentConf.previousProceedings.map((proc, idx) => (
                      <a
                        key={idx}
                        href={proc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-sky-300 hover:text-white transition-colors"
                      >
                        <BookOpen className="w-3 h-3 text-sky-400" />
                        <span>{proc.label}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    ))}
                  </div>
                )}

                {/* CTA Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={currentConf.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:scale-105 hover:brightness-110 transition-all duration-300 group"
                  >
                    <span>Visit {currentConf.name} Portal</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={currentConf.cmtUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
                  >
                    <span>Microsoft CMT Submission</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </a>

                  {currentConf.id === "iccsai" && (
                    <Link
                      href="/iccsai-2026"
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-400/30 text-purple-200 hover:text-white font-semibold text-xs sm:text-sm transition-all"
                    >
                      <span>Branch Subsite Hub</span>
                      <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Metric Card */}
              <div className="lg:col-span-5 flex flex-col justify-center bg-gradient-to-b from-black/60 via-[#0a0f20]/80 to-black/70 p-6 sm:p-8 rounded-3xl border border-white/15 backdrop-blur-2xl text-center space-y-4 shadow-2xl relative overflow-hidden group hover:border-sky-400/40 transition-all duration-300">
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-sky-400 via-purple-400 to-amber-400 opacity-80" />

                <div className="inline-flex items-center justify-center gap-1.5 mx-auto px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/25 text-[11px] font-bold text-sky-300 uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>Conference Research Index</span>
                </div>

                <div className="font-mono text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-sky-200 to-amber-300 bg-clip-text text-transparent py-1 filter drop-shadow-md">
                  {currentConf.statValue}
                </div>

                <div className="space-y-1">
                  <div className="text-sm sm:text-base font-bold text-white">
                    {currentConf.statLabel}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {currentConf.statSubtitle}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono flex items-center justify-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{currentConf.sponsors.join(" • ")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* GENERAL DOMAIN TABS (HACKATHONS, WORKSHOPS, CHAPTERS) */
          currentGeneralTab && (
            <motion.div
              key={currentGeneralTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={`relative rounded-3xl p-6 sm:p-10 md:p-12 border border-white/15 bg-gradient-to-br ${currentGeneralTab.gradient} backdrop-blur-2xl shadow-2xl overflow-hidden`}
            >
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ background: currentGeneralTab.accentGlow }}
              />
              <div
                className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: currentGeneralTab.accentGlow }}
              />
              <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-extrabold uppercase tracking-wider shadow-xs">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currentGeneralTab.badge}</span>
                    </div>
                    {currentGeneralTab.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-[11px] font-semibold"
                      >
                        <Zap className="w-3 h-3 text-sky-400" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    {currentGeneralTab.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal">
                    {currentGeneralTab.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {currentGeneralTab.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 shadow-xs" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <Link
                      href={currentGeneralTab.ctaHref}
                      className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:scale-105 hover:brightness-110 transition-all duration-300 group"
                    >
                      <span>{currentGeneralTab.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center bg-gradient-to-b from-black/60 via-[#0a0f20]/80 to-black/70 p-6 sm:p-8 rounded-3xl border border-white/15 backdrop-blur-2xl text-center space-y-4 shadow-2xl relative overflow-hidden group hover:border-sky-400/40 transition-all duration-300">
                  <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-sky-400 via-purple-400 to-amber-400 opacity-80" />

                  <div className="inline-flex items-center justify-center gap-1.5 mx-auto px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/25 text-[11px] font-bold text-sky-300 uppercase tracking-widest">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>Impact & Participation Metric</span>
                  </div>

                  <div className="font-mono text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-sky-200 to-amber-300 bg-clip-text text-transparent py-1 filter drop-shadow-md">
                    {currentGeneralTab.statValue}
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm sm:text-base font-bold text-white">
                      {currentGeneralTab.statLabel}
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      {currentGeneralTab.statSubtitle}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono flex items-center justify-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Official Branch Records • Galgotias University</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </section>
  );
};
