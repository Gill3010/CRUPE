import { useEffect } from 'react';
import { Video, Users, Mic, Clock10, FileText, ExternalLink, Timer } from 'lucide-react';

const PresentationGuidelines = () => {
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
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00BCD4] mb-6">
            Requisitos para la Presentación de Ponencias
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Indicaciones para los autores y ponentes que participarán en el congreso
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#0a2d4d] border border-white/20 rounded-xl p-6 md:p-10 mb-8 aos-animate space-y-6">

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7 text-[#00BCD4]" />
            Requisitos Generales
          </h2>

          {/* Requisito 1 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Video className="w-5 h-5 text-[#00BCD4]" />
                Video de la ponencia
              </h3>
              <p className="text-white">
                Enviar un archivo con la presentación oral en formato <strong>video mp4</strong> de máximo 10 minutos.
              </p>
            </div>
          </div>

          {/* Requisito 2 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Mic className="w-5 h-5 text-[#00BCD4]" />
                Moderación de sesión
              </h3>
              <p className="text-white">
                Respetar el orden y las indicaciones del moderador asignado a la sesión.
              </p>
            </div>
          </div>

          {/* Requisito 3 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#00BCD4]" />
                Grabación del evento
              </h3>
              <p className="text-white">
                Todas las sesiones serán grabadas como parte de la documentación oficial del congreso.
              </p>
            </div>
          </div>

          {/* Requisito 4 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Clock10 className="w-5 h-5 text-[#00BCD4]" />
                Puntualidad y conexión previa
              </h3>
              <p className="text-white">
                El expositor debe estar presente en el aula física o conectado al aula virtual <strong>10 minutos antes</strong> del inicio para confirmar asistencia con el moderador.
              </p>
            </div>
          </div>

          {/* Requisito 5 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00BCD4]" />
                Permanencia durante la sesión
              </h3>
              <p className="text-white">
                Los expositores deben permanecer durante toda la sesión para fomentar el intercambio de ideas. La constancia no será otorgada si no se cumple este requisito.
              </p>
            </div>
          </div>

          {/* Requisito 6 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              6
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Timer className="w-5 h-5 text-[#00BCD4]" />
                Duración
              </h3>
              <p className="text-white">
                30 minutos
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center aos-animate">
          <a
            href="/_events/pdfs/Requisitosponencias.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00BCD4] text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-white hover:text-[#0a2d4d] transition"
          >
            <FileText className="w-5 h-5" />
            Ver Requisitos
          </a>

          <a
            href="/_events/pdfs/Plantillaponenciaconferencia.pdf"
            className="bg-white text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-[#00BCD4] hover:text-[#0a2d4d] transition"
          >
            <ExternalLink className="w-5 h-5" />
            Ver Plantilla
          </a>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-white text-sm">
            Agradecemos seguir estas recomendaciones para garantizar el éxito académico del evento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresentationGuidelines;
