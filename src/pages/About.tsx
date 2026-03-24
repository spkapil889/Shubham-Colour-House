import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, History, Target, Heart } from 'lucide-react';

const values = [
  { title: 'Quality First', desc: 'We only deal in 100% genuine, premium branded paints and coatings.', icon: Award },
  { title: 'Customer Trust', desc: 'Building long-term relationships through transparency and expert guidance.', icon: ShieldCheck },
  { title: 'Local Expertise', desc: 'Deep understanding of Alwar\'s climate and home transformation needs.', icon: Target },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled.jpg"
            alt="About Hero"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            A legacy of trust, color, and excellence in Alwar for over three decades.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brand-dark">30+ Years of Excellence</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in Alwar, Shubham Colour House began with a simple mission: to provide the highest quality paints and expert guidance to our local community. Over the last 30 years, we have grown from a small retail shop into Alwar's leading destination for premium paints and home transformation solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that your home is your most valuable asset. That's why we don't just sell products; we offer a partnership. From selecting the perfect shade to ensuring the right application technique, our team is with you every step of the way.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="border-l-4 border-brand-blue pl-6">
                  <h4 className="text-3xl font-bold text-brand-dark">1994</h4>
                  <p className="text-gray-500 text-sm">Year Founded</p>
                </div>
                <div className="border-l-4 border-brand-orange pl-6">
                  <h4 className="text-3xl font-bold text-brand-dark">10,000+</h4>
                  <p className="text-gray-500 text-sm">Homes Transformed</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/open-space-living-room-with-a-big-couch-in-a-moder-2025-03-24-09-30-01-utc-1-scaled.jpg"
                alt="Our Journey"
                className="rounded-3xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-8 rounded-2xl hidden md:block">
                <History className="w-10 h-10 mb-4" />
                <p className="font-bold text-lg">Trusted Since 1994</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">The principles that guide us in every interaction and project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 transition-all group">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">Serving Alwar & Beyond</h2>
            <p className="text-gray-600 text-lg">
              We are proud to be Alwar's local paint experts. Our services extend to all surrounding areas, ensuring that premium quality and expert guidance are accessible to every homeowner in the region.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              {['Alwar City', 'Bhiwadi', 'Neemrana', 'Behror', 'Tijara', 'Rajgarh'].map((city) => (
                <span key={city} className="px-6 py-2 bg-gray-100 rounded-full text-brand-dark font-medium border border-gray-200">
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
