import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const education = [
    {
      year: "2024 - 2028",
      title: "Bachelor of Artificial Intelligence",
      company: "National University of Sciences and Technology (NUST)",
      description:
        "Pursuing a comprehensive degree program focused on Artificial Intelligence, covering core areas such as machine learning, deep learning, data science, and software engineering.",
      achievements: [
        "C++ Programming",
        "Java Programming",
        "Python Programming",
        "Spring Boot",
        "Database Management",
        "Full Stack Project Lead",
        "Academic Excellence",
      ],
      icon: GraduationCap,
    },
  ];

  const certifications = [
    {
      year: "2025",
      title: "Meta Full Stack Development",
      company: "Meta",
      description:
        "Comprehensive certification covering full-stack web development using modern technologies and best practices.",
      achievements: [
        "React & React Native",
        "Backend Development",
        "Database Design",
      ],
      icon: Award,
    },
    {
      year: "2025",
      title: "Crash Course on Python",
      company: "Google",
      description:
        "Intensive Python programming course covering fundamentals to advanced concepts for software development.",
      achievements: [
        "Python Fundamentals",
        "Data Structures",
        "Automation Scripts",
      ],
      icon: Award,
    },
  ];

  const allExperiences = [...education, ...certifications];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My academic journey and professional certifications
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {allExperiences.map((exp, index) => {
                const Icon = exp.icon || Briefcase;
                return (
                  <div
                    key={index}
                    className={`relative animate-fade-in ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`md:w-1/2 ${index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
                        } pl-12 md:pl-0 md:pr-0`}
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-gradient-primary rounded-full transform md:-translate-x-1/2 border-4 border-background ${index % 2 === 0 ? "md:translate-x-1/2" : "md:-translate-x-1/2"
                          }`}
                      />

                      {/* Content Card */}
                      <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/50 group">
                        {/* Icon */}
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                            }`}
                        >
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>

                        {/* Year Badge */}
                        <div
                          className={`inline-block px-4 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-3`}
                        >
                          {exp.year}
                        </div>

                        {/* Title & Company */}
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium mb-3">
                          {exp.company}
                        </p>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <ul
                          className={`space-y-2 ${index % 2 === 0
                              ? "md:text-right md:flex md:flex-col md:items-end"
                              : "text-left"
                            }`}
                        >
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary font-bold">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
