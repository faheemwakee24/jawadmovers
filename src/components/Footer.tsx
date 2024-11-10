import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Professional moving services with over 20 years of experience in
              residential and commercial relocations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/get-quote" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Residential Moving</li>
              <li className="text-gray-600 dark:text-gray-400">Commercial Moving</li>
              <li className="text-gray-600 dark:text-gray-400">International Shipping</li>
              <li className="text-gray-600 dark:text-gray-400">Storage Solutions</li>
              <li className="text-gray-600 dark:text-gray-400">Packing Services</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Street 46, I-9/4 I 9 Markaz I-9, Islamabad, Islamabad Capital Territory, Pakistan</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+92 315 1128324</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5" />
                <span>contact@JawadMovers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} MoveMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;