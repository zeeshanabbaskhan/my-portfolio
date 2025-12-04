import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      content:
        "Working with John was an absolute pleasure. He delivered our project ahead of schedule and the quality exceeded our expectations. His expertise in React and Node.js really shines through.",
      rating: 5,
      image: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Product Manager at InnovateCo",
      content:
        "John's ability to translate complex requirements into elegant solutions is remarkable. He's not just a developer, but a problem solver who truly understands the business needs.",
      rating: 5,
      image: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO at Digital Ventures",
      content:
        "I highly recommend John for any full-stack development needs. His technical skills are top-notch, and his communication throughout the project was excellent. A true professional!",
      rating: 5,
      image: "ER",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What my clients say about working with me
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/50 group animate-fade-in relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
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

export default Testimonials;
