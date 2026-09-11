"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Sparkles, ExternalLink, Sun, Moon } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const iccsaiSublinks = [
    { name: "ICCSAI 2026 Hub", href: "/iccsai-2026", desc: "Conference Overview & Call for Papers" },
    { name: "Organizing Committee", href: "/iccsai-2026/committee", desc: "Patrons, Chairs & Advisory Board" },
    { name: "Registration & Fees", href: "/iccsai-2026/registration", desc: "Pricing Tiers & Payment Details" },
    { name: "Author Guidelines", href: "/iccsai-2026/guidelines", desc: "Submission Instructions & Formatting" },
    { name: "Program Schedule", href: "/conference/schedule", desc: "3-Day Keynotes & Track Sessions" },
    { name: "Past Editions", href: "/conference/past-editions", desc: "IEEE Xplore Archives (2023, 2025)" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0f19]/90 dark:bg-[#0b0f19]/90 bg-white/90 backdrop-blur-md border-b border-white/10 dark:border-white/10 border-slate-200 shadow-xl py-2"
          : "bg-gradient-to-b from-[#0b0f19]/95 via-[#0b0f19]/80 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* TRIPLE LOGO BRAND STRIP */}
          <Link href="/" className="flex items-center gap-2 sm:gap-4 group">
            {/* 1. Galgotias University Mark */}
            <div className="flex items-center gap-1.5 bg-white/10 dark:bg-white/10 bg-slate-900/5 px-2.5 py-1.5 rounded-lg border border-white/15 dark:border-white/15 border-slate-300 backdrop-blur-sm transition-transform group-hover:scale-105">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center font-bold text-white text-xs shadow-inner">
                GU
              </div>
              <div className="hidden xl:block text-left">
                <div className="text-[10px] font-bold tracking-wider text-red-400 uppercase leading-none">
                  Galgotias
                </div>
                <div className="text-[9px] font-semibold text-slate-300 dark:text-slate-300 text-slate-700 leading-none">
                  University
                </div>
              </div>
            </div>

            <div className="h-6 w-px bg-white/20 dark:bg-white/20 bg-slate-300"></div>

            {/* 2. Parent IEEE Logo */}
            <div className="flex items-center gap-1.5 bg-[#00629B]/20 px-2.5 py-1.5 rounded-lg border border-[#00629B]/40 backdrop-blur-sm transition-transform group-hover:scale-105">
              <div className="w-7 h-7 rounded-md bg-[#00629B] flex items-center justify-center font-extrabold text-white text-xs shadow-md">
                IEEE
              </div>
              <span className="hidden xl:inline text-[11px] font-bold text-sky-400 tracking-wider">
                PARENT ORG
              </span>
            </div>

            <div className="h-6 w-px bg-white/20 dark:bg-white/20 bg-slate-300"></div>

            {/* 3. IEEE GU SB Mark */}
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-800 p-0.5 shadow-lg">
                  <div className="w-full h-full bg-[#0b0f19] rounded-[6px] flex items-center justify-center font-extrabold text-xs text-purple-300">
                    SB
                  </div>
                </div>
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-extrabold tracking-tight text-white dark:text-white text-slate-900 flex items-center gap-1">
                  <span className="text-sky-400">IEEE</span>
                  <span className="text-red-500 font-bold">GU</span>
                  <span className="text-purple-400">SB</span>
                </div>
                <div className="text-[10px] text-slate-400 font-medium hidden sm:block">
                  Student Branch #STB99158
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 3).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "text-sky-400 bg-sky-500/10 border border-sky-500/30"
                      : "text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* ICCSAI 2026 Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIccsaiDropdownOpen(true)}
              onMouseLeave={() => setIccsaiDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold transition-all ${
                  pathname.startsWith("/iccsai-2026") || pathname.startsWith("/conference")
                    ? "text-purple-300 bg-purple-600/20 border border-purple-500/40 shadow-lg"
                    : "text-amber-300 hover:text-amber-200 bg-gradient-to-r from-purple-900/40 to-amber-900/30 border border-amber-500/30"
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>ICCSAI 2026</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
              </button>

              {/* Flexible Dropdown Menu */}
              {iccsaiDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-[#0f172a] border border-purple-500/30 rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                    <div className="px-3 py-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg mb-1">
                      <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                        IEEE Flagship Conference
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Nov 28–30, 2026 • Greater Noida
                      </div>
                    </div>
                    {iccsaiSublinks.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-3 py-2 rounded-lg hover:bg-purple-600/20 text-slate-200 hover:text-white transition-colors group"
                      >
                        <div className="text-xs font-semibold group-hover:text-amber-300 flex items-center justify-between">
                          <span>{sublink.name}</span>
                          <ChevronDown className="w-3 h-3 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {sublink.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(3).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "text-sky-400 bg-sky-500/10 border border-sky-500/30"
                      : "text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/10 border border-white/20 text-amber-400 hover:bg-white/20 transition-all"
              title={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-purple-300" />}
            </button>

            <Link
              href="/membership"
              className="relative group overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-[#00629B] to-[#7C3AED] text-white font-semibold text-xs shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border border-white/20"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Join IEEE GU SB
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 border border-white/20 text-amber-400"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-purple-300" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0f19]/95 border-b border-white/10 backdrop-blur-2xl px-4 pt-3 pb-6 mt-2 space-y-3">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                  pathname === link.href
                    ? "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-2 pt-2 border-t border-white/10">
              <div className="px-3 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                ICCSAI 2026 Subsite Links
              </div>
              <div className="grid gap-1 pl-2">
                {iccsaiSublinks.map((sublink) => (
                  <Link
                    key={sublink.href}
                    href={sublink.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-md text-xs font-medium text-slate-300 hover:text-amber-300 hover:bg-purple-900/30"
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
                className="w-full block text-center py-2.5 rounded-lg bg-gradient-to-r from-[#00629B] via-purple-600 to-red-600 text-white font-bold text-sm shadow-md"
              >
                Join IEEE GU SB Today
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
