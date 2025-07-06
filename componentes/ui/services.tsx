import { Code, Palette, Server, Layers } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description:
        "Especializado en la creación y optimización de sitios web utilizando tecnologías modernas como HTML, CSS y JavaScript. Con enfoque en diseño responsive y accesibilidad para garantizar la mejor experiencia de usuario.",
    },
    {
      icon: Palette,
      title: "Desarrollo Frontend",
      description:
        "Apasionado por la creación de interfaces modernas e interactivas. Manejo de HTML, CSS, JavaScript y frameworks como React y Vue.js para mejorar la experiencia de usuario y garantizar un diseño responsive y atractivo.",
    },
    {
      icon: Server,
      title: "Desarrollo Backend",
      description:
        "Especializado en la lógica del servidor, seguridad y gestión de datos. Trabajo con lenguajes como Java, C#, Python y Node.js, junto con bases de datos SQL para garantizar el rendimiento y estabilidad de las aplicaciones.",
    },
    {
      icon: Layers,
      title: "Desarrollo Full Stack",
      description:
        "Capaz de manejar tanto el frontend como el backend en el desarrollo de aplicaciones web. Experiencia en tecnologías de interfaz de usuario, servidores, bases de datos e implementación completa de soluciones.",
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
