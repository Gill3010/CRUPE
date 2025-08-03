import { useEffect } from 'react';
import {
  Video,
  Users,
  Mic,
  Clock10,
  FileText,
  ExternalLink,
  Timer,
} from 'lucide-react';

const ConferencePresentationGuidelines = () => {
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

  const requisitos = [
    {
      icon: <Video className="w-5 h-5 text-[#00BCD4]" />,
      title: 'Video de la Conferencia',
      description:
        'Enviar un archivo con la presentación oral en formato video mp4 de máximo 10 minutos.',
    },
    {
      icon: <Mic className="w-5 h-5 text-[#00BCD4]" />,
      title: 'Moderación de sesión',
      description:
        'Respetar el orden y las indicaciones del moderador asignado a la sesión.',
    },
    {
      icon: <FileText className="w-5 h-5 text-[#00BCD4]" />,
      title: 'Grabación del evento',
      description:
        'Todas las sesiones serán grabadas como parte de la documentación oficial del congreso.',
    },
    {
      icon: <Clock10 className="w-5 h-5 text-[#00BCD4]" />,
      title: 'Puntualidad y conexión previa',
      description:
        'El expositor debe estar presente en el aula física o conectado al aula virtual 10 minutos antes del inicio para confirmar asistencia con el moderador.',
    },
    {
      icon: <Users className="w-5 h-5 text-[#00BCD4]" />,
      title: 'Permanencia durante la sesión',
      description:
        'Los expositores deben permanecer durante toda la sesión para fomentar el intercambio de ideas. La constancia no será otorgada si no se cumple este requisito.',
    },
    {
      icon: <Timer className="w-5 h-5 text-[#00BCD4]" />,
      title: 'Duración',
      description: '40 minutos',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00BCD4] mb-6">
            Requisitos para la Presentación de Conferencias
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Indicaciones para los conferencistas que participarán en el congreso
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[#0a2d4d] border border-white/20 rounded-xl p-6 md:p-10 mb-8 aos-animate space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <FileText className="w-7 h-7 text-[#00BCD4]" />
            Requisitos Generales
          </h2>

          {/* Lista de Requisitos */}
          {requisitos.map((req, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300"
            >
              <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  {req.icon}
                  {req.title}
                </h3>
                <p className="text-white">{req.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center aos-animate">
          <a
            href="/_events/pdfs/Requisitosconferencias.pdf"
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

        {/* Nota final */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-white text-sm">
            Seguir estas pautas es clave para lograr el máximo provecho académico del evento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConferencePresentationGuidelines;