import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, Clock, CheckCircle } from "lucide-react";

interface InquirySectionProps {
  onOpenInquiry: () => void;
}

export function InquirySection({ onOpenInquiry }: InquirySectionProps) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Ready to Transform Your Business?"
            subtitle="Let's discuss how we can help you achieve your goals with cutting-edge technology solutions."
            centered
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" icon={ArrowRight} onClick={onOpenInquiry}>
              Get Free Consultation
            </Button>
          </div>

          {/* Trust Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 justify-center text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">No obligation quote</span>
            </div>
            <div className="flex items-center gap-3 justify-center text-gray-400">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm">24-hour response</span>
            </div>
            <div className="flex items-center gap-3 justify-center text-gray-400">
              <Mail className="w-5 h-5 text-violet-400" />
              <span className="text-sm">Direct expert access</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
