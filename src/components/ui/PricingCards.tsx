"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import { ICCSAI_INFO } from "@/data/iccsaiData";

interface Tier {
  id: string;
  name: string;
  tagline: string;
  inrPrice: string;
  usdPrice: string;
  popular?: boolean;
  features: string[];
}

const TIERS: Tier[] = [
  {
    id: "student-member",
    name: "IEEE Student Member",
    tagline: "For active undergraduate & postgraduate IEEE members",
    inrPrice: "₹ 6,000",
    usdPrice: "$ 150",
    features: [
      "1 Accepted Paper Presentation",
      "Submission to IEEE Xplore Digital Library",
      "Full 3-Day Keynote & Track Access",
      "Digital Certificate of Presentation",
      "Conference Kit & Proceedings Access",
    ],
  },
  {
    id: "faculty-member",
    name: "IEEE Faculty / Professional",
    tagline: "For IEEE members from academia & research institutes",
    inrPrice: "₹ 7,500",
    usdPrice: "$ 250",
    popular: true,
    features: [
      "1 Accepted Paper Presentation",
      "Submission to IEEE Xplore Digital Library",
      "Full 3-Day Keynote & Track Access",
      "Official Author Certificate & Indexing",
      "Networking Banquet & Panel Passes",
      "Conference Proceedings Hard/Soft Copy",
    ],
  },
  {
    id: "non-member",
    name: "Non-IEEE Author / Delegate",
    tagline: "For authors and researchers who are not yet IEEE members",
    inrPrice: "₹ 9,000",
    usdPrice: "$ 350",
    features: [
      "1 Accepted Paper Presentation",
      "Submission to IEEE Xplore Digital Library",
      "Access to All 6 Technical Tracks",
      "Conference Participation Certificate",
      "Option to Join IEEE at discounted rate",
    ],
  },
  {
    id: "attendee",
    name: "Attendee / Listener Delegate",
    tagline: "For students & scholars attending without presenting paper",
    inrPrice: "₹ 2,000",
    usdPrice: "$ 80",
    features: [
      "Access to All 3 Days of Keynotes",
      "Technical Session Listener Pass",
      "Digital Delegate Certificate",
      "Q&A Access with Keynote Speakers",
    ],
  },
];

export const PricingCards: React.FC = () => {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Currency Switcher Toggle */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center p-1 rounded-2xl bg-[#0c1222] border border-white/10 shadow-xl backdrop-blur-xl">
          <button
            onClick={() => setCurrency("INR")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              currency === "INR"
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🇮🇳 Indian Delegates (INR ₹)
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              currency === "USD"
                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🌐 International Delegates (USD $)
          </button>
        </div>
      </div>

      {/* 21st.dev Style Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl ${
              tier.popular
                ? "bg-gradient-to-b from-[#241344] via-[#15102a] to-[#0c1222] border-2 border-purple-400 shadow-[0_0_35px_-5px_rgba(124,58,237,0.35)] scale-105"
                : "bg-[#0c1222]/80 border border-white/10 hover:border-sky-400/40 shadow-xl"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-white">{tier.name}</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{tier.tagline}</p>
              </div>

              {/* Price Tag */}
              <div className="pt-2">
                <div className="font-mono text-3xl sm:text-4xl font-black text-white">
                  {currency === "INR" ? tier.inrPrice : tier.usdPrice}
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  per accepted paper / delegate
                </div>
              </div>

              {/* Features List */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6">
              <a
                href={ICCSAI_INFO.cmtSubmitUrl}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md ${
                  tier.popular
                    ? "bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 text-slate-950 hover:brightness-110"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                }`}
              >
                <span>Register / Submit</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
