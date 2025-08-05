import {
  Mail,
  Phone,
  MapPin,
  FileText,
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

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Información institucional */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-[#4BA146] leading-tight">
                  I Congreso Científico Internacional CRUPE 2025
                </h2>
                <div className="w-16 h-0.5 bg-[#0077C8]"></div>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  Institución comprometida con la excelencia académica y el desarrollo regional en Panamá Este.
                </p>
              </div>

              {/* Redes sociales */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Síguenos
                </h4>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/relatic-panam%C3%A1-a80b93356" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#0077B5]/30">
                    <FaLinkedin size={18} className="text-[#0077B5]" />
                  </a>
                  <a href="https://www.instagram.com/relatic.panama" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#E1306C]/30">
                    <FaInstagram size={18} className="text-[#E1306C]" />
                  </a>
                  <a href="https://x.com/RelaticPanama" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30">
                    <FaXTwitter size={18} className="text-white" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61573905375213" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#1877F2]/30">
                    <FaFacebook size={18} className="text-[#1877F2]" />
                  </a>
                  <a href="https://www.youtube.com/@RelaticPanama" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#FF0000]/30">
                    <FaYoutube size={18} className="text-[#FF0000]" />
                  </a>
                  <a href="https://wa.me/50766751782" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#25D366]/30">
                    <FaWhatsapp size={18} className="text-[#25D366]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Navegación */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#4BA146] uppercase tracking-wider mb-4">Navegación</h3>
                <div className="w-12 h-0.5 bg-[#0077C8] mb-6"></div>
              </div>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <a href="/_events/_crupe" className="flex items-center gap-3 text-gray-300 hover:text-[#0077C8] transition-colors duration-300 text-sm group">
                      <Home size={14} className="text-gray-400 group-hover:text-[#0077C8] transition-colors" />
                      <span>Inicio</span>
                    </a>
                  </li>
                  <li>
                    <a href="/_events/_crupe/cronograma" className="flex items-center gap-3 text-gray-300 hover:text-[#0077C8] transition-colors duration-300 text-sm group">
                      <Users size={14} className="text-gray-400 group-hover:text-[#0077C8] transition-colors" />
                      <span>Cronograma</span>
                    </a>
                  </li>
                  <li>
                    <a href="/_events/_crupe/comision-organizadora" className="flex items-center gap-3 text-gray-300 hover:text-[#0077C8] transition-colors duration-300 text-sm group">
                      <Gavel size={14} className="text-gray-400 group-hover:text-[#0077C8] transition-colors" />
                      <span>Comisión Organizadora</span>
                    </a>
                  </li>
                  <li>
                    <a href="/_events/tipo-participacion" className="flex items-center gap-3 text-gray-300 hover:text-[#0077C8] transition-colors duration-300 text-sm group">
                      <Rocket size={14} className="text-gray-400 group-hover:text-[#0077C8] transition-colors" />
                      <span>Inscripciones</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Ejes Temáticos */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#4BA146] uppercase tracking-wider mb-4">Ejes Temáticos</h3>
                <div className="w-12 h-0.5 bg-[#0077C8] mb-6"></div>
              </div>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <a href="/_events/ejes-tematicos" className="flex items-start gap-3 text-gray-300 hover:text-[#0077C8] transition-colors duration-300 text-sm group">
                      <LayoutList size={14} className="text-gray-400 group-hover:text-[#0077C8] transition-colors mt-0.5 flex-shrink-0" />
                      <span className="leading-5">Educación e investigación para el desarrollo sostenible</span>
                    </a>
                  </li>
                  <li>
                    <a href="/_events/ejes-tematicos" className="flex items-start gap-3 text-gray-300 hover:text-[#0077C8] transition-colors duration-300 text-sm group">
                      <FileText size={14} className="text-gray-400 group-hover:text-[#0077C8] transition-colors mt-0.5 flex-shrink-0" />
                      <span className="leading-5">Ciencias administrativas e investigación para la gestión sostenible</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Información de contacto */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#4BA146] uppercase tracking-wider mb-4">Contáctanos</h3>
                <div className="w-12 h-0.5 bg-[#0077C8] mb-6"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 border border-white/10 flex-shrink-0">
                    <Mail size={16} className="text-[#0077C8]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:gerencia@relaticpanama.org" className="text-gray-300 hover:text-[#0077C8] transition-colors text-sm">
                      icongresocrupe2025@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 border border-white/10 flex-shrink-0">
                    <Phone size={16} className="text-[#0077C8]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Teléfono</p>
                    <div className="text-gray-300 text-sm space-y-1">
                      <p>+507 6645-7685</p>
                      <p>+507 208-4689</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 border border-white/10 flex-shrink-0">
                    <MapPin size={16} className="text-[#0077C8]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Ubicación</p>
                    <p className="text-gray-300 text-sm">Ciudad de Panamá, Panamá</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-white/10"></div>

        {/* Pie de página final */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-300 mb-1">
                © {new Date().getFullYear()} <span className="text-[#0077C8] font-medium">Centro Regional Universitario Panamá Este</span>. Todos los derechos reservados.
              </p>
              <p className="text-xs text-gray-400">
                Ciencia, Tecnología e Innovación.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500">
                Powered by{' '}
                <a
                  href="https://www.innovaproyectos.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077C8] font-medium hover:underline transition-colors duration-300"
                >
                  Innova Proyectos
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
