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
  { label: 'Happy Customers', value: '14K+', icon: Users },
  { label: 'Projects Completed', value: '17K+', icon: CheckCircle2 },
  { label: 'Certified Experts', value: '124+', icon: Award },
  { label: 'Satisfaction Rate', value: '100%', icon: ShieldCheck },
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
    <div className="overflow-hidden bg-brand-paper bg-mesh min-h-screen">
      {/* Section 1: Hero Banner */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-20 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple mb-6 block">
                  Est. 1995 • Alwar's Premier Paint House
                </span>
                <h1 className="text-[12vw] lg:text-[7vw] font-sans font-black leading-[0.85] tracking-tighter text-brand-dark mb-8">
                  Refined <br />
                  <span className="text-gradient">Aesthetics</span> <br />
                  For Your Walls
                </h1>
                <p className="text-brand-muted text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10">
                  Shubham Colour House brings three decades of expertise in premium coatings and architectural finishes to Alwar.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/products" className="btn-premium-gradient">
                    Explore Collection
                  </Link>
                  <Link to="/calculator" className="btn-outline">
                    Paint Calculator
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    src={heroSlides[currentSlide]}
                    alt="Hero"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-brand-dark/10" />
              </motion.div>
              {/* Floating Element */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden xl:block max-w-[240px] border border-black/5"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-2">Featured Finish</p>
                <p className="text-sm font-serif italic text-brand-dark">"The perfect balance between luxury and durability for modern homes."</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
                <img
                  src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled-1.webp"
                  alt="Modern Living Room"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Heritage & Vision</span>
                <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1]">
                  Three Decades of <br />
                  <span className="text-gradient">Excellence</span>
                </h2>
                <p className="text-brand-muted text-lg leading-relaxed font-light max-w-xl">
                  Since 1995, Shubham Colour House has been Alwar's most trusted destination for architectural coatings. We combine traditional values with modern technology to deliver unmatched results.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { title: 'Top Brands', desc: 'Authorized dealer for Asian & Berger.' },
                  { title: 'Expert Advice', desc: 'Personalized color consultations.' },
                  { title: 'Waterproofing', desc: 'Advanced leak-proof solutions.' },
                  { title: 'Verified Painters', desc: 'Professional, hassle-free work.' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-sm font-bold text-brand-dark uppercase tracking-widest">{item.title}</h4>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-outline">
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Counter Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card text-center"
              >
                <h3 className="text-5xl md:text-7xl font-black text-brand-dark mb-4 tracking-tighter">{stat.value}</h3>
                <p className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[10px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Product Range */}
      <section className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-24 space-y-8 text-center mx-auto">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Curated Collection</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1]">Our Product <br /><span className="text-gradient">Range</span></h2>
            <p className="text-brand-muted text-lg leading-relaxed font-light max-w-xl mx-auto">
              Explore our comprehensive collection of paints and coatings designed for every surface and requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group premium-card p-0 overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-brand-dark">{cat.name}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed font-light line-clamp-2">{cat.description}</p>
                  <Link to="/products" className="inline-flex items-center gap-2 text-brand-purple font-bold uppercase tracking-[0.2em] text-[10px] group/link">
                    View More <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Process */}
      <section className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <div className="space-y-8">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Our Methodology</span>
                <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1]">
                  Precision in <br />
                  <span className="text-gradient">Every Stroke</span>
                </h2>
                <p className="text-brand-muted text-lg leading-relaxed font-light max-w-xl">
                  At Shubham Colour House, we value your time as much as the quality of your walls. Our streamlined process ensures a stress-free experience from start to finish.
                </p>
              </div>

              <div className="space-y-12">
                {[
                  { step: '01', title: 'Expert Consultation', desc: 'Personalized guidance to understand your space, style, and budget.' },
                  { step: '02', title: 'Product Selection', desc: 'Choose from premium paints like Asian, Berger, and Nippon.' },
                  { step: '03', title: 'Professional Finish', desc: 'Timely completion with flawless results by trusted painters.' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-10 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-500">
                      <span className="text-brand-purple group-hover:text-white font-bold text-xs">{item.step}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-brand-dark">{item.title}</h4>
                      <p className="text-brand-muted leading-relaxed max-w-md font-light text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
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
      <section className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 bg-white p-16 md:p-24 rounded-[4rem] border border-black/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 blur-[100px] rounded-full -mr-48 -mt-48" />
            <div className="space-y-8 text-center lg:text-left relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1]">Ready to Paint <br /><span className="text-gradient">Your Dreams?</span></h2>
              <p className="text-lg text-brand-muted max-w-md font-light">Contact us today for expert color samples and detailed paint estimates.</p>
              <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                <Link to="/contact" className="btn-premium-gradient">
                  Request Estimates
                </Link>
                <Link to="/calculator" className="btn-outline">
                  Paint Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Top Quality */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
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
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Premium Solutions</span>
                <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-tight">
                  Bring Life to <br /><span className="text-gradient">Your Walls</span>
                </h2>
                <p className="text-brand-muted text-xl leading-relaxed font-light">
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
                    <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-brand-purple group-hover:text-white" />
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
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Our Advantage</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-dark">Why <span className="text-gradient">Choose Us?</span></h2>
            <p className="text-brand-muted text-xl leading-relaxed font-light">
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
                className="premium-card text-center space-y-8 group"
              >
                <div className="w-24 h-24 rounded-full border border-gray-100 flex items-center justify-center mx-auto group-hover:border-brand-purple transition-colors">
                  <item.icon className="w-10 h-10 text-brand-purple" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-brand-dark">{item.title}</h3>
                  <p className="text-brand-muted leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Color Palette */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-mesh opacity-20" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-10">
                <h2 className="text-5xl md:text-8xl font-black leading-tight">
                  Find Your <br />
                  <span className="text-gradient">Perfect Palette</span>
                </h2>
                <p className="text-white/60 text-xl leading-relaxed font-light">
                  The right colors can transform your home. We help you pick shades that make small rooms look bigger and large spaces more inviting.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center">
                      <Paintbrush className="w-6 h-6 text-brand-purple" />
                    </div>
                    <h4 className="text-2xl font-bold">Free Consultation</h4>
                    <p className="text-white/60 leading-relaxed font-light">Expert guidance in selecting colors, finishes, and types tailored to your style.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-brand-purple" />
                    </div>
                    <h4 className="text-2xl font-bold">Quick Support</h4>
                    <p className="text-white/60 leading-relaxed font-light">Our team helps with queries on product use, maintenance, or after-service care.</p>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
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
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Our Partners</span>
            <h2 className="text-4xl font-black text-brand-dark mt-4">Trusted By Leading Organizations</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="premium-card p-12">
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
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20 space-y-6">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Common Queries</span>
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
                className="premium-card p-10 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-bold text-brand-dark group-hover:text-brand-purple transition-colors">{faq.q}</h4>
                  <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-brand-purple group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-brand-muted text-lg leading-relaxed font-light">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Final CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch relative">
            <div className="absolute top-0 right-0 w-full h-full bg-mesh opacity-20" />
            {/* Left Side: Visual */}
            <div className="lg:w-1/2 relative min-h-[500px]">
              <img
                src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled-1.webp"
                alt="Premium Interior"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20" />
            </div>

            {/* Right Side: Content */}
            <div className="lg:w-1/2 p-16 md:p-24 flex flex-col justify-center text-white relative">
              <div className="relative z-10 space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple mb-6 block">Final Call</span>
                  <h2 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8">
                    Ready to <br />
                    <span className="text-gradient">Transform?</span>
                  </h2>
                  <p className="text-lg text-white/60 font-light leading-relaxed max-w-xl">
                    Visit our showroom today or talk to our experts for a free consultation and the best deals on premium paints.
                  </p>
                </motion.div>

                <div className="flex flex-wrap gap-6">
                  <Link to="/contact" className="btn-premium-gradient">
                    Contact Us
                  </Link>
                  <Link to="/need-a-painter" className="btn-outline text-white border-white/20 hover:bg-white/10">
                    Find a Painter
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
