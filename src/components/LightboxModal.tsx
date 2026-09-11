"use client";

import React from "react";
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-red-600 transition-colors z-50"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-[#0f172a] border border-white/20 shadow-2xl flex flex-col">
        <div className="relative w-full aspect-video sm:aspect-[16/9] bg-black">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <div className="p-4 bg-[#0f172a] text-center border-t border-white/10">
          <h4 className="font-serif text-lg font-bold text-white">{title}</h4>
        </div>
      </div>
    </div>
  );
};
