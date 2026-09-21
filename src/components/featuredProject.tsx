import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaptopCode,
    faSchool,
    faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const projects = [
    {
        title: "CBT Exam Platform",
        category: "Full-stack",
        description:
            "An offline-first CBT platform with teacher mobile app, real-time monitoring and secure exam management.",
        technologies: ["NestJS", "React", "Redis", "MariaDB"],
        icon: faLaptopCode,
    },
    {
        title: "School Management Portal",
        category: "Laravel",
        description:
            "A complete school management system with parent portal, student results and academic tracking.",
        technologies: ["Laravel", "Inertia", "React", "MySQL"],
        icon: faSchool,
    },
    {
        title: "Teacher Exam Processing App",
        category: "Kotlin",
        description:
            "A teacher-focused exam processing application built for offline-first workflows and synchronization within a school network.",
        technologies: ["Kotlin", "MVVM", "Room", "RPC"],
        icon: faMobileScreenButton,
    },
];

export const FeaturedProjects = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Header */}
                <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                            Featured Projects
                        </h2>

                        <p className="mt-1 text-sm text-muted">
                            Some of my recent work
                        </p>
                    </div>

                    <NavLink
                        to="/projects"
                        className="hidden text-sm font-medium text-primary no-underline transition hover:opacity-80 sm:block"
                    >
                        View all projects
                        <span className="ml-1">→</span>
                    </NavLink>
                </div>

                {/* Projects */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="
                                rounded-xl
                                border border-border
                                bg-surface
                                p-5
                                transition-all duration-200
                                hover:-translate-y-1
                                hover:bg-surface-hover
                            "
                        >
                            {/* Icon */}
                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <FontAwesomeIcon icon={project.icon} />
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-semibold text-foreground">
                                {project.title}
                            </h3>

                            {/* Category + technologies */}
                            <p className="mt-1 text-xs text-muted">
                                {project.category}
                                {" · "}
                                {project.technologies.slice(0, 3).join(" · ")}
                                {project.technologies.length > 3 && " · +"}
                            </p>

                            {/* Description */}
                            <p className="mt-4 text-xs leading-5 text-text-secondary">
                                {project.description}
                            </p>

                            {/* Technology tags */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies
                                    .slice(0, 3)
                                    .map((technology) => (
                                        <span
                                            key={technology}
                                            className="
                                                rounded-full
                                                border border-border
                                                bg-background
                                                px-3 py-1
                                                text-[11px]
                                                text-muted
                                            "
                                        >
                                            {technology}
                                        </span>
                                    ))}

                                {project.technologies.length > 3 && (
                                    <span
                                        className="
                                            rounded-full
                                            border border-border
                                            bg-background
                                            px-3 py-1
                                            text-[11px]
                                            text-muted
                                        "
                                    >
                                        +{project.technologies.length - 3}
                                    </span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile link */}
                <div className="mt-6 sm:hidden">
                    <NavLink
                        to="/projects"
                        className="text-sm font-medium text-primary no-underline"
                    >
                        View all projects →
                    </NavLink>
                </div>
            </div>
        </section>
    );
};