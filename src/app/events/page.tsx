"use client";

import React, { useState } from "react";
import { EventCard } from "@/components/EventCard";
import { LightboxModal } from "@/components/LightboxModal";
import { EVENTS_DATA } from "@/data/eventsData";
import { Calendar, Search, LayoutGrid, List, Instagram, ExternalLink, Sparkles } from "lucide-react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    imgUrl: "",
    title: "",
  });

  const categories = ["All", "Conference", "Workshop", "Hackathon", "Competition"];

  const filteredEvents = EVENTS_DATA.filter((e) => {
    const matchesCategory = selectedCategory === "All" || e.category === selectedCategory;
    const matchesSearch =
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-semibold">
          <Calendar className="w-3.5 h-3.5 text-purple-400" />
          <span>IEEE GU SB Official Events & Competitions</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
          Events & Photo Gallery
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Discover our upcoming bootcamps, hackathons, robotics challenges, and past international conferences indexed in IEEE Xplore.
        </p>

        {/* Instagram Page CTA Banner */}
        <div className="pt-2">
          <a
            href="https://www.instagram.com/ieee_gusb/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 text-white font-bold text-xs shadow-lg hover:scale-105 transition-all border border-white/20"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Official Instagram @ieee_gusb for Live Updates</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Flexible Controls Bar: Search + Category Filter Tabs + View Mode */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search bootcamps, robotics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-slate-400 focus:border-sky-400 focus:outline-none"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#00629B] to-purple-700 text-white shadow-lg border border-white/20"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-1.5 rounded-lg transition-colors ${viewMode === "grid" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"}`}
            title="Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-1.5 rounded-lg transition-colors ${viewMode === "list" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"}`}
            title="List View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Events Presentation (Flexible Grid vs List) */}
      {filteredEvents.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-sm font-semibold text-slate-300">No events matched your search filter.</p>
          <button
            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
            className="mt-3 text-xs font-bold text-sky-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onOpenLightbox={(imgUrl, title) =>
                setLightboxState({ isOpen: true, imgUrl, title })
              }
            />
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        imgUrl={lightboxState.imgUrl}
        title={lightboxState.title}
        onClose={() => setLightboxState({ isOpen: false, imgUrl: "", title: "" })}
      />
    </div>
  );
}
