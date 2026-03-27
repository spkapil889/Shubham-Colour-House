import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Calculator, Paintbrush, ShieldCheck, Award, Users, ChevronRight, Star, Clock, Zap, Search, FileText, Palette, Wrench, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled-1.webp',
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled-1.webp',
  'https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/spacious-living-room-in-modern-apartment-2025-02-10-09-52-33-utc-1-scaled-1.webp',
];

const trustStats = [
  { label: 'Happy Customers', value: '14K+', icon: Users },
  { label: 'Projects Completed', value: '17K+', icon: CheckCircle2 },
  { label: 'Satisfaction Rate', value: '100%', icon: ShieldCheck },
];

const partnerLogos = [
  'https://pink-beaver-690950.hostingersite.com/wp-content/uploads/2025/10/1736746743528-e1759473636649.jpeg',
  'https://pink-beaver-690950.hostingersite.com/wp-content/uploads/2025/10/d-mart-niti-khand-3-indirapuram-ghaziabad-after-shave-lotion-dealers-15tr5mkyrq.avif',
  'https://pink-beaver-690950.hostingersite.com/wp-content/uploads/2025/10/apna-ghar-logo-e1715241203127.webp',
  'https://pink-beaver-690950.hostingersite.com/wp-content/uploads/2025/10/images.jpeg',
  'https://pink-beaver-690950.hostingersite.com/wp-content/uploads/2025/10/images-1-e1759474049420.jpeg',
];

const categories = [
  { 
    name: 'Interior Paints', 
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800', 
    description: 'Transform your living spaces with premium finishes and vibrant shades.' 
  },
  { 
    name: 'Exterior Paints', 
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800', 
    description: 'Weather-resistant protection for your home against harsh climates.' 
  },
  { 
    name: 'Wood & Metal', 
    image: 'https://pink-beaver-690950.hostingersite.com/wp-content/uploads/2026/03/Untitled-design-37.jpg', 
    description: 'Durable and elegant finishes for all wooden and metal surfaces.' 
  },
  { 
    name: 'Waterproofing', 
    image: 'https://pink-beaver-690950.hostingersite.com/wp-content/uploads/2026/03/Untitled-design-36.jpg', 
    description: 'Advanced solutions for leak-proof homes and long-lasting protection.' 
  },
  { 
    name: 'Automotive paint', 
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800', 
    description: 'High-performance coatings for vehicles and industrial applications.' 
  },
  { 
    name: 'Sleek Kitchen', 
    image: 'https://pink-beaver-690950.hostingersite.com/wp-content/uploads/2026/03/Sleek-Kitchen.jpg', 
    description: 'Modern kitchen designs that combine functionality with stunning aesthetics.' 
  },
  { 
    name: 'Bathroom design & execution', 
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800', 
    description: 'Complete bathroom transformations with premium fittings and finishes.' 
  },
  { 
    name: 'Wallpaper', 
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800', 
    description: 'Exquisite wallpaper collections to add texture and personality to your walls.' 
  },
  { 
    name: 'Texture Finishes', 
    image: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800', 
    description: 'Unique wall textures that create depth and a luxurious feel in any room.' 
  },
];

const whyChooseUs = [
  {
    title: 'Free On-site Consultation',
    desc: 'Book a free on-site consultation with our experts, who visit your space, understand your requirements, and guide you with the right painting solutions.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Accurate & Specific Quotation',
    desc: 'Receive a clear, accurate, and detailed quotation tailored to your space, surface condition, finish preference, and project scope.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Certified Painters',
    desc: 'Our trained and certified painters ensure professional workmanship, smooth finishes, and reliable execution for every project.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Colour Consultation',
    desc: 'Our expert team helps you choose the right shades, combinations, and finishes to match your space, style, and lighting.',
    image: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'On-time Job Completion',
    desc: 'We follow a planned and supervised workflow to ensure your painting project is completed on time without compromising quality.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Post-painting Clean-up',
    desc: 'Our service includes proper site clean-up after completion, leaving your home or workspace neat, fresh, and ready to use.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'After-Sales Services',
    desc: 'We continue to support you even after the project is completed, with responsive service and dependable post-painting assistance.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Eco-Friendly Products',
    desc: 'We promote healthier living spaces by offering quality low-VOC and eco-friendly paint solutions that are safer for your family and environment.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Mechanised Tools',
    desc: 'We use modern mechanised tools for faster, smoother, and more efficient painting with reduced noise and better finish quality.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Furniture & Floor Covering',
    desc: 'We carefully protect your furniture, flooring, and valuable surfaces before starting work to keep your space safe and clean.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

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
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={heroSlides[currentSlide]}
              alt="Hero Background"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for readability */}
        </div>

        <div className="container mx-auto px-4 relative z-20 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-10 text-left"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white mb-6 block opacity-90">
              Premium Painting Services
            </span>
            <h1 className="text-[10vw] lg:text-[6vw] font-sans font-black leading-[0.9] tracking-tighter text-white mb-8">
              Transform Your Space <br />
              with Elegance
            </h1>
            <p className="text-white/90 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed mb-12">
              Alwar's premier destination for premium paints and home transformation solutions since 1995.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="btn-premium-gradient shadow-2xl">
                Get Started
              </Link>
              <Link to="/products" className="btn-outline !text-white !border-white/30 hover:!bg-white/10">
                Our Products
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-24 relative overflow-hidden">
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
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-24 space-y-8 text-center mx-auto">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Curated Collection</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1]">Our Product <br /><span className="text-gradient">Range</span></h2>
            <p className="text-brand-muted text-lg leading-relaxed font-light max-w-xl mx-auto">
              Explore our comprehensive collection of paints and coatings designed for every surface and requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[3rem] p-6 shadow-sm hover:shadow-xl border border-black/5 transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Container with Padding */}
                <div className="aspect-square overflow-hidden rounded-[2.5rem] mb-8 relative bg-gray-50">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="px-4 flex flex-col flex-grow space-y-4">
                  <h3 className="text-3xl font-black text-brand-dark leading-tight">{cat.name}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed font-light line-clamp-2 flex-grow">
                    {cat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative bg-white p-16 md:p-24 rounded-[4rem] border border-black/5 shadow-2xl overflow-hidden min-h-[500px] flex items-center">
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0 opacity-20 lg:opacity-100"
              style={{
                backgroundImage: 'url("https://pink-beaver-690950.hostingersite.com/wp-content/uploads/2026/03/Untitled-design-35-e1774631585892.jpg")',
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
              }}
            />
            
            {/* Gradient Overlay for Mobile Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:from-white lg:via-white/50 lg:to-transparent z-1" />

            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left relative z-10 lg:max-w-xl">
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
      <section className="py-20 relative overflow-hidden">
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
      <section className="py-24 bg-black overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-6xl md:text-8xl font-black leading-tight text-white">
                Why <br />
                <span className="text-gradient">Choose Us?</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="min-w-[300px] md:min-w-[400px] h-[400px] rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 relative overflow-hidden group snap-start p-10 flex flex-col justify-end"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
                
                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-purple transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Color Palette */}
      <section className="py-20 relative overflow-hidden">
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
      <section className="py-16 relative overflow-hidden">
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
      <section className="py-20 relative overflow-hidden">
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
      <section className="py-24 relative overflow-hidden">
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
