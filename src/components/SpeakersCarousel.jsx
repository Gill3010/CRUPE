import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Headphones, Volume2 } from 'lucide-react';
import { SiOrcid } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Farnum from '/assets/Farnum.jpeg';
import Honorio from '/assets/Honorio.jpeg';
import Sosimo from '/assets/Sosimo.jpeg';
import Monica from '/assets/Monica.jpeg';
import Larico from '/assets/Larico.png';
import Juana from '/assets/JuanaB.jpeg';
import Wilfredo from '/assets/Wilfredo.jpeg';
import Claudia from '/assets/Claudia.jpeg';
import Antonio from '/assets/Antonio.png';
import Rita from '/assets/Rita.jpeg';
import Silverio from '/assets/Silverio.jpeg';

const speakers = [
  {
    id: 1,
    name: "Dr. Francisco Farnum",
    topic: "Diseños Metodológicos para Investigaciones Cualitativas",
    image: Farnum,
    orcid: "0000-0002-5879-2296",
    country: "Panamá",
    flag: "🇵🇦",
    pdf: "/_events/pdfs/PonenciaFarnum.pdf",
    audio: "/_events/audios/audio.mp3"
  },
  {
    id: 2,
    name: "Dr. Honorio Bustillos",
    topic: "Fundamentos Críticos para una Investigación...",
    image: Honorio,
    orcid: "0000-0001-9523-7569",
    country: "Perú",
    flag: "🇵🇪",
    pdf: "/_events/pdfs/PonenciaHonorio.pdf",
    audio: "/_events/audios/audio.mp3"
  },
  {
    id: 3,
    name: "Dra. Mónica Contreras",
    topic: "Icuali en la Divulgación del Conocimiento Científico",
    image: Monica,
    orcid: "0000-0003-0972-6951",
    country: "Panamá",
    flag: "🇵🇦",
    pdf: "/_events/pdfs/PonenciaMonica.pdf",
    audio: "/_events/audios/audio.mp3"
  },
  {
    id: 4,
    name: "Dra. Carol Larico",
    topic: "Mitos de la Investigación Cualitativa",
    image: Larico,
    orcid: "0000-0001-6889-2234",
    country: "Perú",
    flag: "🇵🇪",
    pdf: "/_events/pdfs/PonenciaLarico.pdf",
    audio: "/_events/audios/audio.mp3"
  },
  {
    id: 5,
    name: "Dr. Sósimo Poma",
    topic: "Tecnologías Emergentes para la Interpretación Cualitativa...",
    image: Sosimo,
    orcid: "0000-0002-5999-5212",
    country: "Perú",
    flag: "🇵🇪",
    pdf: "/_events/pdfs/PonenciaSosimo.pdf",
    audio: "/_events/audios/audio.mp3"  
  },
  {
    id: 6,
    name: "Dra. Juana Bobadilla",
    topic: "Percepciones y Emociones de los Estudiantes Frente...",
    image: Juana,
    orcid: "0000-0003-3191-4393",
    country: "Perú",
    flag: "🇵🇪",
    pdf: "/_events/pdfs/PonenciaJuana.pdf",
    audio: "/_events/audios/audio.mp3"
  },
  {
    id: 7,
    name: "Dr. Wilfredo David",
    topic: "Autodivulgación Científica: Construye tu Marca...",
    image: Wilfredo,
    orcid: "0000-0002-8478-6738",
    country: "Perú",
    flag: "🇵🇪",
    pdf: "/_events/pdfs/PonenciaWilfredo.pdf",
    audio: "/_events/audios/audio.mp3"
  },
  {
    id: 8,
    name: "Dra. Claudia Figueroa",
    topic: "Ciencias Sociales en Acción: relatos de Aula y ...",
    image: Claudia,
    orcid: "0000-0003-4185-2923",
    country: "Colombia",
    flag: "🇨🇴",
    pdf: "/_events/pdfs/PonenciaClaudia.pdf",
    audio: "/_events/audios/audio.mp3"
  },
  {
    id: 9,
    name: " Dr. Antonio Montoya",
    topic: "Tema pendiente",
    image: Antonio,
    orcid: "0000-0003-4597-3976",
    country: "Perú",
    flag: "🇵🇪",
    pdf: "/_events/pdfs/PonenciaAntonio.pdf",
    audio: "/_events/audios/audio.mp3"
  },
  {
    id: 10,
    name: "Dra. Rita de Cassia",
    topic: "Impacto de la virtualidad en la Educación superior...",
    image: Rita,
    orcid: "0000-0002-0137-6005",
    country: "Brasil",
    flag: "🇧🇷",
    pdf: "/_events/pdfs/PonenciaRita.pdf",
    audio: "/_events/audios/audio.mp3"
  },
  {
    id: 11,
    name: "Dr. Silverio Limacho",
    topic: "Comisión Organizadora",
    image: Silverio,
    orcid: "0000-0001-9627-1750",
    country: "Bolivia",
    flag: "🇧🇴",
    pdf: "/_events/pdfs/PonenciaSilverio.pdf",
    audio: "/_events/audios/audio.mp3"
  }
];

const SpeakersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dimensions, setDimensions] = useState({
    cardWidth: 320,
    cardHeight: 680,
    visibleCards: 5
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ cardWidth: 280, cardHeight: 'auto', visibleCards: 1 });
      } else {
        setDimensions({ cardWidth: 320, cardHeight: 680, visibleCards: 5 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    AOS.init({ once: false, duration: 1000, offset: 50, disable: false, mirror: true, anchorPlacement: 'top-bottom' });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getCardStyle = (index) => {
    const { cardWidth, visibleCards } = dimensions;
    const totalCards = speakers.length;
    const centerIndex = currentIndex;
    let position = (index - centerIndex + totalCards) % totalCards;

    if (position > totalCards / 2) {
      position -= totalCards;
    }

    if (Math.abs(position) > Math.floor(visibleCards / 2)) {
      return { display: 'none' };
    }

    const distanceFromCenter = Math.abs(position);
    const isCenter = position === 0;
    const spacing = cardWidth * 0.85;
    const scale = isCenter ? 1 : (1 - distanceFromCenter * 0.08);

    return {
      transform: isCenter
        ? 'translateX(0) scale(1)'
        : `translateX(${position * spacing}px) scale(${scale})`,
      opacity: 1 - distanceFromCenter * 0.25,
      zIndex: visibleCards - distanceFromCenter,
      transition: 'transform 0.6s ease, opacity 0.6s ease',
      position: 'absolute',
      left: '50%',
      marginLeft: `-${cardWidth / 2}px`
    };
  };

  const { cardWidth, cardHeight } = dimensions;

  return (
    <div className="w-full">
      <div className="text-center mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
        <div className="inline-block text-center">
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-0 pb-1">
            Ponentes del Congreso
          </h2>
          <div className="w-full h-1 mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full shadow-2xl shadow-blue-500/25"></div>
        </div>
      </div>

      <div className="relative w-full h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-indigo-50/50 mb-28 px-8" data-aos="fade-up">
        <button 
          className="absolute left-4 z-30 cursor-pointer bg-white rounded-full p-2 shadow-lg hover:bg-purple-50 transition-all" 
          onClick={prevSlide} 
          aria-label="Ponente anterior"
        >
          <ChevronLeft size={40} className="text-purple-700" />
        </button>
        <button 
          className="absolute right-4 z-30 cursor-pointer bg-white rounded-full p-2 shadow-lg hover:bg-purple-50 transition-all" 
          onClick={nextSlide} 
          aria-label="Ponente siguiente"
        >
          <ChevronRight size={40} className="text-purple-700" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
            {speakers.map((speaker, index) => {
              const style = getCardStyle(index);
              return (
                <div
                  key={speaker.id}
                  className={`absolute top-0 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-start transition-all duration-300 ${index === currentIndex ? 'z-10' : 'z-0'}`}
                  style={{ 
                    ...style, 
                    width: `${cardWidth}px`, 
                    height: cardHeight === 'auto' ? 'auto' : `${cardHeight}px`, 
                    padding: '28px' 
                  }}
                >
                  {/* Foto del ponente */}
                  <div className="relative mb-6 w-full flex justify-center">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="rounded-full w-[220px] h-[220px] object-contain bg-white border-4 border-purple-100 shadow-md" 
                      loading="lazy" 
                    />
                    <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Información del ponente */}
                  <h3 className="text-2xl font-black text-purple-900 mb-3 text-center">
                    {speaker.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 font-medium mb-2 text-center">
                    <span className="text-2xl mr-1">{speaker.flag}</span>
                    {speaker.country}
                  </p>

                  {/* ORCID */}
                  {speaker.orcid && (
                    <a 
                      href={`https://orcid.org/${speaker.orcid}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center space-x-1 text-green-600 text-sm mt-1 hover:underline mb-3"
                    >
                      <SiOrcid className="text-base" />
                      <span>ORCID</span>
                    </a>
                  )}

                  {/* Tema de la ponencia */}
                  <div className="flex-1 flex items-start justify-center mb-4">
                    <p className="text-sm font-light text-gray-600 text-center leading-relaxed overflow-hidden" 
                       style={{ 
                         display: '-webkit-box',
                         WebkitLineClamp: 2,
                         WebkitBoxOrient: 'vertical',
                         minHeight: '1.2rem',
                         maxHeight: '2.8rem'
                       }}>
                      {speaker.topic}
                    </p>
                  </div>

                  {/* Separador */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-3"></div>

                  {/* Sección de audio mejorada */}
                  {speaker.audio && (
                    <div className="w-full mb-4">
                      {/* Header del audio */}
                      <div className="flex items-center justify-center mb-3 px-3 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
                        <Headphones className="w-4 h-4 text-purple-600 mr-2" />
                        <span className="text-sm font-semibold text-purple-800">
                          Escucha la ponencia
                        </span>
                        <Volume2 className="w-4 h-4 text-purple-600 ml-2" />
                      </div>
                      
                      {/* Reproductor de audio personalizado */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200 shadow-inner">
                        <audio
                          controls
                          className="w-full h-8 rounded-lg"
                          preload="none"
                          style={{
                            filter: 'sepia(20%) saturate(70%) hue-rotate(200deg) brightness(1.1)',
                          }}
                        >
                          <source src={speaker.audio} type="audio/mpeg" />
                          Tu navegador no soporta el elemento de audio.
                        </audio>
                        
                        {/* Indicador visual adicional */}
                        <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
                          <Play className="w-3 h-3 mr-1" />
                          <span>Audio de la presentación</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Botón de acción */}
                  <a
                    href={speaker.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto px-6 py-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
                  >
                    Ver detalles ✨
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
       
      <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
        <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-purple-900 font-black rounded-xl shadow-xl hover:shadow-yellow-400/50 hover:scale-105 transition-all duration-300 text-sm md:text-base">
          🚀 ¿Quieres participar? ¡Inscríbete!
        </button>
      </div>
    </div>
  );
};

export default SpeakersCarousel;