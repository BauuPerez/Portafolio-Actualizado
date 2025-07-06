"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "services", "contact", "education"]
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Acerca de" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Proyectos" },
    //{ id: "education", label: "Educación" },
    { id: "services", label: "Servicios" },
    { id: "contact", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-orange-500/20 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="text-3xl font-bold text-orange-500 cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => scrollToSection("home")}
        >
          Bautista
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-lg font-semibold transition-all duration-300 border-b-2 pb-1 ${
                activeSection === item.id
                  ? "text-orange-500 border-orange-500"
                  : "text-white border-transparent hover:text-orange-500 hover:border-orange-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden text-orange-500 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {isMenuOpen && (
          <nav className="absolute top-full right-0 w-64 bg-black/95 border-l border-b border-orange-500 rounded-bl-2xl p-4 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 text-lg font-semibold transition-all duration-300 rounded-lg mb-2 ${
                  activeSection === item.id
                    ? "text-orange-500 bg-orange-500/10"
                    : "text-white hover:text-orange-500 hover:bg-orange-500/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
