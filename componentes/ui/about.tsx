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
                Soy un estudiante apasionado por la tecnología y el desarrollo de software. Comencé mi camino en la
                programación hace 3 años y desde entonces he estado en constante aprendizaje, explorando diferentes
                tecnologías y metodologías.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Mi objetivo es convertirme en un desarrollador full-stack competente, capaz de crear soluciones
                innovadoras que impacten positivamente en la vida de las personas.
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
