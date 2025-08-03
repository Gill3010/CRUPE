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
  const [imagesPerSlide, setImagesPerSlide] = useState(5);

  useEffect(() => {
    const updateImagesPerSlide = () => {
      if (window.innerWidth < 640) setImagesPerSlide(1);
      else if (window.innerWidth < 768) setImagesPerSlide(2);
      else if (window.innerWidth < 1024) setImagesPerSlide(3);
      else if (window.innerWidth < 1280) setImagesPerSlide(4);
      else setImagesPerSlide(5);
    };
    updateImagesPerSlide();
    window.addEventListener('resize', updateImagesPerSlide);
    return () => window.removeEventListener('resize', updateImagesPerSlide);
  }, []);

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

  const getImageWidthClass = () => {
    if (imagesPerSlide === 1) return 'w-full';
    if (imagesPerSlide === 2) return 'w-1/2';
    if (imagesPerSlide === 3) return 'w-1/3';
    if (imagesPerSlide === 4) return 'w-1/4';
    return 'w-1/5';
  };

  return (
    <div data-aos="fade-up" className="p-2 sm:p-3 bg-[#00BCD4] rounded-2xl mb-6 shadow-md">
      <div className="relative w-full bg-white p-4 sm:p-5 rounded-xl overflow-hidden">
        <h2
          data-aos="fade-right"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a2d4d] mb-2 sm:mb-3 text-center select-none"
        >
          Invitan
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full mx-auto mb-3" />

        <div
          className="flex cursor-grab select-none"
          style={containerStyle}
          data-aos="fade-left"
        >
          {infiniteImages.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${getImageWidthClass()} px-2 sm:px-3`}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <div className="relative bg-white rounded-xl overflow-hidden ring-1 ring-cyan-200 hover:scale-[1.04] transition-transform duration-300 ease-in-out">
                <a
                  href={image.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 object-contain"
                    loading="lazy"
                  />
                </a>
                {image.alt && (
                  <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-[#0a2d4d]/90">
                    <p
                      className="text-[#00BCD4] text-center text-xs sm:text-sm font-medium truncate"
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
          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 text-[#00BCD4] w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-[#00BCD4] hover:bg-[#00BCD4] hover:text-white transition duration-300 flex items-center justify-center font-bold text-lg"
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
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 text-[#00BCD4] w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-[#00BCD4] hover:bg-[#00BCD4] hover:text-white transition duration-300 flex items-center justify-center font-bold text-lg"
          aria-label="Siguiente"
          type="button"
        >
          &#8250;
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.slice(0, imagesPerSlide).map((_, index) => {
            const isActive = index === currentIndex % imagesPerSlide;
            return (
              <span
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition-transform duration-300 ${
                  isActive ? 'bg-[#00BCD4] scale-125' : 'bg-[#e0f7fa]'
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
