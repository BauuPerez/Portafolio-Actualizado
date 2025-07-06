"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
// Reemplaza esta línea:
// import { Button } from "@/components/ui/button"

// Por esta:
const Button = ({ children, className, onClick, ...props }: any) => (
  <button className={`px-4 py-2 rounded ${className}`} onClick={onClick} {...props}>
    {children}
  </button>
)

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Estudiante", "Desarrollador Junior", "Programador Full Stack"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/bautistaperez/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/BauuPerez", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Bautiperez_", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/bauuperez_/", label: "Instagram" },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Bautista Pérez"
                className="w-80 h-80 rounded-full object-cover border-4 border-orange-500 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hola, soy <span className="text-orange-500">Bautista</span>
            </h1>

            <div className="text-3xl lg:text-4xl font-semibold mb-8 h-12">
              <span className="text-white">Soy un </span>
              <span className="text-orange-500 transition-all duration-500">{roles[currentRole]}</span>
            </div>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Tengo 24 años y actualmente estoy estudiando Tecnicatura Universitaria en Programación en la UTN. Soy de
              Paraná, Entre Ríos. Llevo 3 años en el mundo de la programación, desarrollando proyectos tanto en frontend
              como en backend, siempre buscando aprender nuevas tecnologías.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contáctame
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
