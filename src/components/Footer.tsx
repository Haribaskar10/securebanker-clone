
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-bank-blue flex items-center justify-center">
                <span className="text-white font-bold">SB</span>
              </div>
              <span className="font-bold text-xl text-bank-dark-blue">SecureBank</span>
            </div>
            <p className="text-gray-600 mt-2">
              Secure, reliable banking solutions for all your financial needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-bank-blue transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-bank-blue transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-bank-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-bank-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-bank-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-bank-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-bank-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-bank-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#savings" className="text-gray-600 hover:text-bank-blue transition-colors">
                  Savings Account
                </Link>
              </li>
              <li>
                <Link to="/services#loans" className="text-gray-600 hover:text-bank-blue transition-colors">
                  Loans
                </Link>
              </li>
              <li>
                <Link to="/services#cards" className="text-gray-600 hover:text-bank-blue transition-colors">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link to="/services#investments" className="text-gray-600 hover:text-bank-blue transition-colors">
                  Investments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-bank-blue mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Banking Street, Financial District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-bank-blue flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-bank-blue flex-shrink-0" />
                <span className="text-gray-600">support@securebank.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} SecureBank. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-600 hover:text-bank-blue text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-bank-blue text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/security" className="text-gray-600 hover:text-bank-blue text-sm transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
