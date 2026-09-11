"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, ExternalLink, Sparkles, Instagram } from "lucide-react";
import { EventItem } from "@/data/eventsData";

interface EventCardProps {
  event: EventItem;
  onOpenLightbox?: (imgUrl: string, title: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onOpenLightbox }) => {
  const [imgError, setImgError] = useState(false);
  const placeholder = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%230b0f19"/><rect x="50" y="50" width="500" height="300" fill="%231e1b4b" rx="20"/><text x="300" y="200" font-family="sans-serif" font-size="20" fill="%2300b5e2" text-anchor="middle">${event.title}</text></svg>`;

  return (
    <div className="group rounded-2xl bg-gradient-to-b from-[#131b2e] to-[#0a0e17] border border-white/10 overflow-hidden shadow-xl hover:border-purple-500/50 hover:shadow-purple-600/20 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Event Banner */}
        <div
          className="relative aspect-video w-full overflow-hidden cursor-pointer"
          onClick={() => onOpenLightbox && onOpenLightbox(event.image, event.title)}
        >
          <Image
            src={imgError ? placeholder : event.image}
            alt={event.title}
            fill
            onError={() => setImgError(true)}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-60"></div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-600/90 text-white border border-purple-400/30 backdrop-blur-md shadow">
              {event.category}
            </span>
            {event.isUpcoming && (
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-slate-950 flex items-center gap-1 shadow animate-pulse">
                <Sparkles className="w-3 h-3" /> Upcoming
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="p-5 space-y-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-sky-300 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              {event.date}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              {event.location}
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
            {event.title}
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
            {event.description}
          </p>

          {event.highlights && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {event.highlights.map((h, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-semibold text-purple-300 border border-white/10"
                >
                  #{h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions: IEEE Xplore & Instagram links */}
      <div className="p-4 pt-0 space-y-2">
        {event.ieeeXploreUrl && (
          <a
            href={event.ieeeXploreUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#00629B]/20 border border-[#00629B]/40 text-xs font-semibold text-sky-300 hover:bg-[#00629B] hover:text-white transition-colors"
          >
            <span>View IEEE Xplore Proceedings</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        {event.instaUrl && (
          <a
            href={event.instaUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-pink-600/20 border border-pink-500/30 text-xs font-semibold text-pink-300 hover:bg-pink-600 hover:text-white transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover:text-white" />
            <span>View Post on Instagram @ieee_gusb</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
