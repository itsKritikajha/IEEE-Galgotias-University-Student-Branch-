"use client";

import React from "react";
import { CoreTeamSection } from "@/components/CoreTeamSection";
import { FacultyCard } from "@/components/FacultyCard";
import { ConferenceFacultyGrid } from "@/components/ConferenceFacultyGrid";
import { FACULTY_LEADERSHIP, CHAPTER_FACULTY_ADVISORS } from "@/data/teamData";
import { ShieldCheck, Sparkles, Award, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <div className="space-y-16 py-8 pb-24 bg-[#0b0f19] min-h-screen text-slate-100">
      {/* 1. TOP HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/15 via-purple-500/15 to-amber-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold backdrop-blur-md shadow-sm"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Galgotias University IEEE Student Branch • STB99158</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
          Leadership &amp; Faculty Mentors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light max-w-2xl mx-auto"
        >
          Meet the distinguished faculty counsellors, chapter advisors, conference chairs, and student executive leaders driving research excellence and technical innovation at Galgotias University.
        </motion.p>
      </section>

      {/* 2. FACULTY LEADERSHIP & BRANCH ADVISORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-purple-950/80 px-4 py-1.5 rounded-full border border-amber-400/40 inline-flex items-center gap-1.5 shadow-lg shadow-purple-950/50">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Faculty Leadership &amp; Branch Advisory
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Branch Executive Counsellors
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {FACULTY_LEADERSHIP.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </section>

      {/* 3. IEEE CHAPTER & SOCIETY FACULTY ADVISORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-300 uppercase tracking-widest bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-400/40 inline-flex items-center gap-1.5 shadow-lg shadow-sky-950/50">
            <Layers className="w-4 h-4 text-sky-400" />
            IEEE Chapter &amp; Society Faculty Leadership
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Society Faculty Advisors &amp; Convenors
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light">
            Guiding specialized IEEE technical societies and student chapters in Electrical, Electronics, and Industrial Applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CHAPTER_FACULTY_ADVISORS.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </section>

      {/* 4. ELEVATED CORE STUDENT EXECUTIVE TEAM */}
      <CoreTeamSection />

      {/* 5. FACULTY ASSOCIATED WITH MAJOR IEEE GU CONFERENCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ConferenceFacultyGrid />
      </section>
    </div>
  );
}
