"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Server,
  Bell,
  Mail,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "collection",
      icon: Eye,
      title: "1. Information We Collect",
      badge: "Transparency",
      desc: "IEEE Galgotias University Student Branch (IEEE GU SB) collects limited, necessary personal data strictly to facilitate student activities, event registrations, academic workshops, and branch administration.",
      points: [
        {
          heading: "Event & Workshop Registrations",
          detail: "Full Name, Student Roll/Admission Number, University Email Address, Phone Number, Year of Study, and Branch of Specialization for pass generation and attendance logging.",
        },
        {
          heading: "IEEE Membership Details",
          detail: "Official IEEE Membership Number and Technical Society affiliations (CS, WIE, IAS, RAS) when verifying active membership tier discounts.",
        },
        {
          heading: "Technical Submissions & Competitions",
          detail: "Hackathon project source code links, research paper abstracts, team rosters, and presentation slide decks submitted for evaluation.",
        },
        {
          heading: "Digital Analytics & Logs",
          detail: "Non-personally identifiable diagnostic data including browser type, operating system, and page interaction metrics to optimize site performance.",
        },
      ],
    },
    {
      id: "usage",
      icon: UserCheck,
      title: "2. How We Use Your Information",
      badge: "Purpose",
      desc: "Information collected is processed exclusively for non-commercial educational, academic, and organizational purposes within the university and IEEE UP Section ecosystem.",
      points: [
        {
          heading: "Event Participation & Entry Badges",
          detail: "Validating registrations, issuing electronic certificates of participation/merit, and coordinating physical entry into campus auditoriums and labs.",
        },
        {
          heading: "Announcements & Newsletters",
          detail: "Notifying students regarding upcoming flagship conferences (ICCSAI, GUCON), hackathons, expert speaker sessions, and student branch elections.",
        },
        {
          heading: "Official Reporting to IEEE UP Section & IEEE HQ",
          detail: "Submitting aggregated branch activity reports and vTools meeting rosters as mandated by IEEE Region 10 student governance bylaws.",
        },
        {
          heading: "Support & Grievance Redressal",
          detail: "Responding directly to inquiries submitted through our official contact forms and branch helpdesks.",
        },
      ],
    },
    {
      id: "security",
      icon: Lock,
      title: "3. Data Protection & Security Measures",
      badge: "Security",
      desc: "We adhere to strict data protection standards to safeguard student records against unauthorized access, loss, or misuse.",
      points: [
        {
          heading: "Encrypted Data Transmission",
          detail: "All data submitted through our digital portal is encrypted in transit using industry-standard SSL/TLS 256-bit encryption protocols.",
        },
        {
          heading: "Role-Based Access Control",
          detail: "Access to participant datasets is restricted exclusively to authorized Core Executive Team members and Faculty Advisors.",
        },
        {
          heading: "Zero Commercial Exploitation",
          detail: "We NEVER sell, rent, lease, or monetize student or participant data with third-party advertising brokers or commercial marketing vendors.",
        },
      ],
    },
    {
      id: "retention",
      icon: Server,
      title: "4. Data Retention & Third-Party Platforms",
      badge: "Governance",
      desc: "Clear policies regarding record lifecycles and external tools used during hackathons and workshops.",
      points: [
        {
          heading: "Retention Timeline",
          detail: "Event registration logs are retained for a maximum of 2 academic years for accreditation and certificate verification purposes, after which they are securely purged.",
        },
        {
          heading: "Third-Party Collaboration Tools",
          detail: "When events utilize platforms like Google Workspace, Unstop, Devfolio, or IEEE vTools, your interactions are also governed by their respective privacy commitments.",
        },
      ],
    },
    {
      id: "rights",
      icon: FileText,
      title: "5. Your Rights & Data Choices",
      badge: "Control",
      desc: "You retain full control over your personal information at all times.",
      points: [
        {
          heading: "Access & Rectification",
          detail: "You may request a copy of your submitted event record or correct any inaccurate personal details at any time.",
        },
        {
          heading: "Communication Opt-Out",
          detail: "You can unsubscribe from non-essential student branch newsletters and event broadcast emails by clicking unsubscribe or emailing our support desk.",
        },
        {
          heading: "Right to Erasure",
          detail: "Subject to certificate validation requirements, you may request the deletion of your contact profile from our active contact lists.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-[450px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            Effective Date: January 1, 2026 • v2.4
          </span>
        </div>

        {/* Hero Section */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/15 via-purple-500/15 to-indigo-500/15 border border-sky-500/30 text-sky-300 text-xs font-semibold shadow-lg shadow-sky-500/5"
          >
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>IEEE Student Branch • Data Governance & Transparency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-300 to-indigo-400">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            How the IEEE Galgotias University Student Branch (IEEE GU SB — Branch Code: STB99158) collects, uses, protects, and handles student, delegate, and researcher information in full alignment with IEEE Global Privacy guidelines and university policies.
          </motion.p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Zero Data Selling</h4>
              <p className="text-xs text-slate-400 mt-1">We never sell, monetize, or trade student records with third-party vendors.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Academic Integrity</h4>
              <p className="text-xs text-slate-400 mt-1">Data used strictly for workshops, hackathons, and certified recognitions.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">User Rights</h4>
              <p className="text-xs text-slate-400 mt-1">Full control to review, rectify, or request removal of personal data.</p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
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
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#111827]/80 to-[#0b0f19]/90 border border-white/10 hover:border-sky-500/30 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-white font-serif tracking-tight">
                      {sec.title}
                    </h2>
                  </div>
                  <span className="self-start sm:self-auto text-[11px] font-semibold text-sky-300 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
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
                      <div className="flex items-center gap-2 text-xs font-bold text-sky-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
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

        {/* Official Contact & Governance Notice */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-sky-950/40 via-purple-950/40 to-slate-900/60 border border-sky-500/30 shadow-2xl space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-300 border border-sky-400/30 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white font-serif">
                Questions or Data Privacy Requests?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If you have questions regarding this Privacy Policy, wish to update your registration information, or require clarification regarding IEEE GU SB data governance, please reach out to our Faculty Advisor and Core Executive Committee:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
              <div className="text-xs font-semibold text-slate-400">Branch Office & Inquiries</div>
              <div className="text-sm font-bold text-white">IEEE GU Student Branch</div>
              <a
                href="mailto:ieeegusb@galgotiasuniversity.edu.in"
                className="text-xs text-sky-400 hover:text-sky-300 hover:underline flex items-center gap-1 mt-1"
              >
                ieeegusb@galgotiasuniversity.edu.in <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
              <div className="text-xs font-semibold text-slate-400">Campus Location</div>
              <div className="text-sm font-bold text-white">Galgotias University</div>
              <div className="text-xs text-slate-400">Plot No. 2, Sector 17A, Yamuna Expressway, Greater Noida, UP 203201</div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span>IEEE Student Branch Code: STB99158 • IEEE Region 10 • IEEE UP Section</span>
            <Link
              href="https://www.ieee.org/security-privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 hover:underline flex items-center gap-1 font-semibold"
            >
              View Global IEEE Privacy Statement <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
