import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Info } from 'lucide-react';

const productCategories = [
  {
    id: 'interior',
    title: 'Interior Wall Paints',
    description: 'Create the perfect ambiance with our range of interior finishes, from matte to high-gloss.',
    features: ['Washable & Durable', 'Stain Resistant', 'Low VOC / Eco-friendly', 'Rich Colour Depth'],
    brands: ['Asian Paints Royale', 'Berger Silk', 'Nerolac Impressions'],
    image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/5.webp'
  },
  {
    id: 'exterior',
    title: 'Exterior Wall Paints',
    description: 'Protect your home from harsh weather, dust, and algae with advanced exterior coatings.',
    features: ['Weather Guard Technology', 'Anti-Algal & Anti-Dust', 'Crack Bridging', 'Heat Reflective'],
    brands: ['Asian Paints Apex Ultima', 'Berger Weathercoat', 'Nippon Weatherbond'],
    image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/6.webp'
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing Solutions',
    description: 'Comprehensive leak-proof solutions for roofs, bathrooms, and external walls.',
    features: ['High Elasticity', 'Negative Pressure Resistance', 'Damp-proof Technology', 'Long-lasting Warranty'],
    brands: ['Dr. Fixit', 'Asian Paints SmartCare', 'Berger Home Shield'],
    image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/7.webp'
  },
  {
    id: 'wood-metal',
    title: 'Wood & Metal Finishes',
    description: 'Premium enamels and PU coatings to protect and beautify your furniture and metal fixtures.',
    features: ['High Gloss & Smooth Finish', 'Rust Protection', 'Scratch Resistant', 'Quick Drying'],
    brands: ['Asian Paints PU', 'Berger Luxol', 'Nerolac Enamel'],
    image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/8.webp'
  },
  {
    id: 'automotive',
    title: 'Automotive paint',
    description: 'High-performance coatings and finishes for vehicles, providing superior gloss, durability, and weather resistance.',
    features: ['High Gloss Finish', 'Scratch Resistance', 'UV Protection', 'Quick Drying'],
    brands: ['Nippon Paint', 'Asian Paints PPG', 'Berger Lewis'],
    image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Products() {
  return (
    <div className="bg-brand-paper">
      {/* Hero */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Our Selection</span>
            <h1 className="text-6xl md:text-9xl font-black text-brand-dark tracking-tight leading-[0.9]">
              Premium <br />
              <span className="text-gradient">Curations</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
              Discover premium paints, coatings, and waterproofing solutions from the world's leading brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-48">
            {productCategories.map((cat, idx) => (
              <div key={cat.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={idx % 2 !== 0 ? 'lg:order-2' : ''}
                >
                  <div className="relative">
                    <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-brand-dark p-8 rounded-[2rem] shadow-2xl border border-white/10 hidden md:block max-w-[280px]">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-purple mb-4">Recommended Brands</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.brands.map(b => (
                          <span key={b} className="text-[10px] text-white/60 bg-white/5 px-3 py-1 rounded-full font-medium border border-white/10">{b}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className={`space-y-10 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Category {idx + 1}</span>
                    <h2 className="text-5xl md:text-6xl font-black text-brand-dark leading-[1.1]">{cat.title}</h2>
                    <p className="text-brand-muted text-lg leading-relaxed font-light">{cat.description}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cat.features.map(f => (
                      <div key={f} className="flex items-center gap-4 text-brand-dark font-medium text-sm">
                        <div className="w-5 h-5 rounded-full bg-brand-paper flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-brand-purple" />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="pt-8 flex flex-wrap gap-6">
                    <button className="btn-premium-gradient">
                      Get a Quote
                    </button>
                    <button className="btn-premium">
                      View Shade Card
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Consultation CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark rounded-[3rem] p-12 md:p-24 border border-white/10 flex flex-col lg:flex-row items-center gap-20 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full -mr-48 -mt-48" />
            <div className="lg:w-2/3 space-y-10 relative z-10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">
                <Info className="w-6 h-6 text-brand-purple" />
              </div>
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">Confused About <br /><span className="text-gradient">Your Choice?</span></h2>
                <p className="text-white/60 text-lg leading-relaxed font-light max-w-xl">
                  Choosing the right paint depends on many factors like surface condition, exposure to sunlight, and desired finish. Our experts can help you select the perfect product for your specific needs.
                </p>
              </div>
              <button className="btn-premium-gradient">
                Talk to Our Expert
              </button>
            </div>
            <div className="lg:w-1/3 relative z-10">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-square">
                <img
                  src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled-1.webp"
                  alt="Expert Help"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
