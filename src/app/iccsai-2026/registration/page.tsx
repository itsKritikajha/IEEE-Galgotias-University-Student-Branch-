"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle, CreditCard, ShieldCheck } from "lucide-react";
import { REGISTRATION_FEES, ICCSAI_INFO } from "@/data/iccsaiData";

export default function IccsaiRegistrationPage() {
  return (
    <div className="space-y-12 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link
          href="/iccsai-2026"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to ICCSAI 2026 Hub</span>
        </Link>

        <div className="space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Registration & Payment Terms
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Conference Registration Fees
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Every accepted paper must have at least one author registered under the Author category before the camera-ready deadline. IEEE members receive discounted rates.
          </p>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="rounded-2xl bg-[#0f172a] border border-white/10 overflow-hidden shadow-2xl">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-purple-950/80 text-amber-300 font-serif border-b border-white/10 uppercase tracking-wider">
            <tr>
              <th className="py-4 px-6">Delegate Category</th>
              <th className="py-4 px-6 text-right">Indian Delegates (INR)</th>
              <th className="py-4 px-6 text-right">Foreign Delegates (USD)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-200">
            {REGISTRATION_FEES.map((row, idx) => (
              <tr key={idx} className="hover:bg-purple-900/20 transition-colors">
                <td className="py-4 px-6 font-semibold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  <span>{row.category}</span>
                </td>
                <td className="py-4 px-6 text-right font-mono font-bold text-amber-300">
                  {row.indian}
                </td>
                <td className="py-4 px-6 text-right font-mono font-bold text-sky-300">
                  {row.foreign}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CMT Link CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-[#003366] border border-purple-400/30 text-center space-y-4 shadow-2xl">
        <h3 className="font-serif text-2xl font-bold text-white">
          Submit Paper via Microsoft CMT
        </h3>
        <p className="text-xs text-purple-200 max-w-xl mx-auto">
          Author submissions are managed through the official Microsoft CMT conference portal.
        </p>
        <a
          href={ICCSAI_INFO.cmtSubmitUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-red-500 text-slate-950 font-bold text-xs shadow-lg hover:scale-105 transition-all"
        >
          <span>Open CMT Portal</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
