import React, { useState } from 'react'
import { Menu } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400"
                >
                    Ranjan
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

                    {[
                        "Home",
                        "About",
                        "Projects",
                        "Skills",
                        "Contact",
                    ].map((item) => (

                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item}
                        </a>

                    ))}

                </nav>

                {/* Hire Me Button */}
                <a href="#contact">
                    <button className="hidden md:block bg-linear-to-r from-purple-500 to-blue-500 px-5 py-2.5 rounded-full font-medium cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition duration-300">
                        Hire Me
                    </button>
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 space-y-5 text-center">

                    {[
                        "Home",
                        "About",
                        "Projects",
                        "Skills",
                        "Contact",
                    ].map((item) => (

                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block text-gray-300 hover:text-white text-lg transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>

                    ))}

                    <a href="#contact">
                        <button className="cursor-pointer w-full mt-4 bg-linear-to-r from-purple-500 to-blue-500 py-3 rounded-full font-medium">
                            Hire Me
                        </button>
                    </a>

                </div>
            )}
        </header>
    )
}
