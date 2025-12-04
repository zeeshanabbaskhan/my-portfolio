import {
  Code2,
  Database,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Blocks,
  FileCode,
} from "lucide-react";
import {
  Code,
  Braces,
  FileJson,
  Palette,
  Layers,
  Box,
  Terminal,
  Package,
  Zap,
  Github,
  Calendar,
  Edit,
  Search,
  TestTube,
  Play,
  CheckCircle2,
  Grid,
  Workflow,
  BookOpen,
  Users,
  Bug
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        { name: "React", icon: Code },
        { name: "Next.js", icon: Zap },
        { name: "JavaScript", icon: FileCode },
        { name: "Tailwind CSS", icon: Palette },
        { name: "HTML5", icon: FileJson },
        { name: "CSS3", icon: Layers },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: Terminal },
        { name: "Express.js", icon: Server },
        { name: "MongoDB", icon: Database },
        { name: "SQL", icon: Database },
        { name: "Spring Boot", icon: Braces },
        { name: "RESTful APIs", icon: Package },
      ],
    },
    {
      title: "Languages",
      icon: FileCode,
      skills: [
        { name: "JavaScript", icon: FileCode },
        { name: "Java", icon: Code },
        { name: "Python", icon: FileJson },
        { name: "C++", icon: Braces },
      ],
    },
    {
      title: "Tools",
      icon: GitBranch,
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "VS Code", icon: Code },
        { name: "Postman", icon: Package },
        { name: "Docker", icon: Box },
        { name: "WebSockets", icon: Zap },
        { name: "WebRTC", icon: Play },
        { name: "npm", icon: Package },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital products
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/50 group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default flex items-center gap-1.5"
                        >
                          <SkillIcon className="w-3.5 h-3.5" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
