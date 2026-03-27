import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, History, Target, Heart } from 'lucide-react';
import BrandIdentitySection from '../components/BrandIdentitySection';

const values = [
  { title: 'Quality First', desc: 'We only deal in 100% genuine, premium branded paints and coatings.', icon: Award },
  { title: 'Customer Trust', desc: 'Building long-term relationships through transparency and expert guidance.', icon: ShieldCheck },
  { title: 'Local Expertise', desc: 'Deep understanding of Alwar\'s climate and home transformation needs.', icon: Target },
];

export default function About() {
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
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">Our Legacy</span>
            <h1 className="text-6xl md:text-9xl font-serif font-black text-brand-dark tracking-tight leading-[0.9]">
              The Art of <br />
              <span className="italic font-light text-brand-gold">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
              A legacy of trust, color, and architectural elegance in Alwar for over three decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">Since 1994</span>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-dark leading-[1.1]">
                  Three Decades of <br />
                  <span className="italic font-light text-brand-gold">Transformation</span>
                </h2>
                <p className="text-brand-muted text-lg leading-relaxed font-light">
                  Founded in Alwar, Shubham Colour House began with a simple mission: to provide the highest quality paints and expert guidance to our local community. Over the last 30 years, we have grown from a small retail shop into Alwar's leading destination for premium paints and home transformation solutions.
                </p>
                <p className="text-brand-muted text-lg leading-relaxed font-light">
                  We understand that your home is your most valuable asset. That's why we don't just sell products; we offer a partnership. From selecting the perfect shade to ensuring the right application technique, our team is with you every step of the way.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-8 border-t border-black/5">
                <div className="space-y-2">
                  <h4 className="text-4xl font-serif font-black text-brand-dark">1994</h4>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">Year Founded</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl font-serif font-black text-brand-dark">10k+</h4>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">Homes Transformed</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="https://peachpuff-lapwing-559400.hostingersite.com/wp-content/uploads/2026/03/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled-1.webp"
                  alt="Our Journey"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-brand-dark text-white p-12 rounded-2xl hidden lg:block shadow-2xl border border-white/10">
                <History className="w-10 h-10 mb-6 text-brand-gold" />
                <p className="font-serif text-2xl font-black italic leading-tight">Trusted Since <br />1994</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-40 bg-brand-paper">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-dark leading-[1.1]">The Core of <br /><span className="italic font-light text-brand-gold">Our Craft</span></h2>
            <p className="text-brand-muted text-lg font-light">The principles that guide us in every interaction and project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-3xl border border-black/5 transition-all group hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-brand-paper rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                  <v.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-serif font-black text-brand-dark mb-4">{v.title}</h3>
                <p className="text-brand-muted leading-relaxed font-light text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <BrandIdentitySection />

      {/* Service Area */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">Regional Presence</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-dark leading-[1.1]">Serving Alwar <br /><span className="italic font-light text-brand-gold">& Beyond</span></h2>
              <p className="text-brand-muted text-lg font-light leading-relaxed max-w-2xl mx-auto">
                We are proud to be Alwar's local paint experts. Our services extend to all surrounding areas, ensuring that premium quality and expert guidance are accessible to every homeowner in the region.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              {['Alwar City', 'Bhiwadi', 'Neemrana', 'Behror', 'Tijara', 'Rajgarh'].map((city) => (
                <span key={city} className="px-10 py-4 bg-brand-paper rounded-full text-brand-dark text-xs font-bold tracking-[0.1em] uppercase border border-black/5 hover:border-brand-gold transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
