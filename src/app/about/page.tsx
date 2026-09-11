"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Target, Award, Globe, BookOpen, Users, ArrowRight } from "lucide-react";
import { LogoStrip } from "@/components/LogoStrip";

export default function AboutPage() {
  const objectives = [
    {
      title: "Technical Excellence",
      desc: "Providing hands-on exposure to futuristic domains including AI, Quantum Computing, Cybersecurity, and Robotics.",
      icon: Target,
    },
    {
      title: "Research & Publication Culture",
      desc: "Guiding students to author original research papers and present at indexed IEEE conferences like ICCSAI.",
      icon: BookOpen,
    },
    {
      title: "Leadership & Chapter Mentorship",
      desc: "Cultivating organizational leadership, project management, and public speaking skills through student executive roles.",
      icon: Award,
    },
    {
      title: "Global IEEE Professional Network",
      desc: "Connecting Galgotias University students with 420,000+ IEEE members across 160 countries worldwide.",
      icon: Globe,
    },
  ];

  return (
    <div className="space-y-16 py-10">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span>IEEE Student Branch Code: STB99158</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
          About <span className="text-sky-400">IEEE</span> <span className="text-purple-300">GU SB</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Empowering technology enthusiasts, student researchers, and future engineers at Galgotias University under the aegis of IEEE UP Section (Region 10).
        </p>
      </section>

      {/* History & Affiliation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#131b2e] via-[#1e1b4b] to-[#0a0e17] p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Our Journey & Roots
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Bridging Academic Theory with Global Engineering Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Established at Galgotias University, Greater Noida, IEEE GU SB serves as the vibrant technical hub for undergraduate and postgraduate students. We operate under IEEE UP Section, which encompasses top institutes like IIT Kanpur, IIT BHU, and MNIT.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our student branch actively organizes technical masterclasses, hackathons, coding sprints, and international research conferences, including the flagship ICCSAI conference series indexed in IEEE Xplore.
            </p>
          </div>

          <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <h3 className="font-serif text-xl font-bold text-sky-300">
              Galgotias University Alignment
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Galgotias University is committed to world-class educational standards, state-of-the-art research laboratories, and strong industry partnerships. IEEE GU SB complements this academic vision by instilling professional ethics and global technical exposure.
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-amber-300 font-semibold border-t border-white/10">
              <span>Institution: Galgotias University</span>
              <span>Region: IEEE Region 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Objectives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
            Strategic Roadmap
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            Our Core Vision & Objectives
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, idx) => {
            const IconComp = obj.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0f172a] border border-white/10 space-y-3 shadow-lg hover:border-sky-400/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-sky-400">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  {obj.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-[#003366] border border-purple-400/30 shadow-2xl space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Ready to Elevate Your Engineering Career?
          </h3>
          <p className="text-xs sm:text-sm text-purple-200 max-w-xl mx-auto">
            Become an active IEEE student member today and unlock exclusive discounts, project grants, and leadership roles.
          </p>
          <div className="pt-2">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-red-500 text-slate-950 font-bold text-sm shadow-lg hover:scale-105 transition-all"
            >
              <span>Explore Member Benefits</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <LogoStrip />
    </div>
  );
}
