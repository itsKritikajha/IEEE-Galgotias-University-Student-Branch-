"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Globe, Send, CheckCircle2, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { ICCSAI_INFO } from "@/data/iccsaiData";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-16 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-semibold">
          <Mail className="w-3.5 h-3.5 text-red-400" />
          <span>Get in Touch with IEEE GU SB</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
          Contact Us
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Have questions about ICCSAI 2026, student branch memberships, or technical collaborations? Reach out to our team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-white/10 space-y-4 shadow-xl">
            <h3 className="font-serif text-xl font-bold text-white border-l-2 border-sky-400 pl-3">
              Official Branch Address
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white">Galgotias University</h5>
                  <p className="text-slate-300 leading-relaxed mt-0.5">
                    Plot No. 2, Yamuna Expressway, Opposite Buddha International Circuit, Sector 17A, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh 203201
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <h5 className="font-bold text-white">Email Address</h5>
                  <a
                    href="mailto:ieeegusb@galgotiasuniversity.edu.in"
                    className="text-sky-300 hover:underline"
                  >
                    ieeegusb@galgotiasuniversity.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <h5 className="font-bold text-white">Branch Code</h5>
                  <p className="text-slate-300">IEEE STB99158 • IEEE UP Section</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
                Connect on Social Platforms
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-600/30 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600/30 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-400/30 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600/30 transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0f172a] border border-white/10 shadow-2xl space-y-4">
          <h3 className="font-serif text-xl font-bold text-white">
            Send Us a Message
          </h3>

          {sent ? (
            <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="font-serif text-lg font-bold text-white">Message Sent!</h4>
              <p className="text-xs text-emerald-200">
                Thank you for contacting IEEE GU SB. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. ICCSAI 2026 Inquiry / Workshop Partnership"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Type your message here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00629B] to-purple-700 text-white font-bold text-xs shadow-xl hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Map Embed */}
      <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[21/9] w-full relative">
        <iframe
          src={ICCSAI_INFO.venue.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Galgotias University Location Map"
        ></iframe>
      </div>
    </div>
  );
}
