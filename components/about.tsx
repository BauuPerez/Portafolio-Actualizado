import { MapPin, Mail, Calendar } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Acerca de <span className="text-orange-500">Mí</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-orange-500">Mi Historia</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Soy un estudiante apasionado por la tecnología y el desarrollo de software. Inicié mi camino en la programación hace tres años y, desde entonces, me he mantenido en constante aprendizaje, 
                explorando diversas tecnologías, lenguajes y metodologías de desarrollo.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Mi objetivo profesional es convertirme en un desarrollador full-stack sólido, capaz de diseñar y construir soluciones innovadoras que generen un impacto real y positivo en la vida de las personas.
                 Me caracterizo por la curiosidad, la proactividad y el compromiso con la mejora continua.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-orange-500/20">
                <MapPin className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold">Ubicación</h4>
                  <p className="text-gray-300">Paraná, Entre Ríos, Argentina</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-orange-500/20">
                <Calendar className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold">Edad</h4>
                  <p className="text-gray-300">24 años</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-orange-500/20">
                <Mail className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">bautistaperez032@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
