import Image from "next/image"

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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B0F1A]/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">

        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Hi, I’m{" "}
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Tushar
          </span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          Full-Stack Developer | MCA (AI & ML)
          <br />
          Building scalable, real-world web applications.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <a
            href="/projects"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-600 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black transition"
          >
            Resume
          </a>

        </div>
      </div>

    </section>
  )
}
