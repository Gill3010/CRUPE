import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CongressCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date('2025-09-25T00:00:00');

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      offset: 30,    // Se activa antes, ideal para móvil
      disable: false // Asegura animaciones activas en móvil
    });

    // Forzar recalculo de posiciones
    setTimeout(() => {
      AOS.refresh();
    }, 100);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeCard = ({ value, label, icon, isSeconds }) => (
    <div className={`bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl p-4 md:p-6 shadow-2xl shadow-blue-500/25 border border-white/20 backdrop-blur-sm transform hover:scale-105 hover:shadow-blue-400/40 transition-all duration-300 ${isSeconds ? 'animate-pulse' : ''}`}>
      <div className="text-center">
        <div className="text-2xl mb-2 opacity-80">{icon}</div>
        <div className="text-4xl md:text-5xl font-black text-white mb-2 transition-all duration-500">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-blue-100 uppercase tracking-widest font-light">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-indigo-50/50 rounded-3xl -z-10"></div>

      <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          III Encuentro de Investigaciones Cualitativas 2025
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-light">
          25, 26 y 27 de Septiembre, 2025
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="200">
        <TimeCard value={timeLeft.days} label="Días" icon="📅" />
        <TimeCard value={timeLeft.hours} label="Horas" icon="⏰" />
        <TimeCard value={timeLeft.minutes} label="Minutos" icon="⏱️" />
        <TimeCard value={timeLeft.seconds} label="Segundos" icon="⚡" isSeconds={true} />
      </div>

      <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="400">
        <div className="inline-block bg-gradient-to-r from-white to-gray-50 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 shadow-lg border border-gray-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
          <span className="text-gray-700 font-medium text-sm md:text-base">
            ⏰ Faltan{' '}
            <span className="font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes} minutos
            </span>{' '}
            para el evento
          </span>
        </div>
      </div>

      <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="600">
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-3">
            ¡No te lo pierdas!
          </h3>
          <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
            Prepárate para un evento extraordinario lleno de conocimiento e innovación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CongressCountdown;