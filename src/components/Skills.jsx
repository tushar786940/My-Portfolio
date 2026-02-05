"use client"

import { skills } from "@/data/skills"
import { motion } from "framer-motion"
import SkillCard from "./SkillCard"
import Image from "next/image"

// Container animation config (parent)
const container = {  // Animation configuration object
    hidden: {},  // Initial animation state: Its job is controlling children timing
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
}

// Item animation config (children)
const item = {  // Animation config for each SkillCard
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default function Skills() {
    return (
        <section className="relative py-20 px-6 overflow-hidden">

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
                    className="text-3xl font-bold text-center text-white"
                >
                    Skills
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-400 text-center mt-3 max-w-xl mx-auto"
                >
                    Technologies and tools I use to build scalable, real-world applications.
                </motion.p>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                >
                    {skills.map((group, index) => (
                        <motion.div key={index} variants={item}>
                            <SkillCard
                                title={group.category}
                                items={group.items}
                                icon={group.icon}
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}