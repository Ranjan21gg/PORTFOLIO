import { Component } from "lucide-react"
import profile from "../images/image.png"


export default function Hero() {
    return (
        <section
            id="home"
            className="flex items-center px-6 pt-28 py-20 bg-black relative overflow-hidden"
        >
            {/* Background Blur Effects */}
            <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl top-0 left-0"></div>
            <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

            <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">

                    <p className="text-purple-400 text-lg md:text-2xl font-semibold mb-4 tracking-widest uppercase">
                        Full Stack Developer
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                            Ranjan
                        </span>
                    </h1>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                        I build modern, responsive, and scalable web applications using
                        React, Django, and modern technologies.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">

                            {/* Scroll To Projects */}
                            <a href="#projects">
                                <button className="bg-linear-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-full font-medium cursor-pointer hover:scale-105 transition">
                                    View Projects
                                </button>
                            </a>

                            {/* Download CV */}
                            <a
                                href="/Ranjan(Resume).pdf"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="border border-white/20 px-6 py-3 rounded-full font-medium cursor-pointer hover:bg-white hover:text-black transition">
                                    Download CV
                                </button>
                            </a>

                        </div>
                    </div>

                </div>

                {/* Right Image */}
                <div className="flex justify-center order-1 lg:order-2">

                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 blur-2xl opacity-30 rounded-full"></div>

                        {/* Profile Image */}
                        <img
                            src={profile}
                            alt="profile"
                            className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                        />

                    </div>

                </div>

            </div>
        </section>
    )
}