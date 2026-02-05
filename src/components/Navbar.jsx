"use client"

import { color, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { Menu, X, Code2, Sparkles } from "lucide-react"

export default function Navbar() {
    const [hidden, setHidden] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()  // It updates automatically as the user scrolls

    useMotionValueEvent(scrollY, "change", (latest) => {  // latest → current scroll value
        const previous = scrollY.getPrevious() // previous → last scroll value

        if (latest > previous && latest > 80) {
            setHidden(true) // Scrolling Down
        } else {
            setHidden(false) // Scrolling Up
        }
    })

    const navLinks = [
        {href:"#home", label:"Home", color:"purple"},
        { href: "#projects", label: "Projects", color: "cyan" },
        { href: "#skills", label: "Skills", color: "purple" },
        // { href: "#contact", label: "Contact", color: "cyan" }
    ]

    return (
        <motion.nav
            initial={false}
            animate={{ y: hidden ? "-100%" : "0%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 w-full z-50 bg-[#0B0F1A]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50"
        >
            {/* Animated Background Gradient */}
            <motion.div
                animate={{
                    background: [
                        "linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
                        "linear-gradient(90deg, rgba(168, 85, 247, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
                        "linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-50"
            />

            {/* Bottom Accent Line */}
            <motion.div
                animate={{
                    background: [
                        "linear-gradient(90deg, rgba(6, 182, 212, 0.5) 0%, rgba(168, 85, 247, 0.5) 50%, rgba(236, 72, 153, 0.5) 100%)",
                        "linear-gradient(90deg, rgba(236, 72, 153, 0.5) 0%, rgba(6, 182, 212, 0.5) 50%, rgba(168, 85, 247, 0.5) 100%)",
                        "linear-gradient(90deg, rgba(168, 85, 247, 0.5) 0%, rgba(236, 72, 153, 0.5) 50%, rgba(6, 182, 212, 0.5) 100%)",
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 right-0 h-0.5"
            />

            <div className="relative max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo with Enhanced Design */}
                <motion.a
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                >
                    <div className="flex items-center gap-2">
                        {/* Animated Icon */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="p-2 rounded-lg bg-linear-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all"
                        >
                            <Code2 className="w-5 h-5 text-cyan-400" />
                        </motion.div>

                        {/* Logo Text */}
                        <h1 className="text-xl font-bold">
                            <motion.span
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-[200%_auto]"
                            >
                                Tushar
                            </motion.span>
                            <span className="text-gray-400">.dev</span>
                        </h1>

                        {/* Sparkle Effect */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    </div>
                </motion.a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white font-medium transition-all duration-300`}
                        >
                            {/* Hover Background */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                className={`absolute inset-0 rounded-lg bg-linear-to-br ${
                                    link.color === 'cyan' 
                                        ? 'from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30' 
                                        : 'from-purple-500/20 to-purple-600/20 border border-purple-500/30'
                                } -z-10`}
                            />

                            <span className="relative z-10">{link.label}</span>

                            {/* Underline Effect */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                                    link.color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'
                                } rounded-full origin-left`}
                            />
                        </motion.a>
                    ))}

                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-4 px-5 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/30 border border-cyan-400/30"
                    >
                        Hire Me
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-colors"
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6 text-gray-300" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-300" />
                    )}
                </motion.button>

            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: mobileMenuOpen ? "auto" : 0,
                    opacity: mobileMenuOpen ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden border-t border-white/10 bg-[#0B0F1A]/95 backdrop-blur-xl"
            >
                <div className="px-6 py-4 space-y-2">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 rounded-lg text-gray-300 hover:text-white font-medium transition-all duration-300 ${
                                link.color === 'cyan' 
                                    ? 'hover:bg-cyan-500/10 hover:border-cyan-500/30' 
                                    : 'hover:bg-purple-500/10 hover:border-purple-500/30'
                            } border border-transparent`}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                    
                    {/* Mobile CTA */}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold text-center shadow-lg shadow-cyan-500/30 border border-cyan-400/30"
                    >
                        Hire Me
                    </motion.a>
                </div>
            </motion.div>
        </motion.nav>
    )
}