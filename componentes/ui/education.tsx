import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      title: "Tecnicatura Universitaria en Programación",
      institution: "Universidad Tecnológica Nacional (UTN-FRP)",
      period: "2022 - Actualidad",
      status: "En curso",
      description: "Formación integral en desarrollo de software, programación y tecnologías de la información.",
    },
    {
      title: "Ingeniería Electromecánica",
      institution: "Universidad Tecnológica Nacional (UTN-FRP)",
      period: "2019 - 2022",
      status: "Inconcluso",
      description: "Estudios en ingeniería con enfoque en sistemas electromecánicos.",
    },
  ]

  const courses = [
    {
      title: "Machine Learning e Inteligencia Artificial",
      institution: "UTN Buenos Aires",
      year: "2024",
      type: "Curso de Especialización",
    },
    {
      title: "Data Analytics",
      institution: "UTN Buenos Aires",
      year: "2024",
      type: "Curso de Especialización",
    },
    {
      title: "Programador .NET",
      institution: "Udemy",
      year: "2022",
      type: "Curso Online",
    },
  ]

  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-orange-500">Educación</span> y Formación
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Educación Formal */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-orange-500 flex items-center gap-3">
              <GraduationCap size={28} />
              Educación Formal
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white mb-2 md:mb-0">{edu.title}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === "En curso"
                          ? "bg-green-500/20 text-green-500 border border-green-500/30"
                          : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-300 mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-orange-500" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-orange-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cursos y Certificaciones */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-orange-500">Cursos y Certificaciones</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-orange-900/10 rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-500 rounded text-xs font-medium">
                      {course.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">{course.title}</h4>

                  <div className="flex items-center justify-between text-gray-300 text-sm">
                    <span>{course.institution}</span>
                    <span>{course.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
