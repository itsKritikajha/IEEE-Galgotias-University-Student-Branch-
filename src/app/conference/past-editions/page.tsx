"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, BookOpen, Award, CheckCircle } from "lucide-react";

export default function PastEditionsPage() {
  const editions = [
    {
      year: "ICCSAI 2025 (3rd Edition)",
      dates: "November 21–23, 2025",
      papers: "350+ Submissions • 120 Presented",
      proceedingUrl: "https://ieeexplore.ieee.org/",
      desc: "Hosted keynote speeches by IEEE Fellows from North America and Asia-Pacific. All presented papers submitted to IEEE Xplore.",
    },
    {
      year: "ICCSAI 2023 (2nd Edition)",
      dates: "November 17–18, 2023",
      papers: "280+ Submissions • 95 Presented",
      proceedingUrl: "https://ieeexplore.ieee.org/",
      desc: "Published in IEEE Xplore digital proceedings. Indexed in Scopus and Web of Science.",
    },
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
            Conference Archives
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Past ICCSAI Editions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Explore proceedings and metrics from previous editions of the IEEE ICCSAI conference series.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {editions.map((ed, i) => (
          <div key={i} className="p-6 rounded-2xl bg-[#0f172a] border border-white/10 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>{ed.dates}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">{ed.year}</h3>
              <p className="text-xs font-semibold text-amber-300">{ed.papers}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{ed.desc}</p>
            </div>

            <a
              href={ed.proceedingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-600/30 border border-purple-400/40 text-xs font-bold text-purple-200 hover:bg-purple-600 hover:text-white transition-colors"
            >
              <span>View IEEE Xplore Digital Library Proceedings</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
