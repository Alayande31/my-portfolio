import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { SkillsAndExpertise } from "../components/skillAndExpertise";
import { FeaturedProjects } from "../components/featuredProject";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">

            {/* Hero */}
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,var(--color-glow),transparent_45%)]" />

                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.3fr_0.7fr]">

                    {/* Hero Content */}
                    <div>
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            Full-Stack Developer
                        </p>

                        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                            I build software that
                            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                solves real problems.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
                            I'm Alayande Al-amin, a full-stack developer focused
                            on building practical applications across the
                            frontend, backend, databases, and infrastructure.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="projects.tsx"
                                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white no-underline transition hover:opacity-90"
                            >
                                View my work
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                            <Link
                                to="/about"
                                className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground no-underline transition hover:bg-surface-hover"
                            >
                                About me
                            </Link>
                        </div>

                        <div className="mt-8 flex items-center gap-5">
                            <a
                                href="https://github.com/Alayande31"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-text-muted transition hover:text-foreground"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                            <a
                                href=""
                                aria-label="LinkedIn"
                                className="text-text-muted transition hover:text-foreground"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="hidden lg:flex lg:justify-end">
                        <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl border border-border bg-surface">
                            <div className="absolute inset-5 rounded-2xl border border-primary/20" />

                            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-3xl font-bold text-white shadow-2xl">
                                AL
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <SkillsAndExpertise />

            {/* Projects */}
            <FeaturedProjects />
        </div>
    );
};
