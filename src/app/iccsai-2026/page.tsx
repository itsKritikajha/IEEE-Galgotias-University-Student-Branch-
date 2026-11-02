"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  MapPin,
  ExternalLink,
  Globe,
  FileText,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Wifi,
  Database,
  Cpu,
  Blocks,
  Award,
} from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CommitteeGrid } from "@/components/CommitteeGrid";
import { AttractionsCarousel } from "@/components/AttractionsCarousel";
import { LogoStrip } from "@/components/LogoStrip";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
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
    <div className="space-y-16 py-10 pb-20 overflow-hidden">
      {/* 1. HERO SECTION WITH PURPLE/BLUE AURORA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#3b0764] to-[#070a12] py-16 sm:py-24 border-b border-purple-500/30">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>4th IEEE International Conference • IEEE Xplore Proceeding</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-5xl mx-auto"
          >
            {ICCSAI_INFO.fullTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-purple-200 font-serif italic max-w-3xl mx-auto font-light"
          >
            &ldquo;Advancing Intelligent Systems, Cyber Resilience, and Next-Gen Communication Infrastructures&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-200"
          >
            <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center gap-1.5 backdrop-blur-md">
              <Calendar className="w-4 h-4 text-amber-400" /> {ICCSAI_INFO.dates}
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center gap-1.5 backdrop-blur-md">
              <MapPin className="w-4 h-4 text-red-400" /> {ICCSAI_INFO.venue.name}, {ICCSAI_INFO.venue.city}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <ShimmerButton href={ICCSAI_INFO.cmtSubmitUrl} icon={<ExternalLink className="w-4 h-4" />}>
              Submit Paper via Microsoft CMT
            </ShimmerButton>

            <Link
              href="/iccsai-2026/registration"
              className="px-6 py-3.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-all hover:scale-105"
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

      {/* 2. IMPORTANT DATES TABLE (Tremor Style Timeline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Timeline & Deadlines
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Important Conference Dates
          </h2>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl bg-[#0c1222]/90 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-purple-950/80 text-amber-300 font-serif border-b border-white/10 uppercase tracking-wider">
              <tr>
                <th className="py-4 px-6">Milestone Event</th>
                <th className="py-4 px-6 text-right">Deadline Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-slate-200">
              {ICCSAI_IMPORTANT_DATES.map((item, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-purple-900/20 transition-colors ${
                    item.highlight ? "bg-amber-500/10 font-bold text-amber-300" : ""
                  }`}
                >
                  <td className="py-3.5 px-6 flex items-center gap-2.5">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${
                        item.highlight ? "text-amber-400 animate-pulse" : "text-sky-400"
                      }`}
                    />
                    <span>{item.event}</span>
                  </td>
                  <td className="py-3.5 px-6 text-right font-mono font-semibold">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. CONFERENCE TRACKS (Spotlight Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
            Call for Papers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Technical Research Tracks
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            We invite original, high-quality research papers across 6 specialized technical tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ICCSAI_TRACKS.map((track) => {
            const IconComp = iconMap[track.iconName] || BrainCircuit;
            return (
              <SpotlightCard
                key={track.id}
                className="p-6 space-y-4 flex flex-col justify-between"
                spotlightColor="rgba(56, 189, 248, 0.12)"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-300 shadow-inner">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {track.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {track.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider block">
                    Sub-topics include:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {track.topics.map((top, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white/5 px-2 py-0.5 rounded-md text-slate-300 border border-white/10"
                      >
                        {top}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* 4. KEY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard
            className="p-6 space-y-2 text-center"
            spotlightColor="rgba(245, 158, 11, 0.15)"
          >
            <Globe className="w-8 h-8 text-amber-400 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-white">Global Research Participation</h4>
            <p className="text-xs text-slate-300 font-light">
              Authors and keynote speakers from 20+ countries across North America, Europe, and Asia-Pacific.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="p-6 space-y-2 text-center"
            spotlightColor="rgba(56, 189, 248, 0.15)"
          >
            <FileText className="w-8 h-8 text-sky-400 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-white">IEEE Xplore Publication</h4>
            <p className="text-xs text-slate-300 font-light">
              All presented papers will be submitted to IEEE Xplore Digital Library for indexing in Scopus and Web of Science.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="p-6 space-y-2 text-center"
            spotlightColor="rgba(239, 68, 68, 0.15)"
          >
            <Sparkles className="w-8 h-8 text-red-400 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-white">Expert Keynote Sessions</h4>
            <p className="text-xs text-slate-300 font-light">
              Addresses by IEEE Fellows, IIT Professors, and Industry Research Directors.
            </p>
          </SpotlightCard>
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
