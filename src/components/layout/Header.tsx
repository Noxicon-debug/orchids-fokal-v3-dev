import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-950/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src='https://pixzptkgvkiyzdaeffqc.supabase.co/storage/v1/object/sign/images/fokal.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMmZiYjA1NS0zYzg5LTRmMmMtODZiOS1lNDkwNDFhZWU4NWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvZm9rYWwucG5nIiwiaWF0IjoxNzUzMzQ1NDE4LCJleHAiOjE3ODQ4ODE0MTh9.u57F203fGCIWXgu_3EhC6vkzeF7zlZlRtl2Qt0RyQXM'
              alt="FOKAL Solutions Ltd Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl md:text-2xl text-white leading-tight">
                FOKAL SOLUTIONS LTD
              </span>
              <span className="text-accent-500 text-xs font-medium uppercase tracking-wider">
                Multimedia Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-accent-400 ${
                    isActive ? 'text-accent-500' : 'text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/booking"
              className="btn btn-accent text-sm py-2 px-4"
            >
              Book Now
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-900 overflow-hidden"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `py-2 text-base font-medium transition-colors ${
                        isActive ? 'text-accent-500' : 'text-white hover:text-accent-400'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <NavLink
                  to="/booking"
                  className="btn btn-accent text-center mt-2"
                  onClick={closeMenu}
                >
                  Book Now
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
