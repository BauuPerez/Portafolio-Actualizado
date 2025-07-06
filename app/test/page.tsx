export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">¡Tailwind CSS funciona!</h1>
        <p className="text-gray-300">Si ves este texto con estilos, Tailwind está funcionando correctamente.</p>
        <button className="mt-4 px-6 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-600 transition-colors">
          Botón de prueba
        </button>
      </div>
    </div>
  )
}
