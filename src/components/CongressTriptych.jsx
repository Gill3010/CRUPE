import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CongressTriptych = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      offset: 50,
      disable: false,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 min-h-screen relative" data-aos="fade-up">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-indigo-50/50 rounded-3xl -z-10"></div>

      {/* Tríptico Container */}
      <div className="bg-white/90 backdrop-blur-sm shadow-2xl shadow-blue-500/20 rounded-2xl overflow-visible md:min-h-[800px] border border-white/20" data-aos="fade-up" data-aos-delay="200">
        <div className="flex flex-col md:flex-row min-h-full">

          {/* Panel Izquierdo - REORGANIZADO */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white p-6 md:p-8 relative hover:shadow-2xl hover:shadow-blue-400/40 hover:scale-[1.02] transition-all duration-300 border-r border-white/10" data-aos="fade-up" data-aos-delay="300">
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-blue-700 border-b-[30px] border-b-transparent opacity-80"></div>
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🎓</div>
              <h1 className="text-2xl md:text-3xl font-black mb-3 tracking-wide">III ENCUENTRO</h1>
              <h2 className="text-lg md:text-xl font-light mb-4 tracking-wider">INVESTIGACIONES CUALITATIVAS</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mb-4 rounded-full shadow-lg"></div>
            </div>
            <div className="space-y-6 text-sm md:text-base leading-relaxed">
              <p className="backdrop-blur-sm bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 rounded-xl p-4 border border-yellow-300/30">
                <span className="font-black text-yellow-300">🤖 Tema central:</span> "Las <span className="font-bold">TIC e Inteligencia Artificial</span> en la Investigación Cualitativa"
              </p>
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
                <h4 className="font-black text-yellow-300 mb-3 flex items-center">
                  <span className="mr-2">🎯</span> Objetivo General
                </h4>
                <p className="leading-relaxed">
                  Promover el intercambio de experiencias en investigación, docencia y desarrollo tecnológico, 
                  con énfasis en la transformación educativa mediante TIC e IA.
                </p>
              </div>
              <p className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
                📚 Los invitamos a interactuar y dialogar en el III Encuentro de Investigaciones Cualitativas. 
                Dirigido a especialistas en investigación cualitativa, metodología científica, educadores, 
                pedagogos, líderes de proyectos, científicos de la educación y tomadores de decisiones.
              </p>
            </div>
          </div>

          {/* Panel Central - REORGANIZADO */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm p-6 md:p-8 border-x border-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📋</div>
              <h2 className="text-xl md:text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">PARTICIPACIÓN</h2>
              <h3 className="text-lg md:text-xl font-light text-blue-600">Modalidades y Envíos</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
            </div>
            <div className="space-y-6 text-sm md:text-base text-gray-700">
              <div className="border-l-4 border-green-500 pl-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-r-xl p-4 shadow-lg">
                <h4 className="font-black text-green-700 mb-3 flex items-center">
                  <span className="mr-2">🌍</span> Modalidad Híbrida
                </h4>
                <p className="leading-relaxed">
                  Modalidad híbrida (presencial y virtual) en la Universidad Nacional de Educación "Enrique Guzmán y Valle, Escuela de Posgrado (calle Los Agrícolas N° 280, Urbanización Las Acacias, La Molina)", Lima, Perú los días <span className="font-black text-green-700">25, 26 y 27 de septiembre de 2025</span>.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-r-xl p-4 shadow-lg">
                <h4 className="font-black text-purple-700 mb-3 flex items-center">
                  <span className="mr-2">📝</span> Tipos de trabajos
                </h4>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-center"><span className="mr-2">✨</span>Experiencias y reflexiones</li>
                  <li className="flex items-center"><span className="mr-2">🔬</span>Proyectos de investigación (en proceso o concluidos)</li>
                  <li className="flex items-center"><span className="mr-2">📖</span>Ensayos académicos</li>
                </ul>
                <p className="font-black text-purple-700 mb-2">Modalidades:</p>
                <ul className="list-none space-y-1">
                  <li className="flex items-center"><span className="mr-2">🎤</span>Ponencias</li>
                  <li className="flex items-center"><span className="mr-2">📊</span>Carteles científicos</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl p-4 text-center text-white font-black text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300">
                ⏰ Fecha límite para recepción de trabajos: <span className="text-yellow-300">2 de agosto de 2025</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 backdrop-blur-sm rounded-xl p-3 md:p-4 text-xs md:text-sm text-gray-600 shadow-lg border border-gray-300/50">
                📌 Ponentes: Inscripción online hasta el 30 de agosto (máx. 3 autores por trabajo).
              </div>
            </div>
          </div>

          {/* Panel Derecho - SIN CAMBIOS */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 text-white p-6 md:p-8 relative hover:shadow-2xl hover:shadow-purple-400/40 hover:scale-[1.02] transition-all duration-300 border-l border-white/10" data-aos="fade-up" data-aos-delay="500">
            <div className="absolute top-0 left-0 w-0 h-0 border-r-[20px] border-r-transparent border-l-[20px] border-l-purple-700 border-b-[30px] border-b-transparent opacity-80"></div>
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📅</div>
              <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-wide">DETALLES</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto rounded-full shadow-lg"></div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-6 text-sm md:text-base border border-white/20 shadow-xl">
              <h3 className="font-black mb-4 flex items-center text-yellow-300">
                <span className="mr-2">📅</span> Fechas importantes
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="mr-2 text-yellow-300">•</span> Inscripción gratuita talleres promocionales: hasta 31 de mayo</li>
                <li className="flex items-start"><span className="mr-2 text-yellow-300">•</span> Talleres promocionales: junio y julio</li>
                <li className="flex items-start"><span className="mr-2 text-yellow-300">•</span> Talleres precongreso: 23 al 24 de septiembre (inscripción hasta 30 de julio)</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-6 text-sm md:text-base border border-white/20 shadow-xl">
              <h3 className="font-black mb-4 flex items-center text-yellow-300">
                <span className="mr-2">✨</span> La inscripción incluye:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="mr-2 text-green-300">✓</span> Publicación en Revista ICUALI indexada</li>
                <li className="flex items-start"><span className="mr-2 text-green-300">✓</span> Asistencia a conferencias y ponencias</li>
                <li className="flex items-start"><span className="mr-2 text-green-300">✓</span> Presentación de trabajos</li>
                <li className="flex items-start"><span className="mr-2 text-green-300">✓</span> Constancia de participación/asistencia</li>
                <li className="flex items-start"><span className="mr-2 text-green-300">✓</span> Elegibilidad para mejor trabajo</li>
                <li className="flex items-start"><span className="mr-2 text-green-300">✓</span> Posibilidad de publicación como capítulo de libro (costo adicional)</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-200 text-purple-800 font-black py-3 md:py-4 px-4 md:px-6 rounded-xl cursor-pointer transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 text-sm md:text-base">
                🚀 ¡INSCRÍBETE YA!
              </div>
              <p className="text-xs md:text-sm mt-3 opacity-90 font-light">Participa desde cualquier lugar del mundo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="text-center mt-6 md:mt-8" data-aos="fade-up" data-aos-delay="600">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-white/30">
          <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
            🌟 <span className="font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reflexión metodológica y tecnológica</span> • 
            <span className="font-bold text-purple-600">Septiembre 2025</span> • 
            <span className="font-medium">Universidad Enrique Guzmán y Valle, Perú</span> 🇵🇪
          </p>
        </div>
      </div>
    </div>
  );
};

export default CongressTriptych;