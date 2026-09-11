"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, MapPin, ExternalLink, Globe, FileText, CheckCircle2, ArrowRight, BrainCircuit, ShieldCheck, Wifi, Database, Cpu, Blocks } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CommitteeGrid } from "@/components/CommitteeGrid";
import { AttractionsCarousel } from "@/components/AttractionsCarousel";
import { LogoStrip } from "@/components/LogoStrip";
import { ICCSAI_INFO, ICCSAI_IMPORTANT_DATES, ICCSAI_TRACKS } from "@/data/iccsaiData";

export default function IccsaiHubPage() {
  const iconMap: Record<string, any> = {
    BrainCircuit,
    ShieldCheck,
    Wifi,
    Database,
    Cpu,
    Blocks,
  };

  return (
    <div className="space-y-16 py-10 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#3b0764] to-[#070a12] py-16 sm:py-24 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>4th IEEE International Conference • IEEE Xplore Proceeding</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-5xl mx-auto">
            {ICCSAI_INFO.fullTitle}
          </h1>

          <p className="text-base sm:text-xl text-purple-200 font-serif italic max-w-3xl mx-auto">
            &ldquo;Advancing Intelligent Systems, Cyber Resilience, and Next-Gen Communication Infrastructures&rdquo;
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-200">
            <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400" /> {ICCSAI_INFO.dates}
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-red-400" /> {ICCSAI_INFO.venue.name}, {ICCSAI_INFO.venue.city}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={ICCSAI_INFO.cmtSubmitUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 text-slate-950 font-extrabold text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Submit Paper via Microsoft CMT</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/iccsai-2026/registration"
              className="px-6 py-3.5 rounded-xl bg-purple-600/40 hover:bg-purple-600 border border-purple-400/40 text-white font-semibold text-sm backdrop-blur-md transition-all"
            >
              Registration Fees & Guidelines
            </Link>
          </div>

          {/* Countdown Block */}
          <div className="pt-8 max-w-2xl mx-auto">
            <CountdownTimer targetIsoDate={ICCSAI_INFO.isoStartDate} />
          </div>
        </div>
      </section>

      {/* 2. IMPORTANT DATES TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Timeline & Deadlines
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Important Conference Dates
          </h2>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl bg-[#0f172a] border border-white/10 overflow-hidden shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-purple-950/80 text-amber-300 font-serif border-b border-white/10 uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-6">Milestone Event</th>
                <th className="py-3.5 px-6 text-right">Deadline Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-slate-200">
              {ICCSAI_IMPORTANT_DATES.map((item, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-purple-900/20 transition-colors ${
                    item.highlight ? "bg-amber-500/10 font-semibold text-amber-300" : ""
                  }`}
                >
                  <td className="py-3.5 px-6 flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${item.highlight ? "text-amber-400" : "text-sky-400"}`} />
                    <span>{item.event}</span>
                  </td>
                  <td className="py-3.5 px-6 text-right font-mono">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. CONFERENCE TRACKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
            Call for Papers
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            Technical Research Tracks
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            We invite original, unpublished high-quality research papers across 6 major technical tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ICCSAI_TRACKS.map((track) => {
            const IconComp = iconMap[track.iconName] || BrainCircuit;
            return (
              <div
                key={track.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#131b2e] to-[#0a0e17] border border-white/10 hover:border-sky-400/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {track.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {track.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider block">
                    Sub-topics include:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {track.topics.map((top, i) => (
                      <span key={i} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-300 border border-white/10">
                        {top}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. KEY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/60 to-indigo-950 border border-purple-400/30 space-y-2 text-center">
            <Globe className="w-8 h-8 text-amber-400 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-white">Global Research Participation</h4>
            <p className="text-xs text-purple-200">Authors and keynote speakers from 20+ countries across North America, Europe, and Asia-Pacific.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/60 to-sky-950 border border-sky-400/30 space-y-2 text-center">
            <FileText className="w-8 h-8 text-sky-400 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-white">IEEE Xplore Publication</h4>
            <p className="text-xs text-sky-200">All presented papers will be submitted to IEEE Xplore Digital Library for indexing in Scopus and Web of Science.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/60 to-amber-950 border border-red-400/30 space-y-2 text-center">
            <Sparkles className="w-8 h-8 text-red-400 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-white">Expert Keynote Sessions</h4>
            <p className="text-xs text-red-200">Addresses by IEEE Fellows, IIT Professors, and Industry Research Directors.</p>
          </div>
        </div>
      </section>

      {/* 5. ORGANIZING COMMITTEE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 max-w-xl mx-auto mb-6">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Leadership & Patrons
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            Organizing & Advisory Board
          </h2>
        </div>
        <CommitteeGrid />
        <div className="text-center pt-4">
          <Link
            href="/iccsai-2026/committee"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-white underline underline-offset-4"
          >
            <span>View Complete Committee Roster</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 6. EMBEDDED GOOGLE MAP & VENUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
            Venue & Campus Location
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            Galgotias University Campus
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            {ICCSAI_INFO.venue.address}
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl aspect-[21/9] w-full relative">
          <iframe
            src={ICCSAI_INFO.venue.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Galgotias University Venue Map"
          ></iframe>
        </div>
      </section>

      {/* 7. NEARBY ATTRACTIONS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AttractionsCarousel />
      </section>

      <LogoStrip />
    </div>
  );
}
