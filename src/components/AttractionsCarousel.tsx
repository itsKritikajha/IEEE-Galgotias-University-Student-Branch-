"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { NEARBY_ATTRACTIONS, TourismSpot } from "@/data/iccsaiData";

export const AttractionsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? NEARBY_ATTRACTIONS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === NEARBY_ATTRACTIONS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-5xl mx-auto my-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Explore NCR & Uttar Pradesh
          </span>
          <h3 className="font-serif text-2xl font-bold text-white">
            Nearby Tourism & Cultural Attractions
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous Attraction"
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Attraction"
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[0, 1, 2].map((offset) => {
          const itemIndex = (currentIndex + offset) % NEARBY_ATTRACTIONS.length;
          const spot: TourismSpot = NEARBY_ATTRACTIONS[itemIndex];
          return (
            <div
              key={spot.name}
              className="rounded-2xl bg-[#0f172a] border border-white/10 overflow-hidden shadow-xl hover:border-sky-400/40 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-amber-300 flex items-center gap-1 border border-amber-400/30">
                  <MapPin className="w-3 h-3 text-red-400" />
                  {spot.distance}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-sky-400 font-semibold mb-1">
                    {spot.location}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">
                    {spot.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {spot.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
