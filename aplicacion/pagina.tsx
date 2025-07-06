import Header from "../componentes/ui/header"
import Hero from "../componentes/ui/heroe"
import About from "../componentes/ui/about"
import Skills from "../componentes/ui/skills"
import Projects from "../componentes/ui/projects"
import Education from "../componentes/ui/education"
import Services from "../componentes/ui/services"
import Contact from "../componentes/ui/contact"
import Footer from "../componentes/ui/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
