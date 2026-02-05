"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"

export default function Navbar() {
    const [hidden, setHidden] = useState(false)
    const { scrollY } = useScroll()  // It updates automatically as the user scrolls

    useMotionValueEvent(scrollY, "change", (latest) => {  // latest → current scroll value
        const previous = scrollY.getPrevious() // previous → last scroll value

        if (latest > previous && latest > 80) {
            setHidden(true) // Scrolling Down
        } else {
            setHidden(false) // Scrolling Up
        }
    })

    return (
        <motion.nav
            initial={false}
            animate={{ y: hidden ? "-100%" : "0%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 w-full z-50
                 bg-[#0B0F1A]/80 backdrop-blur
                 border-b border-white/10"
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <a href="/">
                    <h1 className="text-xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Tushar.dev
                    </h1>
                </a>

                <div className="space-x-6 text-gray-300">
                    <a href="/projects" className="hover:text-cyan-400 transition">
                        Projects
                    </a>
                    <a href="/skills" className="hover:text-purple-400 transition">
                        Skills
                    </a>
                    <a href="/contact" className="hover:text-cyan-400 transition">
                        Contact
                    </a>
                </div>

            </div>
        </motion.nav>
    )
}