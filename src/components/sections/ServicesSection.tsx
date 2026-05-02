"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { services } from "@/lib/constants/services";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          title="AI Automation & Website Development Services in India"
          subtitle="Comprehensive AI automation, website development & n8n workflow solutions designed to accelerate Indian business growth and streamline operations."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                className={cn(
                  "group h-full transition-all duration-300",
                  "hover:-translate-y-1"
                )}
              >
                <CardHeader className="pb-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: index * 0.1 + 0.1
                    }}
                    className="w-12 h-12 rounded-xl bg-[#0D7377]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    <service.icon className="w-6 h-6 text-[#0D7377]" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#111111]">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5F6368] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-2 text-sm text-[#5F6368]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D7377] mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
