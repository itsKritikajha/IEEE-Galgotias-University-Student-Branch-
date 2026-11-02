"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { ICCSAI_IMPORTANT_DATES } from "@/data/iccsaiData";

export const TimelineRoadmap: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-6">
      {/* Central Connecting Gradient Line */}
      <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-400 via-purple-500 to-amber-400 opacity-40 pointer-events-none" />

      <div className="space-y-8">
        {ICCSAI_IMPORTANT_DATES.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                isEven ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Content Card */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-8 even:sm:pl-8 even:sm:pr-0">
                <div
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                    item.highlight
                      ? "bg-gradient-to-r from-amber-500/15 via-purple-900/30 to-[#0c1222] border-amber-400/50 shadow-[0_0_25px_rgba(245,158,11,0.2)]"
                      : "bg-[#0c1222]/90 border-white/10 hover:border-sky-400/40 shadow-xl"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        item.highlight
                          ? "bg-amber-400/20 text-amber-300 border border-amber-400/40"
                          : "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                      }`}
                    >
                      Step 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                    {item.event}
                  </h4>
                </div>
              </div>

              {/* Glowing Timeline Marker Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-lg transition-transform hover:scale-125 ${
                    item.highlight
                      ? "bg-amber-500 border-amber-300 text-slate-950 shadow-amber-500/50"
                      : "bg-[#0c1222] border-sky-400 text-sky-400 shadow-sky-500/30"
                  }`}
                >
                  {item.highlight ? (
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  ) : (
                    <Clock className="w-3.5 h-3.5" />
                  )}
                </div>
              </div>

              {/* Empty placeholder for opposite side on desktop */}
              <div className="hidden sm:block sm:w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
