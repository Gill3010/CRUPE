import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Scale, FileText, Users, Phone, ChevronDown } from 'lucide-react';

const IPNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Detect scroll to change navbar style
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

  const services = [
    { name: 'Registro de Marcas', href: '#marcas', icon: Shield },
    { name: 'Derechos de Autor', href: '#derechos', icon: FileText },
    { name: 'Patentes', href: '#patentes', icon: Scale },
    { name: 'Consultoría IP', href: '#consultoria', icon: Users }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-8 h-8 border border-purple-400/20 transform rotate-45" />
        <div className="absolute top-4 right-20 w-6 h-6 border border-blue-400/20 rounded-full" />
        <div className="absolute bottom-2 right-10 w-4 h-4 bg-gradient-to-r from-purple-400/20 to-blue-400/20 transform rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                RelaticProtect
              </h1>
              <span className="text-xs text-gray-300 tracking-wider">PROPIEDAD INTELECTUAL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/_protect" 
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdown('services')}
                className="flex items-center space-x-1 text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group"
              >
                <span>Servicios</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                  <div className="p-2">
                    {services.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <a
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 transition-all duration-300 group"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-4 h-4 text-purple-300" />
                          </div>
                          <span className="text-white group-hover:text-purple-300 transition-colors duration-300 font-medium">
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
              href="/_protect/aboutus" 
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group"
            >
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a 
              href="https://relaticpanama.org/_blog/" 
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>

            {/* CTA Button */}
            <a
              href="#contacto"
              className="relative px-6 py-2 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white rounded-full font-semibold hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Contactar</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobile}
              className="text-white hover:text-purple-300 transition-colors duration-300 p-2"
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
          <div className="bg-gray-800/95 backdrop-blur-md rounded-xl border border-white/10 mt-4 overflow-hidden">
            <div className="p-4 space-y-2">
              <a 
                href="/_protect" 
                className="block px-4 py-3 text-white hover:text-purple-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-purple-300 font-semibold text-sm tracking-wider uppercase">
                  Servicios
                </div>
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 px-4 py-3 text-white hover:text-purple-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent className="w-4 h-4 text-purple-300" />
                      <span>{service.name}</span>
                    </a>
                  );
                })}
              </div>

              <a 
                href="/_protect/aboutus" 
                className="block px-4 py-3 text-white hover:text-purple-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </a>

              <a 
                href="https://relaticpanama.org/_blog/" 
                className="block px-4 py-3 text-white hover:text-purple-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contacto"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white rounded-lg font-semibold hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Contactar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default IPNavbar;
