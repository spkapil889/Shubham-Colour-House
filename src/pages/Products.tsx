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
  }
];

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-blue text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled-1.webp"
            alt="Products Hero"
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-brand-blue/30 to-brand-blue/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Our Product Range
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light"
          >
            Discover premium paints, coatings, and waterproofing solutions from the world's leading brands.
          </motion.p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {productCategories.map((cat, idx) => (
              <div key={cat.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="rounded-[2rem] w-full h-[400px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl border border-gray-100">
                      <p className="text-brand-blue font-bold text-sm mb-2">Recommended Brands</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.brands.map(b => (
                          <span key={b} className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium">{b}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`space-y-8 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-4xl font-bold text-brand-dark">{cat.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{cat.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.features.map(f => (
                      <div key={f} className="flex items-center gap-3 text-brand-dark font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 flex flex-wrap gap-4">
                    <button className="btn-premium bg-brand-blue text-white !px-10 !py-4 flex items-center gap-2">
                      Get a Quote <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="btn-premium bg-white border-2 border-gray-200 text-brand-dark !px-10 !py-4 hover:border-brand-blue hover:text-brand-blue">
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
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3 space-y-6">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center">
                <Info className="w-8 h-8 text-brand-accent" />
              </div>
              <h2 className="text-4xl font-bold text-brand-dark">Confused About Which Product to Choose?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Choosing the right paint depends on many factors like surface condition, exposure to sunlight, and desired finish. Our experts can help you select the perfect product for your specific needs.
              </p>
              <button className="btn-premium bg-brand-accent text-white !px-12 !py-5">
                Talk to Our Expert Today
              </button>
            </div>
            <div className="lg:w-1/3">
              <img
                src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled-1.webp"
                alt="Expert Help"
                className="rounded-3xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
