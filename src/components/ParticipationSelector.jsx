import { useEffect } from 'react';
import { Users, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Cambia por <a> si no usas React Router

const ParticipationSelector = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.aos-animate');
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4 rounded-3xl shadow-xl border border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="aos-animate">
          <h1 className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            ¿Cómo deseas participar?
          </h1>
          <p className="text-lg text-gray-300">
            Elige tu modalidad de inscripción para el congreso
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 aos-animate">
          {/* Asistente */}
          <button
            onClick={() => navigate('/asistencia')}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm border border-white/20 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-center gap-3 text-lg">
              <Users className="w-5 h-5" />
              Asistente
            </div>
          </button>

          {/* Otra participación */}
          <button
            onClick={() => navigate('/inscripcion')}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm border border-white/20 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-center gap-3 text-lg">
              <FileText className="w-5 h-5" />
              Tipos de participación
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticipationSelector;