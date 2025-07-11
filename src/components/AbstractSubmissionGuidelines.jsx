import { useEffect } from 'react';
import { FileText, User, Edit3, BookOpenText, ExternalLink } from 'lucide-react';

const AbstractSubmissionGuidelines = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.aos-animate');
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Presentación de Resumen
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Indicaciones para enviar tu resumen y participar con ponencia, cartel o libro
          </p>
        </div>

        {/* Main Card */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 aos-animate space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <FileText className="w-8 h-8 text-cyan-400" />
              Requisitos Generales
            </h2>
          
          {/* Paso 1 */}
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
    1
  </div>
  <div>
    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
      <User className="w-5 h-5 text-blue-400" />
      Registro en plataforma
    </h3>
    <p className="text-gray-300">
      Registrarse en la plataforma del Congreso disponible en:&nbsp;
      <a
        href="https://relaticpanama.org/_events/inscripcion"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-300 hover:text-blue-200 transition"
      >
        https://relaticpanama.org/_events/inscripcion
      </a>
    </p>
  </div>
</div>

          {/* Paso 2 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-pink-400" />
                Envío del resumen
              </h3>
              <p className="text-gray-300 mb-2">
                Subir un archivo Word (máx. 250 palabras) que incluya:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Tipo de participación: Cartel, Ponencia o Libro.</li>
                <li>Título en Arial negrita 14 pts, centrado.</li>
                <li>Tipo de trabajo (entre paréntesis), Arial 12 pts, centrado.</li>
                <li>Nombre(s) del autor(es), alineado(s) a la derecha, máx. 3.</li>
                <li>Institución y país, Arial 11 pts.</li>
                <li>Identificador ORCID (<a href="https://orcid.org/" className="underline text-blue-300" target="_blank">https://orcid.org/</a>)</li>
                <li>Correo electrónico de contacto.</li>
                <li>Resumen en español y abstract en inglés (250 palabras máx. cada uno).</li>
                <li>Palabras clave y keywords (máximo 5).</li>
                <li>Ver plantilla adjunta para formato detallado.</li>
              </ul>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <BookOpenText className="w-5 h-5 text-indigo-400" />
                Evaluación por comité
              </h3>
              <p className="text-gray-300">
                El comité dictaminará la aceptación del trabajo según tipo de participación (oral, cartel o publicación en extenso) y modalidad (presencial o virtual).
              </p>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center aos-animate">
          <a
            href="/_events/Requisitosresumen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <FileText className="w-6 h-6" />
              <span className="text-lg">Ver Requisitos</span>
            </div>
          </a>

          <a
            href="/_events/Plantillaresumen.pdf"
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <ExternalLink className="w-6 h-6" />
              <span className="text-lg">Ver Plantilla</span>
            </div>
          </a>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-gray-400 text-sm">
            El cumplimiento correcto de estas indicaciones es necesario para la evaluación y aceptación de tu propuesta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbstractSubmissionGuidelines;