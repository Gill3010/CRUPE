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
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00BCD4] mb-6">
            Presentación de Resumen
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Indicaciones para enviar tu resumen y participar con ponencia, cartel o libro
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[#0a2d4d] border border-white/20 rounded-xl p-6 md:p-10 mb-8 aos-animate space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <FileText className="w-7 h-7 text-[#00BCD4]" />
            Requisitos Generales
          </h2>

          {/* Paso 1 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <User className="w-5 h-5 text-[#00BCD4]" />
                Registro en plataforma
              </h3>
              <p className="text-white">
                Registrarse en la plataforma del Congreso disponible en:&nbsp;
                <a
                  href="https://relaticpanama.org/_events/tipo-participacion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00BCD4] hover:text-white transition"
                >
                  https://relaticpanama.org/_events/tipo-participacion
                </a>
              </p>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#00BCD4]" />
                Envío del resumen
              </h3>
              <p className="text-white mb-2">
                Subir un archivo Word (máx. 250 palabras) que incluya:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1 text-sm">
                <li>Tipo de participación: Cartel, Ponencia o Libro.</li>
                <li>Título en Arial negrita 14 pts, centrado.</li>
                <li>Tipo de trabajo (entre paréntesis), Arial 12 pts, centrado.</li>
                <li>Nombre(s) del autor(es), alineado(s) a la derecha, máx. 3.</li>
                <li>Institución y país, Arial 11 pts.</li>
                <li>
                  Identificador ORCID (
                  <a
                    href="https://orcid.org/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#00BCD4] hover:text-white"
                  >
                    https://orcid.org/register
                  </a>
                  )
                </li>
                <li>Correo electrónico de contacto.</li>
                <li>Resumen en español y abstract en inglés (250 palabras máx. cada uno).</li>
                <li>Palabras clave y keywords (máximo 5).</li>
                <li>Ver plantilla adjunta para formato detallado.</li>
              </ul>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <BookOpenText className="w-5 h-5 text-[#00BCD4]" />
                Evaluación por comité
              </h3>
              <p className="text-white">
                El comité dictaminará la aceptación del trabajo según tipo de participación (oral, cartel o publicación en extenso) y modalidad (presencial o virtual).
              </p>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center aos-animate">
          <a
            href="/_events/pdfs/Requisitosresumen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00BCD4] text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-white hover:text-[#0a2d4d] transition"
          >
            <FileText className="w-5 h-5" />
            Ver Requisitos
          </a>
          <a
            href="/_events/pdfs/Plantillaresumen.pdf"
            className="bg-white text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-[#00BCD4] hover:text-[#0a2d4d] transition"
          >
            <ExternalLink className="w-5 h-5" />
            Ver Plantilla
          </a>
        </div>

        {/* Nota final */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-white text-sm">
            El cumplimiento correcto de estas indicaciones es necesario para la evaluación y aceptación de tu propuesta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbstractSubmissionGuidelines;
