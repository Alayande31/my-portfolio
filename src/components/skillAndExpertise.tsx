import {
    faCode,
    faServer,
    faDatabase,
    faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skills = [
    {
        title: "Frontend Development",
        description:
            "Building responsive and intuitive interfaces with modern frontend technologies.",
        icon: faCode,
        technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Backend Development",
        description:
            "Designing scalable APIs and backend systems with clean architecture.",
        icon: faServer,
        technologies: ["NestJS", "Node.js", "REST APIs"],
    },
    {
        title: "Database & Data",
        description:
            "Working with relational databases, caching, and data modelling.",
        icon: faDatabase,
        technologies: ["MySQL", "MariaDB", "Redis"],
    },
    {
        title: "DevOps & Infrastructure",
        description:
            "Containerizing applications and working with Linux-based infrastructure.",
        icon: faCloud,
        technologies: ["Docker", "Linux", "Nginx"],
    },
];

export const SkillsAndExpertise = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                        Skills & Expertise
                    </p>

                    <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                        Building across the stack
                    </h2>

                    <p className="mt-4 max-w-2xl text-text-secondary">
                        I enjoy understanding how different parts of a system
                        work together, from the user interface to backend
                        services, databases, and infrastructure.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {skills.map((skill) => (
                        <div
                            key={skill.title}
                            className="rounded-2xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:bg-surface-hover"
                        >
                            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <FontAwesomeIcon icon={skill.icon} />
                            </div>

                            <h3 className="text-lg font-semibold text-foreground">
                                {skill.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-text-secondary">
                                {skill.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {skill.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-text-secondary"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

