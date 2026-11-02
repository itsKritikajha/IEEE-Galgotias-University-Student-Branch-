"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Globe, ExternalLink, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070a12] border-t border-purple-900/30 text-slate-400 text-sm">
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-[#003366] via-purple-900 to-[#3B0764] py-3 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-amber-300 font-semibold">
            <span className="bg-amber-500/20 px-2 py-0.5 rounded text-amber-400 font-bold border border-amber-500/30">
              ICCSAI 2026
            </span>
            <span>2026 IEEE 4th International Conference • Nov 28–30, 2026</span>
          </div>
          <Link
            href="/iccsai-2026"
            className="text-white hover:text-amber-300 flex items-center gap-1 font-semibold underline underline-offset-4"
          >
            Submit Research Paper <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1 & 2: Branding */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center h-10 px-2.5 py-1 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/gulogo.png"
                  alt="Galgotias University"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="flex items-center h-10 px-2.5 py-1 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/ieee-sb-transparent.png"
                  alt="IEEE Student Branch"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div>
                <div className="text-base font-extrabold text-white tracking-wide">
                  IEEE GU SB
                </div>
                <div className="text-xs text-purple-400 font-medium">
                  #STB99158 • Galgotias University
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-md">
              Empowering technological innovation, research excellence, and student leadership at Galgotias University under IEEE UP Section (Region 10). Advancing technology for humanity.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-600/30 hover:border-sky-500/50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600/30 hover:border-pink-500/50 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-400/30 hover:border-sky-400/50 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600/30 hover:border-red-500/50 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-sky-500 pl-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors">
                  About IEEE GU SB
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-sky-400 transition-colors">
                  Core Team (Poster Replica)
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-sky-400 transition-colors">
                  Events & Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-sky-400 transition-colors">
                  Join IEEE & Member Benefits
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Flagship Conferences & Portals */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-2">
              Conferences
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.iccsai.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>ICCSAI Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-purple-400 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.iccca.co.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>ICCCA Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ic2pct.co.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>IC2PCT Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400 group-hover:text-white" />
                </a>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link href="/iccsai-2026" className="hover:text-purple-300 transition-colors block">
                  ICCSAI 2026 Subsite Hub
                </Link>
              </li>
              <li>
                <Link href="/iccsai-2026/committee" className="hover:text-purple-300 transition-colors block">
                  Organizing Committee
                </Link>
              </li>
              <li>
                <Link href="/iccsai-2026/registration" className="hover:text-purple-300 transition-colors block">
                  Registration & Fees
                </Link>
              </li>
              <li>
                <a
                  href="https://cmt3.research.microsoft.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-300 hover:underline flex items-center gap-1 font-semibold pt-1"
                >
                  Microsoft CMT Portal <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Campus Address
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Galgotias University, Plot No. 2, Yamuna Expressway, Opposite Buddha International Circuit, Sector 17A, Greater Noida, UP 203201
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:ieeegusb@galgotiasuniversity.edu.in" className="hover:text-white transition-colors">
                  ieeegusb@galgotiasuniversity.edu.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IEEE Region 10 • IEEE UP Section</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © 2026 IEEE Galgotias University Student Branch (IEEE GU SB). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/privacy" className="hover:text-sky-300 hover:underline transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-500">•</span>
            <Link href="/terms" className="hover:text-sky-300 hover:underline transition-colors">
              Terms of Use
            </Link>
            <span className="text-slate-500">•</span>
            <Link href="/code-of-ethics" className="hover:text-sky-300 hover:underline transition-colors">
              IEEE Code of Ethics
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
