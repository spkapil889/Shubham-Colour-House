import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FE3A83] to-[#F97316] pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div className="bg-black rounded-[3rem] p-12 md:p-20 mb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Logo Column */}
            <div className="lg:col-span-4 space-y-8">
              <Link to="/" className="inline-block">
                <img
                  src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/Group-34-2048x1492-1.webp"
                  alt="Logo"
                  className="h-20 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-white text-sm leading-relaxed font-light max-w-xs">
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
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FE3A83] hover:border-[#FE3A83] transition-all duration-500 text-white"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-2 space-y-8">
              <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#FE3A83]">Services</h4>
              <ul className="space-y-4">
                {[
                  'Exterior Painting',
                  'Interior Painting',
                  'Object Painting',
                  'Residential Painting',
                  'Furniture Painting'
                ].map((item) => (
                  <li key={item}>
                    <span className="text-white/80 hover:text-[#FE3A83] transition-colors text-sm font-light cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-2 space-y-8">
              <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#FE3A83]">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Need a Painter?', path: '/need-a-painter' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-white/80 hover:text-[#FE3A83] transition-colors text-sm font-light">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in touch Column */}
            <div className="lg:col-span-4 space-y-8">
              <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#FE3A83]">Get in touch</h4>
              <div className="space-y-8">
                <p className="text-white/80 font-light leading-relaxed text-sm">
                  Scheme No. 02, Vijay Commercial Complex, <br />
                  Bhagat Singh Circle, Plot No. 43, near Jai <br />
                  Marg, Alwar, Rajasthan 301001
                </p>
                <div className="space-y-4">
                  <a href="mailto:info@shubhamcolourhouse.com" className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FE3A83] transition-colors duration-500">
                      <Mail className="w-3 h-3 text-[#FE3A83] group-hover:text-white" />
                    </div>
                    <span className="text-white/80 group-hover:text-[#FE3A83] transition-colors text-sm font-light">
                      info@shubhamcolourhouse.com
                    </span>
                  </a>
                  <a href="tel:+622120022012" className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FE3A83] transition-colors duration-500">
                      <Phone className="w-3 h-3 text-[#FE3A83] group-hover:text-white" />
                    </div>
                    <span className="text-white/80 group-hover:text-[#FE3A83] transition-colors text-sm font-light">
                      +6221.2002.2012
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/20 pt-12">
          <p className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">
            Copyright © 2025 Shubham Colour House. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-white hover:text-[#FE3A83] text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white hover:text-[#FE3A83] text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
