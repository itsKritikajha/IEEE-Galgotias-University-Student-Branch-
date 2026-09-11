"use client";

import React, { useState } from "react";
import { ShieldCheck, Award, BookOpen, Users, ExternalLink, ChevronDown, CheckCircle2, Sparkles } from "lucide-react";
import { FAQ_DATA } from "@/data/faqData";

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Computer Science & Engineering",
    year: "2nd Year",
    ieeeNumber: "",
    interest: "Technical & Web Development",
  });
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    { title: "IEEE Xplore Digital Access", desc: "Discounts & access to over 5 million research documents and standards." },
    { title: "Global Networking", desc: "Connect with 420,000+ IEEE student & professional members across 160 countries." },
    { title: "IEEE Conference Discounts", desc: "Discounted registration for ICCSAI and global IEEE conferences." },
    { title: "Society Memberships", desc: "Join Computer Society, WIE, IAS, and Signal Processing Society." },
    { title: "Executive Leadership", desc: "Hold student officer roles, manage flagship hackathons, and lead project teams." },
    { title: "Career & Travel Grants", desc: "Eligible for IEEE Region 10 student travel grants and global scholarships." },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>IEEE Student Branch Membership</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
          Why Join <span className="text-sky-400">IEEE</span> GU SB?
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Supercharge your technical portfolio, author research papers, and lead national student initiatives.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-[#0f172a] border border-white/10 space-y-3 shadow-xl hover:border-purple-500/40 transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 font-bold text-xs">
              0{i + 1}
            </div>
            <h3 className="font-serif text-lg font-bold text-white">{b.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Registration / Recruitment Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Step-by-Step Join Process
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              How to Become an IEEE Member
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Register on Official IEEE Portal</h4>
                <p className="text-xs text-slate-300 mt-1">Visit ieee.org/membership and create your IEEE account selecting Galgotias University (STB99158) as your Student Branch.</p>
                <a
                  href="https://www.ieee.org/membership/join/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-sky-400 font-semibold mt-2 hover:underline"
                >
                  Go to Official IEEE Join Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-sky-500 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Fill Out IEEE GU SB Student Intake Form</h4>
                <p className="text-xs text-slate-300 mt-1">Provide your details in the form to get added to our official Student Branch WhatsApp & Discord channels for committee calls.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment Form Component */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] border border-purple-400/30 shadow-2xl space-y-4">
          <h3 className="font-serif text-xl font-bold text-white">
            IEEE GU SB Student Membership Application
          </h3>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="font-serif text-lg font-bold text-white">Application Received!</h4>
              <p className="text-xs text-emerald-200">
                Thank you for applying. Our Executive Core Team will review your application and reach out via email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Atharav Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">University Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@galgotiasuniversity.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                  >
                    <option>Computer Science & Engineering</option>
                    <option>Artificial Intelligence & Data Science</option>
                    <option>Electronics & Communication</option>
                    <option>Electrical Engineering</option>
                    <option>Mechanical / Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Year of Study</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                  >
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year / Postgrad</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Preferred Team Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white focus:border-sky-400 focus:outline-none"
                >
                  <option>Technical & Web Development</option>
                  <option>Event Management & Operations</option>
                  <option>Public Relations & Outreach</option>
                  <option>Content & Social Media</option>
                  <option>Research & Publications</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 text-slate-950 font-bold text-xs shadow-xl hover:brightness-110 transition-all"
              >
                Submit Application to Core Team
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-6 pt-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
            Got Questions?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_DATA.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#0f172a] border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-serif text-sm font-bold text-white flex items-center justify-between hover:text-amber-300 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? "rotate-180 text-amber-400" : "text-slate-400"}`} />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
