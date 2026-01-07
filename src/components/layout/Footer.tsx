import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-dark-100">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
            <img
              src='https://pixzptkgvkiyzdaeffqc.supabase.co/storage/v1/object/sign/images/fokal.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMmZiYjA1NS0zYzg5LTRmMmMtODZiOS1lNDkwNDFhZWU4NWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvZm9rYWwucG5nIiwiaWF0IjoxNzUzMzQ1NDE4LCJleHAiOjE3ODQ4ODE0MTh9.u57F203fGCIWXgu_3EhC6vkzeF7zlZlRtl2Qt0RyQXM'
              alt="FOKAL Solutions Ltd Logo"
              className="w-12 h-12 object-contain"
            />
              <span className="font-display font-bold text-xl text-white">
                FOKAL SOLUTIONS LTD<span className="text-accent-500">.</span>
              </span>
            </Link>
            <p className="text-dark-300 mb-6">
              Creating compelling visual stories through videography, photography, and innovative design that captivates and inspires.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/fokalsolutionslimited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-accent-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/officialfokal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-accent-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/fokalltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-accent-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.youtube.com/Fokalltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-accent-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/fokalltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-accent-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-dark-300 hover:text-accent-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-accent-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark-300 hover:text-accent-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-dark-300 hover:text-accent-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark-300 hover:text-accent-500 transition-colors">
                  Contact
                </Link>
              </li>
                <li>
                  <Link to="/booking" className="text-dark-300 hover:text-accent-500 transition-colors">
                    Book Now
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="text-dark-400/50 hover:text-accent-500 transition-colors text-xs">
                    Admin Dashboard
                  </Link>
                </li>

            </ul>
          </div>

          

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-dark-300">
                  Garden Hills, Port Moresby<br />
                  National Capital District, PNG
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                <a href="tel:+67578133694" className="text-dark-300 hover:text-accent-500 transition-colors">
                  (+675) 7030 5609
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@fokalltd.com" className="text-dark-300 hover:text-accent-500 transition-colors">
                  info@fokalltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-400 text-sm mb-4 md:mb-0">
              &copy; {year} NOXICONS IT SOLUTIONS. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-dark-400 hover:text-accent-500 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-dark-400 hover:text-accent-500 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
