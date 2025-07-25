import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "../components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Education /> */}
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
