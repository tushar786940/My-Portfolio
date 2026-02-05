"use client"

import Image from "next/image"
import ProjectCard from "./ProjectCard"
import { projects } from "@/data/projects"
import { motion } from "framer-motion"

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative py-20 px-6 overflow-hidden"
        >
            {/* Background Image */}
            <Image
                src="/project.png"
                alt="Projects background"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center"
                >
                    Projects
                </motion.h2>


                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="text-gray-400 text-center mt-3 max-w-xl mx-auto"
                >
                    Here are some real-world projects I’ve built to sharpen my
                    full-stack and problem-solving skills.
                </motion.p>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
