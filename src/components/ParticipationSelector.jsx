import { useEffect } from 'react';
import { Users, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    <div className="bg-[#0f172a] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Header */}
        <div className="aos-animate mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00BCD4] mb-4">
            ¿Cómo deseas participar?
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Elige tu modalidad de inscripción para el congreso
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 aos-animate">

          {/* Asistente */}
          <button
            onClick={() => navigate('/asistencia')}
            className="bg-[#00BCD4] text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-white hover:text-[#0a2d4d] transition"
            style={{ minWidth: '180px' }}
          >
            <Users className="w-5 h-5" />
            Asistente
          </button>

          {/* Otra participación */}
          <button
            onClick={() => navigate('/inscripcion')}
            className="bg-white text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-[#00BCD4] hover:text-[#0a2d4d] transition"
            style={{ minWidth: '180px' }}
          >
            <FileText className="w-5 h-5" />
            Tipos de participación
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticipationSelector;
