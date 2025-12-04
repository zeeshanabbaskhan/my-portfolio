import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            role: "Full Stack Developer Intern",
            company: "Superior Group of Colleges",
            location: "Garh More, Pakistan",
            duration: "Jun 2025 - Aug 2025",
            type: "On-site",
            description:
                "Articulated the institution's commitment to quality education and innovation by detailing its nationwide campus network and academic excellence.",
            responsibilities: [
                "Designed and deployed a web application to manage 500+ student records, grades, and invoices, reducing manual processing time by 60%",
                "Developed a scalable frontend using React.js alongside backend APIs with Node.js and MySQL, ensuring robust data security",
                "Enhanced UI responsiveness, improving student and admin portal load times by 35%",
            ],
            technologies: ["React.js", "Node.js", "MySQL", "REST APIs"],
        },
        {
            id: 2,
            role: "MERN Full Stack Developer Intern",
            company: "BloodShare",
            location: "Remote",
            duration: "Aug 2025 - Oct 2025",
            type: "Remote",
            description:
                "Engineered and integrated a cross-platform Flutter mobile app connected to a Node.js, MongoDB, and Redis backend to ensure consistent performance.",
            responsibilities: [
                "Implemented secure OTP verification via Meta WhatsApp API and Google OAuth, reducing login failures by 40%",
                "Created a friendship system enabling users to send, accept, or decline requests, increasing user engagement by 25%",
                "Developed a Blood Request Worker with Redis that automated request generation, volunteer search, and notifications, cutting emergency response time by 50%",
                "Constructed an admin panel and dynamic landing page enabling non-technical staff to update content efficiently",
            ],
            technologies: ["Flutter", "Node.js", "MongoDB", "Redis", "Google OAuth"],
        },
    ];

    return (
        <section id="work-experience" className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        Career
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Work <span className="text-primary">Experience</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My professional journey and the impact I've made
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="group relative bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
                        >
                            {/* Left accent bar */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />

                            <div className="p-6 md:p-8 pl-8 md:pl-10">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div className="flex items-start gap-4">
                                        {/* Company Icon */}
                                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Briefcase className="w-7 h-7 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-lg font-medium text-primary">
                                                {exp.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Duration Badge */}
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-lg text-sm font-medium text-muted-foreground">
                                            <Calendar className="w-4 h-4" />
                                            {exp.duration}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-lg text-sm font-medium text-muted-foreground">
                                            <MapPin className="w-4 h-4" />
                                            {exp.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                {/* Responsibilities */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-3">
                                        {exp.responsibilities.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                </span>
                                                <span className="text-muted-foreground text-sm leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-sm font-medium text-foreground hover:bg-primary/10 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
