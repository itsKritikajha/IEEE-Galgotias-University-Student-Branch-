"use client";

import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "",
}) => {
  const speedDuration =
    speed === "fast" ? "20s" : speed === "slow" ? "50s" : "32s";

  return (
    <div
      className={`group relative flex overflow-hidden p-2 [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,1)_15%,rgba(0,0,0,1)_85%,transparent_100%)] ${className}`}
    >
      <div
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 ${
          direction === "right" ? "animate-marquee-reverse" : "animate-marquee"
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: speedDuration }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 ${
          direction === "right" ? "animate-marquee-reverse" : "animate-marquee"
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: speedDuration }}
      >
        {children}
      </div>
    </div>
  );
};
