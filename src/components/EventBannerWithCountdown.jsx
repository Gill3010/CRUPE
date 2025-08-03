import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';

const CongresoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Configurar fecha del evento (25 de septiembre de 2025, 8:30 AM Lima)
  const eventDate = new Date('2025-09-25T08:30:00-05:00'); // UTC-5 (Lima timezone)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Contador regresivo
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  const slides = [
    {
      id: 1,
      title: "Tercer Congreso de Investigaciones Cualitativas",
      subtitle: "Las TIC e Inteligencia Artificial en la investigación cualitativa",
      description: "Innovando la comprensión: TIC e Inteligencia Artificial al servicio de la investigación cualitativa",
      textColor: "text-white",
      thumbnail: "https://images.unsplash.com/photo-1589682449071-d13c27d1c298?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      bullets: [
        "📅 25, 26 y 27 de septiembre de 2025",
        "🏛️ Universidad Nacional Enrique Guzmán y Valle",
        "🇵🇪 Lima, Perú · Modalidad Híbrida"
      ],
      isMainSlide: true
    },
    {
      id: 2,
      title: "Innovaciones en Metodologías Cualitativas",
      subtitle: "Nuevos enfoques para la investigación del siglo XXI",
      description: "Metodologías emergentes que revolucionan la investigación cualitativa contemporánea.",
      textColor: "text-white",
      thumbnail: "https://images.unsplash.com/photo-1647211103199-faa4cd24b4ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      bullets: [
        "Integración de TIC en Métodos Cualitativos",
        "Metodologías Mixtas Avanzadas",
        "Investigación Participativa Digital"
      ]
    },
    {
      id: 3,
      title: "Inteligencia Artificial en Investigación",
      subtitle: "Herramientas digitales para el análisis cualitativo",
      description: "La IA transforma el análisis e interpretación de datos cualitativos.",
      textColor: "text-white",
      thumbnail: "https://images.unsplash.com/photo-1566793772361-1d5d9cefbd12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      bullets: [
        "IA en Análisis de Contenido",
        "Automatización de Procesos",
        "Validación Inteligente de Resultados"
      ]
    },
    {
      id: 4,
      title: "Aplicación Interdisciplinaria",
      subtitle: "Investigación cualitativa en múltiples campos",
      description: "Aplicaciones en diversas disciplinas académicas y profesionales.",
      textColor: "text-white",
      thumbnail: "https://images.unsplash.com/photo-1568805647632-69f6deec1547?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
      bullets: [
        "Arte y Diseño Contemporáneo",
        "Ciencias Administrativas y Contables",
        "Ciencias de la Educación Digital"
      ]
    },
    {
      id: 5,
      title: "Ética en la Era Digital",
      subtitle: "Principios éticos en investigación cualitativa digital",
      description: "Desafíos éticos y responsabilidad social en la investigación moderna.",
      textColor: "text-white",
      thumbnail: "https://images.unsplash.com/photo-1583202806174-ab03e16760d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1bHR1cmElMjBkZWwlMjBwZXJ1fGVufDB8fDB8fHww",
      bullets: [
        "Ética en Recolección Digital",
        "Privacidad y Consentimiento",
        "Responsabilidad Social Investigativa"
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Contador regresivo - Fijo en todos los slides */}
      <div className="absolute top-20 md:top-24 left-1/2 transform -translate-x-1/2 z-30 bg-cyan-400 text-slate-900 px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-white">
        <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold">
          <Clock size={14} className="md:w-4 md:h-4" />
          <span className="hidden sm:inline">EL EVENTO COMIENZA EN:</span>
          <span className="sm:hidden">FALTAN:</span>
          <span className="bg-slate-900 text-cyan-400 px-2 py-1 rounded text-xs">
            {timeLeft.days}D
          </span>
          <span className="bg-slate-900 text-cyan-400 px-2 py-1 rounded text-xs">
            {timeLeft.hours}H
          </span>
          <span className="bg-slate-900 text-cyan-400 px-2 py-1 rounded text-xs">
            {timeLeft.minutes}M
          </span>
          <span className="bg-slate-900 text-cyan-400 px-2 py-1 rounded text-xs">
            {timeLeft.seconds}S
          </span>
        </div>
      </div>

      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide && hasMounted;

          return (
            <div
              key={slide.id}
              className={`
                absolute inset-0 transition-opacity duration-1000 ease-in-out
                ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
              `}
            >
              {/* Background image sin overlay gradiente */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.thumbnail})` }}
              />
              <div className="absolute inset-0 bg-slate-900 bg-opacity-80" />

              <div className="relative z-20 h-full flex items-center justify-center px-4 md:px-8">
                <div className="text-center max-w-4xl w-full pt-16 md:pt-20">
                  {/* Título principal */}
                  <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 ${slide.textColor} transition-all duration-1000 delay-500
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} leading-tight`}>
                    {slide.title}
                  </h1>

                  {/* Subtítulo */}
                  <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 text-cyan-400 transition-all duration-1000 delay-700
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} leading-tight`}>
                    {slide.subtitle}
                  </h2>

                  {/* Descripción */}
                  <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${slide.textColor} max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-900 font-medium px-4 mb-4
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {slide.description}
                  </p>

                  {/* Lista de bullets optimizada */}
                  <ul className={`mt-4 space-y-2 text-left text-sm sm:text-base md:text-lg max-w-2xl mx-auto ${slide.textColor} transition-all duration-1000 delay-1000 px-4 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {slide.bullets.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 p-2 md:p-3 bg-slate-900 bg-opacity-70 rounded-lg">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <span className="font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón CTA */}
                  <div className="mt-6 md:mt-8">
                    <a 
  href="/_events/tipo-participacion"
  className={`
    relative inline-block px-6 sm:px-8 md:px-10 py-3 md:py-4
    bg-cyan-400 text-slate-900 border-2 border-cyan-400 rounded-full
    font-bold text-base sm:text-lg md:text-xl
    hover:bg-slate-900 hover:text-cyan-400 hover:scale-105
    transform transition-all duration-300
    ${isActive ? 'translate-y-0 opacity-100 delay-[1200ms]' : 'translate-y-8 opacity-0'}
    transition-all duration-1000
  `}
