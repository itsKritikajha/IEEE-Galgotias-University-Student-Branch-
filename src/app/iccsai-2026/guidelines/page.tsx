"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, AlertTriangle, ExternalLink } from "lucide-react";
import { ICCSAI_INFO } from "@/data/iccsaiData";

export default function IccsaiGuidelinesPage() {
  const guidelines = [
    "Full papers must be written in English with a maximum length of 6 pages formatted strictly according to standard IEEE double-column conference template.",
    "Submissions must be original and not currently under review at any other conference or journal.",
    "All papers undergo double-blind peer review by at least three independent reviewers from the Technical Program Committee.",
    "Plagiarism rate must be under 15% (Turnitin/iThenticate) with no single source exceeding 3%.",
    "At least one author must register and present the paper in-person or virtually at Galgotias University for inclusion in IEEE Xplore proceedings.",
  ];

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
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
            Author Instructions
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Paper Submission & Camera-Ready Guidelines
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Please follow these formatting rules carefully before submitting your paper to Microsoft CMT.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Guidelines List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-white/10 space-y-4 shadow-xl">
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-sky-400" />
              Submission Rules & Quality Requirements
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              {guidelines.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p>{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Template Downloads */}
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-400/30 space-y-4 shadow-xl">
            <h4 className="font-serif text-lg font-bold text-white">
              Official IEEE Templates
            </h4>
            <p className="text-xs text-purple-200">
              Download IEEE conference templates for MS Word or LaTeX:
            </p>
            <div className="space-y-2">
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-amber-300 font-semibold hover:bg-white/10"
              >
                <span>IEEE MS Word Template (.docx)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-sky-300 font-semibold hover:bg-white/10"
              >
                <span>IEEE LaTeX Template (.zip)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
