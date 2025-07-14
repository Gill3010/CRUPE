import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const videos = [
  {
    id: 1,
    title: "Diversidad cultural peruana",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video1.mp4`,
    thumbnail: "https://images.unsplash.com/photo-1568805647632-69f6deec1547?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "1:39",
    category: "Metodología"
  },
  {
    id: 2,
    title: "Biblioteca histórica encantadora",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video2.mp4`,
    thumbnail: "https://images.unsplash.com/photo-1672641797471-5cbd731aef07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVzZW8lMjBkZWwlMjBDb252ZW50byUyMGRlJTIwU2FuJTIwRnJhbmNpc2NvJTIweSUyMENhdGFjdW1iYXN8ZW58MHx8MHx8fDA%3D",
    duration: "1:23",
    category: "Análisis"
  },
  
  {
    id: 3,
    title: "Herencia incaica milenaria",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video4.mp4`,
    thumbnail: "https://images.unsplash.com/photo-1566793772361-1d5d9cefbd12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFMiU4MCVBMiUwOWRhbnphJTIwdHJhZGljaW9uYWwlMjBwZXJ1YW5hJTIwJTA5JUUyJTgwJUEyJTA5Zm9sa2xvcmUlMjBwZXJ1YW5vJTIwJTA5JUUyJTgwJUEyJTA5YmFpbGUlMjBhbmRpbm8lMjAlMDklRTIlODAlQTIlMDljdWx0dXJhJTIwcGVydSUyMCUwOSVFMiU4MCVBMiUwOXRyYWplJTIwdCVDMyVBRHBpY28lMjBwZXJ1YW5vJTIwJTA5JUUyJTgwJUEyJTA5Y3VzY28lMjBmZXN0aXZhbCUyMCUwOSVFMiU4MCVBMiUwOXB1bm8lMjBkYW56YXN8ZW58MHx8MHx8fDA%3D",
    duration: "1:14",
    category: "Investigaciones"
  },
  {
    id: 4,
    title: "Tradiciones ancestrales vivas",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video5.mp4`,
    thumbnail: "https://images.unsplash.com/photo-1647211103199-faa4cd24b4ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fCVFMiU4MCVBMiUwOWRhbnphJTIwdHJhZGljaW9uYWwlMjBwZXJ1YW5hJTIwJTA5JUUyJTgwJUEyJTA5Zm9sa2xvcmUlMjBwZXJ1YW5vJTIwJTA5JUUyJTgwJUEyJTA5YmFpbGUlMjBhbmRpbm8lMjAlMDklRTIlODAlQTIlMDljdWx0dXJhJTIwcGVydSUyMCUwOSVFMiU4MCVBMiUwOXRyYWplJTIwdCVDMyVBRHBpY28lMjBwZXJ1YW5vJTIwJTA5JUUyJTgwJUEyJTA5Y3VzY28lMjBmZXN0aXZhbCUyMCUwOSVFMiU4MCVBMiUwOXB1bm8lMjBkYW56YXN8ZW58MHx8MHx8fDA%3D",
    duration: "2:16",
    category: "Cualitativas"
  },
  {
    id: 5,
    title: "Música andina auténtica",
    subtitle: "Ponencia del III Congreso",
    src: `${import.meta.env.BASE_URL}assets/Video6.mp4`,
    thumbnail: "https://images.unsplash.com/photo-1589682449071-d13c27d1c298?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1bHR1cmElMjBkZSUyMHBlciVDMyVCQXxlbnwwfHwwfHx8MA%3D%3D",
    duration: "2:16",
    category: "Cualitativas"
  }
  
];

const VideoGallery = () => {
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
    className="group relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl cursor-pointer flex-shrink-0 w-80 transition-all duration-700 ease-out hover:scale-105 hover:shadow-3xl hover:border-white/40"
    onClick={() => setSelectedVideo(video)}
    data-aos="zoom-in"
    data-aos-delay="200"
  >
    <div className="relative">
      <img 
        src={video.thumbnail} 
        alt={video.title}
        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
        <span className="text-white text-xs font-medium">{video.duration}</span>
      </div>
      <div className="absolute top-4 left-4 bg-blue-500/90 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-white text-xs font-semibold">{video.category}</span>
      </div>
      {/* Botón de Play animado */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out shadow-lg"
        >
          <Play className="w-8 h-8 text-white drop-shadow-md" />
        </div>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">{video.title}</h3>
      <p className="text-white/70 text-sm">{video.subtitle}</p>
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
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto" data-aos="fade-up" data-aos-duration="400">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">{video.title}</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
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
        <div className="text-white/80">
          <p className="mb-2"><strong>Título:</strong> {video.title}</p>
          <p className="mb-2"><strong>Duración:</strong> {video.duration}</p>
          <p className="mb-4"><strong>Categoría:</strong> {video.category}</p>
          <p className="text-sm">
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
    <div className="min-h-[70vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden" data-aos="fade-in">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.1),transparent_30%,rgba(147,51,234,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
            <span className="text-3xl">🎬</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4" data-aos="fade-up" data-aos-delay="200">
            Perú: Cultura Milenaria y Cuna del III Congreso
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            Conoce la sede del evento
          </p>
        </div>

        {/* Videos Scroll */}
        <div data-aos="fade-up" data-aos-delay="400" className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          >
            {videos.map((video) => (
              <div key={video.id} className="snap-start">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollHorizontal('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollHorizontal('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center mt-8 gap-2">
          {videos.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors cursor-pointer"
              onClick={() => {
                const container = scrollContainerRef.current;
                container.scrollTo({
                  left: index * 320,
                  behavior: 'smooth'
                });
              }}
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

export default VideoGallery;