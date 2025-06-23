import { BookOpenCheck } from 'lucide-react'; // Ícono académico

const CopyrightRegistrationCard = () => {
  return (
    <div className="relative w-full max-w-md bg-gradient-to-br from-slate-800 via-gray-900 to-black text-white rounded-2xl border border-amber-400/10 shadow-2xl overflow-hidden p-6 sm:p-8">
      {/* Efectos visuales brillantes estilo footer */}
      <div className="absolute -top-10 left-1/2 w-40 h-40 bg-amber-400 opacity-10 rounded-full blur-2xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-400 opacity-10 rounded-full blur-2xl animate-pulse -z-10" />
      <div className="absolute top-1/2 left-6 w-20 h-20 bg-orange-400 opacity-10 rounded-full blur-2xl animate-pulse -z-10" />

      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-lg">
          <BookOpenCheck className="w-6 h-6 text-black" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 drop-shadow-md">
            Integración de IA en la Producción Académica
          </h2>
          <p className="text-sm text-gray-300 leading-snug">
            Aplicamos inteligencia artificial para fortalecer la redacción, análisis y documentación en investigaciones cualitativas.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="space-y-6 text-gray-200">
        {/* Modalidad de Escritura Asistida */}
        <div>
          <h3 className="text-lg font-semibold text-amber-300 mb-2">Redacción Académica Asistida</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Apoyo en redacción de artículos y ensayos cualitativos.</li>
            <li>Optimización de estructura y coherencia argumentativa.</li>
            <li>Identificación automática de temas emergentes.</li>
            <li>Asistencia en citación y referencias.</li>
          </ul>
        </div>

        {/* Modalidades de Aplicación de IA */}
        <div>
          <h3 className="text-lg font-semibold text-amber-300 mb-2">Aplicación de IA en Proyectos</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <strong className="text-amber-400">Modalidad Completa:</strong> Desde el diseño del proyecto hasta el análisis con herramientas de IA.
            </li>
            <li>
              <strong className="text-amber-400">Modalidad Parcial:</strong> Si ya tienes avance, te ayudamos a integrar IA en el procesamiento de datos.
            </li>
            <li>
              <strong className="text-amber-400">Modalidad Consultiva:</strong> Revisión técnica y ética del uso de IA en tu investigación.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <a
          href="#contacto"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black rounded-full font-semibold hover:from-amber-300 hover:via-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20"
        >
          <span>Solicita tu asesoría ahora</span>
        </a>
      </div>
    </div>
  );
};

export default CopyrightRegistrationCard;