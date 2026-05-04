import {
  Palette,
  Globe,
  RefreshCw,
  Wrench,
  Phone,
  Headphones,
  MessageCircle,
  Workflow,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Web Design Services",
    description:
      "Custom, responsive website designs that capture your brand essence and convert visitors into customers.",
    icon: Palette,
    bullets: [
      "Modern UI/UX design",
      "Mobile-first approach",
      "Brand identity integration",
    ],
  },
  {
    title: "Website Development",
    description:
      "Full-stack website development with powerful functionality and seamless user experiences.",
    icon: Globe,
    bullets: [
      "React/Next.js development",
      "Database integration",
      "API development",
    ],
  },
  {
    title: "Website Redesign Services",
    description:
      "Transform your existing website into a modern, high-performing digital asset.",
    icon: RefreshCw,
    bullets: [
      "Complete visual overhaul",
      "Performance optimization",
      "SEO improvement",
    ],
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your business website secure, updated, and running at peak performance with affordable maintenance.",
    icon: Wrench,
    bullets: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates",
    ],
  },
  {
    title: "AI Voice Agent",
    description:
      "Intelligent AI voice assistants that handle customer interactions naturally and efficiently.",
    icon: Phone,
    bullets: [
      "Natural language processing",
      "24/7 availability",
      "Custom voice training",
    ],
  },
  {
    title: "AI Call Automation",
    description:
      "Automated AI calling solutions that scale your outreach and handle inbound requests.",
    icon: Headphones,
    bullets: [
      "Smart call routing",
      "Automated follow-ups",
      "Call analytics",
    ],
  },
  {
    title: "WhatsApp Automation",
    description:
      "Engage customers on WhatsApp with automated messaging, chatbot & notification solutions.",
    icon: MessageCircle,
    bullets: [
      "Bulk messaging",
      "Chatbot integration",
      "Order notifications",
    ],
  },
  {
    title: "n8n Automation",
    description:
      "Streamline your business workflows with powerful no-code automation using n8n.",
    icon: Workflow,
    bullets: [
      "Workflow design",
      "Third-party integrations",
      "Process optimization",
    ],
  },
  {
    title: "Excel Dashboard",
    description:
      "Transform your business data into actionable insights with custom Excel dashboards.",
    icon: BarChart3,
    bullets: [
      "Data visualization",
      "Automated reporting",
      "Interactive charts",
    ],
  },
];
