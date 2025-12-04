import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/zeeshan-890", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/zeeshan-abbas-82076a36b/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:zzabbaskhan830@email.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Zeeshan.dev
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                MERN Full Stack Developer passionate about building the future with modern web technologies and clean code.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Services", "Education", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase() === "home" ? "hero" : link.toLowerCase() === "education" ? "experience" : link.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetId = link.toLowerCase() === "home" ? "hero" : link.toLowerCase() === "education" ? "experience" : link.toLowerCase();
                        const element = document.querySelector(`#${targetId}`);
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>zzabbaskhan830@email.com</li>
                <li>LinkedIn: @zeeshan-abbas-82076a36b</li>
                <li>Islamabad, Pakistan</li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} Muhammad Zeeshan Abbas. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Crafted with <Heart className="w-4 h-4 fill-destructive text-destructive" /> using MERN Stack
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
