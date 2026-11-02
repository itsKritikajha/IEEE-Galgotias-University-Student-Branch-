"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  RefreshCw,
  Loader2,
  AlertCircle,
  User,
  MessageSquare,
  Phone,
  Sparkles,
  Clock,
  Building2,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Tag,
  ArrowUpRight,
} from "lucide-react";
import { ICCSAI_INFO } from "@/data/iccsaiData";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "9c4a0e68-71bc-4da3-a8c9-735b58017e31";

const INQUIRY_CATEGORIES = [
  { id: "general", label: "General Inquiry", subject: "General Inquiry | IEEE GU SB" },
  { id: "iccsai", label: "ICCSAI 2026 Conference", subject: "ICCSAI 2026 Conference Inquiry" },
  { id: "membership", label: "Student Membership", subject: "IEEE Student Membership Inquiry" },
  { id: "collab", label: "Workshops & Collaboration", subject: "Workshop / Collaboration Proposal" },
  { id: "sponsor", label: "Sponsorship & Speaking", subject: "Sponsorship / Keynote Speaker Inquiry" },
];

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: INQUIRY_CATEGORIES[0].subject,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    const cat = INQUIRY_CATEGORIES.find((c) => c.id === catId);
    if (cat) {
      setForm((prev) => ({
        ...prev,
        subject: cat.subject,
      }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ieeegusb@galgotiasuniversity.edu.in");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
      formDataToSend.append("name", form.name);
      formDataToSend.append("email", form.email);
      if (form.phone) {
        formDataToSend.append("phone", form.phone);
      }
      formDataToSend.append("category", selectedCategory);
      formDataToSend.append("subject", form.subject || `Inquiry from ${form.name} | IEEE GU SB`);
      formDataToSend.append("message", form.message);
      formDataToSend.append("from_name", "IEEE GU SB Contact Portal");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok && (data.success || data.ok)) {
        setSent(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: INQUIRY_CATEGORIES[0].subject,
          message: "",
        });
      } else {
        setErrorMessage(data.message || "Failed to deliver message. Please try again or email us directly.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please verify your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold backdrop-blur-md shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
          <span>Official Branch Communication & Intake</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Let&apos;s Connect & Collaborate
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          Have inquiries about the <strong className="text-white font-medium">ICCSAI 2026 Conference</strong>, student chapter memberships, workshops, or academic partnerships? Send us a message below.
        </p>
      </div>

      {/* Main Grid: Info Hub + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Official Contact & Branch Info */}
        <div className="lg:col-span-5 space-y-5">
          {/* Email Quick-Card */}
          <div className="group relative p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl shadow-xl hover:border-sky-500/40 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Official Branch Email
                  </span>
                  <a
                    href="mailto:ieeegusb@galgotiasuniversity.edu.in"
                    className="text-sm sm:text-base font-semibold text-white hover:text-sky-300 transition-colors break-all block"
                  >
                    ieeegusb@galgotiasuniversity.edu.in
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-sky-300 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href="mailto:ieeegusb@galgotiasuniversity.edu.in"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location & Venue Card */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Campus Venue & Branch Office
                </span>
                <h4 className="font-serif text-base font-bold text-white">Galgotias University</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Plot No. 2, Sector 17A, Yamuna Expressway, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh 203201, India
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Room C-302, Academic Block</span>
              </span>
              <a
                href="https://maps.google.com/?q=Galgotias+University"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sky-400 hover:underline font-medium"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Branch Credentials & Response Time */}
          <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl grid grid-cols-2 gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                <Globe className="w-3.5 h-3.5" />
                <span>IEEE STB99158</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light">IEEE Uttar Pradesh Section • Region 10</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>24-48h Response</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light">Direct desk routing to SB Leadership</p>
            </div>
          </div>

          {/* Social Platform Presence */}
          <div className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl space-y-3">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Follow Our Official Channels
            </span>
            <div className="grid grid-cols-4 gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 hover:bg-sky-500/10 transition-all group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform text-sky-400" />
                <span className="text-[10px] mt-1 text-slate-400 font-medium">LinkedIn</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-pink-500/40 hover:bg-pink-500/10 transition-all group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform text-pink-400" />
                <span className="text-[10px] mt-1 text-slate-400 font-medium">Instagram</span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-400/40 hover:bg-sky-400/10 transition-all group"
              >
                <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform text-sky-400" />
                <span className="text-[10px] mt-1 text-slate-400 font-medium">Twitter</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-all group"
              >
                <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform text-red-400" />
                <span className="text-[10px] mt-1 text-slate-400 font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Modern Contact Form */}
        <div className="lg:col-span-7 relative rounded-3xl bg-slate-900/90 border border-slate-700/60 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 space-y-6 overflow-hidden ring-1 ring-white/10">
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent" />

          {/* Form Title & Subtitle */}
          <div className="space-y-1.5">
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Fill out the details below and our team will get back to you promptly.
            </p>
          </div>

          {/* Inquiry Topic Quick-Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Select Inquiry Category
            </label>
            <div className="flex flex-wrap gap-2">
              {INQUIRY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 font-semibold ring-1 ring-sky-300/30"
                        : "bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Content / Success View */}
          {sent ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed max-w-md mx-auto font-light">
                  Thank you for reaching out to IEEE Galgotias University Student Branch. Your inquiry has been routed to our core committee desk.
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setSent(false);
                    setErrorMessage("");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white font-semibold transition-all border border-white/10 shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Atharav Singh"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Email Address <span className="text-sky-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Phone / WhatsApp <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Subject Line
                  </label>
                  <div className="relative">
                    <Tag className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Subject of inquiry"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  Message <span className="text-sky-400">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your detailed message, queries, or proposal here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all resize-y min-h-[110px]"
                  ></textarea>
                </div>
              </div>

              {/* Action Button & Privacy Note */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct SSL encryption • Zero spam guaranteed</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Map Embed Section */}
      <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/60 backdrop-blur-xl">
        <div className="px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-red-400" />
            <span className="font-serif text-sm font-bold text-white">
              Campus Location & Venue Map
            </span>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Galgotias University • Greater Noida, NCR
          </span>
        </div>
        <div className="aspect-[21/8] w-full relative">
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
    </div>
  );
}
