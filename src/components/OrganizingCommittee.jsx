import { useEffect } from 'react';
import { SiOrcid } from 'react-icons/si';
import { Building2, Users, Mail, Phone, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Datos del comité organizador
const organizingTeam = [
  {
    name: 'Mgtr. Yecenia Brandao',
    role: 'Coordinadora General',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/assets/Farnum.jpeg',
    orcid: '#',
  },
  {
    name: 'Dr. Francisco Farnum',
    role: 'Enlace y representación VIP',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/assets/Farnum.jpeg',
    orcid: '#',
  },
  {
    name: 'Yasmel Chavarría',
    role: 'Comité Académico y Editorial',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/assets/Farnum.jpeg',
    orcid: '#',
  },
  {
    name: 'Equipo Finanzas',
    role: 'Comité de Finanzas',
    institution: 'Registro de participantes, presupuesto, gestión de recursos',
    image: '/assets/Farnum.jpeg',
    orcid: '#',
  },
  {
    name: 'Prof. Roberto Carrizo',
    role: 'Comité de Logística',
    institution: 'Gestión de espacios, tecnología, transporte e insumos',
    image: '/assets/Farnum.jpeg',
    orcid: '#',
  },
  {
    name: 'Equipo Comunicaciones',
    role: 'Comité de Comunicaciones',
    institution: 'Difusión, diseño gráfico y manejo de redes',
    image: '/assets/Farnum.jpeg',
    orcid: '#',
  },
  {
    name: 'Equipo Vinculación',
    role: 'Comité de Vinculación',
    institution: 'Coordinación con entidades externas',
    image: '/assets/Farnum.jpeg',
    orcid: '#',
  }
];

const iconsByRole = {
  'Coordinadora General': '👩‍💼',
  'Enlace y representación VIP': '🤝',
  'Comité Académico y Editorial': '📚',
  'Comité de Finanzas': '💰',
  'Comité de Logística': '🚚',
  'Comité de Comunicaciones': '📢',
  'Comité de Vinculación': '🌐',
};

const OrganizingCommittee = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: 'ease-out-sine'
    });
  }, []);

  return (
    <section className="min-h-screen bg-white py-12 px-4 sm:px-6 relative border-t border-[#4BA146]">
      <div className="max-w-7xl mx-auto relative">
        {/* Encabezado */}
        <header className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0077C8] rounded-full mb-6 shadow-md animate-pulse">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0077C8] mb-3">
            Comité Organizador
          </h1>
          <p className="text-xl text-[#1a1a1a] font-medium mb-6">
            Congreso Universitario de Sostenibilidad
          </p>
          <div className="w-20 h-1.5 bg-[#F7941D] mx-auto rounded-full mb-8"></div>
          
          <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-xl p-6 border-2 border-[#4BA146] shadow-lg">
              <p className="text-[#1a1a1a] leading-relaxed text-center text-lg">
                <span className="font-semibold text-[#0077C8]">Equipo comprometido</span> con la excelencia académica y la organización de eventos de alto nivel para nuestra comunidad universitaria.
              </p>
            </div>
          </div>
        </header>

        {/* Miembros del comité */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {organizingTeam.map((member, i) => (
            <article
              key={i}
              className="group bg-white rounded-xl p-5 border-2 border-[#4BA146]/30 hover:border-[#0077C8] transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label={`${member.name}, ${member.role}`}
              data-aos="fade-up"
              data-aos-delay={150 + (i * 50)}
            >
              <div className="relative mb-5">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-[#4BA146] group-hover:ring-[#0077C8] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    className="w-full h-full bg-[#F7941D] flex items-center justify-center text-white text-xl font-bold"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#F7941D] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {iconsByRole[member.role] || '👤'}
                  </div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#0077C8] transition-colors duration-300">
                  {member.name}
                </h3>

                {member.orcid && (
                  <a
                    href={member.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1 text-[#0077C8] text-sm mt-1 hover:underline"
                  >
                    <SiOrcid className="text-sm" />
                    <span>ORCID</span>
                  </a>
                )}

                <div className="bg-[#4BA146]/10 rounded-md p-2 border border-[#4BA146]/30">
                  <p className="text-[#0077C8] font-semibold text-sm">{member.role}</p>
                </div>
                <div className="bg-[#F7941D]/5 rounded-md p-2 border border-[#F7941D]/30">
                  <p className="text-[#1a1a1a] text-sm leading-relaxed">{member.institution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sección de contacto */}
        <section 
          className="bg-white rounded-xl p-6 md:p-8 border-2 border-[#4BA146] shadow-md mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4BA146] rounded-full mb-4 shadow-md">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0077C8] mb-6">
              Contacto del Comité
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center justify-center gap-3 text-[#1a1a1a] text-base">
                <Mail className="w-5 h-5 text-[#F7941D]" />
                <span>icongresocrupe2025@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-[#1a1a1a] text-base">
                <Phone className="w-5 h-5 text-[#F7941D]" />
                <span>+507 1234-5678</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-[#1a1a1a] text-base">
                <MapPin className="w-5 h-5 text-[#F7941D]" />
                <span>Panamá Este</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center" data-aos="fade-up" data-aos-delay="150">
          <div className="bg-[#0077C8]/10 rounded-lg p-4 border border-[#0077C8]/30 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-[#0077C8] text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#F7941D]">🌟</span>
                <span>Equipo comprometido con la educación</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-[#F7941D] rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-[#F7941D]">🏛️</span>
                <span>Centro Regional Universitario Panamá Este</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default OrganizingCommittee;