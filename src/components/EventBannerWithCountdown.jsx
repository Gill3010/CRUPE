import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from 'lucide-react';

const EventoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Configurar fecha del evento (23 de octubre de 2025, 9:00 AM Panamá)
  const eventDate = new Date('2025-10-23T09:00:00-05:00');

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
    title: "I Congreso Científico Internacional CRUPE 2025",
    subtitle: "Innovación educativa en Panamá Este",
    description: "Educación investigación y gestión para el desarrollo: la estrategia de Panamá Este",
    textColor: "text-white",
    thumbnail: "/_events/_crupe//assets/Slide1.jpeg",  // Cambiado aquí
    bullets: [
      "📅 23 al 25 de octubre de 2025",
      "🏛️ Centro Regional Universitario Panamá Este",
      "💻👥 Modalidad híbrida (presencial - virtual)"
    ],
    isMainSlide: true
  },
    {
      id: 2,
      title: "Eje temático",
      subtitle: "Educación e investigación para el desarrollo sostenible",
      textColor: "text-white",
      thumbnail: "/_events/_crupe//assets/Slide2.jpeg",
      bullets: [
        "Prácticas pedagógicas para el desarrollo sostenible",
        "Investigación educativa y políticas públicas en educación",
        "Ciencias, sociales, cultura y desarrollo humano sostenible"
      ],
      isEjeTematico: true
    },
    {
      id: 3,
      title: "Eje temático",
      subtitle: "Ciencias administrativas e investigación para la gestión sostenible",
      textColor: "text-white",
      thumbnail: "/_events/_crupe//assets/Slide3.jpeg",
      bullets: [
        "Planificación y sostenibilidad territorial en Panamá Este",
        "Tecnologías emergentes y medioambiente: gestión de la innovación sostenible",
        "Ciencia de datos, administración pública y toma de decisiones"
      ],
      isEjeTematico: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Contador regresivo - Reubicado a la izquierda */}
      <div className="absolute top-[70px] sm:top-[80px] left-2 sm:left-4 z-30 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg border border-[#4BA146] shadow-lg">
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-[#4BA146] flex-shrink-0" />
            <span className="text-xs font-semibold whitespace-nowrap">EVENTO COMIENZA EN:</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex flex-col items-center bg-slate-800/90 px-1 py-1 rounded-md min-w-[36px]">
              <span className="text-base font-bold text-[#4BA146]">{timeLeft.days}</span>
              <span className="text-[0.6rem] uppercase tracking-wider">Días</span>
            </div>
            <span className="text-sm font-bold text-[#4BA146]">:</span>
            <div className="flex flex-col items-center bg-slate-800/90 px-1 py-1 rounded-md min-w-[36px]">
              <span className="text-base font-bold text-[#4BA146]">{timeLeft.hours}</span>
              <span className="text-[0.6rem] uppercase tracking-wider">Horas</span>
            </div>
            <span className="text-sm font-bold text-[#4BA146]">:</span>
            <div className="flex flex-col items-center bg-slate-800/90 px-1 py-1 rounded-md min-w-[36px]">
              <span className="text-base font-bold text-[#4BA146]">{timeLeft.minutes}</span>
              <span className="text-[0.6rem] uppercase tracking-wider">Min</span>
            </div>
            <span className="text-sm font-bold text-[#4BA146]">:</span>
            <div className="flex flex-col items-center bg-slate-800/90 px-1 py-1 rounded-md min-w-[36px]">
              <span className="text-base font-bold text-[#4BA146]">{timeLeft.seconds}</span>
              <span className="text-[0.6rem] uppercase tracking-wider">Seg</span>
            </div>
          </div>
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
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.thumbnail})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-slate-900/50" />

              {/* Contenido principal con margen superior para navbar + contador */}
              <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 pt-[120px] sm:pt-[140px] pb-24 sm:pb-20">
                <div className="text-center w-full max-w-4xl">
                  {/* Título principal */}
                  <h1 className={`relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 ${slide.textColor} transition-all duration-1000 delay-300
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} leading-tight pb-3`}>
                    {slide.title}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 bg-[#4BA146] transition-all duration-1000 delay-500
                      ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></span>
                  </h1>

                  {/* Subtítulo */}
                  <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-[#4BA146] transition-all duration-1000 delay-500
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} leading-tight`}>
                    {slide.subtitle}
                  </h2>

                  {/* Descripción */}
                  {slide.description && (
                    <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${slide.textColor} max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 font-medium px-2 sm:px-4 mb-4 sm:mb-6
                      ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      {slide.description}
                    </p>
                  )}

                  {/* Lista de bullets */}
                  <div className={`mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-left max-w-2xl mx-auto transition-all duration-1000 delay-700 px-2 sm:px-4 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {slide.isEjeTematico && (
                      <h3 className="text-sm sm:text-base font-bold text-[#F7941D] mb-1 sm:mb-2">Subtemas:</h3>
                    )}
                    <ul className="space-y-2 sm:space-y-3">
                      {slide.bullets.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 p-2 sm:p-3 bg-slate-900/70 backdrop-blur-sm rounded-lg border border-slate-700">
                          <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${slide.isEjeTematico ? 'bg-[#F7941D]' : 'bg-[#4BA146]'}`}></div>
                          <span className="font-medium leading-relaxed text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botón CTA */}
                  <div className="mt-6 sm:mt-8">
                    <a 
                      href="/_events/_crupe/inscripcion"
                      className={`
                        inline-block px-6 sm:px-8 py-2 sm:py-3
                        bg-[#4BA146] text-white border-2 border-[#4BA146] rounded-lg
                        font-bold text-base sm:text-lg
                        hover:bg-transparent hover:text-[#4BA146]
                        transform transition-all duration-300
                        ${isActive ? 'translate-y-0 opacity-100 delay-[900ms]' : 'translate-y-8 opacity-0'}
                        relative overflow-hidden
                      `}
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                        <span>🚀 REGÍSTRATE</span>
                      </span>
                      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 -z-1"></span>
                    </a>
                    
                    {slide.isMainSlide && (
                      <p className={`mt-3 sm:mt-4 font-medium px-4 text-xs sm:text-sm text-white/80 ${isActive ? 'opacity-100 delay-[1000ms]' : 'opacity-0'} transition-all duration-1000`}>
                        ¡Evento exclusivo para la comunidad universitaria!
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
      <button 
        onClick={prevSlide} 
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 sm:p-3 bg-slate-900/70 backdrop-blur-sm border-2 border-[#4BA146] text-[#4BA146] hover:bg-[#4BA146] hover:text-white rounded-full transition-all duration-300 hover:scale-110 focus:outline-none shadow-lg"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>

      <button 
        onClick={nextSlide} 
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 sm:p-3 bg-slate-900/70 backdrop-blur-sm border-2 border-[#4BA146] text-[#4BA146] hover:bg-[#4BA146] hover:text-white rounded-full transition-all duration-300 hover:scale-110 focus:outline-none shadow-lg"
        aria-label="Slide siguiente"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Indicadores de slides */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#4BA146] scale-125' 
                : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          >
            {index === currentSlide && (
              <span className="absolute inset-0 rounded-full border border-[#4BA146] animate-ping opacity-75"></span>
            )}
          </button>
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="absolute bottom-0 left-0 w-full h-1 z-30 bg-slate-900/50">
        <div 
          className="h-full bg-gradient-to-r from-[#4BA146] to-[#0077C8] transition-all duration-1000 ease-linear" 
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} 
          aria-hidden="true"
        />
      </div>

      {/* Información del evento */}
      <div className={`absolute bottom-20 sm:bottom-24 right-2 sm:right-4 z-30 bg-slate-900/90 backdrop-blur-sm text-white p-2 sm:p-3 rounded-lg border border-[#4BA146]/50 shadow-lg max-w-[160px] sm:max-w-xs transition-all duration-300 ${
        isAutoPlaying ? 'opacity-90 hover:opacity-100' : 'opacity-100'
      }`}>
        <div className="flex items-start gap-1 sm:gap-2 mb-1 sm:mb-2">
          <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#4BA146]" />
          <div>
            <h3 className="text-[0.6rem] sm:text-xs uppercase tracking-wider text-[#4BA146] font-bold">Ubicación</h3>
            <p className="text-xs sm:text-sm">Centro Regional Universitario Panamá Este</p>
          </div>
        </div>
        <div className="flex items-start gap-1 sm:gap-2">
          <Calendar size={14} className="mt-0.5 flex-shrink-0 text-[#4BA146]" />
          <div>
            <h3 className="text-[0.6rem] sm:text-xs uppercase tracking-wider text-[#4BA146] font-bold">Fecha</h3>
            <p className="text-xs sm:text-sm">23-25 Oct 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventoCarousel;