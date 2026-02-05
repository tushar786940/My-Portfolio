import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <>
      <Hero />
      <Projects/>
      {/* <About /> */}
      <Skills />
      <Contact />
    </>
  )
}
