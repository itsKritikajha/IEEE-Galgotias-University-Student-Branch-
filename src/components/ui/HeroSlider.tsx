"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

interface SlideData {
  id: number;
  image: string;
  fallback: string;
  title: string;
  subtitle: string;
  tag: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    image: "/slider/slide-1.webp",
    fallback: "/slider/Slide1.JPG",
    title: "IEEE Galgotias University Student Branch",
    subtitle: "Student Committee, Core Organizers & Dignitaries Felicitations",
    tag: "Slide 01 • Student Branch Delegation",
  },
  {
    id: 2,
    image: "/slider/slide-2.webp",
    fallback: "/slider/Slide2.JPG",
    title: "Distinguished Academic & Industry Leadership",
    subtitle: "Branch Counselors, Faculty Mentors & International Keynote Dignitaries",
    tag: "Slide 02 • Faculty Leadership & Mentors",
  },
  {
    id: 3,
    image: "/slider/slide-3.webp",
    fallback: "/slider/Slide3.JPG",
    title: "Official Conference Souvenir Release",
    subtitle: "Inaugurating Flagship IEEE International Conference Proceedings",
    tag: "Slide 03 • Souvenir & Proceedings Launch",
  },
  {
    id: 4,
    image: "/slider/slide-4.webp",
    fallback: "/slider/Slide4.JPG",
    title: "Student Innovators, Volunteers & Hackathon Leads",
    subtitle: "Fostering Innovation, Tech Hackathons & Community Excellence",
    tag: "Slide 04 • Student Leaders & Innovators",
  },
  {
    id: 5,
    image: "/slider/slide-5.webp",
    fallback: "/slider/Slide5.JPG",
    title: "Inaugural Keynote & Technical Assemblies",
    subtitle: "Global Perspectives on AI, Communication & Next-Gen Computing",
    tag: "Slide 05 • Keynote & Technical Sessions",
  },
  {
    id: 6,
    image: "/slider/slide-6.webp",
    fallback: "/slider/Slide6.JPG",
    title: "Research Paper Tracks & Academic Excellence",
    subtitle: "Presenting Scopus & Web of Science Indexed Research Publications",
    tag: "Slide 06 • Research & Paper Presentations",
  },
  {
    id: 7,
    image: "/slider/slide-7.webp",
    fallback: "/slider/Slide7.JPG",
    title: "Flagship Valedictory & Award Felicitations",
    subtitle: "Celebrating Breakthrough Innovations, Best Papers & Outstanding Contributors",
    tag: "Slide 07 • Valedictory & Honors",
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Continuous automatic sliding every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide, currentIndex]);

  const current = SLIDES[currentIndex];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4">
      {/* Slider Container */}
      <div className="relative w-full h-[360px] sm:h-[500px] md:h-[580px] lg:h-[660px] rounded-3xl overflow-hidden border border-white/15 bg-[#080d1a] shadow-[0_0_50px_-10px_rgba(0,100,255,0.25)]">
        {/* Animated Slide Image with Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.image}
              alt={current.title}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== current.fallback) {
                  target.src = current.fallback;
                }
              }}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Ambient Dark Gradient Vignette Overlay for Premium Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-[#060911]/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060911]/80 via-transparent to-[#060911]/40" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Top Header Floating Badge */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-sky-300">
              IEEE GU SB STB99158
            </span>
            <span className="text-white/40">•</span>
            <span className="text-[10px] sm:text-[11px] text-slate-300 font-mono">
              Galgotias University
            </span>
          </div>
        </div>

        {/* Top Right Controls (Slide Counter & Auto-Play indicator) */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold shadow-xl flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sky-400">0{currentIndex + 1}</span>
            <span className="text-white/40 mx-0.5">/</span>
            <span className="text-slate-400">0{SLIDES.length}</span>
          </div>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
            title={isAutoPlaying ? "Pause Auto-slide" : "Resume Auto-slide"}
          >
            {isAutoPlaying ? (
              <Pause className="w-3.5 h-3.5 text-slate-300" />
            ) : (
              <Play className="w-3.5 h-3.5 text-slate-300 ml-0.5" />
            )}
          </button>
        </div>

        {/* Bottom Slide Info Overlay */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-sky-500/20 border border-sky-400/40 text-[10px] sm:text-xs font-mono font-semibold text-sky-300 backdrop-blur-md">
              {current.tag}
            </div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-white drop-shadow-md leading-tight">
              {current.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200/90 font-light drop-shadow line-clamp-2">
              {current.subtitle}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-sky-600/80 hover:border-sky-400 transition-all shadow-xl active:scale-95 group"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 text-slate-200 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-sky-600/80 hover:border-sky-400 transition-all shadow-xl active:scale-95 group"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Progress Dots Bar at Bottom Center */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 shadow-xl">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${idx === currentIndex
                ? "w-8 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 shadow-md shadow-sky-400/50"
                : "w-2 bg-white/30 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
