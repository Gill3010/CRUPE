import { useEffect } from 'react';
import { FileText, Mic, Mail, ExternalLink, Timer } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 aos-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Requisitos para Presentación de Libros
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Guías esenciales para presentar tu obra editorial durante el congreso
          </p>
        </div>

        {/* Main Content Card */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-8 aos-animate space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <FileText className="w-8 h-8 text-cyan-400" />
              Requisitos Generales
            </h2>

          {/* Requisito 1 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Estructura de presentación en PPT
              </h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
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
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Mic className="w-5 h-5 text-pink-400" />
                Modalidad de presentación
              </h3>
              <p className="text-gray-300">
                <strong>Presencial:</strong> 10 minutos para interacción directa.<br />
                <strong>Virtual:</strong> Video de presentación (2 minutos de duración).
              </p>
            </div>
          </div>

          {/* Requisito 3 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-indigo-400" />
                Información de contacto
              </h3>
              <p className="text-gray-300">
                Incluir correo electrónico o canales para contacto e interés en el libro.
              </p>
            </div>
          </div>

          {/* Requisito 4 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Timer className="w-5 h-5 text-pink-400" />
                Duración
              </h3>
              <p className="text-gray-300">
                10 minutos
              </p>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center aos-animate">
          <a
            href="/_events/Requisitoslibros.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <FileText className="w-6 h-6" />
              <span className="text-lg">Ver Requisitos</span>
            </div>
          </a>

          <a
            href="BookTemplate.pptx"
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <ExternalLink className="w-6 h-6" />
              <span className="text-lg">Ver Plantilla</span>
            </div>
          </a>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 aos-animate">
          <p className="text-gray-400 text-sm">
            Para más detalles sobre la presentación de libros, consulta el documento oficial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookPresentationGuidelines;