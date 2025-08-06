import { useEffect } from 'react';
import { FileText, User, List, Book, Download } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PresentationFormat = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: 'ease-out-sine'
    });
  }, []);

  const sections = [
    {
      id: 1,
      icon: <FileText className="w-5 h-5 text-[#0077C8]" />,
      title: 'Título del trabajo',
      description: 'Mayúsculas sostenidas, centrado, negrita, sin subrayado. Máximo 20 palabras'
    },
    {
      id: 2,
      icon: <User className="w-5 h-5 text-[#0077C8]" />,
      title: 'Autor(es)',
      description: 'Nombre completo, filiación institucional, correo electrónico. Si son varios autores, indicarlos en orden de aparición con nota al pie para la identificación institucional.'
    },
    {
      id: 3,
      icon: <List className="w-5 h-5 text-[#0077C8]" />,
      title: 'Resumen',
      description: 'Máximo 300 palabras. Debe incluir de forma estructurada: objetivo, vacío que llena la investigación, metodología, resultados preliminares o finales, conclusiones y aporte, importancia o impacto al área de conocimiento y a la sociedad. Redactado en tercera persona, sin citas, en un solo párrafo.'
    },
    {
      id: 4,
      icon: <Book className="w-5 h-5 text-[#0077C8]" />,
      title: 'Estructura sugerida del cuerpo del texto',
      subtopics: [
        'Introducción',
        'Problema de investigación',
        'Objetivo general y específicos',
        'Marco teórico (síntesis conceptual)',
        'Metodología',
        'Resultados o avances',
        'Discusión',
        'Conclusiones',
        'Referencias (formato APA 7.ª edición)'
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-white py-12 px-4 sm:px-6 relative border-t border-[#4BA146]">
      <div className="max-w-6xl mx-auto relative">
        {/* Encabezado */}
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
            Formato para la Presentación de Ponencias
          </h1>
          <p className="text-xl text-[#1a1a1a] font-medium mb-6">
            Requisitos y estructura del documento
          </p>
          <div className="w-20 h-1.5 bg-[#F7941D] mx-auto rounded-full mb-8"></div>

          <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-xl p-6 border-2 border-[#4BA146] shadow-lg">
              <p className="text-[#1a1a1a] leading-relaxed text-center text-lg mb-6">
                <span className="font-semibold text-[#0077C8]">Formato estandarizado</span> para garantizar la uniformidad y calidad de las presentaciones académicas.
              </p>
              
              {/* Botones de descarga */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6" data-aos="fade-up" data-aos-delay="150">
                <a
                  href="/_events/_crupe/pdfs/Requisitosponencias.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0077C8] text-white rounded-lg hover:bg-[#005fa3] transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar Requisitos (PDF)</span>
                </a>
                
                <a
                  href="/_events/_crupe/pdfs/Plantillaponencia.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#4BA146] text-white rounded-lg hover:bg-[#3a8138] transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar Plantilla</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Secciones del formato */}
        <div className="space-y-8">
          {sections.map((section) => (
            <article 
              key={section.id}
              className="bg-white rounded-xl overflow-hidden border-2 border-[#4BA146]/30 transition-all duration-300 hover:border-[#0077C8] shadow-md hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={section.id * 100}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#4BA146]/10 rounded-lg flex items-center justify-center border-2 border-[#4BA146]/30">
                      {section.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#0077C8] mb-3">{section.title}</h2>
                    <p className="text-[#1a1a1a] text-base">{section.description}</p>
                  </div>
                </div>
              </div>
              
              {section.subtopics && (
                <div className="border-t-2 border-[#4BA146]/20 bg-[#4BA146]/5 p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-[#0077C8] mb-4 flex items-center gap-2">
                    <List className="w-5 h-5 text-[#F7941D]" />
                    <span>Elementos:</span>
                  </h3>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.subtopics.map((subtopic, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 bg-white rounded-md p-4 border-2 border-[#4BA146]/20 hover:bg-[#4BA146]/5 transition-colors duration-200 shadow-sm"
                        data-aos="fade-up"
                        data-aos-delay={150 + (index * 30)}
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-[#F7941D] text-white text-sm font-bold rounded-full flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-[#1a1a1a] text-sm">{subtopic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Nota final */}
        <footer className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white rounded-lg p-6 border-2 border-[#4BA146] shadow-md inline-block max-w-2xl">
            <p className="text-[#1a1a1a] text-lg mb-3">
              <span className="text-[#0077C8] font-semibold">Formato del documento:</span> Fuente: Times New Roman, 12 pt | Interlineado: 1.5 | Márgenes: 2.5 cm (superior, inferior, izquierdo, derecho)
            </p>
            <p className="text-[#1a1a1a] text-lg">
              <span className="text-[#0077C8] font-semibold">Extensión y formato:</span> Entre 6 y 8 páginas incluyendo referencias | Archivos: Word (.docx) y PDF
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default PresentationFormat;