"use client";

import React from "react";
import Link from "next/link";
import { CommitteeGrid } from "@/components/CommitteeGrid";
import { ArrowLeft, Award, Shield } from "lucide-react";

export default function IccsaiCommitteePage() {
  return (
    <div className="space-y-12 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link
          href="/iccsai-2026"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to ICCSAI 2026 Hub</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>ICCSAI 2026 Governance & Leadership</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Organizing & Advisory Committee
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Distinguished academicians, University leadership, and IEEE UP Section dignitaries guiding the 4th IEEE International Conference on Communication, Security, and Artificial Intelligence.
          </p>
        </div>
      </div>

      <CommitteeGrid />
    </div>
  );
}
