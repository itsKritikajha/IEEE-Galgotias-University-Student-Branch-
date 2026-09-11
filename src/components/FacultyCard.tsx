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
  const avatarPlaceholder = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23003366"/><circle cx="200" cy="160" r="80" fill="%2300629B"/><ellipse cx="200" cy="360" rx="130" ry="90" fill="%2300629B"/><text x="200" y="380" font-family="Georgia" font-size="22" fill="%23ffd700" text-anchor="middle">${faculty.name}</text></svg>`;

  return (
    <div className="max-w-4xl mx-auto my-10 rounded-2xl bg-gradient-to-r from-[#003366]/90 via-[#00629B]/60 to-purple-900/80 border border-sky-400/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10">
        {/* Photo Container */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl shrink-0">
          <Image
            src={imgError ? avatarPlaceholder : faculty.image}
            alt={faculty.name}
            fill
            onError={() => setImgError(true)}
            className="object-cover object-top"
          />
          <div className="absolute bottom-0 inset-x-0 bg-amber-500/90 text-slate-950 font-bold text-[10px] uppercase tracking-wider text-center py-1 flex items-center justify-center gap-1">
            <Award className="w-3 h-3" />
            Faculty Branch Counsellor
          </div>
        </div>

        {/* Info */}
        <div className="text-center md:text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>IEEE UP Section Vice Chair & Pro-VC</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {faculty.name}
          </h3>

          <p className="text-sm font-semibold text-amber-300">
            {faculty.role}
          </p>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
            {faculty.bio}
          </p>

          <div className="pt-2 flex items-center justify-center md:justify-start gap-4">
            {faculty.linkedin && (
              <a
                href={faculty.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600/30 border border-sky-400/40 text-xs font-semibold text-sky-200 hover:bg-sky-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
            )}
            {faculty.email && (
              <a
                href={`mailto:${faculty.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600/30 border border-purple-400/40 text-xs font-semibold text-purple-200 hover:bg-purple-500 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Advisor</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
