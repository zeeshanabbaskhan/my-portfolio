import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "VIRALIX - AI Social Media Management Platform",
      description: "Viralix is a social media management platform that uses AI for advanced social media accounts analytics, scheduled posting, one post upload to all connected accounts. Uses Meta APIs for connecting Facebook and Instagram.",
      image: "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1763109057/Screenshot_2025-11-14_133030_tco8z5.png",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js", "Meta APIs", "Gemini API"],
      liveUrl: "https://client-autoreach-ai.vercel.app/",
      githubUrl: "https://github.com/zeeshan-890",
    },
    {
      title: "Ecommerce Website",
      description: "A fully functional ecommerce website built with Next.js, Tailwind CSS, and MongoDB. Features product listings, shopping cart, and user authentication.",
      image: "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754287430/WhatsApp_Image_2025-07-25_at_14.47.21_4f783563_gfbvt1.jpg",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
      liveUrl: "https://ecommerce-client-roan-one.vercel.app/",
      githubUrl: "https://github.com/zeeshan-890",
    },
    {
      title: "Chat and VideoCall Application",
      description: "A real-time chat and video call application built with WebRTC, Node.js, and React. Enables users to communicate via text and video in a seamless manner.",
      image: "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754287431/WhatsApp_Image_2025-07-19_at_15.47.23_f1be91d1_lxbnmq.jpg",
      technologies: ["WebRTC", "Node.js", "Express.js", "React", "Socket.io"],
      liveUrl: "https://chat-app-zeeshan-b25392777074.herokuapp.com/",
      githubUrl: "https://github.com/zeeshan-890",
    },
    {
      title: "Resume Builder",
      description: "A web application that allows users to create and manage their resumes easily. Built with React, Node.js, and MongoDB.",
      image: "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754287388/Screenshot_2025-08-02_170041_i3nzmn.png",
      technologies: ["Next.js"],
      liveUrl: "",
      githubUrl: "https://github.com/zeeshan-890",
    },
    {
      title: "NUST INTERNSHIP Management System",
      description: "A comprehensive internship management system designed for NUST students. Facilitates internship applications, tracking, and management.",
      image: "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754288358/WhatsApp_Image_2025-05-15_at_10.35.31_18aad438_scneja.jpg",
      technologies: ["JavaScript", "HTML", "CSS3", "Java", "Spring Boot"],
      liveUrl: "",
      githubUrl: "https://github.com/zeeshan-890",
    },
    {
      title: "Cafe Management System",
      description: "A comprehensive cafe management system built with React, Node.js, and MongoDB. Features include order management, inventory tracking, and customer management.",
      image: "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754889359/Screenshot_2025-08-11_101445_otnctr.png",
      technologies: ["HTML", "CSS", "JavaScript", "Django"],
      liveUrl: "",
      githubUrl: "https://github.com/zeeshan-890",
    },
    {
      title: "Weather Application",
      description: "A weather application that provides real-time weather updates and forecasts. Built with React, Node.js, and OpenWeatherMap API.",
      image: "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754287430/WhatsApp_Image_2025-06-27_at_16.30.20_e684ea9b_grsfty.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      liveUrl: "https://weather-app-five-sooty-22.vercel.app/",
      githubUrl: "https://github.com/zeeshan-890",
    },
    {
      title: "Currency Converter",
      description: "A currency converter application that provides real-time exchange rates and conversion functionality.",
      image: "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754888536/Screenshot_2025-08-11_100135_u49sol.png",
      technologies: ["HTML", "CSS", "JavaScript", "Currency Exchange API"],
      liveUrl: "https://currency-converter-tawny-phi.vercel.app/",
      githubUrl: "https://github.com/zeeshan-890",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects demonstrating various technologies and problem-solving approaches
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/50 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
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
