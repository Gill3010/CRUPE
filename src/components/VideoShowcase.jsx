import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const videos = [
  {
    id: 1,
    title: "Diversidad cultural peruana",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video1.mp4`,
    thumbnail:
      "https://images.unsplash.com/photo-1568805647632-69f6deec1547?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "1:39",
    category: "Metodología",
  },
  {
    id: 2,
    title: "Biblioteca histórica encantadora",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video2.mp4`,
    thumbnail:
      "https://images.unsplash.com/photo-1672641797471-5cbd731aef07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVzZW8lMjBkZWwlMjBDb252ZW50byUyMGRlJTIwU2FuJTIwRnJhbmNpc2NvJTIweSUyMENhdGFjdW1iYXN8ZW58MHx8MHx8fDA%3D",
    duration: "1:23",
    category: "Análisis",
  },

  {
    id: 3,
    title: "Herencia incaica milenaria",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video4.mp4`,
    thumbnail:
      "https://images.unsplash.com/photo-1566793772361-1d5d9cefbd12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFMiU4MCVBMiUwOWRhbnphJTIwdHJhZGljaW9uYWwlMjBwZXJ1YW5hJTIwJTA5JUUyJTgwJUEyJTA5Zm9sa2xvcmUlMjBwZXJ1YW5vJTIwJTA5JUUyJTgwJUEyJTA5YmFpbGUlMjBhbmRpbm8lMjAlMDklRTIlODAlQTIlMDljdWx0dXJhJTIwcGVydSUyMCUwOSVFMiU4MCVBMiUwOXRyYWplJTIwdCVDMyVBRHBpY28lMjBwZXJ1YW5vJTIwJTA5JUUyJTgwJUEyJTA5Y3VzY28lMjBmZXN0aXZhbCUyMCUwOSVFMiU4MCVBMiUwOXB1bm8lMjBkYW56YXN8ZW58MHx8MHx8fDA%3D",
    duration: "1:14",
    category: "Investigaciones",
  },
  {
    id: 4,
    title: "Tradiciones ancestrales vivas",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video5.mp4`,
    thumbnail:
      "https://images.unsplash.com/photo-1647211103199-faa4cd24b4ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fCVFMiU4MCVBMiUwOWRhbnphJTIwdHJhZGljaW9uYWwlMjBwZXJ1YW5hJTIwJTA5JUUyJTgwJUEyJTA5Zm9sa2xvcmUlMjBwZXJ1YW5vJTIwJTA5JUUyJTgwJUEyJTA5YmFpbGUlMjBhbmRpbm8lMjAlMDklRTIlODAlQTIlMDljdWx0dXJhJTIwcGVydSUyMCUwOSVFMiU4MCVBMiUwOXRyYWplJTIwdCVDMyVBRHBpY28lMjBwZXJ1YW5vJTIwJTA5JUUyJTgwJUEyJTA5Y3VzY28lMjBmZXN0aXZhbCUyMCUwOSVFMiU4MCVBMiUwOXB1bm8lMjBkYW56YXN8ZW58MHx8MHx8fDA%3D",
    duration: "2:16",
    category: "Cualitativas",
  },
  {
    id: 5,
    title: "Música andina auténtica",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video6.mp4`,
    thumbnail:
      "https://images.unsplash.com/photo-1589682449071-d13c27d1c298?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1bHR1cmElMjBkZSUyMHBlciVDMyVCQXxlbnwwfHwwfHx8MA%3D%3D",
    duration: "2:16",
    category: "Cualitativas",
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollHorizontal = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 280; // menos espacio para tarjetas más compactas
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const VideoCard = ({ video }) => (
    <div
      className="group relative bg-[#0a2d4d] rounded-lg overflow-hidden border border-[#00bcd4] cursor-pointer flex-shrink-0 w-72 transition-transform duration-300 ease-out hover:scale-105"
      onClick={() => setSelectedVideo(video)}
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-[#00bcd4] rounded-full px-2 py-0.5">
          <span className="text-[#0a2d4d] text-xs font-semibold">{video.duration}</span>
        </div>
        <div className="absolute top-3 left-3 bg-[#00bcd4] rounded-full px-3 py-0.5">
          <span className="text-[#0a2d4d] text-xs font-semibold">{video.category}</span>
        </div>
        {/* Botón Play animado */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-[#00bcd4] rounded-full p-3 hover:scale-110 active:scale-95 transition-transform duration-300 ease-in-out">
            <Play className="w-6 h-6 text-[#0a2d4d]" />
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-white font-semibold text-lg mb-0.5 line-clamp-2">{video.title}</h3>
        <p className="text-[#00bcd4] text-sm leading-tight">{video.subtitle}</p>
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
    <div className="fixed inset-0 bg-[#0a2d4d]/90 z-50 flex items-center justify-center p-4">
      <div
        className="bg-[#0a2d4d] rounded-xl p-5 max-w-3xl w-full max-h-[85vh] overflow-auto"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#00bcd4] text-2xl font-bold">{video.title}</h2>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="text-[#00bcd4] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00bcd4] rounded"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="aspect-video bg-black rounded-md mb-4">
          <video
            controls
            className="w-full h-full rounded-md"
            preload="metadata"
            autoPlay
          >
            <source src={video.src} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
        <div className="text-[#ffffffcc] text-sm leading-relaxed space-y-2">
          <p>
            <strong className="text-[#00bcd4]">Título:</strong> {video.title}
          </p>
          <p>
            <strong className="text-[#00bcd4]">Duración:</strong> {video.duration}
          </p>
          <p>
            <strong className="text-[#00bcd4]">Categoría:</strong> {video.category}
          </p>
          <p>
            Esta presentación forma parte del III Congreso de Investigaciones
            Cualitativas, donde se exploraron metodologías innovadoras y enfoques
            contemporáneos en investigación.
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
      className="min-h-[65vh] bg-[#0a2d4d] relative overflow-hidden px-4 py-8 sm:px-6 md:px-10"
      data-aos="fade-in"
    >
      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-10 max-w-4xl mx-auto">
        <div
          className="inline-flex items-center justify-center w-16 h-16 bg-[#00bcd4] rounded-xl mb-5"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <span className="text-3xl">🎬</span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-white mb-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Perú: Cultura Milenaria y Cuna del III Congreso
        </h1>
        <p
          className="text-[#00bcd4] text-base sm:text-lg max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Conoce la sede del evento
        </p>
      </div>

      {/* Videos Scroll */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="relative max-w-full mx-auto"
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {videos.map((video) => (
            <div key={video.id} className="snap-start">
              <VideoCard video={video} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollHorizontal("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-[#00bcd4]/20 rounded-full p-2 text-[#0a2d4d] hover:bg-[#00bcd4]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
          data-aos="fade-right"
          data-aos-delay="600"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollHorizontal("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#00bcd4]/20 rounded-full p-2 text-[#0a2d4d] hover:bg-[#00bcd4]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
          data-aos="fade-left"
          data-aos-delay="600"
          aria-label="Scroll Right"
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
            className="w-2 h-2 rounded-full bg-[#00bcd4]/50 hover:bg-[#00bcd4]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
            onClick={() => {
              const container = scrollContainerRef.current;
              container.scrollTo({
                left: index * 280,
                behavior: "smooth",
              });
            }}
            aria-label={`Ir al video ${index + 1}`}
          />
        ))}
      </div>

      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
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

export default VideoGallery;
