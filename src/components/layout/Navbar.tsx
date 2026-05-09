"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#course" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Educator Logo"
            width={130}
            height={40}
            priority
          />
        </Link>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-900 font-bold hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton CTA desktop */}
        <div className="hidden md:block">
          <button className="relative overflow-hidden bg-orange-500 text-white font-semibold px-8 py-4 rounded-sm group uppercase tracking-wide">
            <span className="relative z-10">Try for free</span>
            <span className="absolute inset-y-0 right-0 w-15 bg-slate-900 rounded-sm transition-all duration-500 ease-in-out group-hover:w-full" />
          </button>
        </div>

        {/* Burger menu mobile */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </nav>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 font-medium hover:text-violet-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA mobile */}
          <button className="relative overflow-hidden bg-orange-500 text-white font-semibold px-10 py-4 rounded-2xl w-full mt-2 group uppercase tracking-wide">
            <span className="relative z-10">Try for free</span>
            <span className="absolute inset-y-0 right-0 w-35 bg-slate-900 rounded-2xl transition-all duration-500 ease-in-out group-hover:w-full" />
          </button>

        </div>
      )}
    </header>
  );
}