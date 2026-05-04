import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation, Website Development & n8n Solutions",
  description:
    "Explore BuildXAI's AI automation, website development, n8n workflow, WhatsApp automation & Excel dashboard services for small businesses.",
  keywords: [
    "AI automation services",
    "website development",
    "n8n automation",
    "small business automation",
    "web design services",
    "WhatsApp automation",
    "Excel dashboard",
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen p-6">
      <Link href="/" className="text-blue-500 mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="sr-only">AI Automation, Website Development & n8n Solutions</h1>

      <ServicesSection />
    </main>
  );
}