import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Presentation
} from 'lucide-react';

// NAVBAR COMPONENT - Limpio y sin dropdown en "Cronograma"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-amber-400/30 shadow-2xl shadow-amber-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Elementos decorativos geométricos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-8 h-8 border border-amber-400/30 transform rotate-45" />
        <div className="absolute top-4 right-20 w-6 h-6 border border-yellow-400/30 rounded-full" />
        <div className="absolute bottom-2 right-10 w-4 h-4 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 transform rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="https://relaticpanama.org/_events" className="block flex-shrink-0">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="relative">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-amber-500 via-yellow-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg">
                  <Presentation className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse" />
              </div>
              <div className="text-white min-w-0">
                <h1 className="text-base lg:text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent whitespace-nowrap">
                  Tercer Congreso
                </h1>
                <span className="text-xs text-gray-300 tracking-wider whitespace-nowrap">INVESTIGACIONES CUALITATIVAS</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <a 
              href="https://relaticpanama.org" 
              className="text-white hover:text-amber-300 transition-colors duration-300 font-medium relative group whitespace-nowrap text-sm lg:text-base ml-8 lg:ml-12"
            >
              Ir a RELATIC
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a 
              href="/_events/cronograma" 
              className="text-white hover:text-amber-300 transition-colors duration-300 font-medium relative group whitespace-nowrap text-sm lg:text-base"
            >
              Cronograma
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a 
              href="/_events/ejes-tematicos" 
              className="text-white hover:text-amber-300 transition-colors duration-300 font-medium relative group whitespace-nowrap text-sm lg:text-base"
            >
              Ejes Temáticos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a 
              href="/_events/comision-organizadora" 
              className="text-white hover:text-amber-300 transition-colors duration-300 font-medium relative group whitespace-nowrap text-sm lg:text-base"
            >
              Comisión Organizadora
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a 
              href="https://relaticpanama.org/suscription" 
              className="text-white hover:text-amber-300 transition-colors duration-300 font-medium relative group whitespace-nowrap text-sm lg:text-base"
            >
              Afíliate a RELATIC
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>

            {/* CTA Button */}
            <a
              href="/_events/tipo-participacion"
              className="relative px-4 lg:px-6 py-2 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-700 text-white rounded-full font-semibold hover:from-amber-500 hover:via-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center space-x-1 lg:space-x-2">
                <span className="text-sm lg:text-base">🚀</span>
                <span className="text-sm lg:text-base">¡INSCRÍBETE YA!</span>
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
                href="https://relaticpanama.org" 
                className="block px-4 py-3 text-white hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-600/20 hover:to-yellow-600/20 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Ir a RELATIC
              </a>

              <a 
                href="/_events/cronograma" 
                className="block px-4 py-3 text-white hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-600/20 hover:to-yellow-600/20 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Cronograma
              </a>

              <a 
                href="/_events/ejes-tematicos" 
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
                Afíliate a RELATIC
              </a>

              <div className="pt-4 border-t border-amber-400/20">
                <a
                  href="/_events/tipo-participacion"
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