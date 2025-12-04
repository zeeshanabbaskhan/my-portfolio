import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Artificial Intelligence",
      institution: "National University of Sciences and Technology (NUST)",
      location: "Islamabad, Pakistan",
      duration: "2024 - 2028",
      status: "In Progress",
      description:
        "Pursuing a comprehensive degree program focused on Artificial Intelligence, covering core areas such as machine learning, deep learning, data science, and software engineering.",
      courses: [
        "C++ Programming",
        "Java Programming",
        "Python Programming",
        "Spring Boot",
        "Database Management",
        "Data Structures & Algorithms",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Meta Full Stack Development",
      issuer: "Meta",
      date: "2025",
      skills: ["React", "React Native", "Backend Development", "Database Design"],
    },
    {
      id: 2,
      title: "Crash Course on Python",
      issuer: "Google",
      date: "2025",
      skills: ["Python Fundamentals", "Data Structures", "Automation Scripts"],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and professional development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Status Badge */}
                    <span className="inline-block px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full mb-4">
                      {edu.status}
                    </span>

                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-3">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Courses */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Key Courses
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Issued by <span className="text-primary font-medium">{cert.issuer}</span>
                        </p>
                      </div>
                      <span className="flex-shrink-0 px-2.5 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                        {cert.date}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-primary/5 border border-primary/20 rounded text-xs font-medium text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
