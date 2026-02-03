import Image from "next/image"

export default function ProjectCard({ project }) {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">

            {/* Project Image */}
            <div className="relative h-40">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-xl font-semibold">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Links */}
                <div className="flex gap-4 mt-5">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            className="text-blue-400 hover:underline"
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
        </div>
    )
}
