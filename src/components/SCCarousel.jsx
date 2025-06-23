import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Microscope, Cpu, FlaskConical, Lightbulb } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import VideoBg from '/assets/Video.mp4'; // Asegúrate de tener este video en tu carpeta assets

const SCCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Tercer Encuentro de Investigaciones Cualitativas",
      subtitle: "Las TIC e Inteligencia Artificial en la investigación cualitativa",
      description: "Ciencia, Tecnología e Innovación.",
      icon: Microscope,
      gradient: "from-emerald-600 via-teal-600 to-cyan-800", // Verde/Teal
      textColor: "text-white",
      accentColor: "emerald"
    },
    {
      id: 2,
      title: "Inteligencia Artificial",
      subtitle: "Soluciones de IA para investigación",
      description: "Integra herramientas de inteligencia artificial en tus procesos de investigación y análisis.",
      icon: Cpu,
      gradient: "from-indigo-600 via-blue-600 to-purple-700", // Azul/Índigo
      textColor: "text-white",
      accentColor: "blue"
    },
    {
      id: 3,
      title: "Tecnología Avanzada",
      subtitle: "Herramientas tecnológicas para investigación",
      description: "Utiliza las últimas tecnologías para potenciar tus proyectos de investigación.",
      icon: FlaskConical,
      gradient: "from-rose-500 via-pink-500 to-red-600", // Rosa/Rojo
      textColor: "text-white",
      accentColor: "rose"
    },
    {
      id: 4,
      title: "Innovación Metodológica",
      subtitle: "Nuevos enfoques para la investigación",
      description: "Descubre metodologías innovadoras para abordar problemas complejos.",
      icon: Lightbulb,
      gradient: "from-violet-600 via-purple-700 to-fuchsia-800", // Violeta/Púrpura
      textColor: "text-white",
      accentColor: "violet"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full h-screen overflow-hidden snap-start" id="carousel-section">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        src={VideoBg}
      />

      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: ['#ffffff', '#a78bfa', '#60a5fa'] },
            shape: { type: 'circle' },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.6, direction: 'none', outMode: 'bounce' }
          },
          interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } }
        }}
      />

      <div className="relative z-10 w-full h-full">
        {slides.map((slide, index) => {
          const IconComponent = slide.icon;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />

              <div className="relative z-10 h-full flex items-center justify-center px-8">
                <div className="text-center max-w-4xl">
                  <div className={`mb-8 transform transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'}`}>
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-xl transform scale-150"></div>
                      <IconComponent size={80} className={`relative mx-auto ${slide.textColor} drop-shadow-2xl`} />
                    </div>
                  </div>

                  <h1 className={`text-4xl md:text-6xl font-black mb-4 ${slide.textColor} transition-all duration-1000 delay-500 drop-shadow-lg ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {slide.title}
                  </h1>

                  <h2 className={`text-xl md:text-3xl font-light mb-6 ${slide.textColor} opacity-90 transition-all duration-1000 delay-700 drop-shadow-md ${index === currentSlide ? 'translate-y-0 opacity-90' : 'translate-y-8 opacity-0'}`}>
                    {slide.subtitle}
                  </h2>

                  <p className={`text-sm md:text-xl ${slide.textColor} opacity-85 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-900 drop-shadow-sm ${index === currentSlide ? 'translate-y-0 opacity-85' : 'translate-y-8 opacity-0'}`}>
                    {slide.description}
                  </p>

                  <button className={`mt-8 px-8 py-3 bg-white/25 backdrop-blur-sm border-2 border-white/40 ${slide.textColor} rounded-full hover:bg-white/35 transition-all duration-300 font-semibold text-lg transform hover:scale-105 shadow-lg hover:shadow-xl ${index === currentSlide ? 'translate-y-0 opacity-100 delay-1100' : 'translate-y-8 opacity-0'} transition-all duration-1000`}>
                    Conocer Más
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-white/25 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/35 transition-all duration-300 hover:scale-110 shadow-lg"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft size={28} strokeWidth={2.5} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-white/25 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/35 transition-all duration-300 hover:scale-110 shadow-lg"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight size={28} strokeWidth={2.5} />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white/50 ${index === currentSlide ? 'bg-white scale-125 border-white shadow-lg' : 'bg-white/30 hover:bg-white/60 hover:scale-110'}`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          />
        ))}
      </div>

      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-20 right-6 z-20 px-4 py-2 rounded-full bg-white/25 backdrop-blur-md border-2 border-white/40 text-white text-sm font-medium hover:bg-white/35 transition-all duration-300 shadow-lg"
      >
        {isAutoPlaying ? '⏸️ Pausar' : '▶️ Reproducir'}
      </button>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-white via-white/90 to-white transition-all duration-300 ease-linear shadow-lg"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default SCCarousel;