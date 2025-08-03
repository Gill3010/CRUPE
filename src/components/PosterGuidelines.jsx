import { useEffect } from 'react';
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
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00BCD4] mb-6">
            Requisitos para Presentación de Cartel
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Guías completas para la presentación de tu póster científico en el congreso
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#0a2d4d] border border-white/20 rounded-xl p-6 md:p-10 mb-8 aos-animate space-y-8">

          {/* Requirements List */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7 text-[#00BCD4]" />
            Requisitos Generales
          </h2>

          <div className="space-y-6">

            {/* Requirement 1 */}
            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
              <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#00BCD4]" />
                  Título en dos idiomas
                </h3>
                <p className="text-white">
                  El título debe presentarse tanto en español como en inglés
                </p>
              </div>
            </div>

            {/* Requirement 2 */}
            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
              <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#00BCD4]" />
                  Nombre de autores (máx. 3)
                </h3>
                <p className="text-white">Máximo tres autores por presentación</p>
              </div>
            </div>

            {/* Requirement 3 */}
            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
              <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Building className="w-5 h-5 text-[#00BCD4]" />
                  Institución
                </h3>
                <p className="text-white">Nombre completo de la institución de afiliación</p>
              </div>
            </div>

            {/* Requirement 4 */}
            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
              <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Hash className="w-5 h-5 text-[#00BCD4]" />
                  ORCID
                </h3>
                <p className="text-white">Identificador ORCID del autor principal</p>
              </div>
            </div>

            {/* Requirement 5 */}
            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
              <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#00BCD4]" />
                  Correo electrónico
                </h3>
                <p className="text-white">Correo electrónico de contacto del autor principal</p>
              </div>
            </div>

            {/* Requirement 6 */}
            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
              <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
                6
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Contenido diferenciado
                </h3>
                <ul className="list-disc pl-5 text-white space-y-1 text-sm">
                  <li>
                    <Lightbulb className="inline w-4 h-4 mr-1 text-[#00BCD4]" />
                    <strong>Experiencia/Reflexión:</strong> Enfoque en aprendizajes y reflexiones
                  </li>
                  <li>
                    <Search className="inline w-4 h-4 mr-1 text-[#00BCD4]" />
                    <strong>Investigación:</strong> Metodología, resultados y conclusiones
                  </li>
                </ul>
              </div>
            </div>

            {/* Requirement 7 */}
            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
              <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
                7
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#00BCD4]" />
                  Asistencia
                </h3>
                <p className="text-white">
                  El expositor debe presentarse 10 minutos antes para confirmar asistencia con la coordinadora. Debe permanecer junto a su cartel durante toda la sesión. En modalidad virtual, debe enviar un mensaje de voz de máximo 2 minutos.
                </p>
              </div>
            </div>

            {/* Requirement 8 */}
            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
              <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
                8
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Timer className="w-5 h-5 text-[#00BCD4]" />
                  Duración
                </h3>
                <p className="text-white">15 minutos</p>
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
            className="bg-[#00BCD4] text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-white hover:text-[#0a2d4d] transition"
          >
            <FileText className="w-5 h-5" />
            Ver Requisitos
          </a>

          <a
            href="/_events/pdfs/Plantillacarteles.pdf"
            className="bg-white text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-[#00BCD4] hover:text-[#0a2d4d] transition"
          >
            <ExternalLink className="w-5 h-5" />
            Ver Plantilla
          </a>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-white text-sm">
            Para más información, consulta las bases completas del congreso
          </p>
        </div>
      </div>
    </div>
  );
};

export default PosterGuidelines;
