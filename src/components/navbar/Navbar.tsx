"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

// Navigation structure - customize as needed
const navigationItems = [
  {
    label: "Solutions",
    dropdown: [
      { label: "Distance Learning", href: "/usecase/distance-learning-institutes", description: "For online institutes" },
      { label: "Corporate Training", href: "/usecase/corporate-training", description: "Employee development" },
      { label: "K-12 Schools", href: "/usecase/k12-schools", description: "Modern education" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    dropdown: [
      { label: "Blog", href: "/blog", description: "Latest insights" },
      { label: "Case Studies", href: "/case-studies", description: "Success stories" },
      { label: "Help Center", href: "/help", description: "Get support" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  foreground?: "light" | "dark";
}

export default function Navbar({ foreground = "dark" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isLightForeground = foreground === "light" && !isScrolled;

  // Handle scroll for enhanced glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [activeDropdown]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape to close dropdown
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 z-40 w-full flex justify-center transition-all duration-300"
      >
        <motion.nav
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className={cn(
            "flex items-center justify-between px-6 py-3 mt-4 rounded-full border transition-all duration-300 w-3/4",
            isScrolled
              ? "bg-[#F5F7FA]/90 shadow-xl backdrop-blur-xl border-white/30"
              : "bg-[#F5F7FA]/30 backdrop-blur-lg border-white/20"
          )}
          aria-label="Main navigation"
        >
          {/* Left: Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424] focus-visible:ring-offset-2 rounded-md"
              aria-label="Vacademy home"
            >
              {/* Vacademy Logo */}
              <div className="flex items-center justify-center">
                <Image 
                  src="/images/Vacademy Short logo.png" 
                  alt="Vacademy Logo" 
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </div>
              <span
                className={cn(
                  "text-lg font-bold",
                  isLightForeground ? "text-white" : "text-[#111827]"
                )}
              >
                Vacademy
              </span>
            </Link>
          </motion.div>

          {/* Right: Navigation + CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-2 lg:flex">
              {navigationItems.map((item) =>
                item.dropdown ? (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        );
                      }}
                      className={cn(
                        "font-body inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm",
                        isLightForeground
                          ? "text-white transition-colors hover:text-white/80 hover:bg-white/20"
                          : "text-[#111827] transition-colors hover:text-[#ED7424] hover:bg-white/50",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424]",
                        activeDropdown === item.label &&
                          (isLightForeground
                            ? "text-white bg-white/20"
                            : "text-[#ED7424] bg-white/50")
                      )}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-3 transition-transform",
                          activeDropdown === item.label && "rotate-180",
                          isLightForeground && "text-white"
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-white/20 bg-white/95 backdrop-blur-xl p-2 shadow-lg"
                          role="menu"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className={cn(
                                "block rounded-lg px-3 py-2 transition-colors",
                                "hover:bg-[#FFEDD5] focus:bg-[#FFEDD5]",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424]"
                              )}
                              role="menuitem"
                            >
                              <div className="font-medium text-[#111827] text-sm">
                                {subItem.label}
                              </div>
                              <div className="text-xs text-[#6B7280]">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.label}>
                    <NavLink 
                      href={item.href || "#"}
                      className={cn(
                        "font-body rounded-full px-3 py-1.5 text-sm font-medium",
                        isLightForeground
                          ? "text-white hover:bg-white/20"
                          : "text-[#111827] hover:bg-white/50"
                      )}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            {/* Primary CTA */}
            <Link
              href="/signup"
              className={cn(
                "hidden items-center rounded-full",
                "bg-gradient-to-r from-[#ED7424] to-[#FF9B55]",
                "px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#ED7424]/30",
                "transition-transform hover:scale-[1.03]",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424] focus-visible:ring-offset-2",
                "lg:inline-flex font-heading"
              )}
            >
              Start Free Trial
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                "rounded-full p-2 transition-colors lg:hidden",
                isLightForeground
                  ? "text-white hover:bg-white/20"
                  : "text-[#111827] hover:bg-white/50",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424]"
              )}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className={cn("size-5", isLightForeground && "text-white")} />
            </button>
          </motion.div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        foreground={isLightForeground ? "light" : "dark"}
      />
    </>
  );
}

