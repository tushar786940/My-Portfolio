import Image from "next/image"
import ProjectCard from "./ProjectCard"
import { projects } from "@/data/projects"

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative py-20 px-6 overflow-hidden"
        >
            {/* Background Image */}
            <Image
                src="/image.png"
                alt="Projects background"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center">
                    Projects
                </h2>

                <p className="text-gray-400 text-center mt-3 max-w-xl mx-auto">
                    Here are some real-world projects I’ve built to sharpen my
                    full-stack and problem-solving skills.
                </p>

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
