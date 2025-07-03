
import  { useState, useEffect } from 'react';

import {
  Menu,
  X,
  Calendar,
  ChevronDown,
  Presentation,
  Activity, 
  Brain,        
  Network,      
} from 'lucide-react';

// NAVBAR COMPONENT - Ahora con colores más contrastantes
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const schedule = [
    { name: 'Día 1', href: '#uno', icon: Activity },
    { name: 'Día 2', href: '#dos', icon: Brain },
    { name: 'Día 3', href: '#tres', icon: Network },
    { name: 'Actividades', href: '/_events/cronograma', icon: Calendar }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-amber-400/30 shadow-2xl shadow-amber-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Elementos decorativos geométricos - Ahora en dorado/amber */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-8 h-8 border border-amber-400/30 transform rotate-45" />
        <div className="absolute top-4 right-20 w-6 h-6 border border-yellow-400/30 rounded-full" />
        <div className="absolute bottom-2 right-10 w-4 h-4 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 transform rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo - Actualizado con colores dorados */}
         <a href="https://relaticpanama.org/_events" className="block">
  <div className="flex items-center space-x-3">
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 via-yellow-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg">
        <Presentation className="w-6 h-6 text-white" />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse" />
    </div>
    <div className="text-white">
      <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
        Tercer Encuentro
      </h1>
      <span className="text-xs text-gray-300 tracking-wider">INVESTIGACIONES CUALITATIVAS</span>
    </div>
  </div>
</a>

          {/* Desktop Navigation - Colores actualizados */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/_events/" 
              className="text-white hover:text-amber-300 transition-colors duration-300 font-medium relative group"
            >
              Conferencia
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            {/* schedule Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdown('schedule')}
                className="flex items-center space-x-1 text-white hover:text-amber-300 transition-colors duration-300 font-medium relative group"
              >
                <span>Cronograma</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'schedule' ? 'rotate-180' : ''
                }`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
              </button>

              {activeDropdown === 'schedule' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-xl border border-amber-400/20 shadow-2xl overflow-hidden">
                  <div className="p-2">
                    {schedule.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <a
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-amber-600/20 hover:to-yellow-600/20 transition-all duration-300 group"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-4 h-4 text-amber-300" />
                          </div>
                          <span className="text-white group-hover:text-amber-300 transition-colors duration-300 font-medium">
                            {service.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#" 
              className="text-white hover:text-amber-300 transition-colors duration-300 font-medium relative group"
            >
              Ejes Temáticos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a 
              href="/_events/comision-organizadora" 
              className="text-white hover:text-amber-300 transition-colors duration-300 font-medium relative group"
            >
              Comisión Organizadora
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>
             <a 
              href="https://relaticpanama.org/suscription" 
              className="text-white hover:text-amber-300 transition-colors duration-300 font-medium relative group"
            >
              Registro
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            {/* CTA Button - Actualizado con colores dorados */}
            <a
              href="/_events/inscripcion"
              className="relative px-6 py-2 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-700 text-white rounded-full font-semibold hover:from-amber-500 hover:via-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
            >
              
<span className="relative z-10 flex items-center space-x-2">
  <span className="text-base">🚀</span>
  <span>¡INSCRÍBETE YA!</span>
</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobile}
              className="text-white hover:text-amber-300 transition-colors duration-300 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-slate-800/95 backdrop-blur-md rounded-xl border border-amber-400/20 mt-4 overflow-hidden">
            <div className="p-4 space-y-2">
              <a 
                href="/_events/" 
                className="block px-4 py-3 text-white hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-600/20 hover:to-yellow-600/20 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Conferencia
              </a>

              <div className="space-y-2">
                <div className="px-4 py-2 text-amber-300 font-semibold text-sm tracking-wider uppercase">
                  Cronograma
                </div>
                {schedule.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 px-4 py-3 text-white hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-600/20 hover:to-yellow-600/20 rounded-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent className="w-4 h-4 text-amber-300" />
                      <span>{service.name}</span>
                    </a>
                  );
                })}
              </div>

              <a 
                href="#" 
                className="block px-4 py-3 text-white hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-600/20 hover:to-yellow-600/20 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Ejes Temáticos
              </a>

              <a 
                href="/_events/comision-organizadora" 
                className="block px-4 py-3 text-white hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-600/20 hover:to-yellow-600/20 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Comisión Organizadora
              </a>
              <a 
                href="https://relaticpanama.org/suscription" 
                className="block px-4 py-3 text-white hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-600/20 hover:to-yellow-600/20 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Registro
              </a>

              <div className="pt-4 border-t border-amber-400/20">
                <a
                  href="/_events/inscripcion"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-700 text-white rounded-lg font-semibold hover:from-amber-500 hover:via-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                 
                 <span className="relative z-10 flex items-center space-x-2">
  <span className="text-base">🚀</span>
  <span>¡INSCRÍBETE YA!</span>
</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;