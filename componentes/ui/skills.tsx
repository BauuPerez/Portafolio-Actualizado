export default function Skills() {
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "JavaScript", icon: "/placeholder.svg?height=60&width=60" },
        { name: "TypeScript", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Python", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Java", icon: "/placeholder.svg?height=60&width=60" },
        { name: "C#", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "/placeholder.svg?height=60&width=60" },
        { name: "CSS", icon: "/placeholder.svg?height=60&width=60" },
        { name: "React", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Vue.js", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Bootstrap", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Express.js", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Spring Boot", icon: "/placeholder.svg?height=60&width=60" },
        { name: "REST APIs", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", icon: "/placeholder.svg?height=60&width=60" },
        { name: "MongoDB", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", icon: "/placeholder.svg?height=60&width=60" },
        { name: "GitHub", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Postman", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Power BI", icon: "/placeholder.svg?height=60&width=60" },
        { name: "VS Code", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Mis <span className="text-orange-500">Habilidades</span>
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900/50 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-semibold text-orange-500 mb-8 text-center">{category.title}</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-4 bg-black/50 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-12 h-12 mb-3 object-contain"
                    />
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
