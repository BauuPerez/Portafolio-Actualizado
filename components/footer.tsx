"use client"

import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/bautistaperez/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/BauuPerez", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Bautiperez_", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/bauuperez_/", label: "Instagram" },
  ]

  const footerLinks = [
    { label: "Inicio", href: "#home" },
    { label: "Acerca de", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
    { label: "Servicios", href: "#services" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-orange-500 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-transparent border-2 border-black rounded-full flex items-center justify-center text-black hover:bg-black hover:text-orange-500 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8 text-lg">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-black hover:underline transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-black/20 pt-8">
            <p className="text-black font-medium">© 2024 Bautista Pérez | Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
