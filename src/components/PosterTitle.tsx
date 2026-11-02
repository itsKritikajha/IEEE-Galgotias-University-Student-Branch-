"use client";

import React from "react";

interface PosterTitleProps {
  subtitle?: string;
}

export const PosterTitle: React.FC<PosterTitleProps> = ({ subtitle }) => {
  return (
    <div className="text-center py-6 sm:py-10 select-none">
      {/* Top Triple Logos with real assets */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8">
        <div className="flex items-center h-11 px-3 py-1.5 rounded-xl bg-white/95 border border-white/20 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/gulogo.png"
            alt="Galgotias University"
            className="h-7 w-auto object-contain"
          />
        </div>

        <div className="h-6 w-px bg-white/20 hidden sm:block"></div>

        <div className="flex items-center h-11 px-3 py-1.5 rounded-xl bg-white/95 border border-white/20 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sponsors/ieee.png"
            alt="IEEE"
            className="h-6 w-auto object-contain"
          />
        </div>

        <div className="h-6 w-px bg-white/20 hidden sm:block"></div>

        {/* IEEE Student Branch Logo */}
        <div className="flex items-center gap-2 h-11 px-3 py-1.5 rounded-xl bg-white/95 border border-white/20 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/ieee-sb-logo.jpg"
            alt="IEEE Student Branch"
            className="h-6 w-auto object-contain rounded"
          />
          <div className="text-left leading-tight hidden sm:block">
            <div className="text-[11px] font-bold text-slate-900">
              IEEE GU SB
            </div>
            <div className="text-[9px] text-slate-500 font-medium">
              Student Branch
            </div>
          </div>
        </div>
      </div>

      {/* Main Title Container matching reference poster */}
      <div className="relative inline-block px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {/* IEEE in Light Blue Serif */}
          <span className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#00B5E2] drop-shadow-sm">
            IEEE
          </span>

          {/* GU SB in Bright Red Serif */}
          <span className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#E63946] drop-shadow-sm">
            GU SB
          </span>

          {/* Cursive "Core" Script accent in Bright Red */}
          <span className="font-cursive-accent text-5xl sm:text-7xl md:text-8xl text-[#E63946] -rotate-6 transform translate-y-1 sm:translate-y-2 font-normal drop-shadow-md">
            Core
          </span>
        </div>

        {/* TEAM label in bold uppercase coral red under Core */}
        <div className="text-right pr-2 sm:pr-8 -mt-3 sm:-mt-5">
          <span className="font-sans text-xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.25em] text-[#E63946] uppercase">
            TEAM
          </span>
        </div>

        {/* Decorative underline matching poster */}
        <div className="mt-4 mx-auto w-48 sm:w-80 h-0.5 bg-gradient-to-r from-transparent via-[#E63946] to-transparent"></div>
      </div>

      {subtitle && (
        <p className="mt-4 text-xs sm:text-sm text-purple-200 max-w-xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};
