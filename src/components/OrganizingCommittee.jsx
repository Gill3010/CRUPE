import { useEffect } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { SiOrcid } from 'react-icons/si';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Datos del comité organizador
const organizingTeam = [
  {
    name: 'Dr. Eduardo Flores Castro',
    role: 'Rector',
    institution: 'Universidad de Panamá',
    image: '/_events/_crupe/assets/Rector.jpeg',
    orcid: '#',
  },
  {
    name: 'Dr. Jaime Javier Gutiérrez',
    role: 'Vicerrector de Investigación y Postgrado',
    institution: 'Universidad de Panamá',
    image: '/_events/_crupe/assets/Jaime.jpeg',
    orcid: '#',
  },
  {
    name: 'Dr. José Emilio Moreno',
    role: 'Vicerrector Académico',
    institution: 'Universidad de Panamá',
    image: '/_events/_crupe/assets/Jose.jpeg',
    orcid: '#',
  },
  {
    name: 'Mgtr. Zobeida Garibaldi',
    role: 'Sub directora',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/Zobeida.jpeg',
    orcid: '#',
  },
  {
    name: 'Dr. Jorge Ureña',
    role: 'Coordinador de Postgrado y Maestría',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/Jorge.jpeg',
    orcid: '#',
  },
  {
    name: 'Mgtr. Flor María Batista',
    role: 'Coordinadora de la Extensión Universitaria de Tortí',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/Flor.jpeg',
    orcid: '#',
  },
  {
    name: 'Mgtr. Johana Marín',
    role: 'Coordinadora de Postgrado y Maestría - Extensión Tortí',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/Johana.jpeg',
    orcid: '#',
  },
  {
    name: 'Mgtr. Eric Yanis',
    role: 'Secretario administrativo',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/Eric.jpeg',
    orcid: '#',
  },
  {
    name: 'Mgtr. Fidelins Martínez',
    role: 'Secretaria académica',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/Fidelins.jpeg',
    orcid: '#',
  },
  {
    name: 'Mgtr. Yecenia Brandao',
    role: 'Coordinadora General',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/YeceniaBrandao.jpeg',
    orcid: '#',
  },
  {
    name: 'Dr. Francisco Farnum',
    role: 'Enlace y representación VIP',
    institution: 'Universidad de Panamá',
    image: '/_events/_crupe/assets/FF.png',
    orcid: '#',
  },
  {
    name: 'Prof. Roberto Carrizo',
    role: 'Comité de Logística',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/RobertoCarrizo.jpeg',
    orcid: '#',
  },
  {
    name: 'Mgtr. Yasmel Chavarría',
    role: 'Comité Académico y Editorial',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/Yasmel.jpeg',
    orcid: '#',
  },
  {
    name: 'Mgtr. Otilia Mendoza',
    role: 'Comité de Finanzas',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/Otilia.jpeg',
    orcid: '#',
  },
  {
    name: 'Mgtr. Miriam Morán',
    role: 'Comité de Comunicaciones',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/Miriam.jpeg',
    orcid: '#',
  },
  {
    name: 'Dra. Rita Ramos',
    role: 'Comité de Vinculación',
    institution: 'Centro Regional Universitario Panamá Este',
    image: '/_events/_crupe/assets/Rita.jpeg',
    orcid: '#',
  },
];

const iconsByRole = {
  'Rector': '👑',
  'Vicerrector de Investigación y Postgrado': '🔬',
  'Vicerrector Académico': '🎓',
  'Coordinadora General': '👩‍💼',
  'Enlace y representación VIP': '🤝',
  'Comité Académico y Editorial': '📚',
  'Comité de Finanzas': '💰',
  'Comité de Logística': '🚚',
  'Comité de Comunicaciones': '📢',
  'Comité de Vinculación': '🌐',
  'Sub directora': '👩‍💼',
  'Secretario administrativo': '🧑‍💼',
  'Secretaria académica': '👩‍🏫',
  'Coordinador de Postgrado y Maestría': '👨‍🎓',
  'Coordinadora de la Extensión Universitaria de Tortí': '🌱',
  'Coordinadora de Postgrado y Maestría - Extensión Tortí': '👩‍🎓',
};

