"use client";

import React from "react";
import { Shield, Globe, Award, Sparkles, Building2 } from "lucide-react";

export const LogoStrip: React.FC = () => {
  const partners = [
    { name: "IEEE Parent Org", code: "IEEE", sub: "Global Technical Association", color: "from-sky-600 to-blue-800" },
    { name: "IEEE UP Section", code: "IEEE UP", sub: "Region 10 (Asia-Pacific)", color: "from-blue-700 to-indigo-900" },
    { name: "Galgotias University", code: "GU", sub: "Host Institution", color: "from-red-600 to-amber-600" },
    { name: "IEEE Xplore", code: "Xplore", sub: "Digital Research Library", color: "from-sky-500 to-cyan-700" },
    { name: "IEEE IAS", code: "IAS", sub: "Industry Applications Society", color: "from-purple-600 to-pink-700" },
    { name: "IEEE WIE", code: "WIE", sub: "Women in Engineering", color: "from-purple-700 to-indigo-900" },
  ];

  return (
    <div className="py-10 bg-[#070a12] border-y border-white/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Affiliations & Global Recognition
        </span>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-8 px-4 max-w-6xl mx-auto">
        {partners.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-sky-400/40 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center font-extrabold text-white text-xs shadow-md group-hover:scale-105 transition-transform`}>
              {p.code}
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                {p.name}
              </div>
              <div className="text-[10px] text-slate-400 font-medium">
                {p.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
