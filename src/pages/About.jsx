import React from 'react'

export default function About() {
    return (
        <section
            id="about"
            className="py-24 px-6 bg-black text-white"
        >
            <div className="max-w-4xl mx-auto text-center">

                {/* Small Heading */}
                <p className="text-purple-400 text-lg font-semibold tracking-[0.3em] uppercase mb-4">
                    About Me
                </p>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">

                    Building Clean &
                    <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                        Modern Web Experiences
                    </span>

                </h2>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                    Hi, I'm{" "}
                    <span className="text-white font-semibold">
                        Ranjan
                    </span>
                    , a passionate full stack developer focused on building
                    responsive, scalable, and visually appealing web applications.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                    I specialize in React, Django, Tailwind CSS, and REST APIs.
                    I enjoy transforming ideas into real-world products with
                    clean UI design and smooth user experiences.
                </p>

            </div>
        </section>
    )
}