export type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  content: string;
  outcome: string;
};

export const testimonials: TestimonialItem[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content:
      "BuildXAI transformed our outdated website into a modern lead generation machine. The new design increased our conversion rate by 340%.",
    outcome: "340% increase in conversions",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Global Retail Solutions",
    content:
      "The AI voice agent they built handles 80% of our customer inquiries automatically. Our support team can now focus on complex issues.",
    outcome: "80% automation of support calls",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "Growth Ventures",
    content:
      "Their WhatsApp automation helped us reach customers instantly. We've seen a 200% increase in engagement since implementation.",
    outcome: "200% increase in customer engagement",
  },
  {
    name: "David Miller",
    role: "Founder",
    company: "DataDriven Co.",
    content:
      "The Excel dashboards they created gave us real-time visibility into our KPIs. Decision-making is now faster and data-driven.",
    outcome: "Real-time business intelligence",
  },
  {
    name: "Emma Wilson",
    role: "CTO",
    company: "InnovateTech",
    content:
      "BuildXAI's n8n automation saved us 20+ hours per week on manual tasks. The ROI was visible within the first month.",
    outcome: "20+ hours saved weekly",
  },
  {
    name: "Raj Patel",
    role: "Business Owner",
    company: "Patel Enterprises",
    content:
      "Their AI calling system handles our appointment scheduling perfectly. No more missed calls or double bookings.",
    outcome: "Zero missed appointments",
  },
];
