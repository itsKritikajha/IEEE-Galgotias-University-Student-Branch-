"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetIsoDate: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetIsoDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetIsoDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetIsoDate]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto select-none">
      {[
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINS", value: timeLeft.minutes },
        { label: "SECS", value: timeLeft.seconds },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-gradient-to-b from-purple-900/80 to-[#0f172a] border border-amber-400/30 shadow-lg backdrop-blur-md"
        >
          <span className="font-mono text-2xl sm:text-4xl font-extrabold text-amber-300 tracking-wider">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
