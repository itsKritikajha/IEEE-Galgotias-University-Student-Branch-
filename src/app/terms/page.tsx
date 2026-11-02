"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldAlert,
  Scale,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Mail,
  ExternalLink,
  BookOpen,
  Users,
  Award,
  Lock,
} from "lucide-react";

export default function TermsOfUsePage() {
  const sections = [
    {
      id: "acceptance",
      icon: Scale,
      title: "1. Acceptance of Terms",
      badge: "Binding Agreement",
      desc: "By accessing, browsing, or utilizing the digital platform, subdomains, registration portals, or event systems operated by the IEEE Galgotias University Student Branch (IEEE GU SB — Branch Code: STB99158), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, along with applicable IEEE global bylaws and Galgotias University institutional regulations.",
      points: [
        {
          heading: "Scope of Application",
          detail: "These terms apply to all visitors, registered student members, conference delegates, paper authors, event attendees, and workshop participants.",
        },
        {
          heading: "Affiliation & Standards",
          detail: "Activities organized under IEEE GU SB adhere to IEEE Region 10 and IEEE Uttar Pradesh (UP) Section governance standards.",
        },
      ],
    },
    {
      id: "ip",
      icon: BookOpen,
      title: "2. Intellectual Property & Brand Usage",
      badge: "Copyright & Trademark",
      desc: "All content, multimedia assets, brand marks, and technical materials published on this website are protected under Indian and international intellectual property laws.",
      points: [
        {
          heading: "IEEE & University Trademarks",
          detail: "The IEEE logo, IEEE Student Branch emblem, and Galgotias University crest are registered trademarks. Unauthorized replication, modification, or commercial exploitation is strictly prohibited.",
        },
        {
          heading: "Educational Resource Reproduction",
          detail: "Technical slide decks, workshop guides, and research presentation recordings are provided exclusively for personal non-commercial educational use. Proper attribution must be retained.",
        },
      ],
    },
    {
      id: "conduct",
      icon: Users,
      title: "3. Event Registration & Code of Conduct",
      badge: "Community Standards",
      desc: "Participation in hackathons, masterclasses, conferences, and technical workshops organized by IEEE GU SB is subject to strict community behavior standards.",
      points: [
        {
          heading: "Accurate Information",
          detail: "Registrants must provide truthful, accurate names, student IDs, and institutional credentials to qualify for event admission and verifiable certificate issuance.",
        },
        {
          heading: "Zero Tolerance Harassment Policy",
          detail: "IEEE GU SB enforces a safe, welcoming, and inclusive environment. Discriminatory behavior, harassment, intimidation, or disruptive actions at physical or virtual events result in immediate disqualification and campus disciplinary escalation.",
        },
        {
          heading: "Hackathon & Project Integrity",
          detail: "All source code and hardware projects submitted during competitive hackathons must be original work created during the designated event window, with all open-source libraries accurately cited.",
        },
      ],
    },
    {
      id: "conference",
      icon: Award,
      title: "4. Research Papers & Conference Submissions",
      badge: "Academic Rigor",
      desc: "For flagship international conferences organized or co-hosted by IEEE GU SB (e.g., ICCSAI, GUCON, IC2PCT):",
      points: [
        {
          heading: "Originality & Plagiarism Policy",
          detail: "Authors must ensure submitted manuscripts are original, unpublished, and not under concurrent review elsewhere. Submissions undergo IEEE CrossCheck / Turnitin similarity screening.",
        },
        {
          heading: "IEEE Xplore Camera-Ready Compliance",
          detail: "Accepted papers must meet IEEE PDF eXpress formatting standards and include a signed IEEE Electronic Copyright Form (eCF) for inclusion in IEEE Xplore digital library.",
        },
        {
          heading: "Mandatory Author Presentation",
          detail: "At least one registered author must present the accepted paper during the scheduled conference session to be eligible for publication in proceedings.",
        },
      ],
    },
    {
      id: "disclaimer",
      icon: ShieldAlert,
      title: "5. Disclaimers & Limitation of Liability",
      badge: "Legal Notice",
      desc: "Important limitations regarding digital services, event schedules, and third-party links.",
      points: [
        {
          heading: "Platform Availability",
          detail: "While we strive for continuous uptime, IEEE GU SB provides the website on an 'as-is' and 'as-available' basis without warranties of uninterrupted availability during scheduled maintenance.",
        },
        {
          heading: "External Links",
          detail: "Our portal contains links to external sites (IEEE.org, IEEE Xplore, Unstop, Devfolio). We do not control or assume responsibility for content or policies of external destinations.",
        },
        {
          heading: "Event Adjustments",
          detail: "IEEE GU SB reserves the right to adjust speaker schedules, workshop venues, or session formats in response to unforeseen academic or technical circumstances.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-96 left-10 w-[450px] h-[300px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Navigation & Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span className="text-xs text-slate-400 font-mono">
            Last Updated: January 2026 • Terms Edition
          </span>
        </div>

        {/* Hero Section */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/15 via-sky-500/15 to-indigo-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold shadow-lg shadow-purple-500/5"
          >
            <Scale className="w-4 h-4 text-purple-400" />
            <span>IEEE GU SB • Terms of Service & Digital Guidelines</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-300 to-indigo-400">Use</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Rules, operational conditions, intellectual property guidelines, and academic integrity policies governing interactions with IEEE Galgotias University Student Branch digital services and event programs.
          </motion.p>
        </div>

        {/* Key Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Bylaw Alignment</h4>
              <p className="text-xs text-slate-400 mt-1">Conforms with IEEE Region 10 and UP Section operational bylaws.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Research Standards</h4>
              <p className="text-xs text-slate-400 mt-1">Rigorous adherence to IEEE CrossCheck anti-plagiarism guidelines.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Inclusive Conduct</h4>
              <p className="text-xs text-slate-400 mt-1">Zero tolerance for discrimination or disruptive behavior across events.</p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 pt-4">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#111827]/80 to-[#0b0f19]/90 border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-white font-serif tracking-tight">
                      {sec.title}
                    </h2>
                  </div>
                  <span className="self-start sm:self-auto text-[11px] font-semibold text-purple-300 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    {sec.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {sec.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sec.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{pt.heading}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pl-5.5 font-light">
                        {pt.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Governing Law & Contact */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-sky-950/40 to-slate-900/60 border border-purple-500/30 shadow-2xl space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-400/30 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white font-serif">
                Governing Law & Legal Jurisdictions
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                These Terms of Use are governed by and construed in accordance with the laws of Uttar Pradesh, India, and the operational guidelines of the IEEE Uttar Pradesh Section. Any disputes arising in connection with student branch events shall be resolved through university ombudsman mediation and IEEE UP Section executive oversight.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
              <div className="text-xs font-semibold text-slate-400">Legal & Terms Correspondence</div>
              <div className="text-sm font-bold text-white">IEEE GU SB Secretariat</div>
              <a
                href="mailto:ieeegusb@galgotiasuniversity.edu.in"
                className="text-xs text-purple-400 hover:text-purple-300 hover:underline flex items-center gap-1 mt-1"
              >
                ieeegusb@galgotiasuniversity.edu.in <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
              <div className="text-xs font-semibold text-slate-400">Institutional Host</div>
              <div className="text-sm font-bold text-white">Galgotias University</div>
              <div className="text-xs text-slate-400">School of Computing Science & Engineering / School of EECE</div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span>Branch STB99158 • IEEE Region 10 • IEEE UP Section</span>
            <Link
              href="https://www.ieee.org/about/help/terms-conditions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 hover:underline flex items-center gap-1 font-semibold"
            >
              View Global IEEE Terms & Conditions <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
