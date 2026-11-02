"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Linkedin, Mail, Award, ShieldCheck } from "lucide-react";
import { TeamMember } from "@/data/teamData";

interface FacultyCardProps {
  faculty: TeamMember;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  const [imgError, setImgError] = useState(false);
  const avatarPlaceholder = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23003366"/><circle cx="200" cy="160" r="80" fill="%2300629B"/><ellipse cx="200" cy="360" rx="130" ry="90" fill="%2300629B"/><text x="200" y="380" font-family="Georgia" font-size="20" fill="%23ffd700" text-anchor="middle">${faculty.name}</text></svg>`;

  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-[#0c162d]/95 via-[#132247]/80 to-[#1e1b4b]/90 border border-sky-400/30 p-6 sm:p-7 shadow-2xl backdrop-blur-xl overflow-hidden hover:border-amber-400/50 transition-all duration-300 group flex flex-col justify-between h-full">
      <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
        {/* Photo Container */}
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-amber-400/70 shadow-xl shrink-0 bg-slate-900">
          <Image
            src={imgError ? avatarPlaceholder : faculty.image}
            alt={faculty.name}
            fill
            sizes="(max-width: 640px) 144px, 160px"
            onError={() => setImgError(true)}
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-[9px] uppercase tracking-wider text-center py-1 flex items-center justify-center gap-1 shadow">
            <Award className="w-3 h-3 text-slate-950" />
            <span>{faculty.badge || faculty.roleShort}</span>
          </div>
        </div>

        {/* Info */}
        <div className="text-center sm:text-left space-y-2.5 flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">{faculty.subtitle || faculty.roleShort}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
            {faculty.name}
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-amber-300">
            {faculty.role}
          </p>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {faculty.bio}
          </p>
        </div>
      </div>

      {/* Action links */}
      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-center sm:justify-start gap-3 relative z-10">
        {faculty.linkedin && (
          <a
            href={faculty.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600/20 border border-sky-400/30 text-xs font-semibold text-sky-200 hover:bg-sky-500 hover:text-white transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn Profile</span>
          </a>
        )}
        {faculty.email && (
          <a
            href={`mailto:${faculty.email}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600/20 border border-purple-400/30 text-xs font-semibold text-purple-200 hover:bg-purple-500 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Advisor</span>
          </a>
        )}
      </div>
    </div>
  );
};
