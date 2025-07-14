import { useEffect } from 'react';
import { BookOpen, Cpu, Globe, ShieldCheck, Upload } from 'lucide-react';

const CongressOverview = () => {
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

  const themes = [
    {
      id: 1,
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: 'Innovaciones en Metodologías Cualitativas',
      items: [
        'Integración de TIC en Métodos Cualitativos',
        'Metodologías Mixtas',
        'Investigación Participativa',
      ],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      icon: <Cpu className="w-6 h-6 text-pink-400" />,
      title: 'TIC y la Inteligencia Artificial',
      items: [
        'Uso de IA en el Análisis de Contenido',
        'Desafíos de Interpretación',
        'Validación de Resultados',
      ],
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      id: 3,
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      title: 'Aplicación Disciplinaria e Interdisciplinaria',
      items: [
        'Arte y Diseño',
        'Ciencias Administrativas y Contables',
        'Ciencias de la Educación',
        'Ciencias Naturales y Exactas',
        'Ciencias Sociales y Humanísticas',
        'Ciencias de la Salud',
        'Derecho y Ciencias Políticas',
        'Tecnología e Ingeniería',
      ],
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-6 h-6 text-pink-400" />,
      title: 'Ética y Responsabilidad en la Era Digital',
      items: [
        'Ética en la Recolección de Datos',
        'Privacidad y Consentimiento Informado',
        'Responsabilidad Social en la Investigación',
      ],
      gradient: 'from-pink-400 to-purple-500',
    },
    {
      id: 5,
      icon: <Upload className="w-6 h-6 text-blue-400" />,
      title: 'Publicación Científica',
      items: [
        'Publicación Abierta y Acceso a la Información',
        'Evaluación por Pares y Transparencia',
        'Difusión de Resultados a través de TIC',
      ],
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      id: 6,
      icon: <span className="text-white text-xl">📂</span>,
      title: 'Temas Libres',
      items: [
        'Espacio abierto para propuestas innovadoras en investigación cualitativa.',
      ],
      gradient: 'from-pink-400 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            III Congreso de Investigaciones Cualitativas
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Lema: <em>“Las TIC e Inteligencia Artificial en la investigación cualitativa”</em>
          </p>
        </div>

        {/* Temas en estilo glassmorphism */}
        <div className="grid md:grid-cols-2 gap-6 aos-animate">
          {themes.map((theme, index) => (
            <div
              key={theme.id}
              className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-2xl backdrop-blur-lg"
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-r ${theme.gradient}`}
              >
                {index + 1}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  {theme.icon}
                  {theme.title}
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {theme.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-gray-400 text-sm">
            Gracias por tu interés en el III Congreso de Investigaciones Cualitativas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CongressOverview;