import React from 'react'

export default function Projects() {
    const projects = [
        {
            title: "Coaching Management SaaS",
            description:
                "Multi-tenant coaching management platform with student management, attendance, fees, and analytics.",
            image: "/coaching.png",
            tech: ["React", "Django", "PostgreSQL", "Supabase", "Brevo API"],
            live: "https://instiflow-three.vercel.app/",
            github: "https://github.com/Ranjan21gg/Coaching-Management-SaaS",
        },

        {
            title: "IPL Prediction App",
            description:
                "Machine learning based IPL score and winner prediction application with live match stats.",
            image: "/ipl.png",
            tech: ["React", "Python", "ML"],
            live: "https://your-live-site.com",
            github: "https://github.com/Ranjan21gg/IPL-Data-Analysis",
        },
    ];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-5xl font-bold mb-4">Featured Projects</h3>
                    <p className="text-gray-400 text-lg">
                        Some of my recent works and applications.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2  lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-950 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6">
                                <div>
                                    <h3 className="mb-3 text-2xl font-bold text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons always at bottom */}
                                <div className="mt-auto pt-6 flex gap-3">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <button className="w-full rounded-xl bg-linear-to-r from-purple-500 to-blue-500 py-3 font-semibold transition hover:shadow-lg hover:shadow-purple-500/30">
                                            Live Demo
                                        </button>
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <button className="w-full rounded-xl border border-white/20 py-3 font-semibold transition hover:bg-white hover:text-black">
                                            GitHub
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}