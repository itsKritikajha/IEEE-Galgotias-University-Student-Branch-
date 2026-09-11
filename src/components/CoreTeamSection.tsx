"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export type CoreTeamMember = {
  id: string;
  name: string;
  surname: string;
  role: string;
  category: "lead" | "executive" | "advisor";
  photo: string;
  linkedin?: string;
  email?: string;
  isLead?: boolean;
};

export const CORE_TEAM_DATA: CoreTeamMember[] = [
  {
    id: "atharav",
    name: "Atharav",
    surname: "Singh",
    role: "Treasurer",
    category: "lead",
    photo: "/images/team/atharav-singh.jpg",
    linkedin: "https://www.linkedin.com/in/atharav-singh",
    email: "atharav.singh@ieee.org",
  },
  {
    id: "rahil",
    name: "Mohammad",
    surname: "Rahil",
    role: "Secretary",
    category: "lead",
    photo: "/images/team/mohammad-rahil.jpg",
    linkedin: "https://www.linkedin.com/in/mohammad-rahil",
    email: "mohammad.rahil@ieee.org",
  },
  {
    id: "ansh",
    name: "Ansh",
    surname: "Vashisth",
    role: "Chairperson",
    category: "lead",
    photo: "/images/team/ansh-vashisth.jpg",
    linkedin: "https://www.linkedin.com/in/ansh-vashisth",
    email: "ansh.vashisth@ieee.org",
    isLead: true,
  },
  {
    id: "kritika",
    name: "Kritika",
    surname: "Jha",
    role: "Vice Chairperson",
    category: "lead",
    photo: "/images/team/kritika-jha.jpg",
    linkedin: "https://www.linkedin.com/in/kritika-jha-60a1752b4/",
    email: "kritika.jha@ieee.org",
  },
  {
    id: "tarun",
    name: "Tarun",
    surname: "Kushwaha",
    role: "Tech Lead",
    category: "lead",
    photo: "/images/team/tarun-kushwaha.jpg",
    linkedin: "https://www.linkedin.com/in/tarun-kushwaha",
    email: "tarun.kushwaha@ieee.org",
  },
];

