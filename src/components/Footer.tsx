import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPinned } from 'lucide-react';
import logolight from '../assets/edhop-logo-light.png';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info with Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logolight} alt="Edhop Logo" className="h-12 w-auto rounded-lg bg-white p-2 shadow-md" />
              <div>
                <h3 className="text-xl font-bold text-white">Edhop Education</h3>
                <p className="text-accent-400 text-sm">Empowering Students</p>
              </div>
            </div>
            <p className="text-primary-100">
              Providing world-class education and training to prepare students for global opportunities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/edhop_education/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/Edutaliminternationalofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://web.whatsapp.com/send?phone=919037346234&text="
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Spacer for layout */}
          <div></div>
          <div className="text-right md:text-right lg:text-right flex flex-col justify-end">
            <h4 className="text-lg font-semibold mb-4 text-accent-400 text-right">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex flex-col items-end text-right w-full">
                <div className="flex items-center space-x-2 justify-end w-full">
                  <MapPinned className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-100 text-right">EDHOP Education, City Centre,</span>
                </div>
                <span className="text-primary-100 text-right">Pattambi Road Perinthalmanna</span>
              </div>
              
              <div className="flex items-center space-x-2 justify-end">
                <Phone className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <span className="text-primary-100">+91 90373 46234</span>
              </div>
              <div className="flex items-center space-x-2 justify-end">
                <Mail className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <span className="text-primary-100">Info@edhop.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-100">
            © 2025 Edhop Education. All rights reserved. Designed with passion for education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;