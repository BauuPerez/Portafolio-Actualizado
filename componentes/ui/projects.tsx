"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "AMB de Autos",
      description:
        "RestAPI desarrollada con FastAPI para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de autos en memoria. Implementa endpoints RESTful para la gestión completa de datos de vehículos.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "FastAPI", "REST API"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Sistema de Reserva de Canchas",
      description:
        "Sistema completo desarrollado con React en el frontend, Python con FastAPI en el backend y PostgreSQL como base de datos. Permite la gestión completa de reservas con funcionalidades de creación, modificación, eliminación y consulta.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
      githubUrl: "#",
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
                  <Button
                    variant="outline"
                    className="bg-transparent border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black flex items-center gap-2"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github size={16} />
                    Código
                  </Button>
                  <Button
                    className="bg-orange-500 text-black hover:bg-orange-600 flex items-center gap-2"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink size={16} />
                    Ver Proyecto
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
