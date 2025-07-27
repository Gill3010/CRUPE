import  { useEffect } from 'react';
import { FileText, ExternalLink, User, Mail, Building, Hash, Globe, Users, Search, Lightbulb, Timer } from 'lucide-react';

const PosterGuidelines = () => {
  useEffect(() => {
    // Simulación de AOS (Animate On Scroll)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.aos-animate');
    elements.forEach(el => {
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
            Requisitos para Presentación de Cartel
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Guías completas para la presentación de tu póster científico en el congreso
          </p>
        </div>

        {/* Main Content Card */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 aos-animate">
          
          {/* Requirements List */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <FileText className="w-8 h-8 text-cyan-400" />
              Requisitos Generales
            </h2>

            <div className="grid gap-6">
              {/* Requirement 1 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    Título en dos idiomas
                  </h3>
                  <p className="text-gray-300">El título debe presentarse tanto en español como en inglés</p>
                </div>
              </div>

              {/* Requirement 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    Nombre de autores (máx. 3)
                  </h3>
                  <p className="text-gray-300">Máximo tres autores por presentación</p>
                </div>
              </div>

              {/* Requirement 3 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-400" />
                    Institución
                  </h3>
                  <p className="text-gray-300">Nombre completo de la institución de afiliación</p>
                </div>
              </div>

              {/* Requirement 4 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Hash className="w-5 h-5 text-pink-400" />
                    ORCID
                  </h3>
                  <p className="text-gray-300">Identificador ORCID del autor principal</p>
                </div>
              </div>

              {/* Requirement 5 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-indigo-400" />
                    Correo electrónico
                  </h3>
                  <p className="text-gray-300">Correo electrónico de contacto del autor principal</p>
                </div>
              </div>

              {/* Requirement 6 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  6
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Contenido diferenciado
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Lightbulb className="w-4 h-4 text-purple-400" />
                      <span><strong>Experiencia/Reflexión:</strong> Enfoque en aprendizajes y reflexiones</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Search className="w-4 h-4 text-blue-400" />
                      <span><strong>Investigación:</strong> Metodología, resultados y conclusiones</span>
                    </div>
                  </div>
                </div>
              </div>

             {/* Requirement 7 */}
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
    7
  </div>
  <div>
    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
      <User className="w-5 h-5 text-blue-400" />
      Asistencia
    </h3>
    <p className="text-gray-300">
      El expositor debe presentarse 10 minutos antes para confirmar asistencia con la coordinadora. Debe permanecer junto a su cartel durante toda la sesión. En modalidad virtual, debe enviar un mensaje de voz de máximo 2 minutos.
    </p>
  </div>
</div>

              {/* Requirement 8 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  8
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <Timer className="w-5 h-5 text-pink-400" />
                    Duración
                  </h3>
                  <p className="text-gray-300">15 minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center aos-animate">
          <a
            href="/_events/pdfs/Requisitoscarteles.pdf"
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
            href="/_events/pdfs/Plantillacarteles.pdf"
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
            Para más información, consulta las bases completas del congreso
          </p>
        </div>
      </div>
    </div>
  );
};

export default PosterGuidelines;