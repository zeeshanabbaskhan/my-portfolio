import { Code2, Rocket, Award, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      value: "7+",
      label: "Projects Completed",
    },
    {
      icon: Rocket,
      value: "5+",
      label: "Technologies Mastered",
    },
    {
      icon: Award,
      value: "100%",
      label: "Commitment Level",
    },
    {
      icon: Users,
      value: "24/7",
      label: "Learning Mode",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold">
                MERN Stack Enthusiast & Problem Solver
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a dedicated MERN Full Stack Developer, I specialize in creating dynamic,
                responsive web applications using MongoDB, Express.js, React, and Node.js.
                My expertise extends to modern frameworks like Next.js and styling with
                Tailwind CSS, ensuring both functionality and aesthetic appeal.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently pursuing my Bachelor's degree in Artificial Intelligence at NUST,
                I'm actively seeking opportunities to apply my skills in a professional
                environment. I'm passionate about clean code, user experience, and building
                scalable solutions that make a difference.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My technical expertise includes React, Next.js, Node.js, MongoDB, Express.js,
                Tailwind CSS, JavaScript, Java, Python, and C++. I also have experience with
                WebRTC, Socket.io, and Spring Boot.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/50 group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">
                      {item.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {item.label}
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

export default About;
