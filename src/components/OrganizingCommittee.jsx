import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiOrcid } from 'react-icons/si';

// Imágenes locales importadas
import Farnum from '/assets/Farnum.jpeg';
import JuanaB from '/assets/JuanaB.jpeg';
import Sosimo from '/assets/Sosimo.jpeg';
import Israel from '/assets/Israel.jpeg';
import Larico from '/assets/Larico.png';
import Monica from '/assets/Monica.jpeg';
import Isabel from '/assets/Isabel.jpeg';
import Honorio from '/assets/Honorio.jpeg';
import Antonio from '/assets/Antonio.png';
import Silverio from '/assets/Silverio.jpeg';

const organizingTeam = [
  {
    name: 'Dr. Francisco Farnum',
    role: 'Presidente',
    institution: <>Universidad de Panamá <span role="img" aria-label="Bandera de Panamá">🇵🇦</span></>,
    image: Farnum,
    orcid: 'https://orcid.org/0000-0002-5879-2296',
  },
  {
    name: 'Dra. Juana Bobadilla',
    role: 'Comité de difusión, comunicación y medios',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: JuanaB,
    orcid: 'https://orcid.org/0000-0003-3191-4393',
  },
  {
    name: 'Dr. Sósimo Poma',
    role: 'Comité de difusión, comunicación y medios',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: Sosimo,
    orcid: 'https://orcid.org/0000-0002-5999-5212',
  },
  {
    name: 'Dev. Israel Samuels',
    role: 'Comité de difusión, comunicación y medios',
    institution: <>Universidad de Panamá <span role="img" aria-label="Bandera de Panamá">🇵🇦</span></>,
    image: Israel,
    orcid: 'https://orcid.org/0009-0007-1212-718X',
  },
  {
    name: 'Dra. Isabel Menacho',
    role: 'Comité de actividades académicas',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: Isabel,
    orcid: 'https://orcid.org/0000-0001-6246-4618',
  },
  {
    name: 'Dra. Mónica Contreras',
    role: 'Comité de actividades académicas',
    institution: <>Universidad de Panamá <span role="img" aria-label="Bandera de Panamá">🇵🇦</span></>,
    image: Monica,
    orcid: 'https://orcid.org/0000-0003-0972-6951',
  },
  {
    name: 'Dr. Honorio Bustillos',
    role: 'Comité de actividades académicas',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: Honorio,
    orcid: 'https://orcid.org/0000-0001-9523-7569',
  },
  {
    name: 'Dra. Carol Larico',
    role: 'Comité de actividades académicas',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: Larico,
    orcid: 'https://orcid.org/0000-0001-6889-2234',
  },
  {
    name: 'Dr. Antonio Montoya',
    role: 'Comité de logística presencial y a distancia (Hospedaje y Estadía)',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: Antonio,
    orcid: 'https://orcid.org/0000-0003-4597-3976',
  },
  {
    name: 'Dr. Silverio Limacho',
    role: 'Comisión Organizadora',
    institution: <>Universidad Pedagógica de la ciudad de Sucre, Bolivia <span role="img" aria-label="Bandera de Bolivia">🇧🇴</span></>,
    image: Silverio,
    orcid: 'https://orcid.org/0000-0001-9627-1750',
  }
];

const iconsByRole = {
  'Presidente': '🧭',
  'Comité de actividades académicas': '🗂️',
  'Comité de difusión, comunicación y medios': '📢',
  'Relaciones Internacionales': '🌐',
  'Asesora Científico': '📖',
  'Comité de Evaluación': '🔍',
  'Comité de moderación y relatoria': '📝',
  'Comité de finanzas': '💰',
  'Comité editorial': '📚',
  'Comité de logística presencial y a distancia (Hospedaje y Estadía)': '🏨',
  'Comité transporte local': '🚗',
  'Comité de eventos sociales y culturales': '🎉',
  'Comité de atención de participantes y coordinación de edecanes': '👥',
  'Comité de afiliación a RELATIC': '🤝',
};

const OrganizingCommittee = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 40, disable: false });
  }, []);

  return (
    <section
      aria-labelledby="organizing-committee-heading"
      className="min-h-screen bg-[#0f172a] py-12 px-4 relative"
    >
      <div className="max-w-7xl mx-auto relative">
        <header className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00BCD4] rounded-2xl mb-6 shadow-sm">
            <span className="text-3xl">👥</span>
          </div>
          <h1
            id="organizing-committee-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Comisión Organizadora
          </h1>
          <p className="text-xl md:text-2xl text-[#00BCD4] font-medium mb-6">
            III Congreso Investigaciones Cualitativas
          </p>
          <div className="w-24 h-1 bg-[#00BCD4] mx-auto rounded-full mb-8"></div>
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <p className="text-white leading-relaxed">
                <strong className="font-semibold text-[#00BCD4]">Equipo comprometido</strong> con la excelencia académica y la organización de eventos científicos de alto nivel,
                promoviendo el intercambio de conocimientos en investigación cualitativa.
              </p>
            </div>
          </div>
        </header>

        {/* Miembros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {organizingTeam.map((member, i) => (
            <article
              key={i}
              className="group bg-white/5 rounded-3xl p-8 border border-white/20 hover:bg-[#00BCD4]/10 transition-colors duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              aria-label={`${member.name}, ${member.role}`}
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-2 ring-[#00BCD4] shadow-sm group-hover:ring-white transition-all duration-300">
                  <img
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    className="w-full h-full bg-[#00BCD4] flex items-center justify-center text-white text-2xl font-bold"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00BCD4] text-[#0a2d4d] px-4 py-1 rounded-full text-xs font-semibold shadow-sm select-none">
                    {iconsByRole[member.role] || '👤'}
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00BCD4] transition-colors duration-300">
                  {member.name}
                </h3>

                {member.orcid && (
                  <a
                    href={member.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1 text-[#00BCD4] text-sm mt-1 hover:underline"
                  >
                    <SiOrcid className="text-base" />
                    <span>ORCID</span>
                  </a>
                )}

                <div className="bg-[#00BCD4]/20 rounded-xl p-3 border border-[#00BCD4]/40">
                  <p className="text-[#00BCD4] font-semibold text-sm">{member.role}</p>
                </div>
                <div className="bg-[#0a2d4d]/40 rounded-xl p-3 border border-[#00BCD4]/30">
                  <p className="text-white text-sm leading-relaxed">{member.institution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sección de compromiso más compacta */}
        <section
          className="bg-[#00BCD4] rounded-3xl p-6 md:p-8 text-[#0a2d4d]"
          data-aos="fade-up"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl mb-4">
              <span className="text-xl">🌟</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Compromiso con la Excelencia
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Nuestro equipo multidisciplinario trabaja incansablemente para garantizar un evento de alta calidad académica, facilitando el intercambio de conocimientos y experiencias en investigación cualitativa.
            </p>
            <a
              href="https://relaticpanama.org/suscription"
              className="bg-white text-[#0a2d4d] font-bold py-3 px-6 rounded-2xl hover:bg-[#b2f7ff] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg inline-block"
            >
              🤝 ¡Únete a RELATIC!
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-[#00BCD4]">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌟</span>
                <span className="font-semibold">Equipo comprometido con la investigación</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-[#00BCD4] rounded-full"></div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">📅</span>
                <span className="font-medium">Septiembre 2025</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-[#00BCD4] rounded-full"></div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🏛️</span>
                <span>Universidad Enrique Guzmán y Valle, Perú 🇵🇪</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default OrganizingCommittee;
