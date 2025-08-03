import { useEffect } from 'react';
import { Users, FileText, Timer, ClipboardList, NotebookPen, FolderEdit, FolderOpenDot } from 'lucide-react';

const WorkshopRequirements = () => {
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
            Requisitos para presentar Taller en el Congreso
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Indicaciones para quienes deseen postular talleres dentro del Congreso
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-[#0a2d4d] border border-white/20 rounded-xl p-6 md:p-10 mb-8 aos-animate space-y-6">

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <ClipboardList className="w-7 h-7 text-[#00BCD4]" />
            Requisitos Generales
          </h2>

          {/* Punto 1 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <NotebookPen className="w-5 h-5 text-[#00BCD4]" />
                Formato de presentación
              </h3>
              <p className="text-white">
                Debe incluir título (en español e inglés), autores (sin grados), afiliación institucional, correo, duración (máx. 90 minutos), fundamentación, objetivos, destinatarios, contenidos, metodología, materiales requeridos y referencias bibliográficas.
              </p>
            </div>
          </div>

          {/* Punto 2 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <FolderEdit className="w-5 h-5 text-[#00BCD4]" />
                Fundamentación y objetivos
              </h3>
              <p className="text-white">
                Se debe explicar la relevancia del taller y qué objetivos pretende alcanzar con los asistentes.
              </p>
            </div>
          </div>

          {/* Punto 3 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00BCD4]" />
                Destinatarios
              </h3>
              <p className="text-white">
                Especificar el público objetivo del taller, así como los requisitos previos necesarios para participar.
              </p>
            </div>
          </div>

          {/* Punto 4 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <FolderOpenDot className="w-5 h-5 text-[#00BCD4]" />
                Metodología y contenidos
              </h3>
              <p className="text-white">
                Describir las actividades, temas a abordar y cómo se distribuirá el tiempo.
              </p>
            </div>
          </div>

          {/* Punto 5 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              5
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Timer className="w-5 h-5 text-[#00BCD4]" />
                Duración del taller
              </h3>
              <p className="text-white">
                La duración máxima sugerida para cada taller es de <strong>90 minutos</strong>.
              </p>
            </div>
          </div>

          {/* Punto 6 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              6
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#00BCD4]" />
                Número de participantes
              </h3>
              <p className="text-white">
                Indicar el <strong>cupo mínimo y máximo</strong> permitido para el desarrollo óptimo del taller.
              </p>
            </div>
          </div>

          {/* Punto 7 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              7
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00BCD4]" />
                Certificados
              </h3>
              <p className="text-white">
                Serán entregados solo a quienes <strong>se inscriban y participen</strong> efectivamente en el taller.
              </p>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center aos-animate mt-12">
          <a
            href="/_events/pdfs/Requisitostalleres.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00BCD4] text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-white hover:text-[#0a2d4d] transition"
          >
            <FileText className="w-5 h-5" />
            Ver Requisitos
          </a>

          {/* Si quieres activar el botón plantilla lo puedes descomentar y estilizar igual */}
          {/* <a
            href="/assets/PlantillaTalleres.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-[#00BCD4] hover:text-[#0a2d4d] transition"
          >
            <ExternalLink className="w-5 h-5" />
            Ver Plantilla
          </a> */}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-white text-sm">
            Agradecemos su interés en contribuir activamente a la formación en el Congreso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopRequirements;
