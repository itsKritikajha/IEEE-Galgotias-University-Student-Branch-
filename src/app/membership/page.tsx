"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Send,
  Check,
  Zap,
  Brain,
  Rocket,
  Globe2,
  Lightbulb,
  Layers,
  Trophy,
  ArrowRight,
  X,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { FAQ_DATA } from "@/data/faqData";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedReason, setSelectedReason] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Computer Science & Engineering",
    year: "2nd Year",
    ieeeNumber: "",
    interest: "Technical & Web Development",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const coreReasons = [
    {
      num: "01",
      icon: Zap,
      title: "Learn Beyond Classrooms",
      tag: "Hands-on Learning",
      highlight: "Workshops & Expert Sessions",
      desc: "Turn theory into practical knowledge through workshops, expert sessions, technical activities and hands-on learning in Agentic AI, Azure Cloud & DevOps, Generative AI, Robotics and Energy Systems.",
      spotlightColor: "rgba(245, 158, 11, 0.15)",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      details: [
        "Interactive workshops covering Agentic AI, Azure Cloud, Generative AI & Robotics.",
        "Masterclasses hosted by IEEE Distinguished Lecturers and seasoned industry engineers.",
        "Practical hardware labs on Arduino, IoT sensors, and hybrid energy systems.",
        "Curated learning tracks bridging the gap between syllabus and industry standards.",
      ],
      ctaText: "Explore Events & Workshops",
      ctaHref: "/events",
      formInterest: "Technical & Web Development",
    },
    {
      num: "02",
      icon: Brain,
      title: "Build Industry-Ready Skills",
      tag: "Career Preparation",
      highlight: "Industry Mentors & Tools",
      desc: "Gain practical exposure to technologies, tools and real-world engineering challenges while learning directly from professionals and engineers from Microsoft, Amazon, and top tech communities.",
      spotlightColor: "rgba(56, 189, 248, 0.15)",
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      details: [
        "Direct networking with engineers from Microsoft, Amazon, and global tech firms.",
        "Hands-on experience with industrial automation, power systems & control engineering.",
        "Real-world problem statements, resume building, and technical mock interviews.",
        "Skill badges and participation credentials recognized globally across IEEE.",
      ],
      ctaText: "View About & History",
      ctaHref: "/about",
      formInterest: "Research & Publications",
    },
    {
      num: "03",
      icon: Rocket,
      title: "Lead. Organize. Make an Impact.",
      tag: "Student Leadership",
      highlight: "Executive Responsibility",
      desc: "Take ownership of real initiatives, lead cross-functional teams, organize flagship international conferences (ICCSAI 2026), hackathons, and develop leadership skills that go far beyond academics.",
      spotlightColor: "rgba(168, 85, 247, 0.15)",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      details: [
        "Step up into executive officer roles (Chair, Vice-Chair, Secretary, Webmaster).",
        "Lead high-profile events: ICCSAI 2026, 24-hr Hackathons, and IEEE Day week.",
        "Master project management, budgeting, PR, design, and team coordination.",
        "Receive mentorship from branch counselors, Region 10 officers, and alumni.",
      ],
      ctaText: "Meet the Core Team",
      ctaHref: "/team",
      formInterest: "Event Management & Operations",
    },
    {
      num: "04",
      icon: Layers,
      title: "Find Your Technical Community",
      tag: "9 Specialized Chapters",
      highlight: "IEEE Societies & WIE",
      desc: "Explore 9 specialized IEEE societies and connect with students who share your interests across CS, CIS, WIE, TEMS, IAS, Photonics, Entrepreneurship, MTT-S, and EMBS chapters.",
      spotlightColor: "rgba(59, 130, 246, 0.15)",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      details: [
        "IEEE Computer Society (CS) & CIS — Computing, software architecture & neural AI.",
        "IEEE Women in Engineering (WIE) — Diversity, mentorship, and leadership.",
        "IEEE TEMS, IEEE IAS & IEEE Photonics — Management, industrial tech & lasers.",
        "IEEE Entrepreneurship, MTT-S & EMBS — Startups, RF/microwave & biomedical engineering.",
      ],
      ctaText: "Explore Societies & Chapters",
      ctaHref: "/about",
      formInterest: "Technical & Web Development",
    },
    {
      num: "05",
      icon: Lightbulb,
      title: "Turn Ideas Into Reality",
      tag: "Innovation & Build",
      highlight: "Project Expos & Hackathons",
      desc: "Build, prototype and showcase solutions through Design Thinking Project Expos, UI/UX design challenges (ImagiX with 34+ teams / 102 participants), and 24-hour hackathons like WIE-HackEarth.",
      spotlightColor: "rgba(236, 72, 153, 0.15)",
      badgeColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      details: [
        "Design Thinking Project Expos addressing UN Sustainable Development Goals.",
        "ImagiX Designathon featuring 34 teams / 102 participants using Figma & Adobe tools.",
        "WIE-HackEarth 24-hour sustainability hackathon with exciting cash prizes.",
        "Prototyping support, project showcases, and peer-to-peer code reviews.",
      ],
      ctaText: "Explore Gallery & Hackathons",
      ctaHref: "/events",
      formInterest: "Content & Social Media",
    },
    {
      num: "06",
      icon: Globe2,
      title: "Go Beyond Campus",
      tag: "Global Network",
      highlight: "Scholarships & Grants",
      desc: "Connect your university experience to IEEE's wider national and international ecosystem through IEEEXtreme, global conferences, travel grants, scholarships, awards, and professional networks.",
      spotlightColor: "rgba(16, 185, 129, 0.15)",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      details: [
        "Compete in IEEEXtreme: 24-hour global competitive programming challenge.",
        "Apply for IEEE Region 10 student travel grants and Richard E. Merwin scholarships.",
        "Access IEEE Xplore with 5M+ peer-reviewed papers, journals, and standards.",
        "Connect with 420,000+ IEEE members across 160+ countries.",
      ],
      ctaText: "Official IEEE Join Portal",
      ctaHref: "https://www.ieee.org/membership/join/index.html",
      formInterest: "Research & Publications",
      isExternal: true,
    },
  ];

  const handleCardClick = (index: number) => {
    setSelectedReason(index);
  };

  const handleApplyClick = (interest?: string) => {
    if (interest) {
      setFormData((prev) => ({ ...prev, interest }));
    }
    setSelectedReason(null);
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "9c4a0e68-71bc-4da3-a8c9-735b58017e31");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("department", formData.department);
      formDataToSend.append("year", formData.year);
      formDataToSend.append("interest", formData.interest);
      formDataToSend.append("subject", `IEEE GU SB Student Membership Application - ${formData.name} (${formData.department})`);
      formDataToSend.append("from_name", "IEEE GU SB Membership Portal");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok && (data.success || data.ok)) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "Computer Science & Engineering",
          year: "2nd Year",
          ieeeNumber: "",
          interest: "Technical & Web Development",
        });
      } else {
        setErrorMessage(data.message || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>IEEE Student Branch Membership • STB99158</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
          Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-300 to-amber-300">IEEE GU SB?</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-300"
        >
          <span className="text-amber-400 font-bold">Where curiosity becomes capability.</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">Learn</span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">Lead</span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">Build</span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">Connect</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto"
        >
          Turn classroom concepts into practical mastery, lead national initiatives, explore specialized society chapters, and access IEEE's global engineering network. <span className="text-sky-300 font-medium">Click any card below to explore full details.</span>
        </motion.p>
      </div>

      {/* 6 Core Reasons Grid (Clickable Spotlight Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreReasons.map((b, idx) => {
          const IconComp = b.icon;
          return (
            <div
              key={b.num}
              onClick={() => handleCardClick(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(idx);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${b.title}`}
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400/50 rounded-2xl transition-transform hover:-translate-y-1 active:scale-[0.99]"
            >
              <SpotlightCard
                className="p-6 space-y-4 flex flex-col justify-between h-full group hover:border-sky-400/40 hover:bg-[#0f172a]/90 transition-all shadow-lg"
                spotlightColor={b.spotlightColor}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono font-bold text-xs group-hover:bg-white/10 group-hover:scale-110 transition-all">
                      {b.num}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase font-semibold border ${b.badgeColor}`}>
                        {b.tag}
                      </span>
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {b.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-amber-300/90 font-mono">
                      {b.highlight}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-[10px] text-slate-500 font-mono">IEEE GU Student Branch</span>
                  <div className="flex items-center gap-1 text-sky-400 font-semibold group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>

      {/* Interactive Details Modal */}
      <AnimatePresence>
        {selectedReason !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReason(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            {(() => {
              const active = coreReasons[selectedReason];
              const IconComp = active.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative z-10 w-full max-w-xl rounded-3xl bg-[#0b101d] border border-sky-500/30 p-6 sm:p-8 shadow-2xl space-y-6 text-left overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase font-semibold border ${active.badgeColor}`}>
                          {active.tag}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                          {active.title}
                        </h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedReason(null)}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {active.desc}
                  </p>

                  <div className="space-y-2.5 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                    <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider font-mono">
                      Key Highlights & Opportunities
                    </div>
                    <ul className="space-y-2">
                      {active.details.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      onClick={() => handleApplyClick(active.formInterest)}
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 text-slate-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Apply to Join IEEE GU SB</span>
                    </button>

                    {active.isExternal ? (
                      <a
                        href={active.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sky-400 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>{active.ctaText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={active.ctaHref}
                        onClick={() => setSelectedReason(null)}
                        className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sky-400 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>{active.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })()}
          </div>
        )}
      </AnimatePresence>

      {/* What Makes IEEE GU SB Different - Highlight Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-gradient-to-r from-[#0d152a] via-[#161233] to-[#0d152a] border border-purple-500/20 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
                <Trophy className="w-3.5 h-3.5" />
                <span>Excellence & Recognition</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                What Makes IEEE GU SB Different?
              </h3>
            </div>
            <p className="text-xs text-slate-300 max-w-md font-light">
              Not just seminars—a student-led ecosystem of <span className="text-white font-medium">innovators, thinkers, and doers</span> driving national-level impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                <span>National Recognition</span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Awarded <span className="text-white font-semibold">Outstanding Emerging Student Branch 2025</span> by IEEE India Council.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Section Leadership</span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Recognized with <span className="text-white font-semibold">Outstanding WIE Volunteer</span> &amp; <span className="text-white font-semibold">Outstanding Branch Counselor</span> at IEEE UP Section 2025.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Student-Led Ecosystem</span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Students conceptualize, budget, lead, and execute full-scale national conferences, hackathons, and design challenges.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Real Technical Depth</span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Active tracks across 6 societies spanning Agentic AI, Cloud DevOps, Industrial Robotics, and Photonics research.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Registration / Recruitment Form */}
      <div id="apply-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-28">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Step-by-Step Join Process
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              How to Become an IEEE Member
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#0c1222]/80 border border-white/10 flex items-start gap-4 backdrop-blur-md">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-md">
                1
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Register on Official IEEE Portal</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Visit ieee.org/membership and create your IEEE account selecting Galgotias University (STB99158) as your Student Branch.
                </p>
                <a
                  href="https://www.ieee.org/membership/join/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-sky-400 font-semibold pt-1 hover:underline"
                >
                  Go to Official IEEE Join Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0c1222]/80 border border-white/10 flex items-start gap-4 backdrop-blur-md">
              <div className="w-8 h-8 rounded-full bg-sky-500 text-white font-black flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-md">
                2
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Fill Out IEEE GU SB Student Intake Form</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Provide your details in the form to get added to our official Student Branch WhatsApp & Discord channels for committee calls and workshops.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment Form Component */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#19153f] to-[#0c1222] border border-purple-400/30 shadow-2xl space-y-5 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="font-serif text-xl font-bold text-white">
              IEEE GU SB Student Membership Application
            </h3>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Application Successfully Received!</h4>
              <p className="text-xs text-emerald-200 font-light leading-relaxed">
                Thank you for applying to join the IEEE GU Student Branch! Your application details have been forwarded directly to the branch leadership. Our team will review your profile and reach out to you via email.
              </p>
              <div className="flex items-center justify-center pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage("");
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-all border border-white/10"
                >
                  <span>Submit Another Application</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Atharav Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">University Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@galgotiasuniversity.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                  >
                    <option>Computer Science & Engineering</option>
                    <option>Artificial Intelligence & Data Science</option>
                    <option>Electronics & Communication</option>
                    <option>Electrical Engineering</option>
                    <option>Mechanical / Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Year of Study</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                  >
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year / Postgrad</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Preferred Team Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                >
                  <option>Technical & Web Development</option>
                  <option>Event Management & Operations</option>
                  <option>Public Relations & Outreach</option>
                  <option>Content & Social Media</option>
                  <option>Research & Publications</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 text-slate-950 font-bold text-xs shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-60 disabled:pointer-events-none"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Application to Core Team</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Accordion with Spring Physics */}
      <div className="space-y-6 pt-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono">
            Got Questions?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-300 font-light">
            Real student answers on membership, eligibility, volunteering, and opportunities at IEEE GU SB.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_DATA.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0c1222]/90 border border-white/10 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-sky-500/40"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left font-serif text-sm font-bold text-white flex items-center justify-between hover:text-amber-300 transition-colors gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-sky-400 shrink-0">
                    {faq.id || (idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`)}
                  </span>
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 shrink-0 ${
                    openFaq === idx ? "rotate-180 text-amber-400" : "text-slate-400"
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
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3 font-light whitespace-pre-line space-y-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* FAQ Bottom CTA Card */}
          <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-[#0d152a] via-[#161233] to-[#0c1222] border border-sky-500/20 text-center space-y-3 backdrop-blur-xl shadow-xl">
            <div className="text-sm font-serif font-bold text-white flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Still have a question?</span>
            </div>
            <p className="text-xs text-slate-300 max-w-md mx-auto font-light leading-relaxed">
              Connect with the IEEE GU Student Branch and find the right opportunity for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sky-300 hover:text-white font-semibold text-xs transition-all flex items-center gap-1.5"
              >
                <span>Contact Core Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => {
                  const formElement = document.getElementById("apply-form");
                  if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center gap-1.5"
              >
                <span>Apply for Membership</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
