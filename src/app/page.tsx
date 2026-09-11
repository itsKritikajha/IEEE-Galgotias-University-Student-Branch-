"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Award, Users, CalendarCheck, BookOpenCheck, Zap, Code, ShieldCheck, Trophy, Layers } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { LogoStrip } from "@/components/LogoStrip";
import { ICCSAI_INFO } from "@/data/iccsaiData";

export default function HomePage() {
  const stats = [
    { label: "Active Student Members", value: "500+", icon: Users },
    { label: "Technical Events & Hackathons", value: "40+", icon: CalendarCheck },
    { label: "Hands-on Workshops", value: "15+", icon: Code },
    { label: "Years of Excellence", value: "5+", icon: Award },
  ];

  const whatWeDo = [
    {
      title: "Hands-on Technical Workshops",
      desc: "Masterclasses on AI/ML, Cybersecurity, Cloud Infrastructure, IoT, and Full-Stack Engineering taught by senior mentors.",
      icon: Code,
      color: "from-sky-500 to-blue-600",
    },
    {
      title: "National Level Hackathons",
      desc: "36-hour hackathons including HackOverflow, fostering rapid prototyping, solution architecture, and cash prize pools.",
      icon: Trophy,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Research & Publications Support",
      desc: "Mentorship for publishing in IEEE Xplore, drafting research papers, and attending international conferences.",
      icon: BookOpenCheck,
      color: "from-amber-500 to-red-600",
    },
    {
      title: "Industry-Academia Bridge",
      desc: "Guest lectures, fireside chats, and hiring connect sessions with tech leaders from Microsoft, Google, AWS, and startups.",
      icon: Layers,
      color: "from-emerald-500 to-teal-700",
    },
    {
      title: "IEEE Flagship Conferences",
      desc: "Organizers of ICCSAI 2026 international conference gathering international researchers across 4 core domains.",
      icon: Sparkles,
      color: "from-[#00629B] to-purple-800",
    },
    {
      title: "Student Leadership & Chapters",
      desc: "Specialized affinity groups including IEEE Computer Society, Women in Engineering (WIE), and Industry Applications Society.",
      icon: ShieldCheck,
      color: "from-pink-600 to-purple-900",
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO BANNER - Full-bleed Blue->Purple Gradient */}
      <section className="relative overflow-hidden bg-hero-gradient pt-12 sm:pt-20 pb-20 lg:pb-32 border-b border-white/10">
        {/* Glowing Background Blobs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sky-300 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Official Student Branch #STB99158 • IEEE UP Section</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">
            IEEE Galgotias University <br />
            <span className="bg-gradient-to-r from-sky-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
              Student Branch
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-2xl font-light text-purple-100 italic font-serif max-w-2xl mx-auto">
            &ldquo;Advancing Technology for Humanity&rdquo;
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Representing the world&apos;s largest technical professional organization at Galgotias University. Fostering research, engineering excellence, and student empowerment.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/iccsai-2026"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-red-600 text-slate-950 font-extrabold text-sm shadow-xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>ICCSAI 2026 Conference</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/events"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all duration-300"
            >
              Explore Events
            </Link>

            <Link
              href="/membership"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00629B] to-purple-700 text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/30 transition-all duration-300 border border-white/20"
            >
              Join IEEE GU SB
            </Link>
          </div>
        </div>
      </section>

      {/* 2. QUICK STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#131b2e] to-[#0a0e17] border border-white/10 text-center space-y-2 shadow-xl hover:border-sky-400/40 transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-sky-400">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ICCSAI 2026 FEATURED SPOTLIGHT & LIVE COUNTDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1e1b4b] via-[#3b0764] to-[#0f172a] border-2 border-amber-400/40 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Flagship IEEE Conference</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {ICCSAI_INFO.fullTitle}
              </h2>

              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                Organized by IEEE GU SB at Galgotias University, Greater Noida (NCR Delhi). All accepted & presented research papers will be submitted to IEEE Xplore.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-sky-300">
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  📅 Dates: {ICCSAI_INFO.dates}
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  📍 Location: {ICCSAI_INFO.venue.city}
                </span>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/iccsai-2026"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all"
                >
                  Explore Conference & Tracks
                </Link>
                <a
                  href={ICCSAI_INFO.cmtSubmitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-purple-600/40 border border-purple-400/40 text-white font-bold text-xs hover:bg-purple-600 transition-all"
                >
                  Submit Paper via CMT
                </a>
              </div>
            </div>

            {/* Countdown Box */}
            <div className="lg:col-span-5 text-center space-y-4 bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <span className="text-xs font-extrabold text-amber-300 uppercase tracking-widest block">
                Conference Countdown
              </span>
              <CountdownTimer targetIsoDate={ICCSAI_INFO.isoStartDate} />
              <div className="text-[11px] text-slate-400">
                November 28–30, 2026 • Greater Noida, India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
            Core Initiatives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            What We Do at IEEE GU SB
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Building technical competencies, research culture, and career pathways for engineering students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeDo.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#131b2e] to-[#0a0e17] border border-white/10 hover:border-purple-500/40 transition-all duration-300 space-y-4 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. AFFILIATION LOGO STRIP */}
      <LogoStrip />
    </div>
  );
}
