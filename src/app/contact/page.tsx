import { InquirySection } from "@/components/sections/InquirySection";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-6">
      <Link href="/" className="text-blue-500 mb-6 inline-block">
        ← Back to Home
      </Link>

      <InquirySection />
    </main>
  );
}