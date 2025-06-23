import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LogoUP from '/assets/LogoUP.jpg';
import LogoEGV from '/assets/LogoEGV.jpg';
import LogoRE from '/assets/LogoRE.png';

const SponsorsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const institutions = [
    {
      id: 1,
      name: "🎓 Universidad de Panamá",
      logo: LogoUP,
      description: "Casa de estudios superiores líder en Panamá"
    },
    {
      id: 2,
      name: "📚 Universidad Nacional Enrique Guzmán y Valle",
      logo: LogoEGV,
      description: "Alma Máter del Magisterio Nacional"
    },
    {
      id: 3,
      name: "🔬 Relatic Panamá",
      logo: LogoRE,
      description: "Fomentando la Investigación y la Innovación"
    }
  ];

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      offset: 50,
      disable: false
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % institutions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, institutions.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % institutions.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + institutions.length) % institutions.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8" data-aos="fade-up">
      {/* Título */}
      <div className="text-center mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Invitan
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 mx-auto rounded-full shadow-2xl shadow-blue-500/25"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500" data-aos="fade-up" data-aos-delay="200">
        {/* Carousel Content */}
        <div className="relative h-96 md:h-80">
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {institutions.map((institution, index) => (
              <div
                key={institution.id}
                className="w-full flex-shrink-0 flex items-center justify-center p-4 md:p-6"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="text-center max-w-md leading-relaxed">
                  {/* Logo Container */}
                  <div className="relative mb-6 group hover:scale-105 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200/50">
                      <img
                        src={institution.logo}
                        alt={institution.name}
                        className="w-full h-32 object-contain rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Institution Info */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {institution.name}
                  </h3>
                  <p className="text-sm md:text-base font-light text-gray-600">
                    {institution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-gray-800 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-gray-800 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {institutions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 w-8'
                  : 'bg-white/50 hover:bg-white/80 w-3'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="absolute top-4 right-4">
          <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden" data-aos="fade-up" data-aos-delay="500">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-700 ease-out"
          style={{ 
            width: `${((currentSlide + 1) / institutions.length) * 100}%` 
          }}
        ></div>
      </div>

      {/* Institution Names Below */}
      <div className="flex flex-wrap justify-center mt-8 gap-4 md:gap-8" data-aos="fade-up" data-aos-delay="600">
        {institutions.map((institution, index) => (
          <button
            key={institution.id}
            onClick={() => goToSlide(index)}
            className={`text-sm md:text-base font-medium tracking-wider transition-all duration-300 ${
              index === currentSlide
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {institution.name.replace(/^(.{2})/, '')} {/* Oculta el emoji del botón si lo deseas */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SponsorsCarousel;