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
    <div className="bg-brand-paper min-h-screen">
      {/* Hero */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold">Authorized Partners</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif mb-8 tracking-tight text-brand-dark"
          >
            Our Trusted <span className="italic text-brand-gold">Partners</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto font-light leading-relaxed"
          >
            We exclusively partner with the world's most reliable paint brands to ensure your home gets the best quality and finish.
          </motion.p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {brands.map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="h-32 w-full flex items-center justify-center mb-10 bg-brand-paper rounded-[2rem] p-8 border border-brand-dark/5 group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-brand-dark">{brand.name}</h3>
                <p className="text-brand-muted text-sm mb-8 leading-relaxed font-light px-4">
                  {brand.description}
                </p>
                <div className="w-full space-y-4 text-left mb-10 bg-brand-paper/50 p-6 rounded-2xl border border-brand-dark/5">
                  <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-4">Popular Products</p>
                  {brand.highlights.map(h => (
                    <div key={h} className="flex items-center gap-3 text-xs font-medium text-brand-dark">
                      <CheckCircle2 className="w-3 h-3 text-brand-gold" />
                      {h}
                    </div>
                  ))}
                </div>
                <button className="mt-auto text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                  Explore {brand.name} <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Branded Paints */}
      <section className="py-40 bg-brand-paper">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark text-white rounded-[3rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/4" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Quality Assurance</h2>
                  <p className="text-4xl md:text-6xl font-serif leading-tight">
                    Why Choose <br />
                    <span className="italic text-brand-gold">Branded</span> Paints?
                  </p>
                </div>
                <div className="space-y-10">
                  {[
                    { title: 'Consistent Quality', desc: 'Every bucket of paint follows strict quality control standards.' },
                    { title: 'Advanced Research', desc: 'Continuous innovation for better durability and finish.' },
                    { title: 'Health & Safety', desc: 'Low VOC and lead-free options for a safer home environment.' },
                    { title: 'Warranty Support', desc: 'Peace of mind with manufacturer-backed performance warranties.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-6 h-6 text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-serif text-2xl mb-2">{item.title}</h4>
                        <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 p-12 md:p-16 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                <h3 className="text-3xl font-serif mb-8">Need Help Choosing?</h3>
                <p className="text-white/60 mb-12 leading-relaxed font-light">
                  Different brands excel in different categories. Our experts can help you compare and choose the brand that best fits your budget and requirements.
                </p>
                <button className="btn-premium-gold w-full">
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
