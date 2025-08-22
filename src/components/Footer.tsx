import React from 'react';
import { GraduationCap, Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Edhop Education</h3>
                <p className="text-primary-200 text-sm">Empowering Students</p>
              </div>
            </div>
            <p className="text-primary-200">
              Providing world-class education and training to prepare students for global opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-primary-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/courses" className="text-primary-200 hover:text-white transition-colors">Courses</a></li>
              <li><a href="/admissions" className="text-primary-200 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="/gallery" className="text-primary-200 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li><span className="text-primary-200">IELTS Training</span></li>
              <li><span className="text-primary-200">Study Abroad Guidance</span></li>
              <li><span className="text-primary-200">Skill Development</span></li>
              <li><span className="text-primary-200">Language Courses</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-300" />
                <span className="text-primary-200">123 Education Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-300" />
                <span className="text-primary-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-300" />
                <span className="text-primary-200">info@edhopeducation.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-200">
            © 2024 Edhop Education. All rights reserved. Designed with passion for education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;