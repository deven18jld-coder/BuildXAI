import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation & Website Development Projects",
  description:
    "View BuildXAI's portfolio of AI automation, website development & n8n workflow projects. Real results, real growth.",
  keywords: [
    "AI automation projects",
    "website development portfolio",
    "small business automation examples",
    "n8n workflow projects",
  ],
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-6">
      <Link href="/" className="text-blue-500 mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="sr-only">AI Automation & Website Development Projects</h1>

      <ProjectGrid />
    </main>
  );
}