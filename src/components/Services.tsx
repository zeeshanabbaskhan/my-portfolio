import {
  Code2,
  Database,
  Smartphone,
  Wrench,
  Rocket,
  Bug,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building responsive and performant websites using React, Next.js, and Tailwind CSS with clean, maintainable code and exceptional user experiences.",
    },
    {
      icon: Database,
      title: "MERN Stack Development",
      description:
        "Full-stack application development using MongoDB, Express.js, React, and Node.js with seamless API integration and database design.",
    },
    {
      icon: Smartphone,
      title: "Real-Time Applications",
      description:
        "Building real-time features using WebRTC and Socket.io for chat applications, video calls, and live collaboration tools.",
    },
    {
      icon: Wrench,
      title: "REST API Development",
      description:
        "RESTful API design and development with proper documentation, authentication, and scalable architecture using Node.js and Express.",
    },
    {
      icon: Bug,
      title: "Java & Spring Boot",
      description:
        "Backend development using Java and Spring Boot framework for enterprise-level applications and management systems.",
    },
    {
      icon: Rocket,
      title: "Database Management",
      description:
        "Database design and management using MongoDB and SQL databases with efficient queries and data modeling.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life with quality and precision
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/50 group animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
