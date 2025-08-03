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
      icon: <BookOpen className="w-5 h-5 text-[#00BCD4]" />,
      title: 'Innovaciones en Metodologías Cualitativas',
      items: [
        'Integración de TIC en Métodos Cualitativos',
        'Metodologías Mixtas',
        'Investigación Participativa',
      ],
    },
    {
      id: 2,
      icon: <Cpu className="w-5 h-5 text-[#00BCD4]" />,
      title: 'TIC y la Inteligencia Artificial',
      items: [
        'Uso de IA en el Análisis de Contenido',
        'Desafíos de Interpretación',
        'Validación de Resultados',
      ],
    },
    {
      id: 3,
      icon: <Globe className="w-5 h-5 text-[#00BCD4]" />,
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
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-5 h-5 text-[#00BCD4]" />,
      title: 'Ética y Responsabilidad en la Era Digital',
      items: [
        'Ética en la Recolección de Datos',
        'Privacidad y Consentimiento Informado',
        'Responsabilidad Social en la Investigación',
      ],
    },
    {
      id: 5,
      icon: <Upload className="w-5 h-5 text-[#00BCD4]" />,
      title: 'Publicación Científica',
      items: [
        'Publicación Abierta y Acceso a la Información',
        'Evaluación por Pares y Transparencia',
        'Difusión de Resultados a través de TIC',
      ],
    },
    {
      id: 6,
      icon: <span className="text-[#00BCD4] text-xl">📂</span>,
      title: 'Temas Libres',
      items: [
        'Espacio abierto para propuestas innovadoras en investigación cualitativa.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00BCD4] mb-6">
            III Congreso de Investigaciones Cualitativas
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Lema: <em>“Las TIC e Inteligencia Artificial en la investigación cualitativa”</em>
          </p>
        </div>

        {/* Lista de Temas */}
        <div className="grid md:grid-cols-2 gap-6 aos-animate">
          {themes.map((theme, index) => (
            <div
              key={theme.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300"
            >
              <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
                {index + 1}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  {theme.icon}
                  {theme.title}
                </h2>
                <ul className="list-disc list-inside text-white space-y-1 text-sm">
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
          <p className="text-white text-sm">
            Gracias por tu interés en el III Congreso de Investigaciones Cualitativas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CongressOverview;