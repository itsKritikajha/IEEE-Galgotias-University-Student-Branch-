"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  FileText,
  Calendar,
  Users,
  Award,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
  Compass,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Pages" | "Conference" | "Actions" | "Quick Links";
  href: string;
  icon: any;
  isExternal?: boolean;
}

export const CommandMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const items: CommandItem[] = [
    { id: "home", title: "Home Overview", category: "Pages", href: "/", icon: Compass },
    { id: "about", title: "About IEEE GU SB", category: "Pages", href: "/about", icon: ShieldCheck },
    { id: "team", title: "Core Team & Leadership", category: "Pages", href: "/team", icon: Users },
    { id: "events", title: "Events & Photo Gallery", category: "Pages", href: "/events", icon: Calendar },
    { id: "membership", title: "Join IEEE GU SB Membership", category: "Pages", href: "/membership", icon: Award },
    { id: "contact", title: "Contact Us & Campus Location", category: "Pages", href: "/contact", icon: Globe },
    { id: "iccsai", title: "ICCSAI 2026 Conference Hub", category: "Conference", href: "/iccsai-2026", icon: Sparkles },
    { id: "committee", title: "Conference Organizing Committee", category: "Conference", href: "/iccsai-2026/committee", icon: Users },
    { id: "registration", title: "Conference Registration Fees", category: "Conference", href: "/iccsai-2026/registration", icon: FileText },
    { id: "guidelines", title: "Author Submission Guidelines", category: "Conference", href: "/iccsai-2026/guidelines", icon: FileText },
    { id: "cmt", title: "Submit Paper via Microsoft CMT", category: "Actions", href: "https://cmt3.research.microsoft.com/", icon: ExternalLink, isExternal: true },
    { id: "insta", title: "Official Instagram @ieee_gusb", category: "Quick Links", href: "https://www.instagram.com/ieee_gusb/", icon: ExternalLink, isExternal: true },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: CommandItem) => {
    setIsOpen(false);
    setQuery("");
    if (item.isExternal) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  };

  return (
    <>
      {/* Quick Launch Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-all backdrop-blur-md group"
      >
        <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400" />
        <span>Search site...</span>
        <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-black/40 border border-white/15 text-[10px] font-mono text-slate-400">
          <span className="text-[9px]">⌘</span>K
        </kbd>
      </button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-20 sm:pt-28 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl rounded-2xl bg-[#0c1222] border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden z-10"
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
                <Search className="w-4 h-4 text-sky-400 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Type a command or search (e.g. ICCSAI, events, papers)..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="text-slate-400 hover:text-white text-xs"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-400 hover:text-white"
                >
                  ESC
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
                {filteredItems.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-400">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredItems.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(item)}
                          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-sky-500/10 hover:border-sky-500/30 border border-transparent text-left group transition-all text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-sky-400 group-hover:border-sky-400/30 transition-colors">
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="font-semibold text-white group-hover:text-sky-300 transition-colors">
                                {item.title}
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono">
                                {item.category}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-slate-400 group-hover:text-white">
                            <span className="text-[10px]">Jump to</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Bottom Quick Help Footer */}
              <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>IEEE GU SB Quick Navigation</span>
                <span className="flex items-center gap-2">
                  <span>Press <kbd className="px-1 rounded bg-white/10 text-white">ESC</kbd> to close</span>
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
