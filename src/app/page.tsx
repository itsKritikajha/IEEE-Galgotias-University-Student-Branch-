"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Users,
  CalendarCheck,
  Code,
  Trophy,
  ChevronDown,
  Quote,
  ExternalLink,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { LogoStrip } from "@/components/LogoStrip";
import { CountUp } from "@/components/ui/CountUp";
import { Marquee } from "@/components/ui/Marquee";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { InteractiveTabs } from "@/components/ui/InteractiveTabs";
import { HeroSlider } from "@/components/ui/HeroSlider";
import SocialCards, { CardItem } from "@/components/ui/card-fan-carousel";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    {
      label: "Active Student Members",
      value: 200,
      suffix: "+",
      icon: Users,
      change: "Active Community",
      gradient: "from-sky-400 to-cyan-400",
      numGradient: "from-white via-sky-100 to-sky-300",
      bgGlow: "rgba(56,189,248,0.2)",
      badge: "bg-sky-500/10 text-sky-300 border-sky-500/25",
      iconStyle: "bg-sky-500/15 border-sky-400/30 text-sky-400",
    },
    {
      label: "Technical Events & Hackathons",
      value: 10,
      suffix: "+",
      icon: CalendarCheck,
      change: "Documented Events",
      gradient: "from-purple-400 to-indigo-400",
      numGradient: "from-white via-purple-100 to-purple-300",
      bgGlow: "rgba(168,85,247,0.2)",
      badge: "bg-purple-500/10 text-purple-300 border-purple-500/25",
      iconStyle: "bg-purple-500/15 border-purple-400/30 text-purple-400",
    },
    {
      label: "Hands-on Workshops",
      value: 15,
      suffix: "+",
      icon: Code,
      change: "Industry Mentors",
      gradient: "from-teal-400 to-emerald-400",
      numGradient: "from-white via-teal-100 to-emerald-300",
      bgGlow: "rgba(20,184,166,0.2)",
      badge: "bg-teal-500/10 text-teal-300 border-teal-500/25",
      iconStyle: "bg-teal-500/15 border-teal-400/30 text-teal-400",
    },
    {
      label: "Outstanding Emerging SB",
      value: 2025,
      suffix: "",
      icon: Trophy,
      change: "IEEE India Council Award",
      gradient: "from-amber-400 to-yellow-400",
      numGradient: "from-white via-amber-100 to-yellow-300",
      bgGlow: "rgba(245,158,11,0.2)",
      badge: "bg-amber-500/10 text-amber-300 border-amber-500/25",
      iconStyle: "bg-amber-500/15 border-amber-400/30 text-amber-400",
    },
  ];

  const marqueePartners = [
    {
      name: "IEEE Computer Society",
      desc: "Computing & Software",
      logo: "/societies/cs.png",
      url: "https://www.computer.org/",
    },
    {
      name: "IEEE CIS",
      desc: "Computational Intelligence",
      logo: "/societies/cis-dark.png",
      url: "https://cis.ieee.org/",
    },
    {
      name: "IEEE WIE",
      desc: "Women in Engineering",
      logo: "/societies/wie.png",
      url: "https://wie.ieee.org/",
    },
    {
      name: "IEEE TEMS",
      desc: "Tech & Engg Management",
      logo: "/societies/tems.png",
      url: "https://www.ieee-tems.org/",
    },
    {
      name: "IEEE IAS",
      desc: "Industry Applications",
      logo: "/societies/ias-dark.png",
      url: "https://ias.ieee.org/",
    },
    {
      name: "IEEE Photonics",
      desc: "Optics & Quantum Systems",
      logo: "/societies/photonics.png",
      url: "https://photons.ieee.org/",
    },
    {
      name: "IEEE Entrepreneurship",
      desc: "Startup & Innovation",
      logo: "/societies/entrepreneurship.svg",
      url: "https://entrepreneurship.ieee.org/",
    },
    {
      name: "IEEE MTT-S",
      desc: "Microwave & Wireless",
      logo: "/societies/mtts.svg",
      url: "https://mtt.org/",
    },
    {
      name: "IEEE EMBS",
      desc: "Biomedical & Health Tech",
      logo: "/societies/embs.svg",
      url: "https://www.embs.org/",
    },
    {
      name: "Galgotias University",
      desc: "Host Campus • Greater Noida",
      logo: "/logos/gulogo.png",
      url: "https://www.galgotiasuniversity.edu.in/",
    },
    {
      name: "ICCSAI 2026",
      desc: "Flagship IEEE Conference",
      logo: "/logos/iccsai_logo.png",
      url: "/iccsai-2026",
    },
    {
      name: "IEEE UP Section",
      desc: "Region 10 (STB99158)",
      logo: "/sponsors/ieee.png",
      url: "https://www.ieeeup.org/",
    },
    {
      name: "IEEE Xplore",
      desc: "Scopus & WoS Indexed",
      logo: "/sponsors/ieeeXplore.png",
      url: "https://ieeexplore.ieee.org/",
    },
  ];

  const testimonialCards: CardItem[] = [
    {
      quote:
        "IEEE was never just about organizing events for me. It was about building a vision, leading a team, and creating meaningful impact.",
      author: "Shubhranshu Shekhar Dash",
      role: "Former Chairperson, IEEE GU Student Branch",
      badge: "Former Chairperson",
      badgeStyle: "bg-sky-500/10 text-sky-300 border-sky-500/25",
      iconColor: "text-sky-400",
      glowColor: "rgba(56, 189, 248, 0.25)",
    },
    {
      quote:
        "From aspiring for a community to actively building one, the journey has been incredible. Let's continue to dream big and achieve greater heights!",
      author: "Anurag Kumar Singh",
      role: "Former Vice Chairperson, IEEE GU Student Branch",
      badge: "Former Vice Chair",
      badgeStyle: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25",
      iconColor: "text-indigo-400",
      glowColor: "rgba(99, 102, 241, 0.25)",
    },
    {
      quote:
        "IEEE helped me learn beyond classrooms, work with inspiring people, and experience the power of collective effort.",
      author: "Kavya Singh",
      role: "IEEE TEMS GU • Galgotias University",
      badge: "IEEE TEMS GU",
      badgeStyle: "bg-purple-500/10 text-purple-300 border-purple-500/25",
      iconColor: "text-purple-400",
      glowColor: "rgba(168, 85, 247, 0.25)",
    },
    {
      quote:
        "IEEE IAS helped me turn technical knowledge into a real-world solution and reinforced the importance of teamwork and hands-on learning.",
      author: "Saransh Tyagi",
      role: "IEEE IAS, Galgotias University",
      badge: "IEEE IAS GU",
      badgeStyle: "bg-amber-500/10 text-amber-300 border-amber-500/25",
      iconColor: "text-amber-400",
      glowColor: "rgba(245, 158, 11, 0.25)",
    },
    {
      quote:
        "My IEEE journey has taught me leadership, teamwork, coordination and responsibility — from turning an idea into reality to working with a team to create meaningful impact.",
      author: "Kritika Jha",
      role: "IEEE GU Student Branch / IEEE Region 10",
      badge: "Region 10 & Branch Lead",
      badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
      iconColor: "text-emerald-400",
      glowColor: "rgba(52, 211, 153, 0.25)",
    },
    {
      quote:
        "IEEE taught me that leadership goes beyond organizing events. It is about responsibility, innovation, collaboration, and creating an environment where ideas can truly thrive.",
      author: "Rashi Bajpai",
      role: "Former Secretary, IEEE GU Student Branch",
      badge: "Former Secretary",
      badgeStyle: "bg-rose-500/10 text-rose-300 border-rose-500/25",
      iconColor: "text-rose-400",
      glowColor: "rgba(244, 63, 94, 0.25)",
    },
    {
      quote:
        "Growth happens when opportunity meets mentorship—and IEEE has given me both.",
      author: "Manas Saxena",
      role: "Website & Graphics Chair, IC2PCT 2026 • IEEE GU SB",
      badge: "IC2PCT Web & Design Lead",
      badgeStyle: "bg-teal-500/10 text-teal-300 border-teal-500/25",
      iconColor: "text-teal-400",
      glowColor: "rgba(20, 184, 166, 0.25)",
    },
    {
      quote:
        "IEEE motivates me to keep learning, growing, and contributing to technology and innovation.",
      author: "Ansh Vashisth",
      role: "Chairperson, IEEE GU Computational Intelligence Society",
      badge: "IEEE CIS Chair",
      badgeStyle: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/25",
      iconColor: "text-fuchsia-400",
      glowColor: "rgba(217, 70, 239, 0.25)",
    },
    {
      quote:
        "I hope this milestone serves as an inspiration for more students at Galgotias University to engage with IEEE and take leadership roles that can open doors globally.",
      author: "Gaurang Pant",
      role: "IEEE Computer Society GU | Richard E. Merwin Scholar",
      badge: "Richard E. Merwin Scholar",
      badgeStyle: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
      iconColor: "text-cyan-400",
      glowColor: "rgba(6, 182, 212, 0.25)",
    },
  ];

  const faqs = [
    {
      question: "What is IEEE GU SB and who can join?",
      answer:
        "IEEE GU SB (Student Branch #STB99158) is the official student branch of IEEE at Galgotias University, Greater Noida. Any undergraduate or postgraduate student across engineering, computing, and technology streams is eligible to join and participate in all workshops, conferences, and student committees.",
    },
    {
      question: "How does IEEE membership help my engineering career?",
      answer:
        "IEEE membership provides discounted access to 5+ million IEEE Xplore research papers, global student travel grants, discounted registrations for IEEE conferences, leadership opportunities in specialized affinity groups (Computer Society, WIE, IAS), and peer networking with 420,000+ members worldwide.",
    },
    {
      question: "What is ICCSAI 2026?",
      answer:
        "ICCSAI 2026 (4th IEEE International Conference on Communication, Computing & Artificial Intelligence) is our flagship international conference held on Nov 28–30, 2026. All accepted and presented papers will be submitted to IEEE Xplore for Scopus indexing.",
    },
    {
      question: "How can I submit a paper or join an organizing committee?",
      answer:
        "Paper submissions are accepted via Microsoft CMT on our ICCSAI 2026 portal. For student committee recruitments, you can apply directly through our Membership & Team intake form on this website.",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-20 overflow-hidden">
      {/* 1. HERO SLIDER SECTION (7 Numbered Event & Delegation Slides) */}
      <section className="relative overflow-hidden pt-4 sm:pt-6 pb-2">
        <HeroSlider />
      </section>

      {/* 1.5 OFFICIAL BRANCH KEYNOTE STATEMENT (Royal Purple / Violet Gradient) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#2e0854] via-[#581c87] to-[#7c3aed] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-10px_rgba(124,58,237,0.45)] overflow-hidden border border-purple-400/30">
          {/* Left Vertical Glowing Cyan Indicator Bar */}
          <div className="absolute left-0 top-5 bottom-5 w-1.5 sm:w-2 bg-gradient-to-b from-cyan-300 to-sky-400 rounded-r-md shadow-[0_0_12px_rgba(56,189,248,0.9)]" />

          {/* Micro Grid Texture Overlay */}
          <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />

          {/* Right Floating Target Circle Badge */}
          <div className="absolute -bottom-5 -right-5 sm:bottom-4 sm:right-8 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-[#3B0764] via-[#7C3AED] to-[#00B5E2] p-3.5 sm:p-4 md:p-5 shadow-2xl flex items-center justify-center border-4 border-white/30 backdrop-blur-md pointer-events-none select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/target.svg"
              alt="IEEE Keynote Target"
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          </div>

          <div className="relative z-10 max-w-4xl pr-12 sm:pr-24 space-y-3 sm:space-y-4 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-white/30 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 shrink-0 shadow-[0_0_8px_#38bdf8] animate-pulse" />
              <span>KEYNOTE</span>
            </div>

            {/* Heading Tagline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
              &ldquo;Advancing Technology, <span className="text-cyan-300">Empowering Innovation</span>&rdquo;
            </h2>

            {/* Body Statement with Highlighted Words */}
            <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-normal">
              <strong className="text-cyan-300 font-bold">IEEE GU Student Branch</strong> is committed to nurturing a culture of <strong className="text-cyan-300 font-semibold">innovation, technical excellence, and leadership</strong>. By connecting students with <strong className="text-cyan-300 font-semibold">emerging technologies</strong>, expert knowledge, research opportunities, and professional networks, we aim to inspire young minds to learn, create, and lead. Our vision is to empower students with the <strong className="text-cyan-300 font-semibold">skills, confidence, and collaborative spirit</strong> needed to transform ideas into meaningful solutions for society.
            </p>
          </div>
        </div>
      </section>

      {/* 1.6 ABOUT GALGOTIAS UNIVERSITY SECTION (Clean Grid without Outer Background) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left: Galgotias University Transparent Large Logo */}
          <div className="lg:col-span-5 flex items-center justify-center p-4 sm:p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/gulogo.png"
              alt="Galgotias University Logo"
              className="w-full h-auto max-h-48 sm:max-h-60 md:max-h-72 max-w-md sm:max-w-lg object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right: Stacked Layered Card (Stepped Cascading Left Ribbons matching Picture 1) */}
          <div className="lg:col-span-7 relative flex flex-col justify-center pb-8 sm:pb-10 pl-6 sm:pl-12">
            {/* Layer 1: Bottom Blue Ribbon (Stepped furthest left with rounded-l-full) */}
            <div className="absolute -bottom-6 sm:-bottom-7 left-0 right-0 h-4 sm:h-5 bg-[#299fe0] rounded-l-full sm:rounded-l-2xl -z-20 shadow-xs" />

            {/* Layer 2: Middle Yellow Ribbon (Stepped middle left with rounded-l-full) */}
            <div className="absolute -bottom-3 sm:-bottom-3.5 left-3 sm:left-6 right-0 h-4 sm:h-5 bg-[#e5a910] rounded-l-full sm:rounded-l-2xl -z-10 shadow-xs" />

            {/* Layer 3: Main Red Top Card */}
            <div className="relative z-10 bg-gradient-to-br from-[#ba1a1a] to-[#991b1b] text-white p-6 sm:p-8 md:p-9 rounded-2xl sm:rounded-3xl shadow-[0_15px_40px_-10px_rgba(186,26,26,0.5)] border border-red-400/30 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-xs shrink-0 shadow-xs inline-block" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  About Galgotias University
                </h2>
              </div>

              <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                Galgotias University is home to 30K+ students, with 20 schools offering 200+ programs across diverse disciplines. The university is committed to excellence in teaching, research, innovation, and professional development. Its IEEE GU Student Branch provides a platform for students to develop technical expertise, leadership skills, and industry connections while fostering innovation, collaboration, and a strong culture of learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1.7 IEEE GU STUDENT BRANCH MESSAGE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left: Stacked Layered Message Card (Stepped Cascading Right Ribbons) */}
          <div className="lg:col-span-7 relative flex flex-col justify-center pb-8 sm:pb-10 pr-6 sm:pr-12 order-2 lg:order-1">
            {/* Layer 1: Bottom Cyan/Sky Ribbon (Stepped furthest right with rounded-r-full) */}
            <div className="absolute -bottom-6 sm:-bottom-7 left-0 right-0 h-4 sm:h-5 bg-[#00B5E2] rounded-r-full sm:rounded-r-2xl -z-20 shadow-xs" />

            {/* Layer 2: Middle Golden/Amber Ribbon (Stepped middle right with rounded-r-full) */}
            <div className="absolute -bottom-3 sm:-bottom-3.5 left-0 right-3 sm:right-6 h-4 sm:h-5 bg-[#d4a017] rounded-r-full sm:rounded-r-2xl -z-10 shadow-xs" />

            {/* Layer 3: Main IEEE Blue Top Card */}
            <div className="relative z-10 bg-gradient-to-br from-[#005a9e] via-[#004f8c] to-[#003666] text-white p-6 sm:p-8 md:p-9 rounded-2xl sm:rounded-3xl shadow-[0_15px_40px_-10px_rgba(0,98,155,0.5)] border border-sky-400/30 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-xs shrink-0 shadow-xs inline-block" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase">
                  MESSAGE
                </h2>
              </div>

              <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed font-normal mb-4">
                &ldquo;IEEE GU Student Branch serves as a platform where curiosity meets opportunity and ideas become innovation. We encourage students to continuously learn, collaborate, explore emerging technologies, and develop the leadership qualities needed to make a meaningful impact. Through knowledge sharing, mentorship, technical activities, and professional engagement, we remain committed to building a strong and future-ready community of innovators.&rdquo;
              </p>

              <div className="pt-3 border-t border-white/20 flex flex-col">
                <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                  — IEEE GU Student Branch
                </span>
                <span className="text-xs sm:text-sm text-sky-200 font-medium">
                  Galgotias University
                </span>
              </div>
            </div>
          </div>

          {/* Right: IEEE Student Branch Transparent Large Logo */}
          <div className="lg:col-span-5 flex items-center justify-center p-4 sm:p-6 order-1 lg:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/ieee-sb-dark-perfect.png"
              alt="IEEE Student Branch Logo"
              className="w-full h-auto max-h-48 sm:max-h-60 md:max-h-72 max-w-md sm:max-w-lg object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* 2. LIVE COUNTUP METRICS (Enhanced Glowing Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="relative group rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-[#0e162a]/95 via-[#0a1020]/95 to-[#060b18] border border-white/10 hover:border-white/20 shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col items-center text-center justify-between min-h-[210px]"
              >
                {/* Top Subtle Glowing Accent Line */}
                <div className={`absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r ${stat.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Subtle Ambient Radial Glow */}
                <div
                  className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ background: stat.bgGlow }}
                />

                {/* Icon Badge */}
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${stat.iconStyle} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Counter Number & Label */}
                <div className="space-y-1 my-2">
                  <div className={`font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${stat.numGradient}`}>
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    {stat.label}
                  </div>
                </div>

                {/* Bottom Pill Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border ${stat.badge} shadow-xs`}>
                  <Flame className="w-3.5 h-3.5 shrink-0" />
                  <span>{stat.change}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INFINITE MARQUEE TICKER (Magic UI Style) */}
      <section className="border-y border-white/10 bg-[#070c18]/90 backdrop-blur-md py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              Affiliations, Chapters & Global Network
            </span>
            <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-[10px] font-medium text-sky-300">
              Direct Portals
            </span>
          </div>
          <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            IEEE Region 10 • UP Section STB99158 • Click to explore
          </span>
        </div>

        <Marquee speed="normal" pauseOnHover={true} className="py-2">
          {marqueePartners.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
              title={`Visit ${item.name} (${item.url})`}
              className="flex items-center gap-4 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#0b1324]/90 border border-white/15 hover:border-sky-400 hover:bg-[#111c36] hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] hover:-translate-y-1 transition-all duration-300 shrink-0 group/card cursor-pointer"
            >
              <div className="h-14 sm:h-16 w-32 sm:w-40 flex items-center justify-center p-2 sm:p-2.5 bg-white rounded-xl shadow-md border border-white/40 group-hover/card:shadow-sky-500/20 group-hover/card:scale-105 transition-all duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-11 sm:max-h-12 max-w-[110px] sm:max-w-[130px] w-auto object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <div className="border-l border-white/10 pl-3.5 sm:pl-4 pr-1">
                <div className="text-sm sm:text-base font-bold text-white group-hover/card:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>{item.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover/card:opacity-100 group-hover/card:text-sky-300 transition-all transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5 group-hover/card:text-slate-300 transition-colors">
                  {item.desc}
                </div>
              </div>
            </a>
          ))}
        </Marquee>
      </section>

      {/* 4. INTERACTIVE FLAGSHIP PROGRAMS & HUBS (CONFERENCES, HACKATHONS, WORKSHOPS, CHAPTERS) */}
      <InteractiveTabs />

      {/* 8. STUDENT VOICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>STUDENT VOICES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Voices of IEEE GU SB Members
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Reflections from student branch chairs, leaders, and representatives on leadership, technical growth, and creating meaningful impact.
          </p>
        </div>

        {/* 3D GSAP Fan Carousel for Student Voices */}
        <SocialCards cards={testimonialCards} />
      </section>

      {/* 9. INTERACTIVE FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0c1222]/90 border border-white/10 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-purple-500/40"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-serif text-sm sm:text-base font-bold text-white flex items-center justify-between hover:text-amber-300 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-amber-400" : "text-slate-400"
                    }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 10. RADIANT CALL TO ACTION BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-purple-950 via-[#003366] to-indigo-950 border border-purple-400/40 shadow-2xl space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Open for All Engineering & Tech Students</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
            Ready to Supercharge Your Engineering Career?
          </h2>

          <p className="text-xs sm:text-sm text-purple-200 max-w-xl mx-auto leading-relaxed">
            Join IEEE GU SB today to gain exclusive mentorship, project grants, research publication assistance, and international networking.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/membership"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl hover:scale-105 transition-all"
            >
              Apply for IEEE GU SB Membership
            </Link>
            <Link
              href="/team"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
            >
              Meet the Core Team
            </Link>
          </div>
        </div>
      </section>

      {/* 11. AFFILIATION LOGO STRIP */}
      <LogoStrip />
    </div>
  );
}
