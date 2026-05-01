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
      "Custom, responsive designs that capture your brand essence and convert visitors into customers.",
    icon: Palette,
    bullets: [
      "Modern UI/UX design",
      "Mobile-first approach",
      "Brand identity integration",
    ],
  },
  {
    title: "Dynamic Website Services",
    description:
      "Full-stack web applications with powerful functionality and seamless user experiences.",
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
    title: "Website Maintenance Services",
    description:
      "Keep your website secure, updated, and running at peak performance.",
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
      "Intelligent voice assistants that handle customer interactions naturally and efficiently.",
    icon: Phone,
    bullets: [
      "Natural language processing",
      "24/7 availability",
      "Custom voice training",
    ],
  },
  {
    title: "AI Inbound/Outbound Call Service",
    description:
      "Automated calling solutions that scale your outreach and handle inbound requests.",
    icon: Headphones,
    bullets: [
      "Smart call routing",
      "Automated follow-ups",
      "Call analytics",
    ],
  },
  {
    title: "WhatsApp Automation Service",
    description:
      "Engage customers on their preferred platform with automated WhatsApp solutions.",
    icon: MessageCircle,
    bullets: [
      "Bulk messaging",
      "Chatbot integration",
      "Order notifications",
    ],
  },
  {
    title: "n8n Automation Services",
    description:
      "Streamline your workflows with powerful no-code automation using n8n.",
    icon: Workflow,
    bullets: [
      "Workflow design",
      "Third-party integrations",
      "Process optimization",
    ],
  },
  {
    title: "Excel Dashboard Services",
    description:
      "Transform your data into actionable insights with custom Excel dashboards.",
    icon: BarChart3,
    bullets: [
      "Data visualization",
      "Automated reporting",
      "Interactive charts",
    ],
  },
];
