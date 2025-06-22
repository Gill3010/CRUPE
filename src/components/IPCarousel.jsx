import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, FileText, Lightbulb, Copyright } from 'lucide-react';

const IPCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Protección de Marcas",
      subtitle: "Registra y defiende tu identidad corporativa",
      description: "Asegura la exclusividad de tu marca en el mercado con nuestros servicios especializados de registro marcario.",
      icon: Shield,
      gradient: "from-blue-600 via-purple-600 to-indigo-800",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Derechos de Autor",
      subtitle: "Protege tu creatividad y obras originales",
      description: "Salvaguarda tus creaciones artísticas, literarias y digitales con el respaldo legal completo.",
      icon: FileText,
      gradient: "from-emerald-500 via-teal-600 to-cyan-700",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Patentes e Innovación",
      subtitle: "Convierte tus ideas en activos protegidos",
      description: "Transforma tus invenciones en ventajas competitivas mediante el registro de patentes.",
      icon: Lightbulb,
      gradient: "from-orange-500 via-red-500 to-pink-600",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Consultoría IP",
      subtitle: "Estrategias integrales de propiedad intelectual",
      description: "Desarrolla una estrategia completa para maximizar el valor de tus activos intangibles.",
      icon: Copyright,
      gradient: "from-violet-600 via-purple-700 to-fuchsia-800",
      textColor: "text-white"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const IconComponent = slide.icon;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
              
              {/* Geometric Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white transform rotate-45" />
                <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full" />
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-white transform rotate-12" />
                <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-white transform -rotate-45" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center px-8">
                <div className="text-center max-w-4xl">
                  {/* Icon with animation */}
                  <div 
                    className={`mb-8 transform transition-all duration-1000 delay-300 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : 'translate-y-8 opacity-0 scale-90'
                    }`}
                  >
                    <IconComponent size={80} className={`mx-auto ${slide.textColor} drop-shadow-lg`} />
                  </div>

                  {/* Title with fade effect */}
                  <h1 
                    className={`text-6xl md:text-7xl font-bold mb-4 ${slide.textColor} transition-all duration-1000 delay-500 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle with fade effect */}
                  <h2 
                    className={`text-2xl md:text-3xl font-light mb-6 ${slide.textColor} opacity-90 transition-all duration-1000 delay-700 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-90' 
                        : 'translate-y-8 opacity-0'
                    }`}
                  >
                    {slide.subtitle}
                  </h2>

                  {/* Description with fade effect */}
                  <p 
                    className={`text-lg md:text-xl ${slide.textColor} opacity-80 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-900 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-80' 
                        : 'translate-y-8 opacity-0'
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Button with fade effect */}
                  <button 
                    className={`mt-8 px-8 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 ${slide.textColor} rounded-full hover:bg-opacity-30 transition-all duration-300 font-semibold text-lg transform hover:scale-105 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100 delay-1100' 
                        : 'translate-y-8 opacity-0'
                    } transition-all duration-1000`}
                  >
                    Conocer Más
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white text-sm hover:bg-opacity-30 transition-all duration-300"
      >
        {isAutoPlaying ? 'Pausar' : 'Reproducir'}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20 z-20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default IPCarousel;