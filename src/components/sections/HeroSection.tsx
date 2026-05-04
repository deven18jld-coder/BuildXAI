"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-white"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(#e2e8f0 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Soft blurred accent circles */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-sky-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-sky-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Centered Text Content */}
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-xs font-semibold text-sky-700 tracking-tight uppercase">
                AI Automation & Website Development Services
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight"
            >
              AI Automation &{" "}
              <span className="text-sky-500">Website Development</span> Services for Your Business
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-normal max-w-2xl mx-auto"
            >
              Get more leads, automate repetitive work, and scale your business with AI automation, custom websites & n8n workflows — without hiring more staff.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full"
            >
              <Button
                size="lg"
                onClick={onOpenInquiry}
                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white border-0 rounded-xl px-8 shadow-lg shadow-sky-500/20"
              >
                Get Free Demo
              </Button>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 h-11 text-sm font-medium rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 w-full sm:w-auto transition-all duration-300"
              >
                View Live Projects
                <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-8 w-full">
              {[
                { text: "Trusted by Businesses Worldwide", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50" },
                { text: "Fast Delivery (3–7 days)", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
                { text: "Affordable Small Business Automation", icon: Wallet, color: "text-sky-500", bg: "bg-sky-50" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl lg:rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50 hover:shadow-md hover:shadow-slate-200 transition-all cursor-default w-full sm:w-auto flex-1 min-w-[220px] max-w-[260px] justify-center sm:justify-start text-left"
                >
                  <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 leading-tight">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
