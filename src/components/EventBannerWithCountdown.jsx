import { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Users } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const EventBannerWithCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = new Date('2025-09-25T08:30:00');

  useEffect(() => {
    AOS.init({ once: false, duration: 1000, offset: 30 });
    setTimeout(() => AOS.refresh(), 100);

    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const TimeCard = ({ value, label, icon, isSeconds }) => (
    <div className={`bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl p-4 md:p-6 shadow-2xl border border-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${isSeconds ? 'animate-pulse' : ''}`}>
      <div className="text-center">
        <div className="text-2xl mb-2">{icon}</div>
        <div className="text-4xl md:text-5xl font-black text-white mb-2">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-blue-100 uppercase tracking-widest font-light">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="event-banner">
      {/* Video de fondo */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" src="/assets/Video.mp4" />

      {/* Partículas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: ['#ffffff', '#a78bfa', '#60a5fa'] },
            shape: { type: 'circle' },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.6, direction: 'none', outMode: 'bounce' }
          }
        }}
      />

      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-800" />

      {/* Contenido */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-8 py-12 text-center text-white">

       {/* Icono */}
<div className="mt-8 mb-6 relative inline-block">  {/* ← agregado mt-8 */}
  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl scale-150"></div>
  <Users size={80} className="relative mx-auto drop-shadow-2xl" />
</div>

        {/* Subtítulo explicativo */}
        <h3 className="text-base md:text-lg text-white opacity-85 mb-2 font-medium tracking-wide">
          Encuentro Internacional Híbrido
        </h3>

        {/* Título y descripción */}
       <h1 className="text-4xl md:text-6xl font-black mb-2 drop-shadow-lg bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
  Tercer Encuentro de Investigaciones Cualitativas
</h1>
      <h2 className="text-xl md:text-3xl font-light mb-4 opacity-90 drop-shadow-md">
  <span className="font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
    Tema:
  </span>{' '}
  Las TIC e Inteligencia Artificial en la investigación cualitativa
</h2>

<p className="text-sm md:text-lg max-w-2xl mx-auto leading-relaxed opacity-85 drop-shadow-sm mb-4">
  <span className="font-semibold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
    Lema:
  </span>{' '}
  Innovando la comprensión: TIC e Inteligencia Artificial al servicio de la investigación cualitativa.
</p>

        {/* Modalidad */}
<p className="text-white/80 text-sm md:text-base italic mb-8">
  <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">
    Modalidad:
  </span>{" "}
  Híbrida · Transmisión en vivo disponible
</p>

       {/* Info del evento */}
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-3xl mx-auto mb-8 shadow-lg">
  <div className="grid md:grid-cols-2 gap-4 text-left">
    {/* Ubicación con icono 📍 */}
    <div className="col-span-2">
      <span className="text-sm font-semibold">
        📍 <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Ubicación:</span>
      </span><br />
      <span className="text-base md:text-lg font-medium">
        Universidad Nacional Enrique Guzmán y Valle — Escuela de Posgrado (calle Los Agrícolas n.º 280, urb. Las Acacias, La Molina), Lima, Perú 🇵🇪
      </span>
    </div>

    {/* Fecha 📅 */}
    <div>
      <span className="text-sm font-semibold">
        📅 <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Fecha:</span>
      </span><br />
      <span className="text-base md:text-lg font-medium">
        25, 26 y 27 de septiembre de 2025
      </span>
    </div>

    {/* Hora 🕒 */}
    <div>
      <span className="text-sm font-semibold">
        🕒 <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Hora:</span>
      </span><br />
      <span className="text-base md:text-lg font-medium">
        8:30 AM (hora local)
      </span>
    </div>
  </div>
</div>

<hr className="w-1/2 border-white/30 my-6" />

        {/* Cuenta regresiva */}
        <p className="text-white text-base md:text-lg font-medium mb-4" data-aos="fade-up" data-aos-delay="150">
          📅 El evento comienza en:
        </p>

        <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8" data-aos="fade-up" data-aos-delay="200">
          <TimeCard value={timeLeft.days} label="Días" icon="📅" />
          <TimeCard value={timeLeft.hours} label="Horas" icon="⏰" />
          <TimeCard value={timeLeft.minutes} label="Minutos" icon="⏱️" />
          <TimeCard value={timeLeft.seconds} label="Segundos" icon="⚡" isSeconds />
        </div>

       {/* Frase motivadora */}
<div
  className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 mb-10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
  data-aos="fade-up"
  data-aos-delay="600"
>
  <h3 className="text-xl md:text-2xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-3">
    ¡No te lo pierdas!
  </h3>
  <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
    Prepárate para un evento extraordinario lleno de conocimiento e innovación.
  </p>
</div>

{/* Botón de inscripción */}
<a
  href="/_events/inscripcion"
  data-aos="fade-up"
  data-aos-delay="700"
  className="px-8 py-3 bg-white/25 backdrop-blur-sm border-2 border-white/40 text-white rounded-full hover:bg-white/35 transition-all duration-300 font-semibold text-lg transform hover:scale-105 shadow-lg hover:shadow-xl"
>
  🚀 ¡INSCRÍBETE YA!
</a>

      
      </div>
    </div>
  );
};

export default EventBannerWithCountdown;