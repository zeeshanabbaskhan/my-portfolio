import { Download, Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 md:pt-20 pb-12 md:pb-16"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 md:w-80 h-64 md:h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 md:w-96 h-72 md:h-96 bg-secondary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 space-y-4 md:space-y-6 text-center lg:text-left">
            {/* Status Badge */}


            {/* Name & Title */}
            <div className="space-y-2 md:space-y-3">
              <p className="text-base md:text-lg text-muted-foreground font-medium">Hi there, I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                Muhammad<br />
                <span className="text-primary">Zeeshan Abbas</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/80">
                Full Stack Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I craft modern web applications with <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">Next.js</span>, and the <span className="text-foreground font-medium">MERN stack</span>.
              Focused on building performant, scalable solutions that deliver real business value.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1 md:pt-2">
              {["React", "Node.js", "TypeScript", "MongoDB", "Next.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 md:px-3 py-1 text-xs md:text-sm font-medium rounded-md bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 md:gap-4 pt-2 md:pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group text-sm md:text-base"
                onClick={() => {
                  const contact = document.querySelector("#contact");
                  contact?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's work together
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 hover:bg-muted group text-sm md:text-base"
                onClick={() => {
                  window.open("/resume.pdf", "_blank");
                }}
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 pt-2 md:pt-4">
              <span className="text-xs md:text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-2 md:gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 md:p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground/70 hover:text-foreground transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-zeeshan-abbas-82076a36b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 md:p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground/70 hover:text-foreground transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a
                  href="mailto:zeeshan@example.com"
                  className="p-1.5 md:p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground/70 hover:text-foreground transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Elements - Hidden on mobile for cleaner look */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-2xl opacity-60" />
              <div className="hidden sm:block absolute -top-4 md:-top-6 -right-4 md:-right-6 w-16 md:w-24 h-16 md:h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="hidden sm:block absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-20 md:w-32 h-20 md:h-32 border-2 border-secondary/30 rounded-2xl" />

              {/* Main Image Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 border border-border/50 shadow-2xl">
                {/* Placeholder - Replace with actual image */}
                <img
                  src="/IMG_1649a.jpg"
                  alt="Muhammad Zeeshan Abbas"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
