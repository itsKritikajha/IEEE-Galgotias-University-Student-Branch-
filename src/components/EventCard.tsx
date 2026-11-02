"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, ExternalLink, Sparkles, Instagram, Linkedin, ShieldCheck, Tag, Images, Maximize2 } from "lucide-react";
import { EventItem } from "@/data/eventsData";

interface EventCardProps {
  event: EventItem;
  onOpenLightbox?: (imgUrl: string, title: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onOpenLightbox }) => {
  const [imgError, setImgError] = useState(false);
  const placeholder = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%230b0f19"/><rect x="50" y="50" width="500" height="300" fill="%231e1b4b" rx="20"/><text x="300" y="200" font-family="sans-serif" font-size="20" fill="%2300b5e2" text-anchor="middle">${event.title}</text></svg>`;

  // Dynamic Aspect Ratio classes matching actual image dimensions
  const getAspectClass = (aspect?: "portrait" | "landscape" | "square") => {
    if (aspect === "landscape") return "aspect-[16/9]";
    if (aspect === "square") return "aspect-square";
    return "aspect-[4/5]";
  };

  return (
    <div className="group rounded-3xl bg-gradient-to-b from-[#111827] via-[#0d1322] to-[#080d1a] border border-white/10 overflow-hidden shadow-2xl hover:border-sky-400/50 hover:shadow-[0_0_35px_rgba(56,189,248,0.2)] transition-all duration-300 flex flex-col h-auto">
      {/* Top Header Metadata Bar: Badges NOT covering the poster */}
      <div className="px-4 py-3 bg-[#0a0f1d] border-b border-white/5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-purple-600 text-white shadow-sm">
            {event.category}
          </span>
          <span
            className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm"
            style={{
              backgroundColor: `${event.chapterColor || "#00629B"}`,
            }}
          >
            {event.chapterShort}
          </span>
        </div>

        <div>
          {event.isUpcoming ? (
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500 text-slate-950 flex items-center gap-1 shadow animate-pulse">
              <Sparkles className="w-3 h-3" /> Upcoming
            </span>
          ) : event.vtoolsId ? (
            <span className="px-2 py-0.5 rounded-lg text-[9px] font-mono font-bold bg-slate-900 text-sky-300 border border-sky-500/30 flex items-center gap-1 shadow">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              {event.vtoolsId}
            </span>
          ) : null}
        </div>
      </div>

      {/* Dynamic Image Container matching exact poster aspect ratio */}
      <div
        className={`relative w-full ${getAspectClass(event.aspectRatio)} bg-[#060a14] overflow-hidden cursor-pointer select-none`}
        onClick={() => onOpenLightbox && onOpenLightbox(event.image, event.title)}
      >
        {/* Edge-to-edge crisp image */}
        <Image
          src={imgError ? placeholder : event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgError(true)}
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />

        {/* Hover Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Bottom Floating Indicators */}
        <div className="absolute bottom-2.5 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
          {event.galleryImages && event.galleryImages.length > 0 ? (
            <span className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/20 text-white text-[10px] font-bold flex items-center gap-1 backdrop-blur-md shadow-lg">
              <Images className="w-3 h-3 text-sky-400" />
              <span>+{event.galleryImages.length} Photos</span>
            </span>
          ) : (
            <span />
          )}

          <span className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/20 text-white/90 text-[10px] font-semibold flex items-center gap-1 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            <Maximize2 className="w-3 h-3 text-sky-400" />
            <span>Full Screen</span>
          </span>
        </div>
      </div>

      {/* Event Info & Content */}
      <div className="p-5 space-y-3.5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-sky-300 font-medium">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>{event.date}</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="line-clamp-1">{event.location}</span>
          </span>
        </div>

        <h3 className="font-serif text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
          {event.title}
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
          {event.description}
        </p>

        {event.highlights && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {event.highlights.map((h, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-semibold text-sky-300 border border-white/10 flex items-center gap-1"
              >
                <Tag className="w-2.5 h-2.5 text-sky-400 opacity-60" />
                <span>{h}</span>
              </span>
            ))}
          </div>
        )}

        {/* Footer Actions directly attached below tags */}
        <div className="pt-2 space-y-2 border-t border-white/5">
          {event.ieeeXploreUrl && (
            <a
              href={event.ieeeXploreUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#00629B]/25 border border-[#00629B]/50 text-xs font-bold text-sky-300 hover:bg-[#00629B] hover:text-white transition-all shadow-sm"
            >
              <span>View IEEE Xplore Proceedings</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <div className="flex items-center gap-2">
            {event.instaUrl && (
              <a
                href={event.instaUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-pink-600/15 border border-pink-500/30 text-xs font-semibold text-pink-300 hover:bg-pink-600 hover:text-white transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}

            {event.linkedinUrl && (
              <a
                href={event.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-sky-600/15 border border-sky-500/30 text-xs font-semibold text-sky-300 hover:bg-sky-600 hover:text-white transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
