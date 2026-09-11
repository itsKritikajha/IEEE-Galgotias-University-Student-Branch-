"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { TeamMember } from "@/data/teamData";

interface TeamCardProps {
  member: TeamMember;
  priority?: boolean;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, priority = false }) => {
  const [imgError, setImgError] = useState(false);

  // Split name into First name & Surname for poster gold styling
  const nameParts = member.name.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  // Dynamic SVG Avatar placeholder in case image path isn't provided
  const avatarPlaceholder = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400"><rect width="300" height="400" fill="%232e0854"/><circle cx="150" cy="150" r="70" fill="%236b21a8"/><ellipse cx="150" cy="340" rx="100" ry="80" fill="%236b21a8"/><text x="150" y="380" font-family="Georgia" font-size="20" fill="%23f4a300" text-anchor="middle">${member.name}</text></svg>`;

  return (
    <div className="team-card-wrapper group relative flex flex-col items-center h-full rounded-2xl bg-gradient-to-b from-[#8B5CF6]/20 via-[#6D28D9]/40 to-[#4C1D95]/90 border border-purple-400/20 shadow-xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-amber-400/50 hover:shadow-purple-600/30 hover:-translate-y-1.5">
      {/* Role Header Strip matching poster vertical column headers */}
      <div className="w-full py-3 px-2 text-center bg-gradient-to-b from-purple-950/80 to-transparent border-b border-white/10">
        <span className="font-serif text-sm sm:text-base font-bold tracking-wider text-[#FF6B6B] uppercase drop-shadow-sm">
          {member.roleShort || member.role}
        </span>
      </div>

      {/* Grayscale/Duotone Photo Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-b from-[#C084FC]/30 via-[#7C3AED]/40 to-[#4C1D95]/90 flex items-end justify-center">
        <Image
          src={imgError ? avatarPlaceholder : member.image}
          alt={member.name}
          fill
          priority={priority}
          onError={() => setImgError(true)}
          className="poster-duotone-img object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
        />

        {/* Purple gradient overlay blend matching poster */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4C1D95] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

        {/* Hover Overlay with Social Links & Bio */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-900/90 to-purple-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end text-left backdrop-blur-sm">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
              {member.role}
            </span>
            <h4 className="text-base font-bold text-white font-serif mb-2">
              {member.name}
            </h4>
            {member.bio && (
              <p className="text-xs text-purple-100/90 line-clamp-3 leading-relaxed mb-4">
                {member.bio}
              </p>
            )}

            <div className="flex items-center gap-3 pt-2 border-t border-purple-400/20">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-sky-600/30 border border-sky-400/40 flex items-center justify-center text-sky-300 hover:bg-sky-500 hover:text-white transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300 hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Name Footer matching reference poster: First line white serif, second line gold serif */}
      <div className="w-full py-4 px-2 text-center bg-[#4C1D95]/95 border-t border-purple-400/20">
        <div className="font-serif leading-tight">
          <div className="text-base sm:text-lg font-medium text-white tracking-wide">
            {firstName}
          </div>
          <div className="text-lg sm:text-xl font-bold text-[#F4A300] tracking-wide drop-shadow">
            {lastName}
          </div>
        </div>
      </div>
    </div>
  );
};
