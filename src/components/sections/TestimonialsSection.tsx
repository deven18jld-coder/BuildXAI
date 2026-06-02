"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Quote, Clock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function TestimonialsSection() {
  const [showPopup, setShowPopup] = useState(false);

  // Use 3 placeholder cards for the grid layout
  const placeholderCards = [1, 2, 3];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F8F5F0] relative">
      <Container>
        <SectionHeading
          title="What Our Clients Say About Us"
          subtitle="Real results from real businesses. See how our AI automation & website development services have helped companies transform and grow."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {placeholderCards.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.1
              }}
            >
              <Card
                className="h-full flex flex-col cursor-pointer hover:shadow-md transition-all relative overflow-hidden group border-dashed bg-white/50"
                onClick={() => setShowPopup(true)}
              >
                {/* Overlay with Coming Soon Badge */}
                <div className="absolute inset-0 bg-[#F8F5F0]/30 backdrop-blur-[1px] z-10 flex items-center justify-center transition-all group-hover:bg-[#F8F5F0]/10">
                  <Badge variant="default" className="bg-white/90 backdrop-blur-sm border-black/10 text-black/70 flex items-center gap-2 py-1.5 px-3 shadow-sm">
                    <Clock className="w-3.5 h-3.5" />
                    Coming Soon
                  </Badge>
                </div>
                
                {/* Skeleton Content */}
                <CardContent className="p-6 flex flex-col h-full opacity-30 select-none">
                  <Quote className="w-8 h-8 text-[#0D7377]/30 mb-4" />
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="h-3 bg-gray-300/50 rounded w-full"></div>
                    <div className="h-3 bg-gray-300/50 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-300/50 rounded w-4/6"></div>
                    <div className="h-3 bg-gray-300/50 rounded w-full"></div>
                  </div>
                  <div className="mt-auto">
                    <div className="h-6 w-24 bg-gray-300/50 rounded-full mb-3"></div>
                    <div className="border-t border-black/[0.04] pt-4 space-y-2">
                      <div className="h-4 bg-gray-300/60 rounded w-1/3"></div>
                      <div className="h-3 bg-gray-300/50 rounded w-1/2"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md w-full text-center relative border border-gray-100"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 hover:bg-gray-100 rounded-full p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-5 text-[#0D7377] border border-gray-100">
                <Clock className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-[#111111] mb-3">Testimonials Coming Soon</h3>
              <p className="text-[#5F6368] mb-4 leading-relaxed">
                We are currently gathering our first client feedback. Real results from real businesses will be showcased here shortly.
              </p>
              <div className="bg-[#F8F5F0]/50 p-4 rounded-xl mb-6">
                <p className="text-sm font-medium text-[#0D7377]">
                  Meanwhile, check our projects and services.
                </p>
              </div>
              
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full py-3 px-4 bg-[#111111] text-white rounded-xl font-medium hover:bg-black/80 transition-colors"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
