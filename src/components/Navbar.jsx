import { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    checkMobile();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMobile = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Inicio', url: '/_events/_crupe' },
    { name: 'Cronograma', url: '/_events/_crupe/cronograma' },
    { name: 'Comité Organizador', url: '/_events/_crupe/comision-organizadora' },
    { name: 'Ejes Temáticos', url: '/_events/_crupe/ejes-tematicos' },
    { name: 'Contacto', url: '/contacto' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-[#4BA146]/30 shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="/_events/_crupe" 
            className="flex items-center space-x-2 md:space-x-3 group"
          >
            <div className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md transition-all duration-300 ${
              isScrolled ? 'bg-[#4BA146]' : 'bg-[#4BA146]/90 backdrop-blur-sm group-hover:bg-[#4BA146]'
            }`}>
              <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-[#0077C8] group-hover:text-[#4BA146] transition-all duration-300">
              <h1 className="text-sm md:text-lg font-bold leading-tight">
                I Congreso Científico 
              </h1>
              <p className="text-[0.65rem] md:text-xs tracking-wider text-[#F7941D] group-hover:text-[#0077C8] transition-colors duration-300">
                Internacional CRUPE 2025
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <a 
                  href={item.url} 
                  className={`px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm lg:text-base ${
                    isScrolled 
                      ? 'text-[#0077C8] hover:text-[#4BA146]' 
                      : 'text-white hover:text-[#F7941D]'
                  } relative z-10`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    isScrolled ? 'bg-[#4BA146]' : 'bg-white'
                  } transition-all duration-300 group-hover:w-full`}></span>
                </a>
              </div>
            ))}

            <div className={`h-6 w-px mx-1 lg:mx-2 transition-all duration-300 ${
              isScrolled ? 'bg-[#4BA146]' : 'bg-white/50'
            }`}></div>

            <div className="relative group">
              <a
                href="#"
                className={`px-3 lg:px-4 py-2 rounded-md font-medium text-sm lg:text-base transition-all duration-200 relative z-10 ${
                  isScrolled 
                    ? 'text-[#F7941D] hover:text-[#4BA146]' 
                    : 'text-white hover:text-[#F7941D]'
                }`}
              >
                {isMobile ? 'Regístrate' : 'Regístrate'}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                  isScrolled ? 'bg-[#4BA146]' : 'bg-white'
                } transition-all duration-300 group-hover:w-full`}></span>
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobile}
              className={`transition-all duration-300 p-2 rounded-md ${
                isScrolled 
                  ? 'text-[#0077C8] bg-[#4BA146]/20 hover:bg-[#4BA146]/30' 
                  : 'text-white bg-[#0077C8]/20 hover:bg-[#0077C8]/30'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen 
            ? 'max-h-screen opacity-100 py-2' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className={`rounded-lg mt-2 shadow-lg ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-sm border border-[#4BA146]/30' 
              : 'bg-white/90 backdrop-blur-sm'
          }`}>
            <div className="px-2 py-2 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a 
                    href={item.url} 
                    className="block px-4 py-3 text-[#0077C8] hover:text-[#4BA146] rounded-md transition-all duration-200 font-medium text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-[#4BA146] transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                  </a>
                </div>
              ))}

              <div className="pt-2 mt-1 border-t border-[#4BA146]/30">
                <div className="relative group">
                  <a
                    href="#"
                    className="block px-4 py-3 text-center text-[#F7941D] hover:text-[#0077C8] rounded-md font-medium text-sm transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Regístrate
                    <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#0077C8] transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
