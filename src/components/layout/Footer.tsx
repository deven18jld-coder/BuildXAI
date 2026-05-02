"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#F8FAFC] border-t border-[rgba(15,23,42,0.08)]">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-[#475569] text-sm leading-relaxed">
              AI automation, website development & n8n workflow solutions for
              Indian businesses. Affordable small business automation across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#0F172A] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-[#475569] hover:text-[#007EA7] text-sm transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[#475569] hover:text-[#007EA7] text-sm transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-[#475569] hover:text-[#007EA7] text-sm transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#475569] hover:text-[#007EA7] text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#0F172A] font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#475569] text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#007EA7]/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#007EA7]" />
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#007EA7] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#475569] text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#007EA7]/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#007EA7]" />
                </div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-[#007EA7] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#475569] text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#007EA7]/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#007EA7]" />
                </div>
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(15,23,42,0.08)]">
          <p className="text-center text-[#475569] text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
