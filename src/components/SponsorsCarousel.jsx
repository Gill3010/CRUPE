import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SponsorsCarousel = () => {
  const base = import.meta.env.BASE_URL;

  const images = [
    { src: base + 'assets/LogoUP.jpg', alt: 'Universidad de Panamá', href: 'https://www.up.ac.pa/' },
    { src: base + 'assets/LogoCespe.jpeg', alt: 'Centro Latinoamericano de Estudios en Epistemología Pedagógica', href: 'https://cespecorporativa.org/' },
    { src: base + 'assets/LogoEGV.jpg', alt: 'Universidad Nacional de Educacion Enrique Guzmán y Valle', href: 'https://www.une.edu.pe/uneweb/' },
    { src: base + 'assets/LogoRE.png', alt: 'Red Latinoamericana de Investigaciones Cualitativas', href: 'https://relaticpanama.org/' },
    { src: base + 'assets/LogoSaopaulo.svg', alt: 'Universidade de São Paulo, Brasil', href: 'https://www5.usp.br/' },
    { src: base + 'assets/LogoUP.jpg', alt: 'Universidad de Panamá', href: 'https://www.up.ac.pa/' },
    { src: base + 'assets/LogoCespe.jpeg', alt: 'Centro Latinoamericano de Estudios en Epistemología Pedagógica', href: 'https://www.une.edu.pe/uneweb/' },
    { src: base + 'assets/LogoEGV.jpg', alt: 'Universidad Nacional de Educacion Enrique Guzmán y Valle', href: 'https://cespecorporativa.org/' },
    { src: base + 'assets/LogoRE.png', alt: 'Red Latinoamericana de Investigaciones Cualitativas', href: 'https://relaticpanama.org/' },
    { src: base + 'assets/LogoSaopaulo.svg', alt: 'Universidade de São Paulo, Brasil', href: 'https://www5.usp.br/' },
  ];

  const infiniteImages = [...images, ...images];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 5;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + infiniteImages.length) % infiniteImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % infiniteImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [infiniteImages.length]);

  const containerStyle = {
    transform: `translateX(-${(currentIndex % infiniteImages.length) * (100 / imagesPerSlide)}%)`,
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <div
      data-aos="fade-up"
      className="p-[4px] bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-lg shadow-2xl mb-6"
    >
      <div className="relative w-full bg-white p-6 rounded-lg shadow-xl overflow-hidden">
        <h2
          data-aos="fade-right"
          className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8 text-center"
        >
          Invitan
        </h2>

        <div
          className="flex cursor-grab select-none"
          style={containerStyle}
          data-aos="fade-left"
        >
          {infiniteImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/5 mx-2"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer">
                <a
                  href={image.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-60 object-contain"
                    loading="lazy"
                  />
                </a>
                {image.alt && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-black bg-opacity-60 backdrop-blur-sm">
                    <p
                      className="text-white text-center text-base font-semibold tracking-wide truncate"
                      title={image.alt}
                    >
                      {image.alt}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botón Anterior */}
        <button
          onClick={prevImage}
          data-aos="fade-right"
          data-aos-delay="200"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-14 h-14 rounded-full shadow-xl hover:scale-125 transition-transform duration-300 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 hover:brightness-110"
          aria-label="Anterior"
          type="button"
        >
          &#8249;
        </button>

        {/* Botón Siguiente */}
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % infiniteImages.length)}
          data-aos="fade-left"
          data-aos-delay="200"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white w-14 h-14 rounded-full shadow-xl hover:scale-125 transition-transform duration-300 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 hover:brightness-110"
          aria-label="Siguiente"
          type="button"
        >
          &#8250;
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.slice(0, imagesPerSlide).map((_, index) => {
            const isActive = index === currentIndex % imagesPerSlide;
            return (
              <span
                key={index}
                className={`h-4 w-4 rounded-full shadow-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 scale-125'
                    : 'bg-gray-300 scale-100'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SponsorsCarousel;