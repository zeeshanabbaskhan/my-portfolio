import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is frontend only - no actual submission
    toast.success("Message sent successfully! (Frontend demo only)");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm actively seeking opportunities to contribute to innovative projects. Let's discuss how I can bring value to your team!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:zzabbaskhan830@email.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      zzabbaskhan830@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/muhammad-zeeshan-abbas-82076a36b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @zeeshan-abbas-82076a36b
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Islamabad, Pakistan<br />NUST Student
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-fade-in" style={{ animationDelay: "200ms" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-accent hover:opacity-90 transition-opacity shadow-glow"
                  size="lg"
                >
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  This is a frontend demo. No actual data is sent.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
