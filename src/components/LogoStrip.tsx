"use client";

import React from "react";
import { Sparkles, ExternalLink } from "lucide-react";

export const LogoStrip: React.FC = () => {
  const societies = [
    {
      name: "IEEE Computer Society (CS)",
      short: "IEEE CS",
      src: "/societies/cs.png",
      alt: "IEEE Computer Society Logo",
      url: "https://www.computer.org/",
      desc: "Computing & Software Engineering",
      bgClass: "bg-slate-950/60",
    },
    {
      name: "IEEE Computational Intelligence Society (CIS)",
      short: "IEEE CIS",
      src: "/societies/cis-dark.png",
      alt: "IEEE Computational Intelligence Society Logo",
      url: "https://cis.ieee.org/",
      desc: "Neural Nets, Deep Learning & AI",
      bgClass: "bg-slate-950/60",
    },
    {
      name: "IEEE Women in Engineering (WIE)",
      short: "IEEE WIE",
      src: "/societies/wie-dark.png",
      alt: "IEEE Women in Engineering Logo",
      url: "https://wie.ieee.org/",
      desc: "Women in STEM Leadership",
      bgClass: "bg-slate-950/60",
    },
    {
      name: "IEEE Technology & Engineering Management (TEMS)",
      short: "IEEE TEMS",
      src: "/societies/tems.png",
      alt: "IEEE Technology and Engineering Management Society Logo",
      url: "https://www.ieee-tems.org/",
      desc: "Engineering Leadership & Mgmt",
      bgClass: "bg-slate-950/60",
    },
    {
      name: "IEEE Industry Applications Society (IAS)",
      short: "IEEE IAS",
      src: "/societies/ias-dark.png",
      alt: "IEEE Industry Applications Society Logo",
      url: "https://ias.ieee.org/",
      desc: "Industrial & Electrical Systems",
      bgClass: "bg-slate-950/60",
    },
    {
      name: "IEEE Photonics Society",
      short: "IEEE Photonics",
      src: "/societies/photonics.png",
      alt: "IEEE Photonics Society Logo",
      url: "https://photons.ieee.org/",
      desc: "Optics, Lasers & Quantum Tech",
      bgClass: "bg-slate-950/60",
    },
    {
      name: "IEEE Entrepreneurship",
      short: "IEEE Entrepreneurship",
      src: "/societies/entrepreneurship.svg",
      alt: "IEEE Entrepreneurship Logo",
      url: "https://entrepreneurship.ieee.org/",
      desc: "Startup Incubation & Ventures",
      bgClass: "bg-slate-950/60",
    },
    {
      name: "IEEE Microwave Theory and Technology Society (MTT-S)",
      short: "IEEE MTT-S",
      src: "/societies/mtts.svg",
      alt: "IEEE MTT-S Logo",
      url: "https://mtt.org/",
      desc: "RF, Microwave, Radar & Wireless",
      bgClass: "bg-slate-950/60",
    },
    {
      name: "IEEE Engineering in Medicine and Biology Society (EMBS)",
      short: "IEEE EMBS",
      src: "/societies/embs.svg",
      alt: "IEEE EMBS Logo",
      url: "https://www.embs.org/",
      desc: "Biomedical & Healthcare Tech",
      bgClass: "bg-slate-950/60",
    },
  ];

  return (
    <div className="py-14 bg-[#060911] border-y border-white/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Official IEEE Societies & Affinity Chapters</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 font-mono">
          IEEE Galgotias University Student Branch • STB99158 Chapter Network
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 px-4 max-w-7xl mx-auto">
        {societies.map((society, i) => (
          <a
            key={i}
            href={society.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit official ${society.name} website`}
            className="flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#0e1628]/90 via-[#0a101f]/90 to-[#060a14]/90 border border-white/10 hover:border-sky-400/80 hover:bg-[#121c33] hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer text-center min-h-[160px]"
          >
            {/* Logo Container */}
            <div
              className={`h-16 w-full flex items-center justify-center p-2 rounded-xl border border-white/10 group-hover:border-sky-400/30 transition-all ${
                society.bgClass || "bg-slate-950/60"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={society.src}
                alt={society.alt}
                className="max-h-12 max-w-[180px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow"
                loading="lazy"
              />
            </div>

            {/* Society Meta */}
            <div className="pt-2.5 w-full space-y-1">
              <div className="text-xs sm:text-[13px] font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-center gap-1">
                <span>{society.short}</span>
                <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-sky-300 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="text-[11px] text-slate-400 line-clamp-1 group-hover:text-slate-300 transition-colors">
                {society.desc}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
