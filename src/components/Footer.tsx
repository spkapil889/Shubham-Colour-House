import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-orange pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main White Card */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 mb-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Logo Column */}
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center gap-4">
                <img
                  src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/Group-34-2048x1492.png"
                  alt="Shubham Colour House"
                  className="h-24 md:h-32 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-3">
              <h4 className="text-2xl font-black mb-8 text-brand-dark">Services</h4>
              <ul className="space-y-4">
                {[
                  'Exterior Painting',
                  'Interior Painting',
                  'Object Painting',
                  'Residential Painting',
                  'Furniture Painting'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <span className="text-gray-700 font-bold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-2">
              <h4 className="text-2xl font-black mb-8 text-brand-dark">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Need a Painter?', path: '/need-a-painter' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <Link to={item.path} className="text-gray-700 hover:text-brand-accent transition-colors font-bold">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in touch Column */}
            <div className="lg:col-span-3">
              <h4 className="text-2xl font-black mb-8 text-brand-dark">Get in touch</h4>
              <div className="space-y-6">
                <p className="text-gray-700 font-bold leading-relaxed text-sm">
                  Scheme No. 02, Vijay Commercial Complex, <br />
                  Bhagat Singh Circle, Plot No. 43, near Jai <br />
                  Marg, Alwar, Rajasthan 301001
                </p>
                <div className="space-y-4">
                  <a href="mailto:info@shubhamcolourhouse.com" className="flex items-center gap-3 group">
                    <Mail className="w-5 h-5 text-red-600 shrink-0" />
                    <span className="text-gray-700 group-hover:text-brand-accent transition-colors font-bold text-sm">
                      info@shubhamcolourhouse.com
                    </span>
                  </a>
                  <a href="tel:+622120022012" className="flex items-center gap-3 group">
                    <Phone className="w-5 h-5 text-red-600 shrink-0" />
                    <span className="text-gray-700 group-hover:text-brand-accent transition-colors font-bold text-sm">
                      +6221.2002.2012
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-8">
          <p className="text-white text-sm font-bold">
            Copyright © 2025, All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Youtube, href: '#' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-brand-accent transition-all text-white"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
