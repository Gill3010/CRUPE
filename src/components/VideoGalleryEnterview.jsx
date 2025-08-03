import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const videos = [
  {
    id: 7,
    title: "Conducción de entrevistas",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video7.mp4`,
    thumbnail: "https://plus.unsplash.com/premium_photo-1684769160411-ab16f414d1bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW50cmV2aXN0YXN8ZW58MHx8MHx8fDA%3D",
    duration: "1:39",
    category: "Diálogo"
  },
  {
    id: 8,
    title: "Guía de preguntas",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video8.mp4`,
    thumbnail: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW50cmV2aXN0YXN8ZW58MHx8MHx8fDA%3D",
    duration: "1:23",
    category: "Conversación"
  },
  {
    id: 9,
    title: "Entrevista en profundidad",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video9.mp4`,
    thumbnail: "https://images.unsplash.com/photo-1745848413060-0827ec268cda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZW50cmV2aXN0YXN8ZW58MHx8MHx8fDA%3D",
    duration: "1:43",
    category: "Congreso"
  },
  {
    id: 10,
    title: "Registro de respuestas",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video10.mp4`,
    thumbnail: "https://images.unsplash.com/photo-1497015289639-54688650d173?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW50cmV2aXN0YXN8ZW58MHx8MHx8fDA%3D",
    duration: "1:14",
    category: "Intercambio"
  },
  {
    id: 5,
    title: "Análisis del discurso",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video3.mp4`,
    thumbnail: "https://media.istockphoto.com/id/2191361301/photo/elderly-people-receiving-sales-from-businessmen.webp?a=1&b=1&s=612x612&w=0&k=20&c=pcTa2oFJY74y09nvVyyak5nemDaKp8sBg6sC17-zogU=",
    duration: "2:16",
    category: "Coloquio"
  }
];

const VideoGalleryEnterview = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollHorizontal = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 320;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const VideoCard = ({ video }) => (
    <div
      className="group relative bg-[#00BCD4]/10 rounded-2xl overflow-hidden border border-[#00BCD4]/40 cursor-pointer flex-shrink-0 w-72 transition-transform duration-300 ease-out hover:scale-105 border-solid"
      onClick={() => setSelectedVideo(video)}
      data-aos="zoom-in"
      data-aos-delay="200"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedVideo(video); }}
      aria-label={`Abrir video: ${video.title}`}
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-[#0a2d4d] rounded-full px-2 py-0.5">
          <span className="text-white text-xs font-medium">{video.duration}</span>
        </div>
        <div className="absolute top-3 left-3 bg-[#00BCD4] rounded-full px-3 py-0.5">
          <span className="text-[#0a2d4d] text-xs font-semibold">{video.category}</span>
        </div>
        {/* Botón de Play animado */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="bg-[#00BCD4]/30 rounded-full p-3 hover:scale-110 active:scale-95 transition-transform duration-300 ease-in-out"
          >
            <Play className="w-7 h-7 text-[#0a2d4d]" />
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-[#ffffff] font-semibold text-lg mb-0.5 line-clamp-2">{video.title}</h3>
        <p className="text-[#ffffffcc] text-sm">{video.subtitle}</p>
      </div>
    </div>
  );

  VideoCard.propTypes = {
    video: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  };

  const VideoModal = ({ video, onClose }) => (
    <div className="fixed inset-0 bg-[#0a2d4d]/95 flex items-center justify-center p-4 z-50">
      <div
        className="relative bg-[#0a2d4d] rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        {/* Botón Cerrar absoluto */}
        <button
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute top-4 right-4 text-white hover:text-[#00BCD4] focus:outline-none focus:ring-2 focus:ring-[#00BCD4] z-[100]"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-white text-2xl font-bold mb-3">{video.title}</h2>

        <div className="aspect-video bg-black rounded-xl mb-4">
          <video
            controls
            className="w-full h-full rounded-xl"
            preload="metadata"
            autoPlay
          >
            <source src={video.src} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
        <div className="text-white">
          <p className="mb-1"><strong>Título:</strong> {video.title}</p>
          <p className="mb-1"><strong>Duración:</strong> {video.duration}</p>
          <p className="mb-3"><strong>Categoría:</strong> {video.category}</p>
          <p className="text-sm leading-relaxed">
            Esta presentación forma parte del III Congreso de Investigaciones Cualitativas, 
            donde se exploraron metodologías innovadoras y enfoques contemporáneos en investigación.
          </p>
        </div>
      </div>
    </div>
  );

  VideoModal.propTypes = {
    video: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
  };

  return (
   <div
  className="min-h-[70vh] bg-[#0f172a] relative overflow-hidden"
  data-aos="fade-in"
>
      <div className="relative z-10 p-6 sm:p-8">
        {/* Header */}
   <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
  <div
    className="inline-flex items-center justify-center w-16 h-16 bg-[#00BCD4] rounded-2xl mb-5 select-none"
    data-aos="zoom-in"
    data-aos-delay="100"
  >
    <span className="text-3xl">🎬</span>
  </div>

  <h2
    className="text-xl sm:text-2xl lg:text-2xl font-bold text-white tracking-tight"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    Entrevistas del III Congreso
  </h2>

  <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full mt-2 mx-auto"></div>

  <p
    className="text-lg sm:text-xl text-white max-w-2xl mx-auto mt-4"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    Ver entrevistas
  </p>
</div>

        {/* Videos Scroll */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="relative"
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-3 snap-x snap-mandatory"
          >
            {videos.map((video) => (
              <div key={video.id} className="snap-start">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollHorizontal('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#00BCD4]/30 rounded-full p-2 text-[#0a2d4d] hover:bg-[#00BCD4]/50 transition-colors"
            data-aos="fade-right"
            data-aos-delay="600"
            aria-label="Desplazar videos a la izquierda"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollHorizontal('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00BCD4]/30 rounded-full p-2 text-[#0a2d4d] hover:bg-[#00BCD4]/50 transition-colors"
            data-aos="fade-left"
            data-aos-delay="600"
            aria-label="Desplazar videos a la derecha"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex justify-center mt-6 gap-2"
        >
          {videos.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-[#00BCD4]/40 hover:bg-[#00BCD4]/70 transition-colors"
              onClick={() => {
                const container = scrollContainerRef.current;
                container.scrollTo({
                  left: index * 288,
                  behavior: 'smooth'
                });
              }}
              aria-label={`Ir al video ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default VideoGalleryEnterview;
