"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Users,
  Lock,
  Target,
  FileCheck,
  Scale,
  Flame,
  Globe2,
} from "lucide-react";

export default function IEEECodeOfEthicsPage() {
  const ethicsCommitments = [
    {
      num: "01",
      title: "Public Safety, Health & Sustainable Design",
      summary: "To hold paramount the safety, health, and welfare of the public, to strive to comply with ethical design and sustainable development practices, to protect the privacy of others, and to disclose promptly factors that might endanger the public or the environment.",
      category: "Safety & Welfare",
      icon: ShieldCheck,
      color: "from-sky-500/20 to-blue-600/10 border-sky-500/30 text-sky-400",
      accentBadge: "Core Priority",
    },
    {
      num: "02",
      title: "Public Understanding of Emerging Technologies",
      summary: "To improve the understanding by individuals and society of the capabilities and societal implications of conventional and emerging technologies, including intelligent systems.",
      category: "Education & Awareness",
      icon: BookOpen,
      color: "from-purple-500/20 to-indigo-600/10 border-purple-500/30 text-purple-400",
      accentBadge: "AI & Innovation",
    },
    {
      num: "03",
      title: "Integrity & Avoidance of Conflicts of Interest",
      summary: "To avoid unlawful conduct, including but not limited to bribery, fraud, and corruption, and to avoid real or perceived conflicts of interest whenever possible, disclosing them to affected parties when they do exist.",
      category: "Anti-Corruption",
      icon: Scale,
      color: "from-amber-500/20 to-yellow-600/10 border-amber-500/30 text-amber-400",
      accentBadge: "Integrity",
    },
    {
      num: "04",
      title: "Non-Harassment & Prevention of Injury",
      summary: "To avoid unlawful conduct, injury to the person or property of others, and not to engage in or tolerate harassment, discrimination, or retaliation.",
      category: "Respect & Safety",
      icon: HeartHandshake,
      color: "from-rose-500/20 to-red-600/10 border-rose-500/30 text-rose-400",
      accentBadge: "Zero Tolerance",
    },
    {
      num: "05",
      title: "Honest & Objective Technical Claims",
      summary: "To be honest and realistic in stating claims or estimates based on available data and to maintain professional objectivity in all technical evaluations and research presentations.",
      category: "Truth in Research",
      icon: FileCheck,
      color: "from-emerald-500/20 to-teal-600/10 border-emerald-500/30 text-emerald-400",
      accentBadge: "Objectivity",
    },
    {
      num: "06",
      title: "Maintaining Technical Competence & Qualifications",
      summary: "To maintain and improve our technical competence and to undertake technological tasks for others only if qualified by training or experience, or after full disclosure of pertinent limitations.",
      category: "Professional Growth",
      icon: Target,
      color: "from-cyan-500/20 to-blue-600/10 border-cyan-500/30 text-cyan-400",
      accentBadge: "Excellence",
    },
    {
      num: "07",
      title: "Constructive Peer Review & Plagiarism Prevention",
      summary: "To seek, accept, and offer honest criticism of technical work, to acknowledge and correct errors, to be honest in citing contributions of others, and to refrain from plagiarism.",
      category: "Academic Honesty",
      icon: Award,
      color: "from-indigo-500/20 to-purple-600/10 border-indigo-500/30 text-indigo-400",
      accentBadge: "Peer Review",
    },
    {
      num: "08",
      title: "Equal Opportunity & Dignified Treatment",
      summary: "To treat all persons fairly and with respect, to not engage in harassment or discrimination based on characteristics including race, religion, gender, disability, age, national origin, sexual orientation, or gender identity.",
      category: "Diversity & Inclusion",
      icon: Users,
      color: "from-pink-500/20 to-rose-600/10 border-pink-500/30 text-pink-400",
      accentBadge: "WIE & Equity",
    },
    {
      num: "09",
      title: "Protection from Malicious Falsehoods",
      summary: "To avoid injuring others, their property, reputation, or employment by false or malicious action, rumors, verbal abuse, or unverified technical accusations.",
      category: "Reputation Protection",
      icon: Lock,
      color: "from-violet-500/20 to-purple-600/10 border-violet-500/30 text-violet-400",
      accentBadge: "Fair Play",
    },
    {
      num: "10",
      title: "Supporting Peers & Whistleblower Protection",
      summary: "To facilitate the safe development and use of technology, and to assist colleagues and co-workers in their professional development, supporting them in following this Code of Ethics.",
      category: "Mentorship",
      icon: Sparkles,
      color: "from-teal-500/20 to-emerald-600/10 border-teal-500/30 text-teal-400",
      accentBadge: "Community",
    },
  ];

  const guCommitments = [
    {
      title: "Academic Research Rigor in ICCSAI & GUCON",
      desc: "Every conference track manuscript under IEEE GU SB undergoes rigorous peer review, plagiarism verification via IEEE CrossCheck, and ethical author compliance before IEEE Xplore indexing.",
    },
    {
      title: "Women in Engineering (WIE) Equity",
      desc: "Our IEEE WIE Affinity Group actively promotes gender diversity in STEM, providing equal access to leadership positions, speaker stages, and hackathon mentorship.",
    },
    {
      title: "Transparent Student Governance",
      desc: "Elections, budgeting, and event ticket revenues are audited transparently by Faculty Advisors Dr. A. Ambikapathy, Dr. Meenakshi Awasthi, and university leadership.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-[500px] h-[350px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Navigation & Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span className="text-xs text-slate-400 font-mono">
            IEEE Board of Directors • Official Standard
          </span>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-sky-500/15 to-purple-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-lg shadow-amber-500/5"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>IEEE Global Standard • Professional & Engineering Integrity</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            IEEE Code of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-sky-300 to-indigo-300">Ethics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed italic"
          >
            &ldquo;We, the members of the IEEE, in recognition of the importance of our technologies in affecting the quality of life throughout the world, and in accepting a personal obligation to our profession, its members, and the communities we serve, do hereby commit ourselves to the highest ethical and professional conduct.&rdquo;
          </motion.p>
        </div>

        {/* Preamble Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#131b2e] via-[#1a1c38] to-[#0d121f] border border-amber-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              The IEEE Preamble & Student Branch Pledge
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              As members and student volunteers of IEEE Galgotias University Student Branch (STB99158), we hold ourselves accountable to the fundamental principles established by the IEEE Board of Directors. These ten tenets guide our technical research, hackathons, open-source projects, peer reviews, and executive leadership.
            </p>
          </div>
        </div>

        {/* 10 Ethics Commitments Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-400" />
              The 10 Core IEEE Ethical Commitments
            </h2>
            <span className="text-xs text-slate-400 font-mono">10 / 10 Standards</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {ethicsCommitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 rounded-3xl bg-gradient-to-b from-[#111827]/80 to-[#0b0f19]/90 border border-white/10 hover:border-amber-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-slate-500 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5">
                          #{item.num}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-amber-300">
                        {item.accentBadge}
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white font-serif leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-light pl-9">
                      {item.summary}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Galgotias University Branch Implementation */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#121829] to-[#0a0d17] border border-sky-500/20 shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-widest">
            <Globe2 className="w-4 h-4" />
            Putting Ethics into Practice at Galgotias University
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            How IEEE GU SB Champions Ethical Engineering
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {guCommitments.map((c, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2"
              >
                <div className="flex items-center gap-2 text-sky-300 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{c.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Reference Banner */}
        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Official IEEE Code of Ethics approved by the IEEE Board of Directors.</span>
          </div>
          <Link
            href="https://www.ieee.org/about/corporate/governance/p7-8.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1 font-semibold"
          >
            Read Original on IEEE.org <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
