"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/constants/site";
import { Logo } from "./Logo";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenInquiry: () => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300 rounded-full",
          "bg-white/80 backdrop-blur-xl border border-black/[0.06] shadow-sm",
          "px-5 py-2.5",
          isScrolled && "shadow-md bg-white/95"
        )}>
          {/* Logo */}
          <Link href="/" className="group">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#475569] hover:text-[#0ea5e9] transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}

            {/* Our Products Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-[#475569] group-hover:text-[#0ea5e9] transition-all duration-300 flex items-center gap-1">
                Our Products
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full -left-4 pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                <div className="bg-white rounded-xl shadow-lg border border-black/[0.06] p-2 overflow-hidden">
                  <Link 
                    href="https://fitxerp.buildxai.in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block p-4 hover:bg-[#f8fafc] rounded-lg transition-colors group/link"
                  >
                    <div className="text-sm font-semibold text-gray-900 group-hover/link:text-[#0ea5e9] transition-colors">FitXERP</div>
                    <div className="text-xs text-gray-500 mt-1">Gym Management Software</div>
                  </Link>
                </div>
              </div>
            </div>
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
          <div className="md:hidden mt-2 py-4 px-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/[0.06] shadow-lg max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-[#475569] hover:text-[#0ea5e9] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Products Dropdown */}
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex items-center justify-between text-base font-medium text-[#475569] hover:text-[#0ea5e9] transition-colors text-left w-full"
                >
                  Our Products
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileProductsOpen && "rotate-180")} />
                </button>
                
                {isMobileProductsOpen && (
                  <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100 mt-1">
                    <Link
                      href="https://fitxerp.buildxai.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 hover:text-[#0ea5e9] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="text-sm font-semibold text-gray-900">FitXERP</div>
                      <div className="text-xs text-gray-500">Gym Management Software</div>
                    </Link>
                  </div>
                )}
              </div>

              <Button onClick={() => { onOpenInquiry(); setIsMobileMenuOpen(false); }} className="mt-2 bg-[#0ea5e9] hover:bg-[#0284c7]">
                Connect
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
