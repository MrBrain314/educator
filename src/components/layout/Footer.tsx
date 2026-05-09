"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ourLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#course" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

const otherLinks = [
  { label: "Instructor", href: "/#instructors" },
  { label: "FAQ", href: "/others/others-links" },
  { label: "Event", href: "#event" },
  { label: "Privacy Policy", href: "/others/others-links" },
  { label: "Term & Condition", href: "/others/others-links" },
];

const socials = [
  {
    icon: FaFacebook,
    href: "/ourlinks/social-links",
    color: "hover:bg-blue-600",
  },
  {
    icon: FaInstagram,
    href: "/ourlinks/social-links",
    color: "hover:bg-pink-500",
  },
  {
    icon: FaTwitter,
    href: "/ourlinks/social-links",
    color: "hover:bg-sky-500",
  },
  {
    icon: FaYoutube,
    href: "/ourlinks/social-links",
    color: "hover:bg-red-500",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact">
      {/* ---- Bannière CTA ----  */}
      <div className="max-w-7xl mx-auto px-6 -mb-10">
        <div className="relative bg-blue-600 rounded-2xl px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden">
          {/* Shape orange décoratif */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-orange-500 rounded-full opacity-90" />

          <h2 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight max-w-lg">
            Start Your Best Online Classes With Us
          </h2>

          <Link
            href="#contact"
            className="relative z-10 w-full sm:w-auto shrink-0"
          >
            <button className="relative overflow-hidden bg-orange-500 text-white font-bold px-10 py-5 rounded-lg group uppercase tracking-wider text-sm w-full sm:w-auto">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-y-0 right-0 w-15 bg-slate-900 rounded-lg transition-all duration-500 ease-in-out group-hover:w-full" />
            </button>
          </Link>
        </div>
      </div>

      {/* ---- Footer principal ---- */}
      <div className="bg-slate-900 text-slate-300 mt-0 pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Colonne 1 - Logo + description + réseaux */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/images/logo-footer.png"
                alt="Educator Logo"
                width={130}
                height={40}
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              We provide high-quality online courses, experienced instructors,
              and practical learning resources to help students improve their
              skills, grow professionally, and achieve their educational goals.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, color }, i) => (
                <Link
                  key={i}
                  href={href}
                  className={`w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-white transition-colors duration-300 ${color}`}
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Colonne 2 - Our Link */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Our Link</h3>
            <ul className="flex flex-col gap-3">
              {ourLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Other Link */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Other Link</h3>
            <ul className="flex flex-col gap-3">
              {otherLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 - Subscribe Now */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Subscribe Now</h3>

            <div className="flex items-stretch">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 h-12 bg-white text-slate-900 text-sm px-4 rounded-l-lg outline-none placeholder:text-slate-400"
              />

              <button className="h-12 bg-orange-500 hover:bg-orange-600 transition-colors px-4 rounded-r-lg flex items-center justify-center">
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* ---- Copyright ---- */}
        <div className="border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-slate-400">
            <p>
              Copyright © 2026{" "}
              <span className="text-orange-500 font-semibold">MrBrain</span>.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
