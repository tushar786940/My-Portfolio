"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/Lambo.png"
        alt="Code background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B0F1A]/70"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Tushar
          </span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          Full-Stack Developer | MCA (AI & ML)
          <br />
          Building scalable, real-world web applications.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-medium"
          >
            View Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black transition"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>

    </section>
  )
}
