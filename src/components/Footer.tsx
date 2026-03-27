import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FE3A83] to-[#F97316] pt-20 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Content Box */}
        <div className="bg-black rounded-[3rem] p-12 md:p-20 mb-12 relative z-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Logo Column */}
            <div className="lg:col-span-4 space-y-10">
              <Link to="/" className="inline-block">
                <img
                  src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/Group-34-2048x1492-1.webp"
                  alt="Logo"
                  className="h-16 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-white text-sm leading-relaxed font-medium max-w-xs">
                Alwar's premier destination for premium paints and home transformation solutions since 1995. Elevating spaces with precision and elegance.
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
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 text-white"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-2 space-y-8">
              <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F931B6]">Services</h4>
              <ul className="space-y-4">
                {[
                  'Exterior Painting',
                  'Interior Painting',
                  'Object Painting',
                  'Residential Painting',
                  'Furniture Painting'
                ].map((item) => (
                  <li key={item}>
                    <span className="text-white hover:text-[#F931B6] transition-colors text-sm font-medium cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-2 space-y-8">
              <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F931B6]">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Need a Painter?', path: '/need-a-painter' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-white hover:text-[#F931B6] transition-colors text-sm font-medium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in touch Column */}
            <div className="lg:col-span-4 space-y-8">
              <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F931B6]">Get in touch</h4>
              <div className="space-y-8">
                <p className="text-white font-medium leading-relaxed text-sm">
                  Scheme No. 02, Vijay Commercial Complex, <br />
                  Bhagat Singh Circle, Plot No. 43, near Jai <br />
                  Marg, Alwar, Rajasthan 301001
                </p>
                <div className="space-y-5">
                  <a href="mailto:info@shubhamcolourhouse.com" className="flex items-center gap-4 group">
                    <Mail className="w-4 h-4 text-[#F931B6]" />
                    <span className="text-white group-hover:text-[#F931B6] transition-colors text-sm font-medium">
                      info@shubhamcolourhouse.com
                    </span>
                  </a>
                  <a href="tel:+622120022012" className="flex items-center gap-4 group">
                    <Phone className="w-4 h-4 text-[#F931B6]" />
                    <span className="text-white group-hover:text-[#F931B6] transition-colors text-sm font-medium">
                      +6221.2002.2012
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/20 pt-10">
          <p className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">
            Copyright © 2025 Shubham Colour House. All rights reserved.
          </p>
          <div className="flex items-center gap-10">
            <Link to="/privacy" className="text-white hover:opacity-70 text-[10px] font-bold tracking-[0.2em] uppercase transition-all">Privacy Policy</Link>
            <Link to="/terms" className="text-white hover:opacity-70 text-[10px] font-bold tracking-[0.2em] uppercase transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
