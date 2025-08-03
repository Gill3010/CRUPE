import { useEffect } from 'react';

const CongressTriptych = () => {
  useEffect(() => {
    // Implementación completa de AOS que no interfiere con otros componentes
    const initAOS = () => {
      // Solo procesar elementos dentro de este componente específico
      const thisComponent = document.querySelector('[data-congress-triptych]');
      if (!thisComponent) return null;
      
      const elements = thisComponent.querySelectorAll('[data-aos]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const element = entry.target;
          const delay = parseInt(element.getAttribute('data-aos-delay') || '0');
          
          if (entry.isIntersecting) {
            // Elemento entra al viewport - activar animación
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, delay);
          } else {
            // Elemento sale del viewport - resetear para próxima entrada
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      });

      // Observar solo elementos de este componente
      elements.forEach(element => {
        observer.observe(element);
      });

      return observer;
    };

    const observer = initAOS();

    // Cleanup
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div 
      className="max-w-6xl mx-auto p-4 md:p-6 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 min-h-screen relative opacity-0 transform translate-y-5 transition-all duration-1000 ease-out" 
      data-congress-triptych
      data-aos="fade-up"
    >
      {/* Tríptico Container */}
      <div 
        className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-visible md:min-h-[800px] border-2 border-cyan-200 shadow-xl opacity-0 transform translate-y-5 transition-all duration-1000 ease-out" 
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        <div className="flex flex-col md:flex-row min-h-full">
          {/* Panel Izquierdo */}
          <div 
            className="w-full md:w-1/3 bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 md:p-8 relative hover:scale-[1.02] transition-all duration-300 border-r-2 border-cyan-300 rounded-l-2xl opacity-0 transform translate-y-5 transition-all duration-1000 ease-out" 
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-6 animate-bounce">🎓</div>
              <h1 className="text-2xl md:text-3xl font-black mb-4 tracking-wide text-cyan-300">III CONGRESO</h1>
              <h2 className="text-lg md:text-xl font-medium mb-6 tracking-wider">INVESTIGACIONES CUALITATIVAS</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-300 to-cyan-400 mx-auto mb-6 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-sm md:text-base leading-relaxed">
              <div className="bg-gradient-to-br from-cyan-300 to-cyan-400 text-slate-800 rounded-xl p-4 border-2 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="font-black text-lg mb-2">📌 Tema central:</p>
                <p className="font-medium">&quot;Las <span className="font-bold">TIC e Inteligencia Artificial</span> en la Investigación Cualitativa&quot;</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm text-slate-800 rounded-xl p-4 border-2 border-cyan-300/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="font-black text-cyan-600 mb-3 flex items-center text-lg">
                  <span className="mr-2">🎯</span> Objetivo General
                </h4>
                <p className="leading-relaxed font-medium">
                  Promover el intercambio de experiencias en investigación, docencia y desarrollo tecnológico,
                  con énfasis en la transformación educativa mediante TIC e IA.
                </p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm text-slate-800 rounded-xl p-4 border-2 border-cyan-300/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="leading-relaxed font-medium">
                  🗣️ Los invitamos a interactuar y dialogar en el III Congreso de Investigaciones Cualitativas.
                  Dirigido a especialistas en investigación cualitativa, metodología científica, educadores,
                  pedagogos, líderes de proyectos, científicos de la educación y tomadores de decisiones.
                </p>
              </div>
            </div>
          </div>

          {/* Panel Central */}
          <div 
            className="w-full md:w-1/3 bg-white/95 backdrop-blur-sm p-6 md:p-8 border-x-2 border-cyan-300 hover:scale-[1.02] transition-all duration-300 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out" 
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            {/* ENCABEZADO */}
            <div className="text-center mb-8">
              <div className="text-5xl mb-6 animate-pulse">📋</div>
              <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                PARTICIPACIÓN
              </h2>
              
              {/* Botón consultar inversión */}
              <a href="/_events/inversion" className="block mb-4">
                <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-slate-800 hover:to-slate-900 text-slate-800 hover:text-cyan-300 font-black py-3 md:py-4 px-4 md:px-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 text-sm md:text-base text-center border-2 border-slate-200 hover:border-cyan-300 shadow-lg hover:shadow-xl">
                  💰 Consultar inversión
                </div>
              </a>
              <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full"></div>
            </div>

            {/* AVISO PONENTES */}
            <div className="mb-6 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-800 rounded-xl p-4 text-sm font-bold border-2 border-slate-200 shadow-lg">
              <span className="mr-2 animate-pulse text-lg">⚠️</span>
              Ponentes: Inscripción online hasta el 30 de agosto (máx. 3 autores por trabajo).
            </div>

            {/* CONTENIDO */}
            <div className="space-y-6 text-sm md:text-base text-slate-800">
              {/* FECHA LÍMITE */}
              <div className="border-l-4 border-cyan-400 pl-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-r-xl p-4 shadow-lg">
                <p className="text-center leading-relaxed font-black flex items-center justify-center gap-2 flex-wrap">
                  <span>⏰</span>
                  Fecha límite para recepción de trabajos:
                  <span className="text-cyan-300">2 de agosto de 2025</span>
                </p>
              </div>

              {/* TIPOS DE PARTICIPACIÓN */}
              <div className="border-l-4 border-slate-800 pl-4 bg-gradient-to-br from-cyan-300 to-cyan-400 text-slate-800 rounded-r-xl p-4 shadow-lg">
                <h4 className="font-black mb-3 flex items-center text-lg">
                  <span className="mr-2">📝</span> Tipos de participación
                </h4>
                <ul className="list-none space-y-3 mb-4">
                  <li>
                    <a href="/_events/presentacion-ponencias" className="flex items-center hover:text-white hover:scale-105 transition-all duration-200 font-medium p-2 rounded-lg">
                      <span className="mr-3 text-lg">🎤</span>Ponencias
                    </a>
                  </li>
                  <li>
                    <a href="/_events/conferencias" className="flex items-center hover:text-white hover:scale-105 transition-all duration-200 font-medium p-2 rounded-lg">
                      <span className="mr-3 text-lg">🗣️</span>Conferencias
                    </a>
                  </li>
                  <li>
                    <a href="/_events/presentacion-libros" className="flex items-center hover:text-white hover:scale-105 transition-all duration-200 font-medium p-2 rounded-lg">
                      <span className="mr-3 text-lg">📚</span>Libros
                    </a>
                  </li>
                  <li>
                    <a href="/_events/cartel-cientifico" className="flex items-center hover:text-white hover:scale-105 transition-all duration-200 font-medium p-2 rounded-lg">
                      <span className="mr-3 text-lg">🖼️</span>Carteles Digitales
                    </a>
                  </li>
                  <li>
                    <a href="/_events/presentacion-panelistas" className="flex items-center hover:text-white hover:scale-105 transition-all duration-200 font-medium p-2 rounded-lg">
                      <span className="mr-3 text-lg">👥</span>Panelista
                    </a>
                  </li>
                  <li>
                    <a href="/_events/presentacion-talleres" className="flex items-center hover:text-white hover:scale-105 transition-all duration-200 font-medium p-2 rounded-lg">
                      <span className="mr-3 text-lg">🧑‍🏫</span>Facilitador de Taller
                    </a>
                  </li>
                </ul>

                {/* MODALIDAD */}
                <h5 className="font-black mb-2 flex items-center text-lg">
                  <span className="mr-2">🔀</span>Modalidad (Híbrida)
                </h5>
                <ul className="list-none space-y-2 mb-4">
                  <li>
                    <a href="https://us02web.zoom.us/j/9885599581?pwd=dGpSUGhCY0NEaUltQ3Z6VnhhT2hSUT09" className="flex items-center hover:text-white hover:scale-105 transition-all duration-200 font-medium p-2 rounded-lg">
                      <span className="mr-3 text-lg">💻</span>Virtual (Zoom)
                    </a>
                  </li>
                  <li className="flex items-center font-medium p-2">
                    <span className="mr-3 text-lg">🏛️</span>
                    Presencial (Sede del evento)
                  </li>
                </ul>

                {/* RESUMEN CIENTÍFICO */}
                <h5 className="font-black mb-2 flex items-center text-lg">
                  <span className="mr-2">📊</span>Resumen Científico
                </h5>
                <ul className="list-none">
                  <li>
                    <a href="/_events/presentacion-resumen" className="flex items-center hover:text-white hover:scale-105 transition-all duration-200 font-medium p-2 rounded-lg">
                      <span className="mr-3 text-lg">📄</span>Ver requisitos y plantilla
                    </a>
                  </li>
                </ul>
              </div>

              {/* DIRECCIÓN Y FECHA */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl p-4 text-center font-bold text-sm md:text-base hover:scale-105 transition-all duration-300 border-2 border-cyan-300 shadow-lg">
                <span className="mr-2 text-lg">📍</span>
                Dirección y fecha del evento:
                <span className="text-cyan-300 font-black"> Universidad Enrique Guzmán y Valle, Perú 🇵🇪 los días 25, 26 y 27 de septiembre de 2025.</span>
              </div>
            </div>
          </div>

          {/* Panel Derecho */}
          <div 
            className="w-full md:w-1/3 bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 md:p-8 relative hover:scale-[1.02] transition-all duration-300 border-l-2 border-cyan-300 rounded-r-2xl opacity-0 transform translate-y-5 transition-all duration-1000 ease-out" 
            data-aos="fade-up" 
            data-aos-delay="500"
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-6 animate-bounce">📅</div>
              <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-wide text-cyan-300">DETALLES</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-300 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm text-slate-800 rounded-xl p-4 md:p-5 mb-6 text-sm md:text-base border-2 border-cyan-300/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-black mb-4 flex items-center text-cyan-600 text-lg">
                <span className="mr-2">📅</span> Fechas importantes
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start font-medium">
                  <span className="mr-3 text-cyan-500 font-bold">•</span>
                  Inscripción gratuita talleres promocionales: hasta 31 de Julio
                </li>
                <li className="flex items-start font-medium">
                  <span className="mr-3 text-cyan-500 font-bold">•</span>
                  Talleres promocionales: Agosto
                </li>
                <li className="flex items-start font-medium">
                  <span className="mr-3 text-cyan-500 font-bold">•</span>
                  Talleres precongreso: 23 al 24 de septiembre (inscripción hasta 30 de julio)
                </li>
              </ul>
            </div>

            <div className="bg-white/95 backdrop-blur-sm text-slate-800 rounded-xl p-4 md:p-5 mb-6 text-sm md:text-base border-2 border-cyan-300/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-black mb-4 flex items-center text-cyan-600 text-lg">
                <span className="mr-2">✨</span> La inscripción incluye:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start font-medium">
                  <span className="mr-3 text-cyan-500 font-bold">✓</span>
                  Publicación en Revista ICUALI indexada
                </li>
                <li className="flex items-start font-medium">
                  <span className="mr-3 text-cyan-500 font-bold">✓</span>
                  Asistencia a conferencias y ponencias
                </li>
                <li className="flex items-start font-medium">
                  <span className="mr-3 text-cyan-500 font-bold">✓</span>
                  Presentación de trabajos
                </li>
                <li className="flex items-start font-medium">
                  <span className="mr-3 text-cyan-500 font-bold">✓</span>
                  Constancia de participación/asistencia
                </li>
                <li className="flex items-start font-medium">
                  <span className="mr-3 text-cyan-500 font-bold">✓</span>
                  Elegibilidad para mejor trabajo
                </li>
                <li className="flex items-start font-medium">
                  <span className="mr-3 text-cyan-500 font-bold">✓</span>
                  Posibilidad de publicación como capítulo de libro (costo adicional)
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a href="/_events/tipo-participacion" className="block">
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-400 hover:from-white hover:to-white text-slate-800 hover:text-slate-800 font-black py-3 md:py-4 px-4 md:px-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 text-sm md:text-base text-center border-2 border-white hover:border-slate-800 shadow-lg hover:shadow-xl">
                  🚀 ¡INSCRÍBETE YA!
                </div>
              </a>
              <p className="text-sm md:text-base mt-4 text-cyan-300 font-medium">
                Participa desde cualquier lugar del mundo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div 
        className="text-center mt-6 md:mt-8 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out" 
        data-aos="fade-up" 
        data-aos-delay="600"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <p className="text-slate-800 text-sm md:text-base font-medium leading-relaxed">
            🌟 <span className="font-black text-cyan-600">Reflexión metodológica y tecnológica</span> •
            <span className="font-bold text-slate-800">Septiembre 2025</span> •
            <span className="font-medium text-slate-800">Universidad Enrique Guzmán y Valle, Perú</span> 🇵🇪
          </p>
        </div>
      </div>
    </div>
  );
};

export default CongressTriptych;