"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  imgUrl: string;
  title: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imgUrl,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-red-600/80 text-white transition-all z-50 backdrop-blur-md border border-white/20 shadow-2xl cursor-pointer"
        aria-label="Close modal"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[92vh] rounded-3xl overflow-hidden bg-[#0a0f1d] border border-white/20 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[65vh] sm:h-[78vh] bg-black flex items-center justify-center p-2">
          {/* Ambient blurred backdrop inside modal */}
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover blur-3xl opacity-30 scale-125"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Full Resolution Crisp Poster */}
          <div className="relative h-full w-full z-10 flex items-center justify-center">
            <Image
              src={imgUrl}
              alt={title}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
        <div className="p-4 sm:p-5 bg-[#0c1222] text-center border-t border-white/10 flex items-center justify-center">
          <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">{title}</h4>
        </div>
      </div>
    </div>
  );
};
