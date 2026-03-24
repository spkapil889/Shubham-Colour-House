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
  { name: 'Need a Painter?', path: '/need-a-painter' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact Us', path: '/contact' },
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-header py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/Group-34-2048x1492.png"
            alt="Shubham Colour House"
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-blue',
                location.pathname === link.path
                  ? 'text-brand-blue'
                  : 'text-brand-dark'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/calculator"
            className="flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-red transition-colors"
          >
            <Calculator className="w-4 h-4" />
            <span>Paint Calculator</span>
          </Link>
          <Link
            to="/contact"
            className="bg-brand-blue hover:bg-brand-purple text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            Talk to Expert
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden p-2 text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[64px] bg-white z-40 overflow-y-auto animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-semibold border-b border-gray-100 pb-4',
                  location.pathname === link.path ? 'text-brand-blue' : 'text-brand-dark'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <Link
                to="/calculator"
                className="flex items-center justify-center gap-2 bg-brand-orange/10 text-brand-orange p-4 rounded-xl font-bold"
              >
                <Calculator className="w-5 h-5" />
                <span>Paint Calculator</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-brand-blue text-white p-4 rounded-xl font-bold"
              >
                <Phone className="w-5 h-5" />
                <span>Talk to Expert</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
