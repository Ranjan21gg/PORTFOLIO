import React from 'react'
import { useState, useRef } from 'react';

// contact section imports
import emailjs from "@emailjs/browser";

export default function Contact() {
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
                            className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                        />

                    </div>

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                        className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                    ></textarea>

                    <button
                        type="submit"
                        className="cursor-pointer bg-linear-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
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
    )
}
