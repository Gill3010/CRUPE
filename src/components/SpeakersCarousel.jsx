// ... (importaciones sin cambios)
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, } from 'lucide-react';
import { SiOrcid } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Imágenes importadas
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
    topic: "Icuali en la Divulgación ...",
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
    cardHeight: 600,
    visibleCards: 5
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ cardWidth: 280, cardHeight: 'auto', visibleCards: 1 });
      } else {
        setDimensions({ cardWidth: 320, cardHeight: 600, visibleCards: 5 });
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
   <div className="text-center mb-6 md:mb-10" data-aos="fade-up" data-aos-delay="100">
  <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-slate-800 tracking-tight">
    Ponentes del Congreso
  </h2>

  <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full mt-2 mx-auto"></div>
</div>
      <div className="relative w-full h-[700px] md:h-[750px] flex items-center justify-center overflow-hidden bg-gray-50 px-4 md:px-8 mb-20" data-aos="fade-up">
        <button 
          className="absolute left-2 z-30 bg-white border-2 border-cyan-400 rounded-full p-1.5 hover:bg-cyan-400 hover:text-white transition-all" 
          onClick={prevSlide} 
          aria-label="Ponente anterior"
        >
          <ChevronLeft size={34} className="text-cyan-400 hover:text-white" />
        </button>

        <button 
          className="absolute right-2 z-30 bg-white border-2 border-cyan-400 rounded-full p-1.5 hover:bg-cyan-400 hover:text-white transition-all" 
          onClick={nextSlide} 
          aria-label="Ponente siguiente"
        >
          <ChevronRight size={34} className="text-cyan-400 hover:text-white" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
            {speakers.map((speaker, index) => {
              const style = getCardStyle(index);
              return (
                <div
                  key={speaker.id}
                  className={`absolute top-0 bg-white border-2 border-cyan-400 rounded-2xl flex flex-col items-center justify-start transition-all duration-300 ${index === currentIndex ? 'z-10' : 'z-0'}`}
                  style={{ 
                    ...style, 
                    width: `${cardWidth}px`, 
                    height: cardHeight === 'auto' ? 'auto' : `${cardHeight}px`, 
                    padding: '24px' 
                  }}
                >
                  <div className="relative mb-4 w-full flex justify-center">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="rounded-full w-[180px] h-[180px] object-contain bg-white border-4 border-cyan-400" 
                      loading="lazy" 
                    />
                    <div className="absolute -bottom-2 -right-2 bg-cyan-400 text-slate-900 rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-center text-slate-900">
                    {speaker.name}
                  </h3>
                  
                  <p className="text-sm text-slate-600 font-medium mb-1 text-center">
                    <span className="text-xl mr-1">{speaker.flag}</span>
                    {speaker.country}
                  </p>

                  {speaker.orcid && (
                    <a 
                      href={`https://orcid.org/${speaker.orcid}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center space-x-1 text-cyan-400 hover:text-slate-900 text-sm mt-1 hover:underline mb-2"
                    >
                      <SiOrcid className="text-base" />
                      <span>ORCID</span>
                    </a>
                  )}

                  <div className="flex-1 flex items-start justify-center mb-3">
                    <p className="text-sm font-light text-slate-600 text-center leading-relaxed overflow-hidden" 
                       style={{ 
                         display: '-webkit-box',
                         WebkitLineClamp: 2,
                         WebkitBoxOrient: 'vertical',
                         minHeight: '1.2rem',
                         maxHeight: '2.6rem'
                       }}>
                      {speaker.topic}
                    </p>
                  </div>

                  <div className="w-full h-px bg-slate-300 my-2" />

                  {speaker.audio && (
                    <div className="w-full mb-3">
                      <div className="bg-slate-50 rounded-xl p-2 border border-slate-200">
                        <audio controls className="w-full h-8 rounded" preload="none">
                          <source src={speaker.audio} type="audio/mpeg" />
                          Tu navegador no soporta el elemento de audio.
                        </audio>
                        <div className="flex items-center justify-center mt-1 text-xs text-slate-600">
                          <Play className="w-3 h-3 mr-1" />
                          <span>Audio de la presentación</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <a
                    href={speaker.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto px-5 py-2 bg-cyan-400 hover:bg-slate-900 text-slate-900 hover:text-cyan-400 border-2 border-cyan-400 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Ver detalles ✨
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-center mb-10" data-aos="fade-up" data-aos-delay="200">
  <a
    href="/_events/tipo-participacion"
    className="inline-block px-6 py-2.5 bg-cyan-400 hover:bg-slate-900 text-slate-900 hover:text-cyan-400 border-2 border-cyan-400 font-black rounded-xl hover:scale-105 transition-all duration-300 text-sm md:text-base"
  >
    🚀 ¿Quieres participar? ¡Inscríbete!
  </a>
</div>
    </div>
  );
};

export default SpeakersCarousel;










