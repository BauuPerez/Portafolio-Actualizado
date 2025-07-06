import { Code, Palette, Server, Layers } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description:
        "Desarrollo de sitios web modernos, accesibles y totalmente adaptables, utilizando tecnologías como HTML, CSS, JavaScript, React, Vue.js y Vite. Aplicación de buenas prácticas de desarrollo, diseño responsive y optimización del rendimiento para ofrecer experiencias sólidas y escalables.",
    },
    {
      icon: Palette,
      title: "Desarrollo Frontend",
      description:
        "Interfaces visuales dinámicas y atractivas con React, Vue.js y TypeScript. Fuerte enfoque en usabilidad, diseño responsivo y buenas prácticas de UI/UX.",
    },
    {
      icon: Server,
      title: "Desarrollo Backend",
      description:
        "Programación de APIs y lógica de servidor utilizando Node.js, Express, Spring Boot, C#, Java y Python. Integración con bases de datos como PostgreSQL y MongoDB.",
    },
    {
      icon: Layers,
      title: "Desarrollo Full Stack",
      description:
        "Construcción de soluciones completas combinando frontend y backend. Dominio de herramientas como GitHub, Postman, y metodologías para una implementación eficiente y escalable.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Mis <span className="text-orange-500">Servicios</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-transparent hover:to-transparent hover:border-2 hover:border-orange-500 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-black/20 rounded-full group-hover:bg-orange-500/20 transition-colors duration-300">
                  <service.icon
                    size={40}
                    className="text-black group-hover:text-orange-500 transition-colors duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-black/80 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
