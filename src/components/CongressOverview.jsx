import { useEffect } from 'react';
import { BookOpen, Building2, Users } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CongressOverview = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: 'ease-out-sine'
    });
  }, []);

  const themes = [
    {
      id: 1,
      icon: <BookOpen className="w-5 h-5 text-[#0077C8]" />,
      title: 'Educación e investigación para el desarrollo sostenible',
      description: 'Articulación entre procesos formativos y producción de conocimiento para enfrentar desafíos del desarrollo sostenible',
      subtopics: [
        'Innovación educativa y formación docente en contextos regionales',
        'Prácticas pedagógicas para el desarrollo sostenible',
        'Educación superior y equidad territorial',
        'Investigación educativa y políticas públicas',
        'Ciencias sociales, cultura y desarrollo humano sostenible',
        'Humanidades aplicadas al fortalecimiento de identidades locales',
        'Salud pública, educación comunitaria y bienestar social'
      ]
    },
    {
      id: 2,
      icon: <Building2 className="w-5 h-5 text-[#0077C8]" />,
      title: 'Ciencias administrativas e investigación para la gestión sostenible',
      description: 'Vinculación de ciencias económicas, administración y tecnología con investigación aplicada a modelos de gestión sostenibles',
      subtopics: [
        'Gestión estratégica para el desarrollo regional y local',
        'Planificación y sostenibilidad territorial en Panamá Este',
        'Tecnologías emergentes y medioambiente: gestión de la innovación sostenible',
        'Ciencia de datos, administración pública y toma de decisiones',
        'Economía circular, responsabilidad social y desarrollo productivo',
        'Emprendimiento social y gestión comunitaria del conocimiento',
        'Ciencias de la salud y gestión sanitaria en zonas rurales'
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
    Ejes Temáticos Oficiales
  </h1>
  <p className="text-xl text-[#1a1a1a] font-medium mb-6">
    Congreso Académico Regional
  </p>
  <div className="w-20 h-1.5 bg-[#F7941D] mx-auto rounded-full mb-8"></div>

  <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
    <div className="bg-white rounded-xl p-6 border-2 border-[#4BA146] shadow-lg">
      <p className="text-[#1a1a1a] leading-relaxed text-center text-lg">
        <span className="font-semibold text-[#0077C8]">Enfoque integral</span> que articula educación, investigación y gestión para el desarrollo sostenible de nuestra región.
      </p>
    </div>
  </div>
</header>

        {/* Ejes Temáticos */}
        <div className="space-y-8">
          {themes.map((theme) => (
            <article 
              key={theme.id}
              className="bg-white rounded-xl overflow-hidden border-2 border-[#4BA146]/30 transition-all duration-300 hover:border-[#0077C8] shadow-md hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={theme.id * 100}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#4BA146]/10 rounded-lg flex items-center justify-center border-2 border-[#4BA146]/30">
                      {theme.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#0077C8] mb-3">{theme.title}</h2>
                    <p className="text-[#1a1a1a] text-base">{theme.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t-2 border-[#4BA146]/20 bg-[#4BA146]/5 p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#0077C8] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#F7941D]" />
                  <span>Subtemas:</span>
                </h3>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {theme.subtopics.map((subtopic, index) => (
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
            </article>
          ))}
        </div>

        {/* Nota final */}
        <footer className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white rounded-lg p-6 border-2 border-[#4BA146] shadow-md inline-block max-w-2xl">
            <p className="text-[#1a1a1a] text-lg">
              <span className="text-[#0077C8] font-semibold">Importante:</span> Todos los trabajos deben alinearse con los Objetivos de Desarrollo Sostenible (ODS)
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CongressOverview;