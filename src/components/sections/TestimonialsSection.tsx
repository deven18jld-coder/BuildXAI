import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { testimonials } from "@/lib/constants/testimonials";
import { Badge } from "@/components/ui/Badge";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-900">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real results from real businesses. See how we've helped companies transform and grow."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full flex flex-col"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="mt-auto">
                  <Badge variant="success" className="mb-3">
                    {testimonial.outcome}
                  </Badge>
                  <div className="border-t border-gray-700/50 pt-4">
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
