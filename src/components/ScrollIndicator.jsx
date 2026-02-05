"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function ScrollIndicator() {
    const { scrollYProgress } = useScroll()
    const [isScrollable, setIsScrollable] = useState(false)

    useEffect(() => {
        const checkScrollable = () => {
            const scrollable = document.documentElement.scrollHeight > window.innerHeight
            setIsScrollable(scrollable)
        }

        checkScrollable()
        window.addEventListener("resize", checkScrollable)

        // Cleanup (VERY important)
        return () => window.removeEventListener("resize", checkScrollable) // Removes event listener on unmount
    }, [])

    if (!isScrollable) return null

    return (
        <motion.div
            style={{ scaleX: scrollYProgress }}
            className="fixed top-0 left-0 right-0 h-1
                 bg-linear-to-r from-cyan-400 to-purple-500
                 origin-left z-50"
        />
    )
}
