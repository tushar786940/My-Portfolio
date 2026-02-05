"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectCard({ project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
        >
            <div className="relative h-40 w-full overflow-hidden">
                <Image
                    src={project.image}   
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>


            <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-gray-400 text-sm mt-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((item, index) => (
                        <span
                            key={index}
                            className="text-xs bg-gray-700 px-2 py-1 rounded"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-5">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            className="text-cyan-400 hover:underline"
                        >
                            Live Demo
                        </a>
                    )}

                    <a
                        href={project.github}
                        target="_blank"
                        className="text-gray-300 hover:underline"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    )
}
