"use client";

import React from "react";
import Link from "next/link";

interface ShimmerButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  shimmerColor?: string;
  background?: string;
  icon?: React.ReactNode;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  shimmerColor = "#38bdf8",
  background = "#0c1222",
  icon,
}) => {
  const content = (
    <div
      className={`relative inline-flex items-center justify-center p-[1.5px] overflow-hidden rounded-xl group transition-transform active:scale-95 duration-200 ${className}`}
    >
      {/* Animated gradient spinning border */}
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00629B_0%,#38bdf8_50%,#c084fc_100%)] opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Button Content Surface */}
      <span
        className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-xs sm:text-sm font-bold text-white transition-colors duration-200 group-hover:text-amber-200"
        style={{ backgroundColor: background }}
      >
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button onClick={onClick}>{content}</button>;
};