export const CoreTeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [filter, setFilter] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  // Background Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["-5%", "5%"]);

  const filteredMembers = filter === "All"
    ? CORE_TEAM_DATA
    : CORE_TEAM_DATA.filter((m) => m.category === filter || (filter === "Leads" && m.isLead));

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveMobileIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-[#EDE9FE] via-[#6D28D9] to-[#4C1D95] text-slate-100 transition-colors"
    >
      {/* Background Watermark */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center select-none"
      >
        <span className="font-serif font-black text-[18vw] text-white tracking-widest">
          IEEE
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        {/* 1. TOP LOGO BAR */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 sm:gap-12 py-2"
        >
          <div className="flex items-center gap-2 bg-purple-950/20 px-3 py-1.5 rounded-xl border border-white/20 backdrop-blur-md">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center font-bold text-white text-xs shadow">
              GU
            </div>
            <div className="text-left font-serif text-[11px] font-bold text-slate-800 tracking-wider">
              GALGOTIAS<br />UNIVERSITY
            </div>
          </div>

          <div className="h-6 w-px bg-purple-900/30"></div>

          <div className="flex items-center gap-2 bg-blue-900/20 px-3 py-1.5 rounded-xl border border-blue-600/30 backdrop-blur-md">
            <div className="w-9 h-8 bg-[#1D4ED8] rounded-md flex items-center justify-center font-black text-white text-xs tracking-wider shadow">
              IEEE
            </div>
          </div>

          <div className="h-6 w-px bg-purple-900/30"></div>

          <div className="flex items-center gap-2 bg-purple-900/30 px-3 py-1.5 rounded-xl border border-purple-400/30 backdrop-blur-md">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-800 p-0.5 shadow">
              <div className="w-full h-full bg-[#3B0764] rounded flex items-center justify-center font-bold text-[10px] text-purple-200">
                GU SB
              </div>
            </div>
            <div className="text-left font-sans text-[11px] font-semibold text-slate-100">
              Student<br />Branch
            </div>
          </div>
        </motion.div>

        {/* 2. CENTERED SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center select-none"
        >
          <div className="relative inline-block px-4">
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-1">
              <span className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1D4ED8] drop-shadow-md">
                IEEE GU SB
              </span>

              <span className="font-cursive-accent text-6xl sm:text-8xl md:text-9xl text-[#DC2626] -rotate-6 transform translate-y-1 sm:translate-y-3 font-normal drop-shadow-lg">
                Core
              </span>
            </div>

            <div className="text-right pr-2 sm:pr-8 -mt-4 sm:-mt-8">
              <span className="font-serif text-xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.3em] text-[#DC2626] uppercase">
                TEAM
              </span>
            </div>

            <div className="mt-3 mx-auto w-56 sm:w-96 h-1 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent rounded-full"></div>
          </div>
        </motion.div>

        {/* FLEXIBLE FILTER CONTROLS */}
        <div className="flex justify-center items-center gap-2">
          {["All", "Leads"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === cat
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "bg-purple-950/40 text-purple-200 border border-purple-400/30 hover:bg-purple-900/60"
              }`}
            >
              {cat === "All" ? "Full 5-Member Team" : "Chairperson Spotlight"}
            </button>
          ))}
        </div>

        {/* ROLE HEADERS ROW (Desktop view) */}
        <div className="hidden lg:grid grid-cols-5 gap-4 text-center border-b border-purple-300/30 pb-4">
          {filteredMembers.map((member, idx) => (
            <div key={member.id} className="relative flex items-center justify-center">
              <span className="font-serif text-sm xl:text-base font-bold text-[#FF6B6B] uppercase tracking-wider">
                {member.role}
              </span>
              {idx < filteredMembers.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-px bg-purple-300/30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Snap-Scroll Carousel */}
        <div className="lg:hidden space-y-4">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar space-x-6 px-4 py-4"
          >
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="snap-center shrink-0 w-[85vw] max-w-xs"
              >
                <TeamCardItem member={member} isMobile={true} />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 pt-2">
            {filteredMembers.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  carouselRef.current?.scrollTo({
                    left: i * (carouselRef.current.clientWidth || 300),
                    behavior: "smooth",
                  });
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeMobileIndex === i
                    ? "w-8 bg-[#F4A300]"
                    : "w-2.5 bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop 5-Column Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="hidden lg:grid grid-cols-5 gap-6"
        >
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              <TeamCardItem member={member} isMobile={false} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TeamCardItem: React.FC<{ member: CoreTeamMember; isMobile: boolean }> = ({
  member,
  isMobile,
}) => {
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const avatarFallback = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400"><rect width="300" height="400" fill="%233b0764"/><circle cx="150" cy="140" r="65" fill="%236b21a8"/><ellipse cx="150" cy="330" rx="90" ry="70" fill="%236b21a8"/><text x="150" y="370" font-family="Georgia" font-size="18" fill="%23f4a300" text-anchor="middle">${member.name} ${member.surname}</text></svg>`;

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative rounded-2xl bg-gradient-to-b from-[#8B5CF6]/30 via-[#6D28D9]/50 to-[#4C1D95]/90 border border-purple-300/20 shadow-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-[#F4A300]/60 hover:shadow-purple-700/40 ${
        member.isLead ? "ring-2 ring-[#F4A300]/40 shadow-amber-500/20" : ""
      }`}
    >
      {member.isLead && (
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-purple-600 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
      )}

      {isMobile && (
        <div className="w-full py-2.5 px-2 text-center bg-purple-950/80 border-b border-white/10">
          <span className="font-serif text-sm font-bold text-[#FF6B6B] uppercase tracking-wider">
            {member.role}
          </span>
        </div>
      )}

      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-b from-[#C084FC]/30 via-[#7C3AED]/40 to-[#4C1D95] flex items-end justify-center">
        <Image
          src={imgError ? avatarFallback : member.photo}
          alt={`${member.name} ${member.surname}`}
          fill
          onError={() => setImgError(true)}
          className="poster-duotone-img object-cover object-top transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          sizes="(max-width: 640px) 85vw, 20vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#4C1D95] via-transparent to-transparent opacity-90 group-hover:opacity-50 transition-opacity duration-300"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
          <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
              {member.role}
            </span>
            <div className="flex items-center gap-3 pt-1 border-t border-purple-400/30">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-sky-600/30 border border-sky-400/40 flex items-center justify-center text-sky-300 hover:bg-sky-500 hover:text-white transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300 hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-4 px-2 text-center bg-[#4C1D95]/95 border-t border-purple-300/20">
        <div className="font-serif leading-tight">
          <div className={`${isMobile ? "text-lg" : "text-base sm:text-lg"} font-medium text-white tracking-wide`}>
            {member.name}
          </div>
          <div className={`${isMobile ? "text-xl" : "text-lg sm:text-xl"} font-bold text-[#F4A300] tracking-wide drop-shadow`}>
            {member.surname}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
