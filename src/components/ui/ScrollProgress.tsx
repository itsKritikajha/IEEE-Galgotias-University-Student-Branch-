"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollPercent(Math.round(Number(scroll) * 100) || 0);

      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Top Gradient Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-purple-500 to-amber-400 origin-left z-[100] shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        style={{ scaleX }}
      />

      {/* Floating Scroll to Top Button with SVG Circular Progress */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0c1222]/90 border border-white/20 backdrop-blur-xl shadow-2xl hover:border-sky-400 hover:scale-110 text-slate-200 hover:text-white transition-all group flex items-center justify-center"
        >
          {/* Circular Progress Ring */}
          <svg className="w-10 h-10 -rotate-90 pointer-events-none absolute inset-0 m-auto">
            <circle
              cx="20"
              cy="20"
              r="17"
              className="stroke-white/10"
              strokeWidth="2"
              fill="transparent"
            />
            <circle
              cx="20"
              cy="20"
              r="17"
              className="stroke-sky-400 group-hover:stroke-purple-400 transition-colors"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={106.8}
              strokeDashoffset={106.8 - (106.8 * scrollPercent) / 100}
              strokeLinecap="round"
            />
          </svg>

          <ArrowUp className="w-4 h-4 text-sky-400 group-hover:text-purple-300 transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </>
  );
};
