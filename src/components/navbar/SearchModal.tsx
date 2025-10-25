"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Sample suggested pages - replace with your actual routes
const suggestedPages = [
  { title: "Distance Learning Institutes", href: "/usecase/distance-learning-institutes" },
  { title: "Platform Overview", href: "/platform" },
  { title: "Pricing", href: "/pricing" },
  { title: "Resources", href: "/resources" },
  { title: "Contact Sales", href: "/contact" },
];

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");

  const filteredPages = suggestedPages.filter((page) =>
    page.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="sr-only">Search Vacademy</DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for pages, resources, or solutions..."
            className={cn(
              "w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4",
              "text-[#111827] placeholder:text-[#6B7280]",
              "focus:border-[#ED7424] focus:outline-none focus:ring-2 focus:ring-[#ED7424]/20"
            )}
            autoFocus
          />
        </div>

        {/* Suggested Pages */}
        <div className="mt-4">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
            {query ? "Results" : "Suggested Pages"}
          </h3>
          <ul className="space-y-1">
            {filteredPages.length > 0 ? (
              filteredPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    onClick={() => {
                      onOpenChange(false);
                      setQuery("");
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-md px-3 py-2",
                      "text-sm text-[#111827] transition-colors",
                      "hover:bg-[#FFEDD5] focus:bg-[#FFEDD5] focus:outline-none"
                    )}
                  >
                    <span>{page.title}</span>
                    <ArrowRight className="size-4 text-[#ED7424]" />
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-sm text-[#6B7280]">
                No results found for &ldquo;{query}&rdquo;
              </li>
            )}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="text-xs text-[#6B7280]">
            Press <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">ESC</kbd> to close
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

