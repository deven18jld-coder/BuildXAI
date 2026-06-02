"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, User, Instagram } from "lucide-react";
import Link from "next/link";

interface FounderSectionProps {
  onOpenInquiry: () => void;
}

export function FounderSection({ onOpenInquiry }: FounderSectionProps) {
  return (
    <section id="founder" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <User className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-xs font-semibold text-slate-700 tracking-tight uppercase">
                FOUNDER, BUILDXAI
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-3">
              Hi, I'm Deven Chauhan
            </h2>
            <h3 className="text-xl md:text-2xl text-sky-600 font-medium mb-6">
              Founder of BuildXAI
            </h3>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                I help businesses automate repetitive work, build modern websites, and implement AI-powered solutions that save time and improve efficiency.
              </p>
              <p>
                My goal is simple: build practical technology that helps businesses grow without unnecessary complexity.
              </p>
            </div>

            <div className="flex items-center gap-3 mb-10">
              <a
                href="https://www.instagram.com/buildxai.in?igsh=MWJqN2R6eXc2OWc4Yg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-sky-600 hover:border-slate-300 transition-all group"
              >
                <Instagram className="w-4 h-4 text-slate-500 group-hover:text-sky-600 transition-colors" />
                Follow on Instagram
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Button
                size="lg"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "#projects";
                  }
                }}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-8"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onOpenInquiry}
                className="w-full sm:w-auto rounded-xl px-8 border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 group"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative mx-auto lg:mx-0 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px]">
              <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-50 border border-slate-100 flex items-center justify-center">
                {/* 
                  Using Next.js Image with fixed width/height but w-full h-auto ensures 
                  it scales responsively, preserving the exact aspect ratio with zero cropping.
                  We set object-contain for an extra layer of safety.
                */}
                <Image
                  src="/images/founder/deven-founder.png"
                  alt="Deven Chauhan - Founder of BuildXAI"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                  quality={100}
                  priority={true}
                />
              </div>
              
              {/* Decorative element behind the image */}
              <div className="absolute -inset-4 bg-sky-50 rounded-[2.5rem] -z-10 rotate-3 opacity-70 blur-xl" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
