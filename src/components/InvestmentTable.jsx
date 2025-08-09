import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventTables = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: 'ease-out-sine'
    });
  }, []);

  return (
    <section className="min-h-screen bg-white py-12 px-4 sm:px-6 relative border-t border-[#4BA146]">
      <div className="max-w-6xl mx-auto relative">
        {/* Encabezado con Logo */}
        <header className="text-center mb-12" data-aos="fade-up">
          <div className="flex justify-center mb-6">
            <img
              src="/_events/_crupe/assets/logocrupe.png"
              alt="Logo CRUPE"
              className="w-40 h-40 object-contain"
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0077C8] mb-3">
            Información del Evento
          </h1>
          <div className="w-20 h-1.5 bg-[#F7941D] mx-auto rounded-full mb-8"></div>
        </header>

        {/* PRIMERA TABLA: COSTOS DE INSCRIPCIÓN */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-[#4BA146] mb-6 text-center">
            Costos de Inscripción
          </h2>
          <div className="bg-white rounded-xl overflow-hidden border-2 border-[#4BA146]/30 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="overflow-auto">
                <table className="w-full text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="bg-[#4BA146] text-white">
                      <th className="p-3 border-2 border-[#4BA146]/50 text-left">Categoría</th>
                      <th className="p-3 border-2 border-[#4BA146]/50 text-center">Universidad de Panamá</th>
                      <th className="p-3 border-2 border-[#4BA146]/50 text-center">Otras Instituciones</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#1a1a1a]">
                    {[
                      { category: "Ponente", up: "$15.00", others: "$15.00" },
                      { category: "Profesor", up: "$25.00", others: "$30.00" },
                      { category: "Estudiante de Postgrado", up: "$20.00", others: "$30.00" },
                      { category: "Estudiante", up: "$5.00", others: "$20.00" },
                      { category: "Administrativo", up: "$10.00", others: "$10.00" }
                    ].map((row, index) => (
                      <tr 
                        key={`cost-${index}`} 
                        className={index % 2 === 0 ? "bg-[#4BA146]/5" : "bg-white"}
                        data-aos="fade-up"
                        data-aos-delay={50 * index}
                      >
                        <td className="p-3 border-2 border-[#4BA146]/20 font-medium">{row.category}</td>
                        <td className="p-3 border-2 border-[#4BA146]/20 text-center">{row.up}</td>
                        <td className="p-3 border-2 border-[#4BA146]/20 text-center">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* SEGUNDA TABLA: COMPARACIÓN DE CARTELES */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-[#4BA146] mb-6 text-center">
            Comparación: Cartel Científico Impreso vs. Digital
          </h2>
          <div className="bg-white rounded-xl overflow-hidden border-2 border-[#4BA146]/30 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="overflow-auto">
                <table className="w-full text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="bg-[#4BA146] text-white">
                      <th className="p-3 border-2 border-[#4BA146]/50 text-left">Aspecto</th>
                      <th className="p-3 border-2 border-[#4BA146]/50 text-center">Cartel Impreso</th>
                      <th className="p-3 border-2 border-[#4BA146]/50 text-center">Cartel Digital con DOI e ISSN</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#1a1a1a]">
                    {[
                      { aspect: "Formato", 
                        printed: "Impreso en gran formato (120 x 90 cm), material físico (papel, cartón)", 
                        digital: "Archivo digital accesible en línea, formato electrónico" },
                      { aspect: "Presentación", 
                        printed: "Exhibido físicamente en congresos o eventos", 
                        digital: "Publicado en plataformas digitales con acceso global" },
                      { aspect: "Interacción", 
                        printed: "Interacción directa y presencial con autores", 
                        digital: "Interacción virtual, comentarios o enlaces integrados" },
                      { aspect: "Accesibilidad", 
                        printed: "Limitada al lugar y tiempo del evento", 
                        digital: "Acceso permanente y global a través de internet" },
                      { aspect: "Actualización", 
                        printed: "No actualizable después de impreso", 
                        digital: "Puede ser actualizado o enlazado con versiones nuevas" },
                      { aspect: "Diseño", 
                        printed: "Usualmente balance 50% texto y 50% imágenes, poco legible a distancia, elaborado con programas técnicos (Adobe Illustrator, Corel Draw)", 
                        digital: "Puede incluir multimedia, hipervínculos, y formatos interactivos usando programas como PowerPoint" },
                      { aspect: "Durabilidad", 
                        printed: "Depende del material (plastificado, laminado)", 
                        digital: "Permanente en formato digital, sujeto a archivo y mantenimiento" },
                      { aspect: "Identificación y Registro", 
                        printed: "Generalmente no registrado formalmente", 
                        digital: "Asignación de DOI e ISSN para citación, descargas y rastreo académico" },
                      { aspect: "Validación y Revisión", 
                        printed: "Generalmente no revisado por pares, resumen visual", 
                        digital: "Puede ser parte de publicaciones con revisión o depósito institucional" },
                      { aspect: "Objetivo", 
                        printed: "Difusión rápida y visual en eventos presenciales", 
                        digital: "Difusión amplia y citable en la comunidad científica global" },
                      { aspect: "Bibliografía y Citación", 
                        printed: "Referencias en estilo APA o similar en texto", 
                        digital: "Referencias con enlaces directos, DOI facilita citación precisa" },
                      { aspect: "Interactividad/Multimedia", 
                        printed: "Limitada a imágenes, texto y gráficos", 
                        digital: "Puede incluir videos, datos enlazados, animaciones, etc." },
                      { aspect: "Costo", 
                        printed: "Diseño e impresión (75.00 dólares)", 
                        digital: "Diseño e impresión (30.00 dólares)" }
                    ].map((row, index) => (
                      <tr 
                        key={`comparison-${index}`} 
                        className={index % 2 === 0 ? "bg-[#4BA146]/5" : "bg-white"}
                        data-aos="fade-up"
                        data-aos-delay={50 * index}
                      >
                        <td className="p-3 border-2 border-[#4BA146]/20 font-medium">{row.aspect}</td>
                        <td className="p-3 border-2 border-[#4BA146]/20">{row.printed}</td>
                        <td className="p-3 border-2 border-[#4BA146]/20">{row.digital}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

             {/* Botones de Demo */}
<div className="flex flex-wrap justify-center gap-4 mt-8" data-aos="fade-up">
  <a 
    href="https://relaticpanama.org/_posters/index.php/segundoencuentro/article/view/16" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center bg-[#0077C8] hover:bg-[#005A9C] text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
  >
    Ver demo de cartel 1
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 ml-2" 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
        clipRule="evenodd" 
      />
    </svg>
  </a>
  <a 
    href="https://relaticpanama.org/_posters/index.php/segundoencuentro/article/view/20" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center bg-[#F7941D] hover:bg-[#E07E0C] text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
  >
    Ver demo de cartel 2
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 ml-2" 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
        clipRule="evenodd" 
      />
    </svg>
  </a>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTables;