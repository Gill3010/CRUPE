import { useEffect } from 'react';
import {
  Users,
  Mic,
  FileText,
  LayoutList,
  MessageCircle,
  CalendarClock,
  ExternalLink
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
      color: 'from-blue-500 to-purple-600',
      iconColor: 'text-blue-400',
      description:
        'Seleccionar un tema relevante para la comunidad científica del congreso, establecer objetivos específicos del panel y alinear la temática con las áreas del evento.',
    },
    {
      id: 2,
      icon: Users,
      title: 'Selección de Panelistas y Moderador',
      color: 'from-purple-400 to-pink-400',
      iconColor: 'text-pink-400',
      description:
        'Elegir entre 3 y 5 expertos reconocidos, incluir un moderador con habilidades para facilitar el debate y fomentar la diversidad de perspectivas.',
    },
    {
      id: 3,
      icon: FileText,
      title: 'Convocatoria y Confirmación',
      color: 'from-indigo-400 to-blue-500',
      iconColor: 'text-indigo-400',
      description:
        'Redactar una convocatoria clara con tema, objetivos, formato, duración y tiempo de intervención. Confirmar disponibilidad de los panelistas.',
    },
    {
      id: 4,
      icon: CalendarClock,
      title: 'Organización Logística',
      color: 'from-pink-400 to-purple-500',
      iconColor: 'text-pink-400',
      description:
        'Establecer horario y lugar del panel. Asegurar recursos técnicos y contar con un secretario si se requiere.',
    },
    {
      id: 5,
      icon: Mic,
      title: 'Comunicación y Difusión',
      color: 'from-blue-400 to-indigo-500',
      iconColor: 'text-blue-400',
      description:
        'Incluir el panel en el programa oficial, difundirlo, y enviar a los participantes información sobre dinámica y expectativas.',
    },
    {
      id: 6,
      icon: MessageCircle,
      title: 'Desarrollo y Evaluación',
      color: 'from-purple-400 to-pink-500',
      iconColor: 'text-purple-400',
      description:
        'Garantizar intervenciones objetivas, permitir participación del público y recoger retroalimentación para futuras ediciones.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Requisitos para Organizar un Panel Científico
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Indicaciones para la organización, logística y desarrollo de paneles científicos dentro del congreso.
          </p>
        </div>

        {/* Main Card */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 aos-animate space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-cyan-400" />
            Requisitos Generales para Paneles
          </h2>

          {requisitos.map((req) => (
            <div
              key={req.id}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div
                className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${req.color} rounded-full flex items-center justify-center text-white font-bold`}
              >
                {req.id}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <req.icon className={`w-5 h-5 ${req.iconColor}`} />
                  {req.title}
                </h3>
                <p className="text-gray-300">{req.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center aos-animate">
          <a
            href="/_events/Requisitospanelistas.pdf"
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
            href="/_events/Plantillapanel.pdf"
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <ExternalLink className="w-6 h-6" />
              <span className="text-lg">Ver Plantilla</span>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-gray-400 text-sm">
            Estas pautas garantizan el éxito académico, técnico y logístico de los paneles científicos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanelRequirements;