import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { services } from "@/lib/constants/services";
import { cn } from "@/lib/utils/cn";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-950">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive technology solutions designed to accelerate your business growth and streamline operations."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "group h-full transition-all duration-300",
                "hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              )}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start gap-2 text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
