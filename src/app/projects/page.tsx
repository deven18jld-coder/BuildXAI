import { ProjectGrid } from "@/components/projects/ProjectGrid";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-6">
      <Link href="/" className="text-blue-500 mb-6 inline-block">
        ← Back to Home
      </Link>

      <ProjectGrid />
    </main>
  );
}