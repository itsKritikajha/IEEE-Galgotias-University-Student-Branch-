"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { CONFERENCE_DATA } from "@/data/conference";

export default function ConferenceSchedulePage() {
  const schedule = [
    {
      day: "Day 1 - Nov 28, 2026",
      events: [
        { time: "09:00 AM - 10:30 AM", title: "Inaugural Ceremony & Welcome Address", venue: "Main Auditorium, Block C" },
        { time: "10:45 AM - 12:15 PM", title: "Keynote 1: Next-Gen AI Systems & Ethics", venue: "Auditorium Hall A" },
        { time: "01:30 PM - 04:30 PM", title: "Track 1 & Track 2 Technical Paper Presentations", venue: "Seminar Halls 1 & 2" },
      ],
    },
    {
      day: "Day 2 - Nov 29, 2026",
      events: [
        { time: "09:30 AM - 11:00 AM", title: "Keynote 2: Zero-Trust Cybersecurity Architecture", venue: "Auditorium Hall A" },
        { time: "11:15 AM - 01:00 PM", title: "Track 3 & Track 4 Parallel Research Sessions", venue: "Seminar Halls 3 & 4" },
        { time: "02:00 PM - 05:00 PM", title: "Poster Presentation & Cultural Evening", venue: "Campus Open Lawn" },
      ],
    },
    {
      day: "Day 3 - Nov 30, 2026",
      events: [
        { time: "10:00 AM - 01:00 PM", title: "Track 5 & Track 6 Final Paper Sessions", venue: "Seminar Halls 1 & 2" },
        { time: "02:30 PM - 04:00 PM", title: "Valedictory Ceremony & Best Paper Awards", venue: "Main Auditorium, Block C" },
      ],
    },
  ];

  return (
    <div className="space-y-10 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link
          href="/conference"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to ICCSAI 2026 Hub</span>
        </Link>

        <div className="space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Program Overview
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            ICCSAI 2026 Schedule & Sessions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            3-day schedule of keynote addresses, technical paper tracks, and valedictory awards.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {schedule.map((dayGroup, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-[#0f172a] border border-white/10 space-y-4 shadow-xl">
            <h3 className="font-serif text-xl font-bold text-amber-300 flex items-center gap-2 border-b border-white/10 pb-3">
              <Calendar className="w-5 h-5 text-amber-400" />
              {dayGroup.day}
            </h3>

            <div className="space-y-3">
              {dayGroup.events.map((ev, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-sky-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {ev.time}
                    </span>
                    <h4 className="font-serif text-base font-bold text-white mt-1">{ev.title}</h4>
                  </div>
                  <span className="text-xs text-slate-300 flex items-center gap-1 bg-white/5 px-3 py-1 rounded-lg border border-white/10 w-fit">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    {ev.venue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
