"use client";

import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
  gradient,
}: {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
  gradient?: string;
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b101d]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40 hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.2)] flex flex-col justify-between ${
        className || ""
      }`}
    >
      {/* Background ambient gradient */}
      <div
        className={`absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 opacity-20 group-hover:opacity-40 pointer-events-none ${
          gradient || "bg-sky-500"
        }`}
      />

      <div className="relative z-10 space-y-4">
        {header && <div className="mb-4">{header}</div>}

        <div className="flex items-center justify-between">
          {icon && (
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:border-sky-500/40 transition-all duration-300">
              {icon}
            </div>
          )}
          {badge && (
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>

      {/* Subtle bottom border highlight */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[11px] font-medium text-slate-400 group-hover:text-sky-300 transition-colors">
        <span>Explore Initiative &rarr;</span>
      </div>
    </div>
  );
};
