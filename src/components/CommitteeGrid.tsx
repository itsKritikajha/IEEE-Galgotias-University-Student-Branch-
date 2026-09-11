"use client";

import React from "react";
import { ICCSAI_COMMITTEE, CommitteePerson } from "@/data/iccsaiData";
import { Award, UserCheck, Shield, Star } from "lucide-react";

export const CommitteeGrid: React.FC = () => {
  // Group committee by role category
  const roles = ["Chief Patron", "Patron", "General Chair", "Organizing Chair", "Technical Chair", "Steering Committee"] as const;

  return (
    <div className="space-y-10 my-12">
      {roles.map((roleCategory) => {
        const members = ICCSAI_COMMITTEE.filter((person) => person.role === roleCategory);
        if (members.length === 0) return null;

        return (
          <div key={roleCategory} className="space-y-4">
            <div className="flex items-center gap-3 border-b border-purple-800/40 pb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-red-600 flex items-center justify-center text-slate-950 font-bold">
                <Star className="w-4 h-4 text-slate-950 fill-current" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                {roleCategory}s
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((person, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-b from-[#1e1b4b]/60 to-[#0f172a] border border-purple-500/20 p-5 shadow-lg backdrop-blur-md hover:border-amber-400/40 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-600 to-purple-600 flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-md border border-white/20">
                    {person.name.split(" ").pop()?.charAt(0) || "G"}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                      {person.role}
                    </span>
                    <h4 className="font-serif text-base font-bold text-white leading-snug">
                      {person.name}
                    </h4>
                    <p className="text-xs font-semibold text-sky-300 mt-1">
                      {person.designation}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {person.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
