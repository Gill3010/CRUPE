import { useEffect } from 'react';
import {
  Users,
  Mic,
  FileText,
  LayoutList,
  MessageCircle,
  CalendarClock,
} from 'lucide-react';

const PanelRequirements = () => {
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
      id: 1,
      icon: LayoutList,
      title: 'Definición de Temática y Objetivos',
      iconColor: 'text-[#00BCD4]',
      description:
        'Seleccionar un tema relevante para la comunidad científica del congreso, establecer objetivos específicos del panel y alinear la temática con las áreas del evento.',
    },
    {
      id: 2,
      icon: Users,
      title: 'Selección de Panelistas y Moderador',
      iconColor: 'text-[#00BCD4]',
      description:
        'Elegir entre 3 y 5 expertos reconocidos, incluir un moderador con habilidades para facilitar el debate y fomentar la diversidad de perspectivas.',
    },
    {
      id: 3,
      icon: FileText,
      title: 'Convocatoria y Confirmación',
      iconColor: 'text-[#00BCD4]',
      description:
        'Redactar una convocatoria clara con tema, objetivos, formato, duración y tiempo de intervención. Confirmar disponibilidad de los panelistas.',
    },
    {
      id: 4,
      icon: CalendarClock,
      title: 'Organización Logística',
      iconColor: 'text-[#00BCD4]',
      description:
        'Establecer horario y lugar del panel. Asegurar recursos técnicos y contar con un secretario si se requiere.',
    },
    {
      id: 5,
      icon: Mic,
      title: 'Comunicación y Difusión',
      iconColor: 'text-[#00BCD4]',
      description:
        'Incluir el panel en el programa oficial, difundirlo, y enviar a los participantes información sobre dinámica y expectativas.',
    },
    {
      id: 6,
      icon: MessageCircle,
      title: 'Desarrollo y Evaluación',
      iconColor: 'text-[#00BCD4]',
      description:
        'Garantizar intervenciones objetivas, permitir participación del público y recoger retroalimentación para futuras ediciones.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00BCD4] mb-6">
            Requisitos para Organizar un Panel Científico
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Indicaciones para la organización, logística y desarrollo de paneles científicos dentro del congreso.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[#0a2d4d] border border-white/20 rounded-xl p-6 md:p-10 mb-8 aos-animate space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <FileText className="w-7 h-7 text-[#00BCD4]" />
            Requisitos Generales para Paneles
          </h2>

          {requisitos.map((req) => (
            <div
              key={req.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300"
            >
              <div
                className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full"
              >
                {req.id}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <req.icon className={`w-5 h-5 ${req.iconColor}`} />
                  {req.title}
                </h3>
                <p className="text-white">{req.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center aos-animate">
          <a
            href="/_events/pdfs/Requisitospanelistas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00BCD4] text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-white hover:text-[#0a2d4d] transition"
          >
            <FileText className="w-5 h-5" />
            Ver Requisitos
          </a>
          {/*
          <a
            href="/_events/Plantillapanel.pdf"
            className="bg-white text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-[#00BCD4] hover:text-[#0a2d4d] transition"
          >
            <ExternalLink className="w-5 h-5" />
            Ver Plantilla
          </a>
          */}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-white text-sm">
            Estas pautas garantizan el éxito académico, técnico y logístico de los paneles científicos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanelRequirements;
