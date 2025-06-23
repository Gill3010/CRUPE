import { BrainCircuit } from 'lucide-react'; // Ícono representativo de IA

const PatentCard = () => {
  return (
    <div className="relative w-full max-w-md bg-gradient-to-br from-slate-800 via-gray-900 to-black text-white rounded-2xl border border-amber-400/10 shadow-2xl overflow-hidden p-6 sm:p-8">
      {/* Efectos visuales brillantes estilo footer */}
      <div className="absolute -top-10 left-1/2 w-40 h-40 bg-amber-400 opacity-10 rounded-full blur-2xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-400 opacity-10 rounded-full blur-2xl animate-pulse -z-10" />
      <div className="absolute top-1/2 left-6 w-20 h-20 bg-orange-400 opacity-10 rounded-full blur-2xl animate-pulse -z-10" />

      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-lg">
          <BrainCircuit className="w-6 h-6 text-black" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 drop-shadow-md">
            Inteligencia Artificial en la Investigación Cualitativa
          </h2>
          <p className="text-sm text-gray-300 leading-snug">
            Explora cómo la IA transforma el análisis de datos cualitativos y metodologías de investigación.
          </p>
        </div>
      </div>

      {/* Modalidades */}
      <div className="space-y-6 text-gray-200">
        {/* Modalidad 1 */}
        <div>
          <h3 className="text-lg font-semibold text-amber-300 mb-2">Asistencia en Análisis de Datos</h3>
          <p className="text-sm text-gray-300 mb-2">
            Utilizamos herramientas basadas en IA para mejorar la interpretación y codificación de datos cualitativos:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Identificación de patrones emergentes.</li>
            <li>Apoyo en análisis temático y narrativo.</li>
            <li>Visualización inteligente de resultados.</li>
          </ul>
        </div>

        {/* Modalidad 2 */}
        <div>
          <h3 className="text-lg font-semibold text-amber-300 mb-2">Optimización del Proceso Investigativo</h3>
          <p className="text-sm text-gray-300 mb-2">
            Te ayudamos a integrar algoritmos de IA en tus proyectos de investigación cualitativa:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Diseño metodológico asistido por IA.</li>
            <li>Análisis automatizado de entrevistas o focus groups.</li>
            <li>Gestión de grandes volúmenes de datos textuales.</li>
          </ul>
        </div>

        {/* Modalidad 3 */}
        <div>
          <h3 className="text-lg font-semibold text-amber-300 mb-2">Acompañamiento Ético y Técnico</h3>
          <p className="text-sm text-gray-300 mb-2">
            Aseguramos el uso responsable de la IA en contextos de investigación social:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Revisión ética del uso de modelos generativos.</li>
            <li>Asesoría en sesgos algorítmicos.</li>
            <li>Compatibilidad con marcos cualitativos tradicionales.</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <a
          href="#contacto"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black rounded-full font-semibold hover:from-amber-300 hover:via-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20"
        >
          <span>Explora soluciones con IA</span>
        </a>
      </div>
    </div>
  );
};

export default PatentCard;