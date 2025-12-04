import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, CheckCircle2, Monitor, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { getProjectById } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = getProjectById(id || "");
    const [isGithubDialogOpen, setIsGithubDialogOpen] = useState(false);

    // Check if project has multiple github urls
    const hasMultipleRepos = project?.githubUrls && (project.githubUrls.frontend || project.githubUrls.backend);
    const hasSingleRepo = project?.githubUrl || project?.githubUrls?.fullProject;

    const handleGithubClick = () => {
        if (hasMultipleRepos) {
            setIsGithubDialogOpen(true);
        } else if (project?.githubUrl) {
            window.open(project.githubUrl, "_blank");
        } else if (project?.githubUrls?.fullProject) {
            window.open(project.githubUrls.fullProject, "_blank");
        }
    };

    const openRepo = (url: string) => {
        window.open(url, "_blank");
        setIsGithubDialogOpen(false);
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <p className="text-muted-foreground mb-6">
                        The project you're looking for doesn't exist.
                    </p>
                    <Button onClick={() => navigate("/")}>Go Back Home</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

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
                        {project.githubUrls?.frontend && (
                            <Button
                                variant="outline"
                                className="w-full justify-start h-auto py-4 px-4"
                                onClick={() => openRepo(project.githubUrls!.frontend!)}
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
                        {project.githubUrls?.backend && (
                            <Button
                                variant="outline"
                                className="w-full justify-start h-auto py-4 px-4"
                                onClick={() => openRepo(project.githubUrls!.backend!)}
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

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Back Button */}
                    <Button
                        variant="ghost"
                        className="mb-8 group"
                        onClick={() => navigate("/#projects")}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Button>

                    <div className="max-w-5xl mx-auto">
                        {/* Hero Image */}
                        <div className="relative rounded-2xl overflow-hidden mb-8 border border-border">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Project Header */}
                        <div className="mb-10">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    {project.date}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Layers className="w-4 h-4" />
                                    {project.category}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                {project.title}
                            </h1>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.fullDescription}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 mt-8">
                                {project.liveUrl && (
                                    <Button
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90"
                                        onClick={() => window.open(project.liveUrl, "_blank")}
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        View Live Demo
                                    </Button>
                                )}
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={handleGithubClick}
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    View Source Code
                                </Button>
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-10">
                                {/* Features */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </span>
                                        Key Features
                                    </h2>
                                    <div className="space-y-4">
                                        {project.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                                            >
                                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                                                    {index + 1}
                                                </span>
                                                <p className="text-foreground/90 pt-1">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenges */}
                                {project.challenges && project.challenges.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-bold mb-6">
                                            Challenges & Solutions
                                        </h2>
                                        <div className="space-y-4">
                                            {project.challenges.map((challenge, index) => (
                                                <div
                                                    key={index}
                                                    className="p-4 bg-muted/50 rounded-xl border-l-4 border-primary"
                                                >
                                                    <p className="text-foreground/90">{challenge}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                {/* Technologies */}
                                <div className="bg-card rounded-2xl p-6 border border-border">
                                    <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-2 bg-primary/5 border border-primary/20 rounded-lg text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Links */}
                                <div className="bg-card rounded-2xl p-6 border border-border">
                                    <h3 className="text-lg font-bold mb-4">Project Links</h3>
                                    <div className="space-y-3">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                                            >
                                                <ExternalLink className="w-5 h-5 text-primary" />
                                                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                                    Live Website
                                                </span>
                                            </a>
                                        )}
                                        {hasMultipleRepos ? (
                                            <>
                                                {project.githubUrls?.frontend && (
                                                    <a
                                                        href={project.githubUrls.frontend}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                                                    >
                                                        <Monitor className="w-5 h-5 text-blue-500" />
                                                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                                            Frontend Repository
                                                        </span>
                                                    </a>
                                                )}
                                                {project.githubUrls?.backend && (
                                                    <a
                                                        href={project.githubUrls.backend}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                                                    >
                                                        <Server className="w-5 h-5 text-green-500" />
                                                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                                            Backend Repository
                                                        </span>
                                                    </a>
                                                )}
                                            </>
                                        ) : (
                                            <a
                                                href={project.githubUrl || project.githubUrls?.fullProject}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                                            >
                                                <Github className="w-5 h-5 text-primary" />
                                                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                                    GitHub Repository
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Quick Info */}
                                <div className="bg-card rounded-2xl p-6 border border-border">
                                    <h3 className="text-lg font-bold mb-4">Quick Info</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Category</span>
                                            <span className="font-medium">{project.category}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Year</span>
                                            <span className="font-medium">{project.date}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Technologies</span>
                                            <span className="font-medium">{project.technologies.length}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
