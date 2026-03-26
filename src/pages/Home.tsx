import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Calculator, Paintbrush, ShieldCheck, Award, Users, ChevronRight, Star, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const trustStats = [
  { label: 'Happy Customer', value: '14K+', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-100' },
  { label: 'Project Done', value: '17K+', icon: CheckCircle2, color: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-100' },
  { label: 'Certified Expertise', value: '124+', icon: Award, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-100' },
  { label: 'Guarantee Satisfying', value: '100%', icon: ShieldCheck, color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-100' },
];

const partnerLogos = [
  'https://shubhamcolourhouse.com/wp-content/uploads/elementor/thumbs/1736746743528-e1759473636649-rcngw2y14nfzo5nhij8hajt8n7s6u9hk2ejp0ohgbg.jpeg',
  'https://shubhamcolourhouse.com/wp-content/uploads/elementor/thumbs/d-mart-niti-khand-3-indirapuram-ghaziabad-after-shave-lotion-dealers-15tr5mkyrq-rcngx7d3aizbje0ryipfrrm26s8z18y0jylknktiv2.avif',
  'https://shubhamcolourhouse.com/wp-content/uploads/elementor/thumbs/apna-ghar-logo-e1715241203127-rcngybs5geineme2ei6e8zevqcpr88eh1ingah5l8k.webp',
  'https://shubhamcolourhouse.com/wp-content/uploads/elementor/thumbs/images-rcnh176dlv6o6vq7l1k4pvikon3obf284qygluixvy.jpeg',
  'https://shubhamcolourhouse.com/wp-content/uploads/elementor/thumbs/images-1-e1759474049420-rcnh6v5cswxw69hxhzq68y1ll96bpqjz8sitqw4i8g.jpeg',
];

const categories = [
  { name: 'Interior Paints', image: 'https://shubhamcolourhouse.com/wp-content/uploads/2025/10/5.png', description: 'Transform your living spaces with premium finishes.' },
  { name: 'Exterior Paints', image: 'https://shubhamcolourhouse.com/wp-content/uploads/2025/10/6.png', description: 'Weather-resistant protection for your home.' },
  { name: 'Wood & Metal', image: 'https://shubhamcolourhouse.com/wp-content/uploads/2025/10/7.png', description: 'Durable and elegant finishes for all surfaces.' },
  { name: 'Waterproofing', image: 'https://shubhamcolourhouse.com/wp-content/uploads/2025/10/8.png', description: 'Advanced solutions for leak-proof homes.' },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Section 1: Hero Banner */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled.jpg"
            alt="Premium Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[2px]" />
        </div>

        {/* Modern Geometric Shapes */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/10 skew-x-12 translate-x-1/4"
          />
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-blue/10 -skew-x-12 -translate-x-1/4"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 pt-20">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[2px] w-12 bg-brand-orange" />
                <span className="text-sm md:text-base font-bold tracking-[0.3em] uppercase bg-brand-orange text-white px-4 py-1 rounded">
                  Est. 1995 • Alwar's Premier Paint House
                </span>
              </div>
              
              <h1 className="text-[14vw] md:text-[10vw] font-black leading-[0.85] mb-12 tracking-tighter uppercase">
                Premium <br />
                <span className="text-transparent stroke-white stroke-2 italic" style={{ WebkitTextStroke: '2px white' }}>Paint</span> <br />
                <span className="text-brand-orange">Solutions</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <Link
                  to="/products"
                  className="group relative bg-brand-accent text-white px-12 py-6 rounded-full font-black text-xl overflow-hidden transition-all hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    EXPLORE COLLECTION <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-10" />
                </Link>
                
                <Link
                  to="/calculator"
                  className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors"
                >
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold tracking-widest uppercase opacity-60">Get Started</p>
                    <p className="text-lg font-black">FREE ESTIMATE</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 vertical-text">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
        </motion.div>
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
                  src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled.jpg"
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
                  <span className="h-1 w-12 bg-brand-blue rounded-full" />
                  <span className="text-brand-blue font-black tracking-widest uppercase text-sm">Who We Are</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-tight">
                  30 Years of Adding <br />
                  <span className="text-brand-purple">Color to Alwar</span>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Since our inception, Shubham Colour House has been at the forefront of the paint industry. We don't just sell paint; we provide complete home transformation solutions with a legacy of trust.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Top Brands', desc: 'Authorized dealer for Asian, Berger & more.' },
                  { title: 'Expert Advice', desc: 'Personalized color consultations.' },
                  { title: 'Waterproofing', desc: 'Advanced leak-proof solutions.' },
                  { title: 'Verified Painters', desc: 'Hassle-free professional work.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue/30 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-brand-blue group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-5 rounded-full font-bold hover:bg-brand-blue transition-all group"
              >
                Our Full Journey <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Counter Section */}
      <section className="py-24 relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {trustStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-10 rounded-[2.5rem] ${stat.bgColor} border ${stat.borderColor} group hover:scale-105 transition-all duration-500`}
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <stat.icon className={`w-20 h-20 ${stat.color}`} />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center`}>
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-4xl md:text-5xl font-black ${stat.color}`}>{stat.value}</h3>
                    <p className="text-brand-dark/60 font-bold uppercase tracking-widest text-xs mt-2">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Product Range */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled.jpg"
            alt="Product Range Background"
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-xs tracking-widest uppercase">
              Our Collection
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark">Our Product Range</h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              Explore our comprehensive collection of paints and coatings designed for every surface and requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="bg-white rounded-[2.5rem] overflow-hidden group border border-gray-100"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <Link to="/products" className="w-full bg-white text-brand-dark py-3 rounded-xl font-bold text-center block">
                      View Collection
                    </Link>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black mb-4 text-brand-dark group-hover:text-brand-blue transition-colors">{cat.name}</h3>
                  <p className="text-gray-500 leading-relaxed mb-0">{cat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Process */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-blue-600 font-black tracking-widest uppercase text-sm flex items-center gap-3">
                  <div className="w-10 h-1 bg-blue-600 rounded-full" />
                  How it works
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-tight">
                  Always on Time and <br />
                  <span className="text-blue-600 text-stroke">Never Delay</span>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed">
                  At Shubham Colour House, we value your time as much as the quality of your walls. Our streamlined process ensures a stress-free experience from start to finish.
                </p>
              </div>

              <div className="space-y-8">
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
                    <div className="flex-shrink-0 w-20 h-20 bg-white rounded-3xl flex flex-col items-center justify-center border border-gray-100 group-hover:border-blue-600 transition-colors">
                      <span className="text-blue-600 font-black text-lg">{item.step}</span>
                      <item.icon className="w-6 h-6 text-gray-300 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div className="pt-2">
                      <h4 className="text-2xl font-black text-brand-dark mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed max-w-md">{item.desc}</p>
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
              <div className="rounded-[4rem] overflow-hidden border-[12px] border-white bg-white">
                <img
                  src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled.jpg"
                  alt="Painting Process"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-brand-blue p-10 rounded-[3rem] text-white max-w-xs hidden md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/10 backdrop-blur-xl p-12 md:p-20 rounded-[4rem] border border-white/20">
            <div className="text-white space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">Ready to Paint <br />Your Dreams?</h2>
              <p className="text-xl text-white/80 max-w-md">Contact us today for expert color samples and detailed paint estimates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <Link
                to="/contact"
                className="bg-white text-brand-blue px-12 py-6 rounded-full font-black text-xl hover:bg-brand-dark hover:text-white transition-all text-center"
              >
                Request Estimates
              </Link>
              <Link
                to="/calculator"
                className="bg-brand-dark text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-brand-dark transition-all text-center"
              >
                Free Consultations
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
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white bg-white">
                <img
                  src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled.jpg"
                  alt="Top Quality Solutions"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-purple rounded-full flex items-center justify-center text-white font-black text-center p-6 border-[6px] border-white rotate-12 z-20">
                Premium Quality
              </div>
            </div>

            <div className="space-y-12 order-1 lg:order-2">
              <div className="space-y-6">
                <span className="text-brand-purple font-black tracking-widest uppercase text-sm">Premium Solutions</span>
                <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-tight">
                  Bring Life to <br />Your Walls
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed">
                  At Shubham Colour House, we believe every wall tells a story. We help you transform dull walls into vibrant, lasting spaces full of life and style.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  'Wide variety of shades & finishes',
                  'Weather-resistant for Rajasthan climate',
                  'Long-lasting, durable quality',
                  'Expert guidance for every room',
                  'Professional flawless results'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                    </div>
                    <span className="font-bold text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose Us */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <span className="text-brand-blue font-black tracking-widest uppercase text-sm">Our Advantage</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark">Why Choose Us?</h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              With over 30 years of experience in Alwar, our team ensures every wall we touch reflects perfection and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Expertise', desc: '30+ years of professional guidance and flawless application.', icon: Award, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Quality', desc: 'Authentic products from trusted brands for lasting beauty.', icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50' },
              { title: 'Cleanliness', desc: 'Neat, organized work with minimal disruption to your home.', icon: Paintbrush, color: 'text-blue-600', bg: 'bg-blue-50' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="bg-white p-12 rounded-[3rem] border border-gray-100 text-center space-y-8 group"
              >
                <div className={`${item.bg} w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className={`w-12 h-12 ${item.color}`} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-brand-dark">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
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
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/20 to-transparent -skew-x-12 translate-x-1/4" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-10">
                <h2 className="text-4xl md:text-7xl font-black leading-tight">
                  Find Your <br />
                  <span className="text-brand-blue">Perfect Palette</span>
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed">
                  The right colors can transform your home. We help you pick shades that make small rooms look bigger and large spaces more inviting.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-brand-blue/20 rounded-2xl flex items-center justify-center">
                      <Paintbrush className="w-7 h-7 text-brand-blue" />
                    </div>
                    <h4 className="text-2xl font-black">Free Consultation</h4>
                    <p className="text-gray-400 leading-relaxed">Expert guidance in selecting colors, finishes, and types tailored to your style.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                      <Zap className="w-7 h-7 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-black">Quick Support</h4>
                    <p className="text-gray-400 leading-relaxed">Our team helps with queries on product use, maintenance, or after-service care.</p>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-[3rem] overflow-hidden border-4 border-white/10 bg-white p-4">
                  <img
                    src="https://i.pinimg.com/736x/88/68/63/886863a31db589cb0e3696e7dadd24ad.jpg"
                    alt="Color Palette"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-full animate-bounce">
                  <Star className="w-8 h-8 text-white fill-current" />
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
                    className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
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
                src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled.jpg"
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
                    className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-dark hover:text-white transition-all transform hover:-translate-y-1 flex items-center gap-3 shadow-lg"
                  >
                    CONTACT US <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/need-a-painter"
                    className="group bg-brand-dark text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-blue transition-all transform hover:-translate-y-1 flex items-center gap-3 shadow-lg"
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
