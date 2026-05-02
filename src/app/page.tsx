"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { IndustrySolutionsSection } from "@/components/sections/IndustrySolutionsSection";
import { InquirySection } from "@/components/sections/InquirySection";
import { FloatingCTA } from "@/components/sections/FloatingCTA";
import { InquiryModal } from "@/components/inquiries/InquiryModal";

export default function Home() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const openInquiryModal = () => setIsInquiryModalOpen(true);
  const closeInquiryModal = () => setIsInquiryModalOpen(false);

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar onOpenInquiry={openInquiryModal} />

      <main>
        <HeroSection onOpenInquiry={openInquiryModal} />
        <ServicesSection />
        <IndustrySolutionsSection onOpenInquiry={openInquiryModal} />
        <ProjectGrid />
        <TestimonialsSection />
        <InquirySection onOpenInquiry={openInquiryModal} />
      </main>

      <Footer />

      <FloatingCTA onOpenInquiry={openInquiryModal} />

      <InquiryModal isOpen={isInquiryModalOpen} onClose={closeInquiryModal} />
    </div>
  );
}
