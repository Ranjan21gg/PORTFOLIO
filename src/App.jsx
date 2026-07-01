import profile from './images/image.png'
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

// contact section imports
import emailjs from "@emailjs/browser";


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
} from "react-icons/si";


export default function PortfolioWebsite() {

  const projects = [
    {
      title: "Coaching Management SaaS",
      description:
        "Multi-tenant coaching management platform with student management, attendance, fees, and analytics.",
      image: "/coaching.png",
      tech: ["React", "Django", "PostgreSQL"],
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
  const [isOpen, setIsOpen] = useState(false);

  // Contact section logic
  const form = useRef();
  const [success, setSuccess] = useState("");
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const now = Date.now();

    // Get stored data
    const storedData = JSON.parse(
      localStorage.getItem("messageLimit")
    );

    let count = 0;
    let firstTime = now;

    // If data exists
    if (storedData) {

      count = storedData.count;
      firstTime = storedData.firstTime;

      // Reset after 12 hours
      const twelveHours =
        12 * 60 * 60 * 1000;

      if (now - firstTime > twelveHours) {
        count = 0;
        firstTime = now;
      }
    }

    // Limit: 2 messages
    if (count >= 2) {
      alert(
        "Message limit reached. Try again after 12 hours."
      );
      return;
    }

    emailjs
      .sendForm(
        "service_5kdlxgm",
        "template_1fsawcg",
        form.current,
        "1k49co_ISEaaqrMDL"
      )
      .then(
        () => {
          // Save updated count
          localStorage.setItem(
            "messageLimit",
            JSON.stringify({
              count: count + 1,
              firstTime,
            })
          );

          setIsError(false);
          setSuccess("Message sent successfully!");

          form.current.reset();

          setTimeout(() => {
            setSuccess("");
          }, 2000);
        },

        (error) => {
          setIsError(true);
          setSuccess("Failed to send message!");

          setTimeout(() => {
            setSuccess("");
          }, 2000);

          console.log(error.text);
        }
      );
  };


  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
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
                className="relative hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>

            ))}

          </nav>

          {/* Hire Me Button */}
          <a href="#contact">
            <button className="hidden md:block bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2.5 rounded-full font-medium cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition duration-300">
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
              <button className="cursor-pointer w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-full font-medium">
                Hire Me
              </button>
            </a>

          </div>
        )}

      </header>

      {/* Hero Section */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
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
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-full font-medium cursor-pointer hover:scale-105 transition">
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-30 rounded-full"></div>

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

      {/* About Section */}
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
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

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4">Featured Projects</h3>
            <p className="text-gray-400 text-lg">
              Some of my recent works and applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-6">

                  <h4 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">

                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-xl font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition duration-300">
                        Live Demo
                      </button>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="cursor-pointer w-full border border-white/20 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition">
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

      {/* Skills */}
      <section
        id="skills"
        className="py-28 px-6 bg-gradient-to-b from-black to-gray-950 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <p className="text-purple-400 text-lg font-semibold tracking-[0.3em] uppercase mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            Modern technologies and tools I use to build scalable,
            responsive, and high-performance web applications.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

            {[
              {
                name: "React",
                icon: <FaReact className="text-5xl text-cyan-400" />,
              },
              {
                name: "JavaScript",
                icon: <FaJs className="text-5xl text-yellow-400" />,
              },
              {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="text-5xl text-cyan-300" />,
              },
              {
                name: "Django",
                icon: <SiDjango className="text-5xl text-green-400" />,
              },
              {
                name: "Python",
                icon: <FaPython className="text-5xl text-blue-400" />,
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
                name: "PostgreSQL",
                icon: <SiPostgresql className="text-5xl text-blue-300" />,
              },
              {
                name: "Git",
                icon: <FaGitAlt className="text-5xl text-orange-400" />,
              },
              {
                name: "Docker",
                icon: <FaDocker className="text-5xl text-blue-400" />,
              },
              {
                name: "Firebase",
                icon: <SiFirebase className="text-5xl text-yellow-300" />,
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="group bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center hover:-translate-y-2 hover:border-purple-500/40 transition duration-300 backdrop-blur-md"
              >

                <div className="mb-4 group-hover:scale-110 transition duration-300">
                  {skill.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-200">
                  {skill.name}
                </h3>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-black text-white"
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-purple-400 text-lg font-semibold tracking-[0.3em] uppercase mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 text-lg mb-12">
            Have a project idea or want to collaborate?
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
              />

            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            ></textarea>

            <button
              type="submit"
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>

            {success && (
              <p
                className={`mt-4 font-medium ${isError ? "text-red-400" : "text-green-400"
                  }`}
              >
                {success}
              </p>
            )}

          </form>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-500">
        © 2026 Ranjan. All rights reserved.
      </footer>
    </div>
  );
}
