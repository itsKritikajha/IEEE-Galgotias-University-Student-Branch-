"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EventCard } from "@/components/EventCard";
import { LightboxModal } from "@/components/LightboxModal";
import { EVENTS_DATA, GALLERY_PHOTOS, EventItem } from "@/data/eventsData";
import {
  Calendar,
  Search,
  LayoutGrid,
  List,
  Instagram,
  Linkedin,
  ExternalLink,
  Sparkles,
  X,
  Filter,
  Layers,
  Image as ImageIcon,
  ShieldCheck,
  Award,
  ChevronRight,
  Maximize2,
  Clock,
} from "lucide-react";

export default function EventsPage() {
  const [activeMainTab, setActiveMainTab] = useState<"events" | "gallery">("events");
  const [selectedYear, setSelectedYear] = useState<string>("All Years");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedChapter, setSelectedChapter] = useState<string>("All Chapters");
  const [selectedGalleryCat, setSelectedGalleryCat] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    imgUrl: "",
    title: "",
  });

  const years = ["All Years", "2026", "2025", "2024", "2019"];

  const categories = ["All", "Conference", "Workshop", "Hackathon", "Competition", "Technical Talk", "Celebration"];

  const chapters = [
    "All Chapters",
    "IEEE CS",
    "IEEE CIS",
    "IEEE WIE",
    "IEEE IAS",
    "IEEE TEMS",
    "IEEE Photonics",
    "IEEE GU SB",
  ];

  const galleryCategories = [
    "All",
    "Conferences",
    "IEEE Day Week",
    "Young Minds & Hackathons",
    "Workshops & Tech Talks",
    "Awards & Leadership",
  ];

  const filteredEvents = EVENTS_DATA.filter((e) => {
    const matchesYear = selectedYear === "All Years" || e.year.toString() === selectedYear;
    const matchesCategory = selectedCategory === "All" || e.category === selectedCategory;
    const matchesChapter =
      selectedChapter === "All Chapters" ||
      e.chapterShort.includes(selectedChapter) ||
      e.chapter.includes(selectedChapter);
    const matchesSearch =
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.chapter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.vtoolsId && e.vtoolsId.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesYear && matchesCategory && matchesChapter && matchesSearch;
  });

  const filteredGallery = GALLERY_PHOTOS.filter((p) => {
    if (selectedGalleryCat === "All") return true;
    return p.category === selectedGalleryCat;
  });

  return (
    <div className="space-y-12 py-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/15 via-purple-500/15 to-amber-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold backdrop-blur-md shadow-sm"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>IEEE STB99158 Official Event, Conference &amp; Gallery Registry</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
          Events &amp; Photo Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light max-w-2xl mx-auto"
        >
          Explore authentic conferences indexed in IEEE Xplore, hands-on chapter bootcamps, national hackathons, and genuine moments verified via IEEE vTools and official social records.
        </motion.p>

        {/* Social Badges & Channels */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://www.instagram.com/ieee_gusb/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 hover:brightness-110 text-white font-bold text-xs shadow-md transition-all border border-white/20"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram @ieee_gusb</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <a
            href="https://www.linkedin.com/school/galgotias-university/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-sky-400 hover:text-white font-semibold text-xs border border-slate-700 transition-all shadow-md"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Chapter Updates</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* Main Mode Switcher: Events Directory vs Photo Gallery */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-xl">
          <button
            onClick={() => setActiveMainTab("events")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeMainTab === "events"
                ? "bg-gradient-to-r from-[#00629B] via-indigo-600 to-purple-600 text-white shadow-md shadow-sky-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>All Events &amp; Initiatives ({EVENTS_DATA.length})</span>
          </button>

          <button
            onClick={() => setActiveMainTab("gallery")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeMainTab === "gallery"
                ? "bg-gradient-to-r from-[#00629B] via-indigo-600 to-purple-600 text-white shadow-md shadow-sky-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Photo Gallery &amp; Albums ({GALLERY_PHOTOS.length})</span>
          </button>
        </div>
      </div>

      {/* TAB 1: ALL EVENTS */}
      {activeMainTab === "events" && (
        <div className="space-y-6">
          {/* Controls Bar: Search + Year Tabs + Category Filter Tabs + View Mode */}
          <div className="space-y-4 bg-[#0c1222]/90 p-4 sm:p-5 rounded-3xl border border-white/10 backdrop-blur-xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by topic, speaker, vTools ID, chapter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-slate-400 focus:border-sky-400 focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* View Mode Toggle & Clear Action */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <span className="text-xs text-slate-400 font-mono">
                  Showing <strong className="text-sky-400">{filteredEvents.length}</strong> of {EVENTS_DATA.length} events
                </span>

                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "grid" ? "bg-[#00629B] text-white shadow" : "text-slate-400 hover:text-white"
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "list" ? "bg-[#00629B] text-white shadow" : "text-slate-400 hover:text-white"
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Year Filter Pills */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Filter by Year Timeline</span>
              </div>
              <div className="flex items-center flex-wrap gap-1.5">
                {years.map((yr) => {
                  const isSelected = selectedYear === yr;
                  return (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`px-3.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 ring-1 ring-amber-300"
                          : "bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                      }`}
                    >
                      {yr}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <Filter className="w-3.5 h-3.5 text-sky-400" />
                <span>Filter by Event Type</span>
              </div>
              <div className="flex items-center flex-wrap gap-1.5">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-r from-[#00629B] to-purple-600 text-white shadow-md shadow-sky-500/20 ring-1 ring-sky-300/30"
                          : "bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chapter / Society Filter Chips */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>Filter by Chapter &amp; Society</span>
              </div>
              <div className="flex items-center flex-wrap gap-1.5">
                {chapters.map((chap) => {
                  const isSelected = selectedChapter === chap;
                  return (
                    <button
                      key={chap}
                      onClick={() => setSelectedChapter(chap)}
                      className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-purple-600 text-white shadow-md shadow-purple-500/20 ring-1 ring-purple-300/30"
                          : "bg-black/40 border border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10"
                      }`}
                    >
                      {chap}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Events Presentation (Flexible Grid vs List) */}
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-3xl bg-[#0c1222]/80 border border-white/10 space-y-3">
              <p className="text-sm font-semibold text-slate-300">No events matched your current search or filters.</p>
              <button
                onClick={() => {
                  setSelectedYear("All Years");
                  setSelectedCategory("All");
                  setSelectedChapter("All Chapters");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-sky-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Reset All Filters</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                  : "space-y-6"
              }
            >
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="break-inside-avoid mb-6"
                >
                  <EventCard
                    event={event}
                    onOpenLightbox={(imgUrl, title) =>
                      setLightboxState({ isOpen: true, imgUrl, title })
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: PHOTO GALLERY & ALBUMS */}
      {activeMainTab === "gallery" && (
        <div className="space-y-8">
          {/* Gallery Category Filter */}
          <div className="flex items-center justify-center flex-wrap gap-2 p-2 bg-slate-900/80 rounded-2xl border border-slate-800 max-w-3xl mx-auto shadow-md">
            {galleryCategories.map((gcat) => {
              const isSelected = selectedGalleryCat === gcat;
              return (
                <button
                  key={gcat}
                  onClick={() => setSelectedGalleryCat(gcat)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {gcat}
                </button>
              );
            })}
          </div>

          {/* Photo Grid with Dynamic Aspect Ratio & Masonry Columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredGallery.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid mb-6 group relative rounded-3xl bg-gradient-to-b from-[#111827] via-[#0d1322] to-[#080d1a] border border-white/10 overflow-hidden shadow-2xl hover:border-sky-400/50 hover:shadow-[0_0_35px_rgba(56,189,248,0.2)] transition-all flex flex-col h-auto"
              >
                <div>
                  {/* Header Tag */}
                  <div className="px-4 py-2.5 bg-[#0a0f1d] border-b border-white/5 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-sky-300 border border-sky-400/30">
                      {photo.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{photo.date}</span>
                  </div>

                  {/* Dynamic Photo Container matching exact aspect ratio */}
                  <div
                    className={`relative w-full ${
                      photo.aspectRatio === "landscape"
                        ? "aspect-[16/9]"
                        : photo.aspectRatio === "square"
                        ? "aspect-square"
                        : "aspect-[4/5]"
                    } bg-[#060a14] overflow-hidden cursor-pointer select-none`}
                    onClick={() =>
                      setLightboxState({
                        isOpen: true,
                        imgUrl: photo.image,
                        title: `${photo.title} • ${photo.event}`,
                      })
                    }
                  >
                    {/* Edge-to-edge crisp Image */}
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Dark Vignette on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Zoom indicator on hover */}
                    <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-lg bg-black/80 border border-white/20 text-white/90 text-[10px] font-semibold flex items-center gap-1 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                      <span>View full photo</span>
                    </div>
                  </div>
                </div>

                {/* Photo Caption & Metadata */}
                <div className="p-5 space-y-2">
                  <div className="text-xs text-sky-400 font-mono font-medium">
                    {photo.event}
                  </div>

                  <h3 className="font-serif text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {photo.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
