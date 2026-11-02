"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Sparkles, Building, Award, ExternalLink, X, BookOpen, UserCheck } from "lucide-react";
import { TeamMember, CONFERENCE_FACULTY_COMMITTEE, CONFERENCE_FACULTY_DOMAINS } from "@/data/teamData";

export const ConferenceFacultyGrid: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>("All Domains");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredMembers = useMemo(() => {
    return CONFERENCE_FACULTY_COMMITTEE.filter((member) => {
      const matchesDomain =
        selectedDomain === "All Domains" || member.domain === selectedDomain;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        member.name.toLowerCase().includes(q) ||
        member.role.toLowerCase().includes(q) ||
        (member.department && member.department.toLowerCase().includes(q)) ||
        (member.conferenceRole && member.conferenceRole.toLowerCase().includes(q));
      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Header & Description */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 text-xs font-semibold backdrop-blur-md shadow-sm">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Official IEEE Conference Organizing &amp; Technical Committees</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Conference Committee &amp; Faculty Mentors
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
          Distinguished Galgotias University deans, department heads, and senior professors steering major IEEE international research conferences (ICCSAI, ICCCA, IC2PCT, GUCON) indexed in IEEE Xplore.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 sm:p-5 rounded-3xl bg-[#0d1424]/90 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search faculty by name, department, track..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-slate-400 focus:border-sky-400 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="text-xs font-mono text-slate-400 w-full md:w-auto text-right">
            Showing <strong className="text-sky-400">{filteredMembers.length}</strong> of {CONFERENCE_FACULTY_COMMITTEE.length} Faculty Leads
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center flex-wrap gap-1.5 pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold pr-2">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Domain:</span>
          </div>
          {CONFERENCE_FACULTY_DOMAINS.map((domain) => {
            const isSelected = selectedDomain === domain;
            const count =
              domain === "All Domains"
                ? CONFERENCE_FACULTY_COMMITTEE.length
                : CONFERENCE_FACULTY_COMMITTEE.filter((m) => m.domain === domain).length;
            return (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-sky-500/20 font-bold"
                    : "bg-black/40 border border-white/5 text-slate-300 hover:text-white hover:border-white/10"
                }`}
              >
                <span>{domain}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white/25 text-white" : "bg-white/10 text-slate-400"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Faculty Cards */}
      {filteredMembers.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-[#0c1222]/80 border border-white/10 space-y-3 max-w-xl mx-auto">
          <p className="text-sm font-semibold text-slate-300">No faculty members matched your current search.</p>
          <button
            onClick={() => {
              setSelectedDomain("All Domains");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-sky-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <FacultyMemberCard key={member.id} member={member} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

const FacultyMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [imgError, setImgError] = useState(false);
  const avatarFallback = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400"><rect width="300" height="400" fill="%230f172a"/><circle cx="150" cy="140" r="65" fill="%231e293b"/><ellipse cx="150" cy="330" rx="90" ry="70" fill="%231e293b"/><text x="150" y="370" font-family="Georgia" font-size="16" fill="%23f4a300" text-anchor="middle">${member.name}</text></svg>`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="group relative rounded-2xl bg-gradient-to-b from-[#111827] via-[#0d1424] to-[#080d1a] border border-white/10 shadow-xl overflow-hidden backdrop-blur-xl hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all flex flex-col justify-between"
    >
      <div>
        {/* Top Conference Role Strip */}
        <div className="w-full py-2 px-3 bg-[#0a0f1d] border-b border-white/5 flex items-center justify-between gap-1.5">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 font-mono line-clamp-1">
            {member.roleShort}
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_#34d399]" />
        </div>

        {/* Photo Container */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#060a14] flex items-end justify-center select-none">
          <Image
            src={imgError ? avatarFallback : member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={() => setImgError(true)}
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent opacity-85 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

          {/* Hover Overlay with Bio & Details */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/95 to-slate-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-left z-20">
            <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                {member.conferenceRole}
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-light line-clamp-5">
                {member.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-4 space-y-2">
          <h3 className="font-serif text-base font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
            {member.name}
          </h3>

          <div className="space-y-1">
            <p className="text-xs font-semibold text-amber-400 line-clamp-2 leading-tight">
              {member.role}
            </p>
            {member.department && (
              <p className="text-[11px] text-slate-400 flex items-center gap-1 pt-0.5 line-clamp-1">
                <Building className="w-3 h-3 text-slate-500 shrink-0" />
                <span>{member.department}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Conference Badge */}
      <div className="px-4 py-2.5 bg-[#0a0f1d]/80 border-t border-white/5 text-[10px] text-sky-400 font-mono font-medium flex items-center justify-between">
        <span className="line-clamp-1">IEEE Conference Committee</span>
        <UserCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
      </div>
    </motion.div>
  );
};
