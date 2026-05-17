"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05050f]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <OrbitIcon />
          <span className="text-lg font-semibold text-white tracking-tight">
            Orbit<span className="text-violet-400">Drops</span>
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-8">
          <a
            href="#what-we-do"
            className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            What We Do
          </a>
          <a
            href="#contact"
            className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-1.5 rounded-full transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile nav */}
        <a
          href="#contact"
          className="sm:hidden text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-1.5 rounded-full transition-colors duration-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

function OrbitIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <circle cx="14" cy="14" r="4" fill="#7c3aed" />
      <ellipse
        cx="14"
        cy="14"
        rx="12"
        ry="5"
        stroke="#06b6d4"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 2"
      />
      <ellipse
        cx="14"
        cy="14"
        rx="12"
        ry="5"
        stroke="#7c3aed"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(60 14 14)"
        strokeDasharray="4 2"
      />
      <circle cx="14" cy="2" r="2" fill="#06b6d4" />
    </svg>
  );
}
