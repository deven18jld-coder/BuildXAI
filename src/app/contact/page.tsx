import type { Metadata } from "next";
import { InquirySection } from "@/components/sections/InquirySection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact for AI & Website Services",
  description:
    "Get in touch with BuildXAI for AI automation, website development & n8n workflow solutions tailored for your business. Free consultation available.",
  keywords: [
    "AI automation contact",
    "website development inquiry",
    "small business automation consultation",
    "n8n automation quote",
    "web design services contact",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen p-6">
      <Link href="/" className="text-blue-500 mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="sr-only">Contact BuildXAI for AI Automation & Website Development Services</h1>

      <InquirySection />
    </main>
  );
}