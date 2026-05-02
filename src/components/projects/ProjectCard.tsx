import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProjectItem } from "@/types/project";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="flex-grow">
        <Badge variant="info" className="mb-2 w-fit">
          Project
        </Badge>
        <h3 className="text-lg font-semibold text-[#111111] group-hover:text-[#0D7377] transition-colors">
          {project.title}
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        <a
          href={project.demo_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#0D7377] hover:text-[#0A5A5D] transition-colors font-medium"
        >
          <span>View Demo</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </CardContent>
    </Card>
  );
}
