"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Award, Trophy, Star } from "lucide-react";

export default function ConferenceAwardsPage() {
  const awards = [
    { title: "Best Research Paper Award", desc: "Awarded to the top manuscript across all technical tracks evaluated by the General Chairs.", prize: "Certificate + Plaque + Cash Prize" },
    { title: "Best Student Paper Award", desc: "Recognizing outstanding research authored and presented by undergraduate or postgraduate student delegates.", prize: "Certificate + Plaque" },
    { title: "Best Track Presentation Award", desc: "Presented for exceptional oral presentation and technical Q&A defense in each individual track.", prize: "Certificate" },
  ];

  return (
    <div className="space-y-10 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link
          href="/conference"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to ICCSAI 2026 Hub</span>
        </Link>

        <div className="space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Excellence Recognition
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            ICCSAI 2026 Conference Awards
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Honoring research excellence and outstanding oral presentations at ICCSAI 2026.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, i) => (
          <div key={i} className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/40 to-[#0f172a] border border-amber-400/30 space-y-3 text-center shadow-xl">
            <Trophy className="w-10 h-10 text-amber-400 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-white">{award.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{award.desc}</p>
            <div className="pt-2">
              <span className="text-xs font-bold text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                {award.prize}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
