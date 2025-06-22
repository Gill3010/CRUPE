
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-purple-700 to-fuchsia-800 text-white relative overflow-hidden">
      {/* Glowing Background Accent */}
      <div className="absolute -top-20 left-1/2 w-[300px] h-[300px] bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-pink-400 opacity-10 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 z-10">
        
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-xl">
            IP Relatic
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Futuro de la propiedad intelectual. Protege tus ideas con tecnología y legalidad de vanguardia.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition hover:scale-110">
              <Facebook className="text-cyan-300" size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition hover:scale-110">
              <Twitter className="text-sky-300" size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition hover:scale-110">
              <Linkedin className="text-blue-400" size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition hover:scale-110">
              <Instagram className="text-pink-400" size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-1">Navegación</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="#" className="hover:text-white transition">Inicio</a></li>
            <li><a href="#" className="hover:text-white transition">Servicios</a></li>
            <li><a href="#" className="hover:text-white transition">Equipo</a></li>
            <li><a href="#" className="hover:text-white transition">Contacto</a></li>
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-1">Servicios</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="#" className="hover:text-white transition">Registro de Marcas</a></li>
            <li><a href="#" className="hover:text-white transition">Derechos de Autor</a></li>
            <li><a href="#" className="hover:text-white transition">Patentes</a></li>
            <li><a href="#" className="hover:text-white transition">Consultoría IP</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-1">Contacto</h3>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> administracion@relaticpanama.org
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +507 6645-7685 | +507 208-4689
            </li>
            <li className="flex items-center gap-2">
              <Globe size={16} /> Panamá, Ciudad de Panamá
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-white/60">
        © {new Date().getFullYear()}  IP Relatic. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
