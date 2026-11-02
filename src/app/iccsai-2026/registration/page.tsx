"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle, CreditCard, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";
import { PricingCards } from "@/components/ui/PricingCards";
import { ICCSAI_INFO } from "@/data/iccsaiData";

export default function IccsaiRegistrationPage() {
  return (
    <div className="space-y-14 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div>
        <Link
          href="/iccsai-2026"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white transition-colors mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to ICCSAI 2026 Hub</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Registration & Payment Tiers</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Conference Registration Fees
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed font-light">
            Every accepted paper must have at least one author registered under the Author category before the camera-ready deadline. Active IEEE members receive substantial fee discounts.
          </p>
        </div>
      </div>

      {/* 21st.dev Style Pricing & Tier Selector Component */}
      <PricingCards />

      {/* Registration Policies & Instructions Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1222]/90 border border-white/10 space-y-4 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-2 text-sky-400">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-serif text-xl font-bold text-white">
              Author Registration Policy
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed font-light">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Each full registration covers the presentation and publication of <strong>one accepted paper</strong> up to 6 pages in standard IEEE two-column format.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Co-authors attending the conference must register separately under the Attendee / Co-Author category.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>IEEE Members must provide their valid 8-digit IEEE membership number during registration validation.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1222]/90 border border-white/10 space-y-4 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-2 text-amber-400">
            <CreditCard className="w-5 h-5" />
            <h3 className="font-serif text-xl font-bold text-white">
              Payment & Invoicing Details
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-light">
            Payments are processed via online NEFT/RTGS/IMPS wire transfer or payment gateway. Official GST invoice and receipt will be issued upon payment clearance.
          </p>
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-[11px] text-slate-300 font-mono space-y-1">
            <div>Beneficiary: IEEE Galgotias University Student Branch</div>
            <div>Bank: HDFC Bank / Galgotias University Campus Branch</div>
            <div>Account Category: Conference & Events Operations</div>
          </div>
        </div>
      </div>

      {/* CMT Link CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-[#003366] border border-purple-400/40 text-center space-y-4 shadow-2xl">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Ready to Submit Your Research Paper?
        </h3>
        <p className="text-xs sm:text-sm text-purple-200 max-w-xl mx-auto font-light">
          Author submissions and peer review workflows are officially managed through the Microsoft CMT portal.
        </p>
        <div className="pt-2">
          <a
            href={ICCSAI_INFO.cmtSubmitUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl hover:scale-105 transition-all"
          >
            <span>Open Microsoft CMT Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
