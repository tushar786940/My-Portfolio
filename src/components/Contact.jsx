"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Mail, Github, Linkedin, Send, Sparkles } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/project.png"
        alt="Contact background"
        fill
        priority
        className="object-cover"
      />

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/75 to-black/90"></div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      />

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-32 text-cyan-500/20 text-6xl"
      >
        💬
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-40 left-32 text-purple-500/20 text-6xl"
      >
        ✉️
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
        </motion.div>

        {/* Profile Image with Enhanced Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative mx-auto mb-8 w-32 h-32"
        >
          {/* Animated Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 opacity-75"
          >
            <div className="w-full h-full rounded-full bg-[#0B0F1A]"></div>
          </motion.div>

          {/* Pulse Effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 to-purple-500 blur-xl"
          />

          {/* Image Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0B0F1A] shadow-2xl shadow-cyan-500/30">
            <Image
              src="/myself.png"
              alt="Tushar profile"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>

          {/* Status Indicator */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-[#0B0F1A] shadow-lg"
          />
        </motion.div>

        {/* Heading with Gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build Something
          </span>
          <br />
          <span className="text-white">Together</span>
        </motion.h2>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-linear-to-r from-cyan-500 to-purple-500 mx-auto mt-6 rounded-full"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          I'm open to internships, full-time roles, and exciting projects.
          Feel free to reach out if you want to collaborate or just say hi 👋
        </motion.p>

        {/* CTA Button with Enhanced Effects */}
        <motion.a
          href="mailto:tusharthakur06958@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)"
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 mt-12
                     px-10 py-5 rounded-xl font-semibold text-white text-lg
                     bg-linear-to-r from-cyan-500 to-purple-600
                     shadow-2xl shadow-cyan-500/30 overflow-hidden
                     border border-cyan-400/30"
        >
          {/* Button Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-cyan-400 to-purple-500"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Button Content */}
          <span className="relative z-10 flex items-center gap-3">
            <Mail size={22} className="group-hover:scale-110 transition-transform" />
            Get In Touch
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Send size={18} />
            </motion.div>
          </span>
        </motion.a>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-gray-500 text-sm"
        >
          or email me directly at{" "}
          <a 
            href="mailto:tusharthakur06958@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-400"
          >
            tusharthakur06958@gmail.com
          </a>
        </motion.div>

        {/* Social Links with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            { href: "https://github.com/tushar786940", icon: Github, color: "cyan", label: "GitHub" },
            { href: "https://linkedin.com/in/tushar-thakur-8561202b8", icon: Linkedin, color: "cyan", label: "LinkedIn" }
          ].map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Link
                href={social.href}
                target="_blank"
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-xl bg-linear-to-br from-gray-800/50 to-gray-900/50 
                             border border-gray-700/50 hover:border-${social.color}-500/50
                             backdrop-blur-sm transition-all duration-300
                             hover:shadow-xl hover:shadow-${social.color}-500/20`}
                >
                  <social.icon 
                    size={24} 
                    className={`text-gray-400 group-hover:text-${social.color}-400 transition-colors`}
                  />
                </motion.div>
                
                {/* Tooltip */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                           px-3 py-1 rounded-lg bg-gray-800 text-xs text-gray-300
                           whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {social.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Response Time Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-green-500/10 border border-green-500/30 backdrop-blur-sm"
        >
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-2 h-2 rounded-full bg-green-500"
          />
          <span className="text-green-400 text-sm font-medium">
            Usually responds within 24 hours
          </span>
        </motion.div>

      </div>
    </section>
  )
}