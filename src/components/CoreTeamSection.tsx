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
    id: "atharva",
    name: "Atharva",
    surname: "Singh",
    role: "Treasurer",
    category: "lead",
    photo: "/images/team/atharav-singh.jpg",
    linkedin: "https://www.linkedin.com/in/atharva-singh",
    email: "atharva.singh@ieee.org",
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
  const shouldReduceMotion = useReducedMotion();

  // Background Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["-5%", "5%"]);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveMobileIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-[#0b0f19] via-[#10172b] to-[#0b0f19] text-slate-100 transition-colors border-y border-white/5"
    >
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Background Watermark */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center select-none"
      >
        <span className="font-serif font-black text-[20vw] text-white tracking-widest">
          IEEE
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        {/* 1. TOP LOGO BAR WITH SEAMLESS MATCHING GLASSMORPHISM */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-3"
        >
          {/* Galgotias University Official Logo */}
          <div className="flex items-center h-12 px-4 py-2 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-xl shadow-lg hover:border-amber-400/50 transition-all">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/gulogo.png"
              alt="Galgotias University"
              className="h-7 sm:h-8 w-auto object-contain brightness-105"
            />
          </div>

          <div className="h-6 w-px bg-white/15 hidden sm:block"></div>

          {/* IEEE Official Logo */}
          <div className="flex items-center h-12 px-4 py-2 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-xl shadow-lg hover:border-sky-400/50 transition-all">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sponsors/ieee.png"
              alt="IEEE"
              className="h-6 sm:h-7 w-auto object-contain brightness-105"
            />
          </div>

          <div className="h-6 w-px bg-white/15 hidden sm:block"></div>

          {/* IEEE Student Branch Official Logo */}
          <div className="flex items-center gap-2.5 h-12 px-4 py-2 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-xl shadow-lg hover:border-purple-400/50 transition-all">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/ieee-sb-dark-perfect.png"
              alt="IEEE Student Branch Galgotias University"
              className="h-7 sm:h-8 w-auto object-contain brightness-105"
            />
            <div className="text-left leading-tight hidden sm:block">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>IEEE GU SB</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/30 text-purple-200 border border-purple-400/30 font-mono">STB99158</span>
              </div>
              <div className="text-[10px] text-slate-300">
                Student Branch
              </div>
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
              <span className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-200 drop-shadow-md">
                IEEE GU SB
              </span>

              <span className="font-cursive-accent text-6xl sm:text-8xl md:text-9xl text-amber-400 -rotate-6 transform translate-y-1 sm:translate-y-3 font-normal drop-shadow-[0_0_35px_rgba(251,191,36,0.35)]">
                Core
              </span>
            </div>

            <div className="text-right pr-2 sm:pr-8 -mt-4 sm:-mt-8">
              <span className="font-serif text-xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.3em] text-amber-300 uppercase drop-shadow">
                TEAM
              </span>
            </div>

            <div className="mt-3 mx-auto w-56 sm:w-96 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent rounded-full"></div>
          </div>
        </motion.div>

        {/* ROLE HEADERS ROW (Desktop view) */}
        <div className="hidden lg:grid grid-cols-5 gap-4 text-center border-b border-white/10 pb-4">
          {CORE_TEAM_DATA.map((member, idx) => (
            <div key={member.id} className="relative flex items-center justify-center">
              <span className="font-serif text-xs xl:text-sm font-bold text-amber-300 uppercase tracking-wider">
                {member.role}
              </span>
              {idx < CORE_TEAM_DATA.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-px bg-white/10"></div>
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
            {CORE_TEAM_DATA.map((member) => (
              <div
                key={member.id}
                className="snap-center shrink-0 w-[85vw] max-w-xs"
              >
                <TeamCardItem member={member} isMobile={true} />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 pt-2">
            {CORE_TEAM_DATA.map((_, i) => (
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
          {CORE_TEAM_DATA.map((member) => (
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

  const avatarFallback = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400"><rect width="300" height="400" fill="%230f172a"/><circle cx="150" cy="140" r="65" fill="%231e293b"/><ellipse cx="150" cy="330" rx="90" ry="70" fill="%231e293b"/><text x="150" y="370" font-family="Georgia" font-size="18" fill="%23f4a300" text-anchor="middle">${member.name} ${member.surname}</text></svg>`;

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative rounded-2xl bg-gradient-to-b from-[#131d33]/90 via-[#162442]/70 to-[#0e1626]/95 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-amber-400/60 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] ${
        member.isLead ? "ring-2 ring-amber-400/40 shadow-amber-500/10" : ""
      }`}
    >
      {member.isLead && (
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-sky-500 rounded-2xl blur-md opacity-20 group-hover:opacity-50 transition-opacity pointer-events-none"></div>
      )}

      {isMobile && (
        <div className="w-full py-2.5 px-2 text-center bg-slate-900/80 border-b border-white/10">
          <span className="font-serif text-xs font-bold text-amber-300 uppercase tracking-wider">
            {member.role}
          </span>
        </div>
      )}

      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#0d1424] flex items-end justify-center">
        <Image
          src={imgError ? avatarFallback : member.photo}
          alt={`${member.name} ${member.surname}`}
          fill
          onError={() => setImgError(true)}
          className="object-cover object-top transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 85vw, 20vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1626] via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-300"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
          <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
              {member.role}
            </span>
            <div className="flex items-center gap-3 pt-1 border-t border-white/10">
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

      <div className="w-full py-3.5 px-2 text-center bg-[#0c1220]/90 border-t border-white/10">
        <div className="font-serif leading-tight">
          <div className={`${isMobile ? "text-lg" : "text-base sm:text-lg"} font-medium text-white tracking-wide`}>
            {member.name}
          </div>
          <div className={`${isMobile ? "text-xl" : "text-lg sm:text-xl"} font-bold text-amber-400 tracking-wide drop-shadow`}>
            {member.surname}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
