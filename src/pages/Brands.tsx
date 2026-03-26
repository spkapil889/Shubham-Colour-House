import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const brands = [
  {
    name: 'Asian Paints',
    logo: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/5.webp',
    description: 'India\'s leading paint company offering a wide range of interior, exterior, and decorative paints.',
    highlights: ['Royale Luxury Emulsion', 'Apex Ultima Exterior', 'SmartCare Waterproofing']
  },
  {
    name: 'Berger Paints',
    logo: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/6.webp',
    description: 'Known for innovation and high-quality coatings for homes and industrial applications.',
    highlights: ['Silk Glamor', 'Weathercoat Long Life', 'Home Shield Solutions']
  },
  {
    name: 'Nerolac',
    logo: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/7.webp',
    description: 'A pioneer in industrial and decorative paints with a focus on eco-friendly products.',
    highlights: ['Impressions Eco Clean', 'Excel Everlast', 'Suraksha Plus']
  },
  {
    name: 'Nippon Paint',
    logo: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/8.webp',
    description: 'Global leader in paint technology providing advanced coating solutions.',
    highlights: ['Momento Special Effects', 'Weatherbond Advance', 'Odour-less AirCare']
  },
  {
    name: 'JSW Paints',
    logo: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/spacious-living-room-in-modern-apartment-2025-02-10-09-52-33-utc-1-scaled-1.webp',
    description: 'Modern paint solutions with a focus on simplicity and high performance.',
    highlights: ['Halo Interior', 'Aurum Exterior', 'Pixa Range']
  }
];

export default function Brands() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-purple text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled-1.webp"
            alt="Brands Hero"
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/60 via-brand-purple/30 to-brand-purple/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Our Trusted Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light"
          >
            We exclusively partner with the world's most reliable paint brands to ensure your home gets the best.
          </motion.p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {brands.map((brand, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="premium-card p-10 flex flex-col items-center text-center"
              >
                <div className="h-24 flex items-center justify-center mb-8">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">{brand.name}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {brand.description}
                </p>
                <div className="w-full space-y-3 text-left mb-8">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Popular Products</p>
                  {brand.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2 text-sm font-medium text-brand-dark">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                      {h}
                    </div>
                  ))}
                </div>
                <button className="mt-auto text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Explore {brand.name} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Branded Paints */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 -skew-x-12 translate-x-1/4" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold">Why Choose Branded Paints?</h2>
                <div className="space-y-6">
                  {[
                    { title: 'Consistent Quality', desc: 'Every bucket of paint follows strict quality control standards.' },
                    { title: 'Advanced Research', desc: 'Continuous innovation for better durability and finish.' },
                    { title: 'Health & Safety', desc: 'Low VOC and lead-free options for a safer home environment.' },
                    { title: 'Warranty Support', desc: 'Peace of mind with manufacturer-backed performance warranties.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Need Help Choosing?</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Different brands excel in different categories. Our experts can help you compare and choose the brand that best fits your budget and requirements.
                </p>
                <button className="btn-premium bg-brand-accent text-white w-full !px-10 !py-5">
                  Talk to Our Brand Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
