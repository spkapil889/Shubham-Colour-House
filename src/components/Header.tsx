import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calculator, Paintbrush } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Products', path: '/products' },
  { name: 'Paint Calculator', path: '/calculator' },
  { name: 'Brands', path: '/brands' },
  { name: 'Need A Painter?', path: '/need-a-painter' },
  { name: 'Blogs', path: '/blogs' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl md:rounded-full shadow-xl border border-gray-100 flex items-center justify-between px-6 py-3 md:py-4 pointer-events-auto">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="https://pink-beaver-690950.hostingersite.com/wp-content/uploads/2025/09/Group-34-e1774630928285.webp"
            alt="Logo"
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-100',
                location.pathname === link.path
                  ? 'text-brand-dark opacity-100'
                  : 'text-brand-dark opacity-50'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="btn-premium-gradient"
          >
            Contact
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-24 bg-white rounded-3xl shadow-2xl z-40 overflow-y-auto animate-in slide-in-from-top duration-300 pointer-events-auto border border-gray-100">
          <div className="p-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-bold border-b border-gray-50 pb-4',
                  location.pathname === link.path ? 'text-brand-purple' : 'text-gray-800'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-premium-gradient text-center py-5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
