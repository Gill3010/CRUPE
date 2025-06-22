import { Copyright } from 'lucide-react';

const CopyrightRegistrationCard = () => {
  return (
    <div className="relative w-full max-w-md bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8">
      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-6 w-6 h-6 border border-purple-400/20 transform rotate-45" />
        <div className="absolute bottom-6 right-8 w-5 h-5 border border-blue-400/20 rounded-full" />
        <div className="absolute top-2 right-10 w-3 h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20 transform rotate-12" />
      </div>

      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
          <Copyright className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Registro de Derecho de Autor
          </h2>
          <p className="text-sm text-gray-300 tracking-wide">
            Protege legalmente tus obras intelectuales (manuales, artículos, software, etc.).
          </p>
        </div>
      </div>

      {/* Contenido */}
      {/* <div className="space-y-6 text-white"> */}
        {/* Obras Escritas */}
        {/* <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-2">Obras Escritas – Modalidad Única</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
            <li>Revisión del contenido original.</li>
            <li>Evaluación de viabilidad legal.</li>
            <li>Elaboración de expediente.</li>
            <li>Presentación y trámite del expediente.</li>
          </ul>
        </div> */}

        {/* Software */}
        {/* <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-2">Software</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
            <li>
              <strong>Modalidad Completa:</strong> Desde el diseño hasta el registro del software. Incluye memoria descriptiva, manual de usuario y ejecutable.
            </li>
            <li>
              <strong>Modalidad Parcial:</strong> Si ya cuentas con el software funcional, te ayudamos a estructurar y registrar la documentación.
            </li>
            <li>
              <strong>Modalidad Trámite:</strong> Si ya tienes toda la documentación, realizamos revisión, sugerencia de mejoras y asesoría en el registro.
            </li>
          </ul>
        </div>
      </div> */}

      {/* CTA */}
      <div className="mt-8 text-center">
        <a
          href="#contacto"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white rounded-full font-semibold hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
        >
          <span>Solicita tu registro ahora</span>
        </a>
      </div>
    </div>
  );
};

export default CopyrightRegistrationCard;