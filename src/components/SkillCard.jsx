"use client"

import { motion } from "framer-motion"

export default function SkillCard({ title, items, icon: Icon }) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="relative bg-gray-800 rounded-xl p-6 border border-white/10
                 hover:border-cyan-400/40 transition group overflow-hidden"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-linear-to-r
                      from-cyan-400/10 to-purple-500/10 opacity-0
                      group-hover:opacity-100 transition pointer-events-none" />

            {/* Header */}
            <div className="flex items-center gap-3 mb-4 relative z-10">
                {Icon && <Icon className="text-cyan-400" size={22} />}
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-2 relative z-10">
                {items.map((skill, index) => (
                    <motion.span
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="text-sm bg-gray-700 px-3 py-1 rounded-full
                       text-gray-300 cursor-default"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    )
}