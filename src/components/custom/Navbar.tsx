"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, FlaskConical } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // TODO: Replace with real auth state
  const isLoggedIn = false;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const publicNavItems = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

  const protectedNavItems = [
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "Communities",
      href: "/communities",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

  const navItems = isLoggedIn
    ? protectedNavItems
    : publicNavItems;

  return (
    <>
      <header
        className={`z-50 h-16 w-full transition-all duration-300 ${
          isSticky
            ? "fixed left-0 top-0 border-b border-white/10 bg-[#0A1628]/95 backdrop-blur-md outline-none"
            : "relative bg-[#0A1628] outline-none"
        }`}
      >
        <main className="page-container flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-white"
          >
            <FlaskConical className="h-5 w-5 text-[#5DCAA5]" />
            <span>Global Science Platform</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {!isLoggedIn && (
              <>
                <div className="mx-5 h-6 border-l border-white/10" />

                <Link href="/signin">
                  <Button
                    size="sm"
                    className="h-9 border border-[#185FA5] bg-transparent px-5 text-white hover:bg-[#185FA5]/10"
                  >
                    Sign In
                  </Button>
                </Link>

                <Link href="/signup">
                  <Button
                    size="sm"
                    className="ml-3 h-9 bg-[#185FA5] px-5 text-white hover:bg-[#185FA5]/90"
                  >
                    Join Now
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-white md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </main>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed left-0 top-16 z-40 h-[calc(100vh-64px)] w-full bg-[#0A1628] md:hidden">
          <div className="page-container flex h-full flex-col py-8">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-white hover:text-[#5DCAA5]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {!isLoggedIn && (
              <div className=" mt-5 flex flex-col gap-3 pb-8">
                <Link
                  href="/signin"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full border border-[#185FA5] bg-transparent text-white hover:bg-[#185FA5]/10">
                    Sign In
                  </Button>
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-[#185FA5] text-white hover:bg-[#185FA5]/90">
                    Join Now
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;