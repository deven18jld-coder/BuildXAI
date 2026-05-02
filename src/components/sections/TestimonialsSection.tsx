import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { testimonials } from "@/lib/constants/testimonials";
import { Badge } from "@/components/ui/Badge";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F8F5F0]">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real results from real businesses. See how we've helped companies transform and grow."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
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
                className="h-full flex flex-col"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <motion.div
                    initial={{ opacity: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: index * 0.1 + 0.1
                    }}
                  >
                    <Quote className="w-8 h-8 text-[#0D7377]/20 mb-4" />
                  </motion.div>
                  <p className="text-[#5F6368] leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-auto">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: index * 0.1 + 0.2
                      }}
                    >
                      <Badge variant="success" className="mb-3">
                        {testimonial.outcome}
                      </Badge>
                    </motion.div>
                    <div className="border-t border-black/[0.04] pt-4">
                      <p className="font-semibold text-[#111111]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#5F6368]">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
