export default function Skills() {
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "JavaScript", icon: "skills-ldp/javascript-logo.png" },
        { name: "TypeScript", icon: "skills-ldp/typescript-logo.png" },
        { name: "Python", icon: "skills-ldp/python-logo.png" },
        { name: "Java", icon: "skills-ldp/java-logo.png" },
        { name: "C#", icon: "skills-ldp/c-sharp-logo.png" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "skills-frontend/html5-logo.png" },
        { name: "CSS", icon: "skills-frontend/css3-logo.png" },
        { name: "React", icon: "skills-frontend/react.png" },
        { name: "Vue.js", icon: "skills-frontend/vue-js-logo.png" },
        { name: "Vite", icon: "skills-frontend/vite-logo.png" },
        { name: "Bootstrap", icon: "skills-frontend/bootstrap.png" },
        { name: "Tailwind CSS", icon: "skills-frontend/tailwind-logo.png" },
        { name: "Aceternity UI", icon: "skills-frontend/aceternity-ui-logo.png" },
        

      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "skills-backend/node.js.png" },
        { name: "Express.js", icon: "skills-backend/express-logo.png" },
        { name: "Spring Boot", icon: "skills-backend/spring-boot.png" },
        { name: "REST APIs", icon: "skills-backend/rest-api-logo.png" },
      ],
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", icon: "skills-bdb/postgre.png" },
        { name: "MongoDB", icon: "skills-bdb/mongo-db-logo.png" },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", icon: "skills-herramientas/git.png" },
        { name: "GitHub", icon: "skills-herramientas/github.png" },
        { name: "Postman", icon: "skills-herramientas/postman-logo.png" },
        { name: "WordPress", icon: "skills-herramientas/wordpress-logo.png" },
        { name: "VS Code", icon: "skills-herramientas/vscode-logo.png" },
        { name: "Figma", icon: "skills-herramientas/figma-logo.png" },
        { name: "Canva", icon: "skills-herramientas/canva-logo.png" },
       
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