>
  <span className="relative z-10 flex items-center justify-center space-x-2">
    <span className="text-lg md:text-xl">🚀</span>
    <span className="text-sm sm:text-base md:text-lg">¡INSCRÍBETE YA!</span>
    <span className="text-lg md:text-xl">✨</span>
  </span>
</a>
                    
                    {slide.isMainSlide && (
                      <p className={`mt-3 md:mt-4 font-semibold px-4 text-sm sm:text-base text-white ${isActive ? 'opacity-100 delay-[1300ms]' : 'opacity-0'} transition-all duration-1000`}>
                        ¡No te lo pierdas! Evento extraordinario lleno de conocimiento e innovación
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botones de navegación */}
      <button onClick={prevSlide} className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-30 p-2 md:p-4 bg-slate-900 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-full transition-all duration-300 hover:scale-110">
        <ChevronLeft size={20} className="md:w-7 md:h-7" />
      </button>

      <button onClick={nextSlide} className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-30 p-2 md:p-4 bg-slate-900 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-full transition-all duration-300 hover:scale-110">
        <ChevronRight size={20} className="md:w-7 md:h-7" />
      </button>

      {/* Indicadores de slides */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 md:space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 border-2 border-white ${
              index === currentSlide 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-white bg-opacity-30 hover:bg-opacity-60 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="absolute bottom-0 left-0 w-full h-2 z-30 bg-slate-900">
        <div 
          className="h-full bg-cyan-400 transition-all duration-300 ease-linear" 
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} 
        />
      </div>

      {/* Información del evento fija */}
      <div className="absolute bottom-20 md:bottom-24 right-2 md:right-6 z-30 bg-slate-900 text-white p-2 md:p-4 rounded-lg border-2 border-cyan-400 max-w-[200px] md:max-w-xs">
        <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
          <MapPin size={14} className="md:w-4 md:h-4 flex-shrink-0 text-cyan-400" />
          <span className="text-xs md:text-sm font-semibold">Lima, Perú 🇵🇪</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <Calendar size={14} className="md:w-4 md:h-4 flex-shrink-0 text-cyan-400" />
          <span className="text-xs md:text-sm">25-27 Sept 2025</span>
        </div>
      </div>
    </div>
  );
};

export default CongresoCarousel;