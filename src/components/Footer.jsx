import { Mail, Phone, Globe } from 'lucide-react';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Efectos de fondo brillantes */}
      <div className="absolute -top-20 left-1/2 w-[300px] h-[300px] bg-amber-400 opacity-15 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute top-1/2 left-10 w-[150px] h-[150px] bg-orange-400 opacity-8 rounded-full blur-2xl animate-pulse -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 z-10">
        
        {/* Marca del Encuentro */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-xl">
            Encuentro Cualitativo 2025
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Un espacio de reflexión académica sobre el impacto de las TIC y la Inteligencia Artificial en las metodologías cualitativas.
          </p>

        </div>

        {/* Navegación del evento */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-amber-400/30 pb-1 text-amber-300">Navegación</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-amber-300 transition duration-300 hover:translate-x-1">Inicio</a></li>
            <li><a href="#" className="hover:text-amber-300 transition duration-300 hover:translate-x-1">Programa</a></li>
            <li><a href="#" className="hover:text-amber-300 transition duration-300 hover:translate-x-1">Ponentes</a></li>
            <li><a href="#" className="hover:text-amber-300 transition duration-300 hover:translate-x-1">Inscripciones</a></li>
          </ul>
        </div>

        {/* Sección de Temáticas o Ejes */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-amber-400/30 pb-1 text-amber-300">Ejes Temáticos</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-amber-300 transition duration-300 hover:translate-x-1">TIC en la investigación</a></li>
            <li><a href="#" className="hover:text-amber-300 transition duration-300 hover:translate-x-1">IA y análisis cualitativo</a></li>
            <li><a href="#" className="hover:text-amber-300 transition duration-300 hover:translate-x-1">Innovación metodológica</a></li>
            <li><a href="#" className="hover:text-amber-300 transition duration-300 hover:translate-x-1">Ética en entornos digitales</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-amber-400/30 pb-1 text-amber-300">Contacto</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-3 hover:text-amber-300 transition duration-300">
              <div className="p-1 rounded bg-amber-500/20 border border-amber-400/30">
                <Mail size={16} className="text-amber-300" />
              </div>
              <a href="mailto:encuentro@relaticpanama.org" className="hover:underline">
                gerencia@relaticpanama.org
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-amber-300 transition duration-300">
              <div className="p-1 rounded bg-yellow-500/20 border border-yellow-400/30">
                <Phone size={16} className="text-yellow-300" />
              </div>
              <span>+507 6645-7685 | +507 208-4689</span>
            </li>
            <li className="flex items-center gap-3 hover:text-amber-300 transition duration-300">
              <div className="p-1 rounded bg-orange-500/20 border border-orange-400/30">
                <Globe size={16} className="text-orange-300" />
              </div>
              <span>Ciudad de Panamá, Panamá</span>
            </li>
          </ul>
          
             {/* Redes sociales */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/in/relatic-panam%C3%A1-a80b93356/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={22} className="text-[#0077B5] hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/relatic.panama" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={22} className="text-[#E1306C] hover:scale-110 transition-transform" />
            </a>
            <a href="https://x.com/RelaticPanama" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={22} className="text-white hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573905375213&rdid=uUWvGkmHWAFlDCsM" target="_blank" rel="noopener noreferrer">
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
      <div className="border-t border-amber-400/20 text-center py-6 text-sm text-gray-400 bg-gradient-to-r from-transparent via-amber-900/5 to-transparent">
        <p className="mb-2">
          © {new Date().getFullYear()} <span className="text-amber-300 font-semibold">Relatic Panamá</span>. Todos los derechos reservados.
        </p>
        <p className="text-xs text-gray-500">
          Promoviendo la innovación en la investigación cualitativa a través de las TIC y la IA.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Desarrollado por{' '}
          <a
            href="https://www.innovaproyectos.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 font-semibold hover:underline transition-colors duration-300"
          >
            Innova Proyectos
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;