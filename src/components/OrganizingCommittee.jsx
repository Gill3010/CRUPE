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

const organizingTeam = [
  {
    name: 'Dr. Francisco Farnum',
    role: 'Presidente',
    institution: <>Universidad de Panamá <span className="text-xl" role="img" aria-label="Bandera de Panamá">🇵🇦</span></>,
    image: Farnum,
    orcid: 'https://orcid.org/0000-0002-5879-2296',
  },
  {
    name: 'Dra. Juana Bobadilla',
    role: 'Comité de difusión, comunicación y medios',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span className="text-xl" role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: JuanaB,
    orcid: 'https://orcid.org/0000-0003-3191-4393',
  },
  {
    name: 'Dr. Sósimo Poma',
    role: 'Comité de difusión, comunicación y medios',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span className="text-xl" role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: Sosimo,
    orcid: 'https://orcid.org/0000-0002-5999-5212',
  },
  {
    name: 'Dev. Israel Samuels',
    role: 'Comité de difusión, comunicación y medios',
    institution: <>Universidad de Panamá <span className="text-xl" role="img" aria-label="Bandera de Panamá">🇵🇦</span></>,
    image: Israel,
    orcid: 'https://orcid.org/0009-0007-1212-718X',
  },
  {
    name: 'Dra. Isabel Menacho',
    role: 'Comité de actividades académicas',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span className="text-xl" role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: Isabel,
    orcid: 'https://orcid.org/0000-0001-6246-4618',
  },
  {
    name: 'Dra. Mónica Contreras',
    role: 'Comité de actividades académicas',
    institution: <>Universidad de Panamá <span className="text-xl" role="img" aria-label="Bandera de Panamá">🇵🇦</span></>,
    image: Monica,
    orcid: 'https://orcid.org/0000-0003-0972-6951',
  },
  {
    name: 'Dr. Honorio Bustillos',
    role: 'Comité de actividades académicas',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span className="text-xl" role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: Honorio,
    orcid: 'https://orcid.org/0000-0001-9523-7569',
  },
  {
    name: 'Dra. Carol Larico',
    role: 'Comité de actividades académicas',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span className="text-xl" role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: Larico,
    orcid: 'https://orcid.org/0000-0001-6889-2234',
  },
  {
    name: 'Dr. Antonio Rolando Montoya Ponte',
    role: 'Comité de logística presencial y a distancia (Hospedaje y Estadía)',
    institution: <>Universidad Nacional de Educación: Lima, Perú <span className="text-xl" role="img" aria-label="Bandera de Perú">🇵🇪</span></>,
    image: Antonio,
    orcid: 'https://orcid.org/0000-0003-4597-3976',
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
    AOS.init({ duration: 1000, once: false, offset: 50, disable: false });
  }, []);

  return (
    <section
      aria-labelledby="organizing-committee-heading"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 relative"
    >
      {/* Patrón de fondo */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=\'60\'%20height=\'60\'%20viewBox=\'0%200%2060%2060\'%20xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg%20fill=\'none\'%20fill-rule=\'evenodd\'%3E%3Cg%20fill=\'%2393c5fd\'%20fill-opacity=\'0.1\'%3E%3Ccircle%20cx=\'30\'%20cy=\'30\'%20r=\'4\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto relative">
        <header className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-6 shadow-lg">
            <span className="text-3xl">👥</span>
          </div>
          <h1 id="organizing-committee-heading" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4">
            Comisión Organizadora
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
            III Congreso Investigaciones Cualitativas
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <p className="text-slate-700 leading-relaxed">
                <strong className="font-semibold text-blue-700">Equipo comprometido</strong> con la excelencia académica y la organización de eventos científicos de alto nivel,
                promoviendo el intercambio de conocimientos en investigación cualitativa.
              </p>
            </div>
          </div>
        </header>

        {/* Miembros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {organizingTeam.map((member, index) => (
            <article
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              aria-label={`${member.name}, ${member.role}`}
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-blue-200 transition-all duration-300">
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
                    className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {iconsByRole[member.role] || '👤'}
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                  {member.name}
                </h3>

                {member.orcid && (
                  <a
                    href={member.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1 text-green-600 text-sm mt-1 hover:underline"
                  >
                    <SiOrcid className="text-base" />
                    <span>ORCID</span>
                  </a>
                )}

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-100">
                  <p className="text-blue-700 font-semibold text-sm">{member.role}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                  <p className="text-slate-600 text-sm leading-relaxed">{member.institution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

     {/* Sección de compromiso más compacta */}
<section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-6 md:p-8 text-white shadow-2xl" data-aos="fade-up">
  <div className="text-center max-w-4xl mx-auto">
    <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-4">
      <span className="text-xl">🌟</span>
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-4">
      Compromiso con la Excelencia
    </h3>
    <p className="text-base leading-relaxed mb-6 text-blue-100">
      Nuestro equipo multidisciplinario trabaja incansablemente para garantizar un evento de alta calidad académica, facilitando el intercambio de conocimientos y experiencias en investigación cualitativa.
    </p>
    <a
      href="https://relaticpanama.org/suscription" 
      className="bg-white text-blue-700 font-bold py-3 px-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-block"
    >
      🤝 ¡Únete a RELATIC!
    </a>
  </div>
</section>

        {/* Footer */}
        <footer className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-slate-700">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌟</span>
                <span className="font-semibold">Equipo comprometido con la investigación</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">📅</span>
                <span className="font-medium text-blue-700">Septiembre 2025</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-slate-400 rounded-full"></div>
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