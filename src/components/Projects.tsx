import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Monitor, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { projects, Project } from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();
  const [isGithubDialogOpen, setIsGithubDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleGithubClick = (project: Project) => {
    const hasMultipleRepos = project.githubUrls && (project.githubUrls.frontend || project.githubUrls.backend);

    if (hasMultipleRepos) {
      setSelectedProject(project);
      setIsGithubDialogOpen(true);
    } else if (project.githubUrl) {
      window.open(project.githubUrl, "_blank");
    } else if (project.githubUrls?.fullProject) {
      window.open(project.githubUrls.fullProject, "_blank");
    }
  };

  const openRepo = (url: string) => {
    window.open(url, "_blank");
    setIsGithubDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 lg:py-32">
      {/* GitHub Repository Selection Dialog */}
      <Dialog open={isGithubDialogOpen} onOpenChange={setIsGithubDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Choose Repository</DialogTitle>
            <DialogDescription>
              This project has separate repositories for frontend and backend. Which one would you like to view?
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {selectedProject?.githubUrls?.frontend && (
              <Button
                variant="outline"
                className="w-full justify-start h-auto py-4 px-4"
                onClick={() => openRepo(selectedProject.githubUrls!.frontend!)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Frontend Repository</p>
                    <p className="text-sm text-muted-foreground">Next.js, React, UI Components</p>
                  </div>
                </div>
              </Button>
            )}
            {selectedProject?.githubUrls?.backend && (
              <Button
                variant="outline"
                className="w-full justify-start h-auto py-4 px-4"
                onClick={() => openRepo(selectedProject.githubUrls!.backend!)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Server className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Backend Repository</p>
                    <p className="text-sm text-muted-foreground">Node.js, Express, APIs</p>
                  </div>
                </div>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work demonstrating various technologies and problem-solving approaches
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 space-y-4">
                  <h3
                    className="text-lg font-bold group-hover:text-primary transition-colors cursor-pointer line-clamp-1"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-3"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-3"
                      onClick={() => handleGithubClick(project)}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
