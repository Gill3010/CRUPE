import { Users } from 'lucide-react';

const AboutUsCard = () => {
  return (
    <div className="w-full px-4 py-10 flex justify-center items-center">
      <div className="relative w-full max-w-4xl bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8">
        {/* Geometric decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 left-6 w-6 h-6 border border-purple-400/20 transform rotate-45" />
          <div className="absolute bottom-6 right-8 w-5 h-5 border border-blue-400/20 rounded-full" />
          <div className="absolute top-2 right-10 w-3 h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20 transform rotate-12" />
        </div>

        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Acerca de Nosotros
            </h2>
            <p className="text-sm text-gray-300 tracking-wide">
              Protegemos tu Innovación, Impulsamos tu Futuro
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className="space-y-6 text-white text-sm">
          <p>
            Somos una firma especializada en propiedad intelectual con más de <strong>[X años]</strong> de experiencia...
          </p>

          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Nuestra Misión</h3>
            <p>
              Facilitar el acceso a la protección de la propiedad intelectual mediante servicios especializados...
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Nuestra Visión</h3>
            <p>
              Ser reconocidos como la firma líder en servicios de propiedad intelectual...
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-2">¿Por Qué Elegirnos?</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li><strong>Experiencia Especializada:</strong> Contamos con un equipo multidisciplinario...</li>
              <li><strong>Enfoque Integral:</strong> Ofrecemos servicios completos...</li>
              <li><strong>Acompañamiento Personalizado:</strong> Cada cliente recibe atención personalizada...</li>
              <li><strong>Tecnología y Eficiencia:</strong> Utilizamos herramientas tecnológicas avanzadas...</li>
              <li><strong>Compromiso con la Innovación:</strong> Creemos en el poder transformador...</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Nuestros Valores</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li><strong>Excelencia:</strong> Mantenemos los más altos estándares...</li>
              <li><strong>Integridad:</strong> Actuamos con transparencia, honestidad...</li>
              <li><strong>Innovación:</strong> Adoptamos continuamente nuevas tecnologías...</li>
              <li><strong>Compromiso:</strong> Nos dedicamos completamente al éxito...</li>
              <li><strong>Confiabilidad:</strong> Cumplimos nuestras promesas y mantenemos confidencialidad...</li>
            </ul>
          </div>

         
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white rounded-full font-semibold hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <span>Conoce más acerca de nosotros</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;