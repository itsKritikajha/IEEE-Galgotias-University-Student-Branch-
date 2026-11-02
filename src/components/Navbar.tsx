"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Sparkles, ExternalLink, Sun, Moon, ArrowRight, Layers } from "lucide-react";
import { IEEE_CHAPTERS } from "@/data/chaptersData";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chaptersDropdownOpen, setChaptersDropdownOpen] = useState(false);
  const [iccsaiDropdownOpen, setIccsaiDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Core Team", href: "/team" },
    { name: "Events & Gallery", href: "/events" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  const flagshipConferences = [
    {
      name: "ICCSAI 2026",
      fullName: "4th IEEE Int. Conf. on Computing, AI & Cyber Resilience",
      externalUrl: "https://www.iccsai.in/",
      badge: "Nov 28–30, 2026",
    },
    {
      name: "ICCCA",
      fullName: "IEEE Int. Conf. on Computing, Communication and Automation",
      externalUrl: "https://www.iccca.co.in/",
      badge: "IEEE Conference",
    },
    {
      name: "IC2PCT",
      fullName: "IEEE Int. Conf. on Info, Communication, Computing & Power Tech",
      externalUrl: "https://www.ic2pct.co.in/",
      badge: "IEEE Conference",
    },
  ];

  const iccsaiSublinks = [
    { name: "ICCSAI 2026 Hub", href: "/iccsai-2026", desc: "Overview & Call for Papers" },
    { name: "Organizing Committee", href: "/iccsai-2026/committee", desc: "Patrons, Chairs & Advisory" },
    { name: "Registration & Fees", href: "/iccsai-2026/registration", desc: "Pricing Tiers & CMT Portal" },
    { name: "Author Guidelines", href: "/iccsai-2026/guidelines", desc: "Formatting & Submissions" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#060911]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-2.5"
        : "bg-gradient-to-b from-[#060911]/95 via-[#060911]/80 to-transparent py-3.5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* LOGO AREA (Display Only / Non-Clickable) */}
          <div className="flex items-center gap-2.5 shrink-0 select-none cursor-default">
            <div className="flex items-center h-8 sm:h-9 px-2.5 py-1 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/gulogo.png"
                alt="Galgotias University"
                className="h-5 sm:h-6 w-auto object-contain pointer-events-none"
              />
            </div>

            <div className="flex items-center h-8 sm:h-9 px-2.5 py-1 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/ieee-sb-dark-perfect.png"
                alt="IEEE Student Branch"
                className="h-5 sm:h-6 w-auto object-contain pointer-events-none"
              />
            </div>
          </div>

          {/* DESKTOP NAVIGATION BAR */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.04] p-1 rounded-2xl border border-white/10 backdrop-blur-md shrink-0">
            {navLinks.slice(0, 3).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${isActive
                    ? "text-sky-300"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-600/20 border border-sky-400/40 rounded-xl"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}

            {/* Chapters Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setChaptersDropdownOpen(true)}
              onMouseLeave={() => setChaptersDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${chaptersDropdownOpen
                  ? "text-sky-300 bg-white/10 border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                  : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
              >
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>Chapters</span>
                <ChevronDown
                  className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${chaptersDropdownOpen ? "rotate-180 text-sky-400" : ""
                    }`}
                />
              </button>

              {/* Chapters Dropdown Menu */}
              <AnimatePresence>
                {chaptersDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] pt-2 z-50"
                  >
                    <div className="bg-[#0b101d]/95 border border-sky-500/30 rounded-2xl shadow-2xl p-3.5 backdrop-blur-2xl space-y-3">
                      <div className="px-3 py-2 bg-gradient-to-r from-sky-950/80 to-indigo-950/80 rounded-xl border border-sky-500/20 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-sky-400" />
                            9 IEEE Technical Chapters &amp; Societies
                          </div>
                          <div className="text-[10px] text-slate-400">
                            Galgotias University Student Branch Chapter Network
                          </div>
                        </div>
                        <Link
                          href="/membership"
                          className="text-[10px] font-semibold text-sky-400 hover:text-sky-200 flex items-center gap-1 shrink-0 bg-sky-500/10 hover:bg-sky-500/20 px-2 py-1 rounded-lg border border-sky-500/20 transition-all"
                        >
                          <span>Join Chapters</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* 3-Column Grid of 9 Societies with Logos */}
                      <div className="grid grid-cols-3 gap-2">
                        {IEEE_CHAPTERS.map((chapter) => (
                          <a
                            key={chapter.id}
                            href={chapter.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 border border-white/5 hover:border-sky-500/40 transition-all shadow-sm h-full"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-white/10 p-1 flex items-center justify-center shrink-0 group-hover:border-sky-500/40 group-hover:scale-105 transition-all shadow-inner">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={chapter.logo}
                                  alt={chapter.name}
                                  className="w-full h-full object-contain filter drop-shadow"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-bold text-slate-100 group-hover:text-sky-300 truncate">
                                    {chapter.shortName}
                                  </span>
                                  <ExternalLink className="w-2.5 h-2.5 text-slate-500 group-hover:text-sky-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                </div>
                                <span
                                  className="text-[8.5px] px-1.5 py-0.5 rounded-full font-mono uppercase font-semibold tracking-wide inline-block mt-0.5"
                                  style={{
                                    backgroundColor: `${chapter.color}22`,
                                    color: chapter.color,
                                    border: `1px solid ${chapter.color}44`,
                                  }}
                                >
                                  {chapter.category}
                                </span>
                              </div>
                            </div>
                            <div className="text-[10px] text-slate-400 group-hover:text-slate-300 line-clamp-2 leading-tight mt-1.5 pt-1.5 border-t border-white/5">
                              {chapter.desc}
                            </div>
                          </a>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between px-1 text-[11px] text-slate-400">
                        <span>Looking to join or initiate society activities?</span>
                        <Link
                          href="/contact"
                          className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                        >
                          Contact Us <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Conferences Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setIccsaiDropdownOpen(true)}
              onMouseLeave={() => setIccsaiDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${pathname.startsWith("/iccsai-2026") || pathname.startsWith("/conference")
                  ? "text-amber-300 bg-purple-600/30 border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                  : "text-amber-300 hover:text-white bg-gradient-to-r from-purple-900/40 to-amber-900/30 border border-amber-500/30 hover:border-amber-400"
                  }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Conferences</span>
                <ChevronDown
                  className={`w-3 h-3 text-amber-400 transition-transform duration-200 ${iccsaiDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Flexible Dropdown Menu */}
              <AnimatePresence>
                {iccsaiDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-96 pt-2 z-50"
                  >
                    <div className="bg-[#0b101d] border border-purple-500/30 rounded-2xl shadow-2xl p-3 backdrop-blur-2xl space-y-2.5">
                      <div className="px-3 py-2 bg-gradient-to-r from-purple-950 to-blue-950 rounded-xl border border-purple-500/20 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            IEEE Flagship Conferences
                          </div>
                          <div className="text-[10px] text-slate-300">
                            Galgotias University • IEEE Region 10
                          </div>
                        </div>
                      </div>

                      {/* Flagship Conference Portals */}
                      <div className="space-y-1">
                        <div className="px-2 pt-0.5 text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                          Official Conference Websites
                        </div>
                        {flagshipConferences.map((conf) => (
                          <a
                            key={conf.name}
                            href={conf.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 text-slate-200 hover:text-white transition-all group"
                          >
                            <div className="space-y-0.5">
                              <div className="text-xs font-bold group-hover:text-amber-300 flex items-center gap-1.5">
                                <span>{conf.name}</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono">
                                  {conf.badge}
                                </span>
                              </div>
                              <div className="text-[10px] text-slate-400 line-clamp-1">
                                {conf.fullName}
                              </div>
                            </div>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-300 shrink-0" />
                          </a>
                        ))}
                      </div>

                      {/* ICCSAI 2026 Quick Sublinks */}
                      <div className="pt-2 border-t border-white/10 space-y-1">
                        <div className="px-2 text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                          ICCSAI 2026 Student Branch Hub
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {iccsaiSublinks.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className="px-2.5 py-1.5 rounded-lg hover:bg-white/5 text-[11px] font-medium text-slate-300 hover:text-amber-300 transition-colors flex items-center justify-between group"
                            >
                              <span>{sublink.name}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(3).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${isActive
                    ? "text-sky-300"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-600/20 border border-sky-400/40 rounded-xl"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* RIGHT CONTROLS: THEME TOGGLE + JOIN CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-amber-400 hover:bg-white/10 hover:border-amber-400/40 transition-all shrink-0"
              title={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-purple-300" />}
            </button>

            <Link
              href="/membership"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00629B] via-purple-600 to-indigo-600 text-white font-bold text-xs shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 border border-white/20 whitespace-nowrap shrink-0 hover:scale-105"
            >
              <span>Join IEEE GU SB</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white xl:hidden shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Stagger Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-[#060911]/95 border-b border-white/10 backdrop-blur-2xl px-4 pt-3 pb-6 mt-2 space-y-3 overflow-hidden"
          >
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold ${pathname === link.href
                    ? "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                    : "text-slate-300 hover:bg-white/5"
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Chapters Section */}
              <div className="mt-2 pt-2 border-t border-white/10 space-y-2">
                <div className="px-3 text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  IEEE Chapters & Societies
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-1">
                  {IEEE_CHAPTERS.map((chap) => (
                    <a
                      key={chap.id}
                      href={chap.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] text-xs font-semibold text-slate-200 hover:text-sky-300 flex items-center gap-2.5 border border-white/5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-slate-950/80 border border-white/10 p-1 shrink-0 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={chap.logo} alt={chap.shortName} className="w-full h-full object-contain filter drop-shadow" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="truncate text-xs font-bold">{chap.shortName}</div>
                        <div className="text-[10px] text-slate-400 truncate">{chap.name}</div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Conferences Section */}
              <div className="mt-2 pt-2 border-t border-white/10 space-y-2">
                <div className="px-3 text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  IEEE Conferences
                </div>
                <div className="grid gap-1 pl-1">
                  {flagshipConferences.map((conf) => (
                    <a
                      key={conf.name}
                      href={conf.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-purple-900/30 flex items-center justify-between"
                    >
                      <span>{conf.name} ({conf.badge})</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  ))}
                </div>

                <div className="px-3 pt-2 text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                  ICCSAI 2026 Student Branch Hub
                </div>
                <div className="grid gap-1 pl-2">
                  {iccsaiSublinks.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-amber-300 hover:bg-white/5"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2">
                <Link
                  href="/membership"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center py-3 rounded-xl bg-gradient-to-r from-[#00629B] via-purple-600 to-red-600 text-white font-bold text-xs shadow-lg"
                >
                  Join IEEE GU SB Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

