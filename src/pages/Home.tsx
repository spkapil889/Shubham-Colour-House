import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Calculator, Paintbrush, ShieldCheck, Award, Users, ChevronRight, Star, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled-1.webp',
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled-1.webp',
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/spacious-living-room-in-modern-apartment-2025-02-10-09-52-33-utc-1-scaled-1.webp',
];

const trustStats = [
  { label: 'Happy Customer', value: '14K+', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-100' },
  { label: 'Project Done', value: '17K+', icon: CheckCircle2, color: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-100' },
  { label: 'Certified Expertise', value: '124+', icon: Award, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-100' },
  { label: 'Guarantee Satisfying', value: '100%', icon: ShieldCheck, color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-100' },
];

const partnerLogos = [
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/5.webp',
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/6.webp',
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/7.webp',
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/8.webp',
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/warm-and-cozy-composition-of-living-room-interior-2024-10-17-17-58-03-utc-1-2048x1365-1.webp',
];

const categories = [
  { name: 'Interior Paints', image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/5.webp', description: 'Transform your living spaces with premium finishes.' },
  { name: 'Exterior Paints', image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/6.webp', description: 'Weather-resistant protection for your home.' },
  { name: 'Wood & Metal', image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/7.webp', description: 'Durable and elegant finishes for all surfaces.' },
  { name: 'Waterproofing', image: 'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/8.webp', description: 'Advanced solutions for leak-proof homes.' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      {/* Section 1: Hero Banner */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              src={heroSlides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-brand-dark/50 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-4 relative z-20 pt-32 md:pt-40">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white"
            >
              <div className="inline-flex items-center bg-brand-orange text-white px-4 py-2 rounded-sm mb-10">
                <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                  Est. 1995 • Alwar's Premier Paint House
                </span>
              </div>
              
              <h1 className="text-[14vw] md:text-[8vw] font-serif font-black leading-[0.9] mb-12 tracking-tight">
                Premium <br />
                <span className="text-transparent stroke-white stroke-1 italic" style={{ WebkitTextStroke: '1px white' }}>Paint</span> <br />
                <span className="text-brand-orange">Solutions</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <Link
                  to="/products"
                  className="btn-premium bg-brand-orange text-white !px-12 !py-6 text-xl md:text-2xl"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    EXPLORE COLLECTION <ArrowRight className="w-6 h-6" />
                  </span>
                </Link>
                
                <Link
                  to="/calculator"
                  className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors"
                >
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-orange transition-colors">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-widest opacity-60">Free Tool</p>
                    <p className="font-bold">Paint Calculator</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === idx ? 'w-12 bg-brand-orange' : 'w-4 bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled-1.webp"
                  alt="Modern Living Room"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="h-1 w-12 bg-brand-orange rounded-full" />
                  <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Who We Are</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-dark leading-tight">
                  30 Years of Adding <br />
                  <span className="text-brand-orange italic">Color to Alwar</span>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed font-light">
                  Since our inception, Shubham Colour House has been at the forefront of the paint industry. We don't just sell paint; we provide complete home transformation solutions with a legacy of trust.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Top Brands', desc: 'Authorized dealer for Asian, Berger & more.' },
                  { title: 'Expert Advice', desc: 'Personalized color consultations.' },
                  { title: 'Waterproofing', desc: 'Advanced leak-proof solutions.' },
                  { title: 'Verified Painters', desc: 'Hassle-free professional work.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 p-2 group">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-brand-orange group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark mb-1">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="btn-premium bg-brand-dark text-white !px-12 !py-6 text-xl md:text-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Our Full Journey <ArrowRight className="w-6 h-6" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Counter Section */}
      <section className="py-24 relative overflow-hidden bg-brand-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {trustStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-4"
              >
                <h3 className="text-5xl md:text-7xl font-serif font-black text-brand-orange">{stat.value}</h3>
                <p className="text-white/60 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Product Range */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs tracking-widest uppercase">
              Our Collection
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-dark">Our Product Range</h2>
            <p className="text-gray-600 text-xl leading-relaxed font-light">
              Explore our comprehensive collection of paints and coatings designed for every surface and requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden relative rounded-[2rem] mb-8">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif font-black text-brand-dark group-hover:text-brand-orange transition-colors">{cat.name}</h3>
                  <p className="text-gray-500 leading-relaxed font-light">{cat.description}</p>
                  <Link to="/products" className="inline-flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest text-sm group/link">
                    View Collection <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Process */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-brand-orange font-bold tracking-widest uppercase text-sm flex items-center gap-3">
                  <div className="w-10 h-1 bg-brand-orange rounded-full" />
                  How it works
                </span>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-dark leading-tight">
                  Always on Time and <br />
                  <span className="text-brand-orange italic">Never Delay</span>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed font-light">
                  At Shubham Colour House, we value your time as much as the quality of your walls. Our streamlined process ensures a stress-free experience from start to finish.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  { step: '01', title: 'Expert Consultation', desc: 'Personalized guidance to understand your space, style, and budget.', icon: Users },
                  { step: '02', title: 'Product Selection', desc: 'Choose from premium paints like Asian, Berger, and Nippon.', icon: Paintbrush },
                  { step: '03', title: 'Professional Finish', desc: 'Timely completion with flawless results by trusted painters.', icon: CheckCircle2 }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand-orange transition-colors">
                      <span className="text-brand-orange font-bold text-lg">{item.step}</span>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-2xl font-serif font-black text-brand-dark mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed max-w-md font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[4rem] overflow-hidden">
                <img
                  src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled-1.webp"
                  alt="Painting Process"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Section */}
      <section className="py-32 bg-brand-dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-xl p-12 md:p-24 rounded-[4rem] border border-white/10">
            <div className="text-white space-y-6 text-center lg:text-left">
              <h2 className="text-5xl md:text-7xl font-serif font-black leading-tight">Ready to Paint <br />Your Dreams?</h2>
              <p className="text-xl text-white/60 max-w-md font-light">Contact us today for expert color samples and detailed paint estimates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <Link
                to="/contact"
                className="btn-premium bg-brand-orange text-white !px-12 !py-6 text-xl md:text-2xl"
              >
                <span className="relative z-10">Request Estimates</span>
              </Link>
              <Link
                to="/calculator"
                className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-orange transition-colors">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest opacity-60">Free Tool</p>
                  <p className="font-bold">Paint Calculator</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Top Quality */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-[3rem] overflow-hidden">
                <img
                  src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled-1.webp"
                  alt="Top Quality Solutions"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-12 order-1 lg:order-2">
              <div className="space-y-6">
                <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Premium Solutions</span>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-dark leading-tight">
                  Bring Life to <br />Your Walls
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed font-light">
                  At Shubham Colour House, we believe every wall tells a story. We help you transform dull walls into vibrant, lasting spaces full of life and style.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {[
                  'Wide variety of shades & finishes',
                  'Weather-resistant for Rajasthan climate',
                  'Long-lasting, durable quality',
                  'Expert guidance for every room',
                  'Professional flawless results'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange group-hover:text-white" />
                    </div>
                    <span className="text-xl font-bold text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose Us */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Our Advantage</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-dark">Why Choose Us?</h2>
            <p className="text-gray-600 text-xl leading-relaxed font-light">
              With over 30 years of experience in Alwar, our team ensures every wall we touch reflects perfection and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Expertise', desc: '30+ years of professional guidance and flawless application.', icon: Award },
              { title: 'Quality', desc: 'Authentic products from trusted brands for lasting beauty.', icon: ShieldCheck },
              { title: 'Cleanliness', desc: 'Neat, organized work with minimal disruption to your home.', icon: Paintbrush }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="text-center space-y-8 group"
              >
                <div className="w-24 h-24 rounded-full border border-gray-100 flex items-center justify-center mx-auto group-hover:border-brand-orange transition-colors">
                  <item.icon className="w-10 h-10 text-brand-orange" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif font-black text-brand-dark">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Color Palette */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-10">
                <h2 className="text-5xl md:text-8xl font-serif font-black leading-tight">
                  Find Your <br />
                  <span className="text-brand-orange italic">Perfect Palette</span>
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed font-light">
                  The right colors can transform your home. We help you pick shades that make small rooms look bigger and large spaces more inviting.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center">
                      <Paintbrush className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h4 className="text-2xl font-serif font-black">Free Consultation</h4>
                    <p className="text-gray-400 leading-relaxed font-light">Expert guidance in selecting colors, finishes, and types tailored to your style.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h4 className="text-2xl font-serif font-black">Quick Support</h4>
                    <p className="text-gray-400 leading-relaxed font-light">Our team helps with queries on product use, maintenance, or after-service care.</p>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-[3rem] overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/88/68/63/886863a31db589cb0e3696e7dadd24ad.jpg"
                    alt="Color Palette"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Trusted By */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-blue font-black tracking-widest uppercase text-sm">Our Partners</span>
            <h2 className="text-4xl font-black text-brand-dark mt-4">Trusted By Leading Organizations</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-[3rem] p-12 border border-gray-100">
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                {partnerLogos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt={`Partner ${idx + 1}`}
                    className="h-14 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 11: FAQ Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20 space-y-6">
            <span className="text-blue-600 font-black tracking-widest uppercase text-sm">Common Queries</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark">FAQs</h2>
          </div>
          <div className="space-y-8">
            {[
              { q: 'Which paint brand is best for Alwar\'s climate?', a: 'We recommend Asian Paints and Berger for their superior weather-resistant properties, ideal for Rajasthan\'s heat.' },
              { q: 'Do you provide professional painters?', a: 'Yes, we have a network of verified, experienced painters in Alwar who can handle your project with precision.' },
              { q: 'How do I calculate the amount of paint needed?', a: 'You can use our online Paint Calculator or visit our showroom for a detailed estimate based on your floor plan.' },
              { q: 'Do you offer waterproofing solutions?', a: 'Absolutely. We provide advanced waterproofing coatings and expert guidance to prevent leakages and dampness.' },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-brand-blue/30 transition-all group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-black text-brand-dark group-hover:text-brand-blue transition-colors">{faq.q}</h4>
                  <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-500 text-lg leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Final CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[4rem] md:rounded-[6rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
            {/* Left Side: Visual */}
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img
                src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled-1.webp"
                alt="Premium Interior"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
              <div className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white max-w-xs hidden md:block">
                <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">Premium Quality</p>
                <p className="text-lg font-medium leading-tight">Every stroke tells a story of elegance and durability.</p>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center text-white relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
              <div className="relative z-10 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-6">
                    READY TO <br />
                    <span className="text-brand-dark">TRANSFORM?</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-xl">
                    Visit our showroom today or talk to our experts for a free consultation and the best deals on premium paints.
                  </p>
                </motion.div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <Link
                    to="/contact"
                    className="group bg-white text-blue-600 px-8 py-4 md:px-12 md:py-6 rounded-2xl font-black text-lg md:text-2xl hover:bg-brand-dark hover:text-white transition-all transform hover:-translate-y-1 flex items-center gap-3 shadow-lg"
                  >
                    CONTACT US <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/need-a-painter"
                    className="group bg-brand-dark text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl font-black text-lg md:text-2xl hover:bg-brand-blue transition-all transform hover:-translate-y-1 flex items-center gap-3 shadow-lg"
                  >
                    FIND A PAINTER <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
