import { useEffect } from 'react';
import { FileText, Mic, Mail, Timer } from 'lucide-react';

const BookPresentationGuidelines = () => {
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
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00BCD4] mb-6">
            Requisitos para Presentación de Libros
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Guías esenciales para presentar tu obra editorial durante el congreso
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#0a2d4d] border border-white/20 rounded-xl p-6 md:p-10 mb-8 aos-animate space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <FileText className="w-7 h-7 text-[#00BCD4]" />
            Requisitos Generales
          </h2>

          {/* Requisito 1 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#00BCD4]" />
                Estructura de presentación en PPT
              </h3>
              <ul className="list-disc pl-5 text-white space-y-1 text-sm">
                <li><strong>Diapositiva de Título:</strong> Título del libro, autor(es), institución, fecha y lugar del congreso</li>
                <li><strong>Introducción:</strong> Contexto e importancia del tema</li>
                <li><strong>Objetivos:</strong> Generales, específicos, y preguntas de investigación</li>
                <li><strong>Estructura:</strong> Índice temático</li>
                <li><strong>Implicaciones:</strong> Para la investigación y la práctica</li>
                <li><strong>Recomendaciones</strong> y <strong>Aplicaciones prácticas</strong></li>
                <li><strong>Agradecimientos</strong> y <strong>Reconocimientos</strong> (opcionales)</li>
                <li><strong>Elementos visuales:</strong> Imágenes, gráficos y tablas legibles y de alta calidad</li>
              </ul>
            </div>
          </div>

          {/* Requisito 2 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Mic className="w-5 h-5 text-[#00BCD4]" />
                Modalidad de presentación
              </h3>
              <p className="text-white">
                <strong>Presencial:</strong> 10 minutos para interacción directa.<br />
                <strong>Virtual:</strong> Video de presentación (2 minutos de duración).
              </p>
            </div>
          </div>

          {/* Requisito 3 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#00BCD4]" />
                Información de contacto
              </h3>
              <p className="text-white">
                Incluir correo electrónico o canales para contacto e interés en el libro.
              </p>
            </div>
          </div>

          {/* Requisito 4 */}
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-[#0a2d4d] hover:bg-[#0c3a5c] transition-all duration-300">
            <div className="w-8 h-8 bg-[#00BCD4] text-[#0a2d4d] font-bold flex items-center justify-center rounded-full">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Timer className="w-5 h-5 text-[#00BCD4]" />
                Duración
              </h3>
              <p className="text-white">
                10 minutos
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center aos-animate">
          <a
            href="/_events/pdfs/Requisitoslibros.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00BCD4] text-[#0a2d4d] font-semibold py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-white hover:text-[#0a2d4d] transition"
          >
            <FileText className="w-5 h-5" />
            Ver Requisitos
          </a>
          {/* Aquí puedes agregar más botones si deseas */}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-white text-sm">
            Para más detalles sobre la presentación de libros, consulta el documento oficial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookPresentationGuidelines;