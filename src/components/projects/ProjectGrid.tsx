"use client";

import { useProjects } from "@/hooks/useProjects";
import { ProjectCard } from "./ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Loader2, AlertCircle } from "lucide-react";

export function ProjectGrid() {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <section id="projects" className="py-20 md:py-28 bg-gray-950">
        <Container>
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our portfolio of successful client projects and innovative solutions."
            centered
          />
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 md:py-28 bg-gray-950">
        <Container>
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our portfolio of successful client projects and innovative solutions."
            centered
          />
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
            <p className="text-gray-400">
              Failed to load projects. Please try again later.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-20 md:py-28 bg-gray-950">
        <Container>
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our portfolio of successful client projects and innovative solutions."
            centered
          />
          <div className="text-center py-20">
            <p className="text-gray-500">
              No projects available yet. Check back soon!
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-950">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore our portfolio of successful client projects and innovative solutions."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
