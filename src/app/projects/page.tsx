import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation & Website Development Projects India",
  description:
    "View BuildXAI's portfolio of AI automation, website development & n8n workflow projects delivered for Indian businesses. Real results, real growth.",
  keywords: [
    "AI automation projects India",
    "website development portfolio India",
    "small business automation examples India",
    "n8n workflow projects India",
  ],
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-6">
      <Link href="/" className="text-blue-500 mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="sr-only">AI Automation & Website Development Projects for Indian Businesses</h1>

      <ProjectGrid />
    </main>
  );
}