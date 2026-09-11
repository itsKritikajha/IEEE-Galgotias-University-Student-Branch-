"use client";

import React from "react";

interface PosterTitleProps {
  subtitle?: string;
}

export const PosterTitle: React.FC<PosterTitleProps> = ({ subtitle }) => {
  return (
    <div className="text-center py-6 sm:py-10 select-none">
      {/* Top Triple Logos */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 mb-8 opacity-90">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center font-bold text-white text-xs shadow-md">
            GU
          </div>
          <div className="text-left font-serif text-[11px] font-bold text-slate-200 tracking-wider">
            GALGOTIAS<br />UNIVERSITY
          </div>
        </div>

        <div className="h-6 w-px bg-white/20"></div>

        <div className="flex items-center gap-2">
          <div className="w-9 h-8 bg-[#00629B] rounded flex items-center justify-center font-black text-white text-xs tracking-widest shadow-md">
            IEEE
          </div>
        </div>

        <div className="h-6 w-px bg-white/20"></div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-purple-800 p-0.5 shadow-md">
            <div className="w-full h-full bg-[#0b0f19] rounded flex items-center justify-center font-bold text-[10px] text-purple-300">
              GU SB
            </div>
          </div>
          <div className="text-left font-sans text-[10px] font-semibold text-slate-300">
            Student<br />Branch
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
