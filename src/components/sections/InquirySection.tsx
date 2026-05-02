"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, Clock, CheckCircle } from "lucide-react";

interface InquirySectionProps {
  onOpenInquiry: () => void;
}

export function InquirySection({ onOpenInquiry }: InquirySectionProps) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle decorative border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.06]" />

      {/* Very subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0D7377]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Ready to Transform Your Business?"
            subtitle="Let's discuss how we can help you achieve your goals with cutting-edge technology solutions."
            centered
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" icon={ArrowRight} onClick={onOpenInquiry} className="bg-[#007EA7] hover:bg-[#006A8F]">
              Connect
            </Button>
          </div>

          {/* Trust Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 justify-center text-[#5F6368]">
              <CheckCircle className="w-5 h-5 text-[#059669]" />
              <span className="text-sm">No obligation quote</span>
            </div>
            <div className="flex items-center gap-3 justify-center text-[#5F6368]">
              <Clock className="w-5 h-5 text-[#0D7377]" />
              <span className="text-sm">24-hour response</span>
            </div>
            <div className="flex items-center gap-3 justify-center text-[#5F6368]">
              <Mail className="w-5 h-5 text-[#C9A96E]" />
              <span className="text-sm">Direct expert access</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
