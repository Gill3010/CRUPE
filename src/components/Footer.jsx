import {
  Mail,
  Phone,
  MapPin,
  BookOpen,
  FileText,
  GraduationCap,
  Home,
  Users,
  Rocket,
  Gavel,
  LayoutList,
} from 'lucide-react';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-4 gap-16 z-10">
        {/* Marca RELATIC */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#00bcd4] drop-shadow-xl">
            III Congreso Cualitativo 2025
          </h2>
          <p className="text-sm text-gray-100 leading-relaxed">
            Un espacio de reflexión académica sobre el impacto de las TIC y la Inteligencia Artificial en las metodologías cualitativas.
          </p>
        </div>

        {/* Navegación */}
        <div className="space-y-4">
          <h3 className={`text-lg font-semibold mb-4 border-b border-white/20 pb-1 text-[#00bcd4] transition-colors duration-300 ${styles.animatedBorder}`}>
            Navegación
          </h3>
          <ul className="space-y-3 text-gray-100 text-sm">
            <li className="flex items-center gap-3">
              <Home size={16} />
              <a href="/_events" className="hover:text-cyan-300 transition duration-300 hover:translate-x-1">Inicio</a>
            </li>
            <li className="flex items-center gap-3">
              <Users size={16} />
              <a href="/_events/cronograma" className="hover:text-cyan-300 transition duration-300 hover:translate-x-1">Cronograma</a>
            </li>
            <li className="flex items-center gap-3">
              <Gavel size={16} />
              <a href="/_events/comision-organizadora" className="hover:text-cyan-300 transition duration-300 hover:translate-x-1">Comisión Organizadora</a>
            </li>
            <li className="flex items-center gap-3">
              <Rocket size={16} />
              <a href="/_events/tipo-participacion" className="hover:text-cyan-300 transition duration-300 hover:translate-x-1">Inscripciones</a>
            </li>
          </ul>
        </div>

        {/* Ejes Temáticos */}
        <div className="space-y-4">
          <h3 className={`text-lg font-semibold mb-4 border-b border-white/20 pb-1 text-[#00bcd4] transition-colors duration-300 ${styles.animatedBorder}`}>
            Ejes Temáticos
          </h3>
          <ul className="space-y-3 text-gray-100 text-sm">
            <li className="flex items-center gap-3">
              <LayoutList size={16} />
              <a href="/_events/ejes-tematicos" className="hover:text-cyan-300 transition duration-300 hover:translate-x-1">Innovaciones en Metodologías Cualitativas</a>
            </li>
            <li className="flex items-center gap-3">
              <FileText size={16} />
              <a href="/_events/ejes-tematicos" className="hover:text-cyan-300 transition duration-300 hover:translate-x-1">TIC y la Inteligencia Artificial</a>
            </li>
            <li className="flex items-center gap-3">
              <BookOpen size={16} />
              <a href="/_events/ejes-tematicos" className="hover:text-cyan-300 transition duration-300 hover:translate-x-1">Aplicación Disciplinaria e Interdisciplinaria</a>
            </li>
            <li className="flex items-center gap-3">
              <GraduationCap size={16} />
              <a href="/_events/ejes-tematicos" className="hover:text-cyan-300 transition duration-300 hover:translate-x-1">Ética y Responsabilidad en la Era Digital</a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="space-y-6">
          <div>
            <h3 className={`text-lg font-semibold mb-4 border-b border-white/20 pb-1 text-[#00bcd4] transition-colors duration-300 ${styles.animatedBorder}`}>
              Contáctanos
            </h3>
            <ul className="space-y-4 text-gray-100 text-sm">
              <li className="flex items-center gap-4 hover:text-cyan-300 transition duration-300">
                <div className="p-2 rounded bg-white/10 border border-white/20">
                  <Mail size={18} className="text-white" />
                </div>
                <a href="mailto:gerencia@relaticpanama.org" className="hover:underline">
                  gerencia@relaticpanama.org
                </a>
              </li>
              <li className="flex items-center gap-4 hover:text-cyan-300 transition duration-300">
                <div className="p-2 rounded bg-white/10 border border-white/20">
                  <Phone size={18} className="text-white" />
                </div>
                <span>+507 6645-7685 | +507 208-4689</span>
              </li>
              <li className="flex items-center gap-4 hover:text-cyan-300 transition duration-300">
                <div className="p-2 rounded bg-white/10 border border-white/20">
                  <MapPin size={18} className="text-white" />
                </div>
                <span>Ciudad de Panamá, Panamá</span>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-wrap gap-5 mt-6">
            <a href="https://www.linkedin.com/in/relatic-panam%C3%A1-a80b93356" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={22} className="text-[#0077B5] hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/relatic.panama" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={22} className="text-[#E1306C] hover:scale-110 transition-transform" />
            </a>
            <a href="https://x.com/RelaticPanama" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={22} className="text-white hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573905375213" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={22} className="text-[#1877F2] hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com/@RelaticPanama" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={22} className="text-[#FF0000] hover:scale-110 transition-transform" />
            </a>
            <a href="https://wa.me/50766751782" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={22} className="text-[#25D366] hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Pie de página final */}
      <div className={`border-t border-white/10 text-center py-8 text-sm text-gray-300 bg-[#0f172a] ${styles.animatedBorder}`}>
        <p className="mb-3">
          © {new Date().getFullYear()} <span className="text-cyan-300 font-semibold">Relatic Panamá</span>. Todos los derechos reservados.
        </p>
        <p className="text-xs text-gray-400">
          Ciencia, Tecnología e Innovación.
        </p>
        <p className="text-xs text-gray-500 mt-3">
          Powered by{' '}
          <a
            href="https://www.innovaproyectos.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 font-semibold hover:underline transition-colors duration-300"
          >
            Innova Proyectos
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
