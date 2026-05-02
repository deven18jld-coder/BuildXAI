"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Dumbbell, Store, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface IndustrySolutionsSectionProps {
  onOpenInquiry: () => void;
}

const industries = [
  {
    icon: Dumbbell,
    title: "AI Automation for Gyms in India",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    content:
      "Running a gym in India means juggling member enquiries, follow-ups, fee reminders, and class schedules — often with a small team. AI automation for gyms in India solves this by setting up WhatsApp bots that handle new member queries 24/7, automated payment reminders that reduce overdue fees, and n8n workflows that sync walk-in data with your CRM instantly. Imagine a lead messaging your gym at 11 PM and getting an instant response with pricing, timings, and a free trial booking link. That's the power of gym automation. Whether you run a single studio in Lucknow or a chain across Delhi and Mumbai, our AI voice agents and WhatsApp automation free up your front desk so your staff focuses on what matters — training members and growing revenue.",
  },
  {
    icon: Store,
    title: "Website Development for Local Businesses in India",
    color: "text-sky-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    content:
      "Most local businesses in India — from retail shops and salons to clinics and restaurants — still rely on word-of-mouth or social media alone. Website development for local businesses in India changes that by giving you a professional, search-optimized site that brings in customers from Google directly. A well-built website showcases your services, displays real reviews, and lets customers book appointments or place enquiries without downloading an app. We build fast, mobile-first websites that rank for local searches like \"best salon near me\" or \"dentist in Indiranagar.\" Combined with SEO and WhatsApp integration, your website becomes a 24/7 lead-generation machine — not just an online brochure. Affordable, quick to launch, and designed to convert visitors into paying customers.",
  },
  {
    icon: GraduationCap,
    title: "Automation for Coaching Institutes in India",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    content:
      "Coaching institutes across India handle hundreds of student enquiries daily, track attendance, send fee reminders, and manage batch schedules — all manually. Automation for coaching institutes in India eliminates this overhead. With WhatsApp automation, every new enquiry gets an instant reply with course details, batch timings, and a demo class link. n8n workflows automatically add enrolled students to your attendance system, send fee reminders before due dates, and notify parents about attendance gaps. AI voice agents can handle routine calls about timings, syllabus, and admissions — freeing your counselors to focus on closing admissions. Whether you're a NEET/JEE prep centre in Kota or a coding bootcamp in Bangalore, our automation solutions help you scale without adding staff.",
  },
];

export function IndustrySolutionsSection({
  onOpenInquiry,
}: IndustrySolutionsSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          title="Industry-Specific AI Automation & Website Solutions in India"
          subtitle="Tailored solutions for high-growth Indian industries. We understand the unique challenges of each sector and deliver automation that actually works."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-xl ${industry.bg} border ${industry.border} flex items-center justify-center mb-5`}
                  >
                    <industry.icon className={`w-6 h-6 ${industry.color}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#111111] mb-4">
                    {industry.title}
                  </h3>

                  <p className="text-[#5F6368] text-sm leading-relaxed flex-grow">
                    {industry.content}
                  </p>

                  <div className="mt-6 pt-4 border-t border-black/[0.04]">
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={ArrowRight}
                      iconPosition="right"
                      onClick={onOpenInquiry}
                      className="text-[#0D7377] hover:text-[#0D7377] p-0 h-auto"
                    >
                      Get a Free Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
