import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/">
              <img
                src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/Group-34-2048x1492.png"
                alt="Shubham Colour House"
                className="h-12 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Alwar's most trusted destination for premium paints and home transformation solutions. With 30+ years of expertise, we bring color and life to your spaces.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-purple transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Products', 'Paint Calculator', 'Brands', 'Need a Painter?', 'Blogs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-').replace('?', '')}`}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              {['Interior Paints', 'Exterior Paints', 'Wood & Metal Finishes', 'Waterproofing', 'Primers & Putty', 'Tools & Accessories'].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-brand-orange shrink-0" />
                <span className="text-gray-400 text-sm">
                  Vijay Commercial Complex, Near Bhagat Singh Circle, Alwar, Rajasthan 301001
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-brand-blue shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919829012345" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +91 98290 12345
                  </a>
                  <a href="tel:+919414012345" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +91 94140 12345
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-brand-purple shrink-0" />
                <a href="mailto:info@shubhamcolourhouse.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@shubhamcolourhouse.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © 2026 Shubham Colour House. All Rights Reserved. Designed for Excellence.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
