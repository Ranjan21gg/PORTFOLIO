import React from 'react'
import { SkillCategories } from '../components/SkillCategory'

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-28 px-6 bg-linear-to-b from-black to-gray-950 text-white"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-purple-400 text-lg font-semibold tracking-[0.3em] uppercase mb-4">
                        Skills
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Technologies I Work With
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Modern technologies and tools I use to build scalable,
                        responsive, and high-performance web applications.
                    </p>
                </div>

                {/* Skill Categories */}
                <div className="space-y-14">
                    {SkillCategories.map((category) => (
                        <div key={category.title}>

                            {/* Category Heading */}
                            <h3 className="text-2xl font-semibold text-center text-purple-400 mb-10">
                                {category.title}
                            </h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group bg-white/8 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center hover:-translate-y-2 hover:border-purple-500/40 transition duration-300 backdrop-blur-md"
                                    >
                                        <div className="mb-4 group-hover:scale-110 transition duration-300">
                                            {skill.icon}
                                        </div>

                                        <h4 className="text-lg font-semibold text-gray-200 text-center">
                                            {skill.name}
                                        </h4>
                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}