"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "light" | "dark";
}

export function NavLink({ href, children, className, onClick, variant = "dark" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424] focus-visible:ring-offset-2",
        variant === "light"
          ? cn(
              "text-white hover:text-white/80",
              isActive && "text-white"
            )
          : cn(
              "text-[#111827] hover:text-[#ED7424]",
              isActive && "text-[#ED7424]"
            ),
        className
      )}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ED7424] to-[#FF9B55]" />
      )}
    </Link>
  );
}

