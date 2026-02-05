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
        <section id="skills" className="relative py-20 px-6 overflow-hidden">

            {/* Background Image */}
            <Image
                src="/project.png"
                alt="Skills background"
                fill
                priority
                className="object-cover"
            />

            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85"></div>

            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"
            />

            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            {/* Floating Tech Emojis */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-32 right-20 text-cyan-500/20 text-7xl pointer-events-none"
            >
                ⚛️
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-32 left-20 text-purple-500/20 text-7xl pointer-events-none"
            >
                💻
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Section Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 7H7v6h6V7z" />
                            <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                        </svg>
                        <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                            Tech Stack
                        </span>
                    </div>
                </motion.div>

                {/* Title with Enhanced Gradient */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
                >
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Skills & Expertise
                    </span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-400 text-center mt-4 max-w-2xl mx-auto text-lg"
                >
                    Technologies and tools I use to build scalable, real-world applications.
                </motion.p>

                {/* Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
                />

                {/* Skills Grid with Stagger Animation */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
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

                {/* Bottom Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-12 mt-16 pt-12 border-t border-gray-700/50"
                >
                    {[
                        { label: "Technologies", value: "20+", icon: "⚡" },
                        { label: "Years Experience", value: "2+", icon: "📅" },
                        { label: "Projects Built", value: "15+", icon: "🚀" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-gray-500 text-sm mt-1 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}