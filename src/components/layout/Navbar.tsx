"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/constants/site";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenInquiry: () => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300 rounded-full",
          "bg-white/80 backdrop-blur-xl border border-black/[0.06] shadow-sm",
          "px-6 py-3",
          isScrolled && "shadow-md bg-white/95"
        )}>
          {/* Logo */}
          <a href="#home" className="group">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#475569] hover:text-[#0ea5e9] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              onClick={onOpenInquiry}
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-0 rounded-xl shadow-md shadow-[#0ea5e9]/25"
            >
              Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#5F6368] hover:text-[#111111]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 py-4 px-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/[0.06] shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-[#475569] hover:text-[#0ea5e9] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button onClick={onOpenInquiry} className="mt-2 bg-[#0ea5e9] hover:bg-[#0284c7]">
                Connect
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
