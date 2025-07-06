"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Landing Page - Bjdevs",
      description:
        "Landing page profesional desarrollada con Next.js y Tailwind CSS, incorporando componentes interactivos de Aceternity UI...",
      image: "proyectos-img/Landing-page.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Aceternity UI", "Lucide React"],
      githubUrl: "https://github.com/BauuPerez/LandingBJ",
      liveUrl: "https://bj-devs.vercel.app/",
    },
    {
      title: "NC Catering",
      description:
        "Página web profesional desarrollada sobre WordPress con Elementor...",
      image: "proyectos-img/NC-Catering.png",
      technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS", "HTML", "Google Fonts", "WhatsApp API (integración de contacto)"],
      liveUrl: "https://nccateringpna.com/",
    },
    {
      title: "AMB de Autos",
      description:
        "RestAPI desarrollada con FastAPI para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar)...",
      image: "proyectos-img/Diseño.png",
      technologies: ["Python", "FastAPI", "REST API"],
      githubUrl: "https://github.com/BauuPerez/FastApi",
      liveUrl: "http://127.0.0.1:8000/docs",
    },
    {
      title: "Sistema de Reserva de Canchas",
      description:
        "Sistema completo desarrollado con React en el frontend, Python con FastAPI en el backend...",
      image: "proyectos-img/Diseño2.png",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/BauuPerez/TpFinalLabIV",
      liveUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Mis <span className="text-orange-500">Proyectos</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black via-gray-900 to-orange-900/20 rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-orange-500">{project.title}</h3>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm font-medium border border-orange-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && project.githubUrl.trim() !== "" && (
                    <Button
                      variant="outline"
                      className="bg-transparent border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black flex items-center gap-2"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github size={16} />
                      Código
                    </Button>
                  )}

                  {(project.liveUrl && !["#", "http://127.0.0.1:8000/docs"].includes(project.liveUrl)) && (
                    <Button
                      className="bg-orange-500 text-black hover:bg-orange-600 flex items-center gap-2"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink size={16} />
                      Ver Proyecto
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
