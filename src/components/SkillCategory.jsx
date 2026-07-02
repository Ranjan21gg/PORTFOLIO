import {
    FaReact,
    FaJs,
    FaPython,
    FaDocker,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiDjango,
    SiPostgresql,
    SiFirebase,
    SiSupabase,
    SiKubernetes,
    SiGraphql,
    SiMysql,
    SiGithub,
    SiBrevo,
    SiRender,
    SiVercel,
    SiGithubactions,
} from "react-icons/si";

export const SkillCategories = [
    {
        title: "Languages",
        skills: [
            {
                name: "Python",
                icon: <FaPython className="text-5xl text-blue-400" />,
            },
            {
                name: "JavaScript",
                icon: <FaJs className="text-5xl text-yellow-400" />,
            },
        ],
    },

    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                icon: <FaReact className="text-5xl text-cyan-400" />,
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="text-5xl text-cyan-300" />,
            },
        ],
    },

    {
        title: "Backend",
        skills: [
            {
                name: "Django",
                icon: <SiDjango className="text-5xl text-green-400" />,
            },
            {
                name: "REST API",
                icon: (
                    <div className="text-4xl font-bold text-purple-400">
                        API
                    </div>
                ),
            },
            {
                name: "GraphQL",
                icon: <SiGraphql className="text-5xl text-[#E10098]" />,
            },
        ],
    },

    {
        title: "Databases",
        skills: [
            {
                name: "PostgreSQL",
                icon: <SiPostgresql className="text-5xl text-[#4169E1]" />,
            },
            {
                name: "MySQL",
                icon: <SiMysql className="text-5xl text-[#4479A1]" />,
            },
            {
                name: "Firebase",
                icon: <SiFirebase className="text-5xl text-yellow-300" />,
            },
            {
                name: "Supabase",
                icon: <SiSupabase className="text-5xl text-green-500" />,
            },
        ],
    },

    {
        title: "DevOps & Cloud",
        skills: [
            {
                name: "Docker",
                icon: <FaDocker className="text-5xl text-blue-400" />,
            },
            {
                name: "Kubernetes",
                icon: <SiKubernetes className="text-5xl text-[#326CE5]" />,
            },
            {
                name: "Render",
                icon: <SiRender className="text-5xl text-[#46E3B7]" />,
            },
            {
                name: "Vercel",
                icon: <SiVercel className="text-5xl text-white" />,
            },
            {
                name: "GitHub Actions",
                icon: <SiGithubactions className="text-5xl text-[#2088FF]" />,
            },
        ],
    },

    {
        title: "Tools & Services",
        skills: [
            {
                name: "Git",
                icon: <FaGitAlt className="text-5xl text-orange-400" />,
            },
            {
                name: "GitHub",
                icon: <SiGithub className="text-5xl text-white" />,
            },
            {
                name: "Brevo",
                icon: <SiBrevo className="text-5xl text-[#0B996E]" />,
            },
        ],
    },
];