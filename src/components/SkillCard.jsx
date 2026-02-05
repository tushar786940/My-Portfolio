"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function SkillCard({ title, items, icon: Icon }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-700/50
                 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden backdrop-blur-sm
                 hover:shadow-2xl hover:shadow-cyan-500/20"
        >
            {/* Animated Gradient Glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 opacity-0
                      group-hover:opacity-100 transition-opacity duration-500"
                animate={
                    isHovered
                        ? {
                              background: [
                                  "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)",
                                  "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)",
                                  "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)",
                              ],
                          }
                        : {}
                }
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Animated Border */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2))",
                    padding: "2px",
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />

            {/* Header */}
            <div className="flex items-center gap-3 mb-5 relative z-10">
                {Icon && (
                    <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30"
                    >
                        <Icon className="text-cyan-400" size={24} />
                    </motion.div>
                )}

                <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-1 origin-left"
                    />
                </div>
            </div>

            {/* Skill Count */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                    x: isHovered ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-6 right-6 z-10"
            >
                <div className="px-3 py-1 rounded-full bg-cyan-500/90">
                    <span className="text-xs font-bold text-white">
                        {items.length} Skills
                    </span>
                </div>
            </motion.div>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-2.5 relative z-10">
                {items.map((skill, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{
                            scale: 1.15,
                            y: -3,
                            boxShadow: "0 4px 20px rgba(6,182,212,0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="relative text-sm font-medium bg-gradient-to-br from-gray-700 to-gray-800 
                                   px-4 py-2 rounded-full text-gray-300 hover:text-white
                                   border border-gray-600 hover:border-cyan-500/50
                                   transition-all duration-300 overflow-hidden"
                    >
                        {/* Pill Glow */}
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity" />

                        {/* FIXED TAG HERE ✅ */}
                        <span className="relative z-10 flex items-center gap-1.5">
                            <motion.span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            {skill}
                        </span>
                    </motion.span>
                ))}
            </div>

            {/* Bottom Progress Bar */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-b-2xl origin-left"
            />
        </motion.div>
    )
}
