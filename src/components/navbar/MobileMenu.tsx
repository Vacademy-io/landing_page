"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  foreground?: "light" | "dark";
}

// Navigation structure - customize as needed
const navItems = [
  {
    label: "Solutions",
    items: [
      { label: "Distance Learning", href: "/usecase/distance-learning-institutes" },
      { label: "Corporate Training", href: "/usecase/corporate-training" },
      { label: "K-12 Schools", href: "/usecase/k12-schools" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Help Center", href: "/help" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu({ isOpen, onClose, foreground = "dark" }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-over panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "fixed right-0 top-0 z-50 h-full w-full max-w-sm overflow-y-auto shadow-2xl",
              foreground === "light"
                ? "bg-black/60 backdrop-blur-xl text-white"
                : "bg-white text-[#111827]"
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            ref={menuRef}
          >
            {/* Header */}
            <div
              className={cn(
                "flex items-center justify-between border-b px-6 py-4",
                foreground === "light"
                  ? "border-white/20"
                  : "border-gray-200"
              )}
            >
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={onClose}
                className={cn(
                  "rounded-md p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424]",
                  foreground === "light"
                    ? "text-white/70 hover:bg-white/10 hover:text-white"
                    : "text-[#6B7280] hover:bg-gray-100 hover:text-[#111827]"
                )}
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="px-6 py-6">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.items ? (
                      // Expandable dropdown
                      <div>
                        <button
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === item.label ? null : item.label
                            )
                          }
                          className={cn(
                            "flex w-full items-center justify-between rounded-md px-4 py-3 text-left font-medium transition-colors",
                            foreground === "light"
                              ? "bg-white/5 text-white hover:bg-white/10"
                              : "text-[#111827] hover:bg-[#FFEDD5]",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424]"
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "size-5 transition-transform",
                              expandedItem === item.label && "rotate-180",
                              foreground === "light"
                                ? "text-white/70"
                                : "text-[#6B7280]"
                            )}
                          />
                        </button>

                        {/* Sub-items */}
                        <AnimatePresence>
                          {expandedItem === item.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 overflow-hidden pl-4"
                            >
                              {item.items.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    onClick={onClose}
                                    className={cn(
                                      "block rounded-md px-4 py-2.5 text-sm transition-colors",
                                      foreground === "light"
                                        ? "text-white/80 hover:bg-white/10 hover:text-white"
                                        : "text-[#6B7280] hover:bg-[#FFF7ED] hover:text-[#ED7424]",
                                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424]"
                                    )}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Direct link
                      <Link
                        href={item.href || "#"}
                        onClick={onClose}
                        className={cn(
                          "block rounded-md px-4 py-3 font-medium transition-colors",
                          foreground === "light"
                            ? "text-white/90 hover:bg-white/10"
                            : "text-[#111827] hover:bg-[#FFEDD5]",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424]"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Section */}
            <div
              className={cn(
                "border-t px-6 py-6",
                foreground === "light" ? "border-white/20" : "border-gray-200"
              )}
            >
              <div className="space-y-3">
                {/* Primary CTA */}
                <Link
                  href="/signup"
                  onClick={onClose}
                  className="font-heading flex items-center justify-center rounded-full bg-gradient-to-r from-[#ED7424] to-[#FF9B55] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ED7424]/30 transition-transform hover:scale-[1.03]"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/signin"
                  onClick={onClose}
                  className="font-body flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Sign In
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div
              className={cn(
                "border-t px-6 py-4",
                foreground === "light" ? "border-white/20" : "border-gray-200"
              )}
            >
              <p
                className={cn(
                  "text-xs",
                  foreground === "light" ? "text-white/60" : "text-[#6B7280]"
                )}
              >
                © 2025 Vacademy. All rights reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

