import { PanelLeftOpen } from 'lucide-react'; // Icono sugerente de análisis/estructura

const PatentabilityCard = () => {
  return (
    <div className="relative w-full max-w-md bg-gradient-to-br from-slate-800 via-gray-900 to-black text-white rounded-2xl border border-amber-400/10 shadow-2xl overflow-hidden p-6 sm:p-8">
      {/* Efectos visuales brillantes estilo footer */}
      <div className="absolute -top-10 left-1/2 w-40 h-40 bg-amber-400 opacity-10 rounded-full blur-2xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-400 opacity-10 rounded-full blur-2xl animate-pulse -z-10" />
      <div className="absolute top-1/2 left-6 w-20 h-20 bg-orange-400 opacity-10 rounded-full blur-2xl animate-pulse -z-10" />

      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-lg">
          <PanelLeftOpen className="w-6 h-6 text-black" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 drop-shadow-md">
            Análisis Cualitativo Asistido por IA
          </h2>
          <p className="text-sm text-gray-300 leading-snug">
            Evalúa la calidad y profundidad de tus datos cualitativos utilizando herramientas de Inteligencia Artificial.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="space-y-6 text-gray-200">
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Procesamiento automatizado de entrevistas y encuestas abiertas.</li>
          <li>Identificación de patrones, emociones y temas emergentes.</li>
          <li>Recomendaciones para fortalecer el enfoque metodológico y teórico.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <a
          href="#contacto"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black rounded-full font-semibold hover:from-amber-300 hover:via-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20"
        >
          <span>Solicita tu análisis ahora</span>
        </a>
      </div>
    </div>
  );
};

export default PatentabilityCard;