const OrganizingCommittee = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: 'ease-out-sine',
    });
  }, []);

  // LÓGICA DE REORGANIZACIÓN
  const rector = organizingTeam.find((member) => member.role === 'Rector');
  const vicerrectorInv = organizingTeam.find((member) => member.role === 'Vicerrector de Investigación y Postgrado');
  const vicerrectorAcad = organizingTeam.find((member) => member.role === 'Vicerrector Académico');
  const directorCrupe = organizingTeam.find((member) => member.role === 'Coordinadora General');
  
  const predefinedTeam = organizingTeam.filter(
    (member) =>
      member.role === 'Sub directora' ||
      member.role === 'Secretario administrativo' ||
      member.role === 'Secretaria académica' ||
      member.role === 'Coordinador de Postgrado y Maestría' ||
      member.role === 'Coordinadora de la Extensión Universitaria de Tortí' ||
      member.role === 'Coordinadora de Postgrado y Maestría - Extensión Tortí'
  );

  const restOfTheTeam = organizingTeam.filter(
    (member) =>
      member.role !== 'Rector' &&
      member.role !== 'Vicerrector de Investigación y Postgrado' &&
      member.role !== 'Vicerrector Académico' &&
      member.role !== 'Coordinadora General' &&
      member.role !== 'Sub directora' &&
      member.role !== 'Secretario administrativo' &&
      member.role !== 'Secretaria académica' &&
      member.role !== 'Coordinador de Postgrado y Maestría' &&
      member.role !== 'Coordinadora de la Extensión Universitaria de Tortí' &&
      member.role !== 'Coordinadora de Postgrado y Maestría - Extensión Tortí'
  );

  // Componente de tarjeta de miembro
  const MemberCard = ({ member, i }) => (
    <article
      className="group bg-white rounded-xl p-5 border-2 border-[#4BA146]/30 hover:border-[#0077C8] transition-all duration-300 shadow-md hover:shadow-lg"
      aria-label={`${member.name}, ${member.role}`}
      data-aos="fade-up"
      data-aos-delay={150 + i * 50}
    >
      <div className="relative mb-5">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-2 ring-[#4BA146] group-hover:ring-[#0077C8] transition-all duration-300">
          <img
            src={member.image}
            alt={`Foto de ${member.name}`}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${member.name === 'Dr. Jorge Ureña' ? 'object-position-[50%_30%]' : ''}`}
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
            {member.name.split(' ').map((n) => n[0]).join('')}
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
  );

  // Agregar validación de PropTypes para MemberCard
  MemberCard.propTypes = {
    member: PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      orcid: PropTypes.string.isRequired,
    }).isRequired,
    i: PropTypes.number.isRequired,
  };

  return (
    <section className="min-h-screen bg-white py-12 px-4 sm:px-6 relative border-t border-[#4BA146]">
      <div className="max-w-7xl mx-auto relative">
        {/* Encabezado */}
        <header className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-48 h-48 mb-6">
            <img
              src="/_events/_crupe/assets/logocrupe.png"
              alt="Logo CRUPE"
              className="w-full h-full object-contain"
              style={{ backgroundColor: 'transparent' }}
            />
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

        {/* Rector */}
        {rector && (
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#0077C8]">
                Autoridades de la Universidad de Panamá
              </h2>
              <p className="text-lg text-gray-600">Liderazgo y dirección estratégica</p>
              <div className="w-16 h-1 bg-[#F7941D] mx-auto rounded-full mt-2"></div>
            </div>
            <div className="flex justify-center">
              <article
                className="group bg-white rounded-xl p-5 border-2 border-[#4BA146]/30 hover:border-[#0077C8] transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-1/2 lg:w-1/3"
                aria-label={`${rector.name}, ${rector.role}`}
                data-aos="fade-up"
              >
                <div className="relative mb-5">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-2 ring-[#4BA146] group-hover:ring-[#0077C8] transition-all duration-300">
                    <img
                      src={rector.image}
                      alt={`Foto de ${rector.name}`}
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
                      {rector.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#F7941D] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      {iconsByRole[rector.role] || '👤'}
                    </div>
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#0077C8] transition-colors duration-300">
                    {rector.name}
                  </h3>
                  {rector.orcid && (
                    <a
                      href={rector.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1 text-[#0077C8] text-sm mt-1 hover:underline"
                    >
                      <SiOrcid className="text-sm" />
                      <span>ORCID</span>
                    </a>
                  )}
                  <div className="bg-[#4BA146]/10 rounded-md p-2 border border-[#4BA146]/30">
                    <p className="text-[#0077C8] font-semibold text-sm">{rector.role}</p>
                  </div>
                  <div className="bg-[#F7941D]/5 rounded-md p-2 border border-[#F7941D]/30">
                    <p className="text-[#1a1a1a] text-sm leading-relaxed">{rector.institution}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        )}

        {/* Vicerrectores en fila */}
        {(vicerrectorInv || vicerrectorAcad) && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vicerrectorInv && (
                <MemberCard member={vicerrectorInv} i={0} />
              )}
              {vicerrectorAcad && (
                <MemberCard member={vicerrectorAcad} i={1} />
              )}
            </div>
          </div>
        )}

        {/* Directora CRUPE */}
        {directorCrupe && (
          <div className="mb-12">
            <div className="text-center mb-6" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-[#0077C8]">
                Dirección del Centro Regional Universitario de Panamá Este
              </h2>
              <p className="text-lg text-gray-600">Liderazgo y dirección estratégica</p>
              <div className="w-16 h-1 bg-[#F7941D] mx-auto rounded-full mt-2"></div>
            </div>
            <div className="flex justify-center">
              <article
                className="group bg-white rounded-xl p-5 border-2 border-[#4BA146]/30 hover:border-[#0077C8] transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-1/2 lg:w-1/3"
                aria-label={`${directorCrupe.name}, ${directorCrupe.role}`}
                data-aos="fade-up"
              >
                <div className="relative mb-5">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-2 ring-[#4BA146] group-hover:ring-[#0077C8] transition-all duration-300">
                    <img
                      src={directorCrupe.image}
                      alt={`Foto de ${directorCrupe.name}`}
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
                      {directorCrupe.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#F7941D] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      {iconsByRole[directorCrupe.role] || '👤'}
                    </div>
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#0077C8] transition-colors duration-300">
                    {directorCrupe.name}
                  </h3>
                  {directorCrupe.orcid && (
                    <a
                      href={directorCrupe.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1 text-[#0077C8] text-sm mt-1 hover:underline"
                    >
                      <SiOrcid className="text-sm" />
                      <span>ORCID</span>
                    </a>
                  )}
                  <div className="bg-[#4BA146]/10 rounded-md p-2 border border-[#4BA146]/30">
                    <p className="text-[#0077C8] font-semibold text-sm">{directorCrupe.role}</p>
                  </div>
                  <div className="bg-[#F7941D]/5 rounded-md p-2 border border-[#F7941D]/30">
                    <p className="text-[#1a1a1a] text-sm leading-relaxed">{directorCrupe.institution}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        )}

        {/* Miembros de la jerarquía principal del CRUPE */}
        <div className="text-center mb-6" data-aos="fade-up" data-aos-delay="50">
          <h2 className="text-2xl font-bold text-[#0077C8]">
            Equipo de Dirección y Coordinación
          </h2>
          <p className="text-lg text-gray-600">Líderes de las áreas clave del CRUPE</p>
          <div className="w-16 h-1 bg-[#F7941D] mx-auto rounded-full mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {predefinedTeam.map((member, i) => (
            <MemberCard key={i} member={member} i={i} />
          ))}
        </div>

        {/* Resto del equipo */}
        <div className="text-center mb-6" data-aos="fade-up" data-aos-delay="50">
          <h2 className="text-2xl font-bold text-[#0077C8]">
            Comités y Enlaces
          </h2>
          <p className="text-lg text-gray-600">Equipos de apoyo y gestión de áreas clave</p>
          <div className="w-16 h-1 bg-[#F7941D] mx-auto rounded-full mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {restOfTheTeam.map((member, i) => (
            <MemberCard key={i} member={member} i={i} />
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
            <h3 className="text-2xl font-bold text-[#0077C8] mb-6">Contacto del Comité</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center justify-center gap-3 text-[#1a1a1a] text-base">
                <Mail className="w-5 h-5 text-[#F7941D]" />
                <span>icongresocrupe2025@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-[#1a1a1a] text-base">
                <Phone className="w-5 h-5 text-[#F7941D]" />
                <span>+507 6496-4327</span>
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