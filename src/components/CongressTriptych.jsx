import { useEffect } from 'react';
import { CalendarDays, MapPin, Users, BookOpen, Presentation, ClipboardList, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CongressTriptych = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-quad',
      once: false,
      offset: 120
    });
  }, []);

  // Datos reutilizables
  const importantDates = [
    {
      title: "Congreso principal",
      date: "21 al 23 de octubre de 2025",
      description: null
    },
    {
      title: "Conferencias Precongreso",
      items: [
        {
          date: "20 de agosto de 2025",
          topic: "Tema: Educación"
        },
        {
          date: "17 de septiembre de 2025",
          topic: "Tema: Gestión empresarial social rural"
        }
      ]
    }
  ];

  const participationModes = [
    {
      title: "Ponencias",
      description: "Dirigidas a docentes e investigadores",
      icon: <BookOpen className="w-5 h-5 text-[#4BA146] group-hover:scale-110 transition-transform" />,
      href: "#ponencias"
    },
    {
      title: "Carteles científicos",
      description: "Dirigidos a estudiantes universitarios",
      icon: <Presentation className="w-5 h-5 text-[#4BA146] group-hover:scale-110 transition-transform" />,
      href: "#carteles"
    }
  ];

  const targetAudience = [
    "Docentes",
    "Investigadores",
    "Estudiantes",
    "Personal administrativo"
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4BA146] rounded-xl mb-6 shadow-lg transform transition-all hover:scale-105 duration-300">
            <Presentation className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0077C8] mb-3">
            Organización General del Congreso
          </h1>
          <p className="text-xl text-gray-700 font-medium mb-6">
            Primer Congreso Científico Internacional CRUPE 2025
          </p>
          <div className="w-20 h-1.5 bg-[#F7941D] mx-auto rounded-full mb-8"></div>
          
          <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-[#4BA146]/10 rounded-xl p-5 border border-[#4BA146]/30 hover:border-[#4BA146]/50 transition-colors duration-300">
              <p className="text-gray-800 leading-relaxed text-center text-lg">
                <span className="font-semibold text-[#0077C8]">Lema:</span> "Educación, investigación y gestión para el desarrollo: la estrategia de Panamá Este-Panamá"
              </p>
            </div>
          </div>
        </div>

        {/* Información principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Fechas importantes */}
          <div 
            className="bg-white rounded-xl p-5 border border-[#4BA146]/30 hover:border-[#4BA146]/50 shadow-sm transition-all duration-300"
            data-aos="fade-up" 
            data-aos-delay="150"
          >
            <h2 className="text-xl font-bold text-[#0077C8] mb-4 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-[#4BA146]" />
              <span>Fechas principales</span>
            </h2>
            
            <div className="space-y-4">
              {importantDates.map((date, index) => (
                <div 
                  key={index}
                  className="bg-[#4BA146]/5 rounded-lg p-4 border border-[#4BA146]/20 hover:bg-[#4BA146]/10 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-gray-800 text-base mb-1">{date.title}</h3>
                  {date.date && <p className="text-gray-700 text-base">{date.date}</p>}
                  {date.items && (
                    <ul className="space-y-3 text-gray-700 text-base">
                      {date.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#F7941D] text-sm mt-1">•</span>
                          <div>
                            <p className="font-medium">{item.date}</p>
                            <p className="text-sm text-gray-600">{item.topic}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Lugar y modalidad */}
          <div 
            className="bg-white rounded-xl p-5 border border-[#0077C8]/30 hover:border-[#0077C8]/50 shadow-sm transition-all duration-300"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <h2 className="text-xl font-bold text-[#0077C8] mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#4BA146]" />
              <span>Lugar y modalidad</span>
            </h2>
            
            <div className="space-y-4">
              <div className="bg-[#0077C8]/5 rounded-lg p-4 border border-[#0077C8]/20 hover:bg-[#0077C8]/10 transition-colors duration-200">
                <h3 className="font-semibold text-gray-800 text-base mb-1">Sede</h3>
                <p className="text-gray-700 text-base">Centro Regional Universitario Panamá Este</p>
              </div>
              
              <div className="bg-[#4BA146]/5 rounded-lg p-4 border border-[#4BA146]/20 hover:bg-[#4BA146]/10 transition-colors duration-200">
                <h3 className="font-semibold text-gray-800 text-base mb-1">Modalidad</h3>
                <p className="text-gray-700 text-base">Híbrida (presencial y virtual)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modalidades de participación */}
        <div 
          className="bg-white rounded-xl p-6 border border-[#F7941D]/30 hover:border-[#F7941D]/50 shadow-sm transition-all duration-300 mb-12"
          data-aos="zoom-in" 
          data-aos-delay="250"
        >
          <h2 className="text-2xl font-bold text-[#0077C8] mb-6 flex items-center gap-3">
            <ClipboardList className="w-6 h-6 text-[#4BA146]" />
            <span>Modalidades de participación</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {participationModes.map((mode, index) => (
              <a 
                key={index}
                href={mode.href} 
                className="group bg-white rounded-lg p-4 border border-[#4BA146]/30 hover:border-[#0077C8] hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 group-hover:text-[#0077C8] transition-colors">
                  {mode.icon}
                  <span className="relative">
                    {mode.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F7941D] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </h3>
                <p className="text-gray-600 text-sm">{mode.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Público meta */}
        <div 
          className="bg-white rounded-xl p-6 border border-[#0077C8]/30 hover:border-[#0077C8]/50 shadow-sm transition-all duration-300 mb-10"
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <h2 className="text-2xl font-bold text-[#0077C8] mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-[#4BA146]" />
            <span>Congreso dirigido a:</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {targetAudience.map((item, index) => (
              <div 
                key={item}
                className="bg-white rounded-lg p-4 border border-[#4BA146]/30 hover:border-[#F7941D] hover:shadow-md transition-all duration-200 text-center transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={350 + (50 * index)}
              >
                <h3 className="font-semibold text-gray-800 text-base mb-1">{item}</h3>
                <p className="text-gray-600 text-sm">Universidad de Panamá</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div 
          className="text-center"
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <div className="bg-white rounded-xl p-5 border border-[#4BA146]/30 hover:border-[#0077C8] transition-colors duration-300 inline-block shadow-sm transform hover:scale-105">
            <h3 className="text-lg font-semibold text-[#0077C8] mb-3 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-[#4BA146]" />
              <span>Contacto</span>
            </h3>
            <p className="text-gray-700 text-base hover:text-[#4BA146] transition-colors">
              icongresocrupe2025@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongressTriptych;