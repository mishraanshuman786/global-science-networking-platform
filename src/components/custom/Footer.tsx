"use client";

import Link from "next/link";
import { FlaskConical } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faqs" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A1628] text-white">
      <div className="page-container">
        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold"
          >
            <FlaskConical className="h-5 w-5 text-[#5DCAA5]" />
            <span>Global Science Platform</span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Global Science Platform
          </p>
        </div>
      </div>
    </footer>
  );
}