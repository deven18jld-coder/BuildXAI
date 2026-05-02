"use client";

import { useProjects } from "@/hooks/useProjects";
import { ProjectCard } from "./ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectGrid() {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <section id="projects" className="py-20 md:py-28 bg-[#FAFAF8]">
        <Container>
          <SectionHeading
            title="See What We’ve Built"
            subtitle="Explore live demos of our recent projects"
            centered
          />
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-[#0D7377] animate-spin" />
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 md:py-28 bg-[#FAFAF8]">
        <Container>
          <SectionHeading
            title="See What We’ve Built"
            subtitle="Explore live demos of our recent projects"
            centered
          />
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <AlertCircle className="w-12 h-12 text-[#DC2626] mb-4" />
            <p className="text-[#5F6368]">
              Failed to load projects. Please try again later.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-20 md:py-28 bg-[#FAFAF8]">
        <Container>
          <SectionHeading
            title="See What We’ve Built"
            subtitle="Explore live demos of our recent projects"
            centered
          />
          <div className="text-center py-20">
            <p className="text-[#5F6368]">
              No projects available yet. Check back soon!
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FAFAF8]">
      <Container>
        <SectionHeading
          title="See What We’ve Built"
          subtitle="Explore live demos of our recent projects"
          centered
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.4, 
                ease: "easeOut", 
                delay: index * 0.1 
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
