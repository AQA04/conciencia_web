import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  const navLinks = [
    { name: 'Fundamentos', path: '/fundamentos' },
    { name: 'Vacíos Éticos', path: '/realidades' },
    { name: 'Nuestro Compromiso', path: '/contacto' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-brand-dark" />
            <span className="font-black text-xl tracking-tight text-brand-dark">Conciencia<span className="text-brand-yellow">.</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-brand-dark hover:text-brand-yellow transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pl-4 border-l border-gray-200">
              <Link
                to="/fundamentos"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-brand-dark rounded-full text-sm font-semibold text-brand-dark hover:bg-brand-dark hover:text-white transition-all"
              >
                Lectura Rápida
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark hover:bg-gray-50 hover:text-brand-yellow"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/realidades"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center px-3 py-2 rounded-md text-base font-medium bg-brand-dark text-white hover:bg-gray-800"
            >
              Lectura Rápida
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
