"use client";

import React from "react";
import { CoreTeamSection } from "@/components/CoreTeamSection";
import { FacultyCard } from "@/components/FacultyCard";
import { TeamCard } from "@/components/TeamCard";
import { FACULTY_COUNSELLOR, EXTENDED_COMMITTEE_MEMBERS } from "@/data/teamData";
import { ShieldCheck } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="space-y-12 py-6 pb-20 bg-[#0b0f19] min-h-screen text-slate-100">
      {/* 1. Branch Counsellor Featured Block Above Student Core Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-4">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-purple-950/80 px-3 py-1 rounded-full border border-amber-400/40 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Faculty Leadership & Branch Advisory
          </span>
        </div>
        <FacultyCard faculty={FACULTY_COUNSELLOR} />
      </section>

      {/* 2. ELEVATED CORE TEAM SECTION WITH FRAMER MOTION & PARALLAX */}
      <CoreTeamSection />

      {/* 3. EXTENDED COMMITTEE & DEPARTMENT HEADS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
            Extended Executive Council
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Department Committee Heads
          </h2>
          <p className="text-xs sm:text-sm text-purple-200 max-w-xl mx-auto">
            Heading specialized IEEE GU SB committees in Web Development, Public Relations, Operations, and Content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXTENDED_COMMITTEE_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
