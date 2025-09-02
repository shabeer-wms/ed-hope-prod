import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import logolight from '../assets/edhop-logo-light.png';

const Footer = () => {
  return (
  <footer className="bg-primary-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <a href="#" className="text-accent-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-primary-100 hover:text-accent-400 transition-colors">About Us</a></li>
              <li><a href="/courses" className="text-primary-100 hover:text-accent-400 transition-colors">Courses</a></li>
              <li><a href="/admissions" className="text-primary-100 hover:text-accent-400 transition-colors">Admissions</a></li>
              <li><a href="/gallery" className="text-primary-100 hover:text-accent-400 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-400">Popular Courses</h4>
            <ul className="space-y-2">
              <li><span className="text-primary-100">IELTS Training</span></li>
              <li><span className="text-primary-100">Study Abroad Guidance</span></li>
              <li><span className="text-primary-100">Skill Development</span></li>
              <li><span className="text-primary-100">Language Courses</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-400" />
                <span className="text-primary-100">123 Education Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-400" />
                <span className="text-primary-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-400" />
                <span className="text-primary-100">info@edhopeducation.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-100">
            © 2024 Edhop Education. All rights reserved. Designed with passion for education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;