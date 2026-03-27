import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
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
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Get in Touch</span>
            <h1 className="text-6xl md:text-9xl font-black text-brand-dark tracking-tight leading-[0.9]">
              Let's <br />
              <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
              Have a question or need a quote? Reach out to Alwar's paint experts today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-16">
              <div className="space-y-8">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple">Contact Details</span>
                <h2 className="text-4xl font-black text-brand-dark leading-tight">Reach Our <br />Showroom</h2>
                <p className="text-brand-muted font-light leading-relaxed">
                  Visit our showroom in Alwar or contact us through any of the following channels. We're here to help!
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 bg-brand-paper rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                    <MapPin className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold tracking-[0.1em] uppercase text-brand-dark">Our Showroom</h4>
                    <p className="text-brand-muted text-sm leading-relaxed font-light">
                      Vijay Commercial Complex, Near Bhagat Singh Circle, Alwar, Rajasthan 301001
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-12 h-12 bg-brand-paper rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                    <Phone className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold tracking-[0.1em] uppercase text-brand-dark">Call Us</h4>
                    <p className="text-brand-muted text-sm font-light">+91 98290 12345</p>
                    <p className="text-brand-muted text-sm font-light">+91 94140 12345</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-12 h-12 bg-brand-paper rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                    <Mail className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold tracking-[0.1em] uppercase text-brand-dark">Email Us</h4>
                    <p className="text-brand-muted text-sm font-light">info@shubhamcolourhouse.com</p>
                    <p className="text-brand-muted text-sm font-light">sales@shubhamcolourhouse.com</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-12 h-12 bg-brand-paper rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                    <Clock className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold tracking-[0.1em] uppercase text-brand-dark">Working Hours</h4>
                    <p className="text-brand-muted text-sm font-light">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-brand-muted text-sm font-light">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-black/5">
                <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-purple mb-8">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 bg-brand-paper rounded-2xl flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-500 text-brand-purple">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="premium-card p-12 md:p-20">
                <h3 className="text-3xl font-black text-brand-dark mb-12">Send Us a Message</h3>
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-purple">Your Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white border border-black/5 rounded-xl px-8 py-5 focus:outline-none focus:border-brand-purple transition-colors font-light text-sm" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-purple">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-white border border-black/5 rounded-xl px-8 py-5 focus:outline-none focus:border-brand-purple transition-colors font-light text-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-purple">Phone Number</label>
                      <input type="tel" placeholder="+91 98290 12345" className="w-full bg-white border border-black/5 rounded-xl px-8 py-5 focus:outline-none focus:border-brand-purple transition-colors font-light text-sm" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-purple">Subject</label>
                      <select className="w-full bg-white border border-black/5 rounded-xl px-8 py-5 focus:outline-none focus:border-brand-purple transition-colors font-light text-sm appearance-none">
                        <option>General Inquiry</option>
                        <option>Product Quote</option>
                        <option>Waterproofing Consultation</option>
                        <option>Painter Requirement</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-purple">Your Message</label>
                    <textarea rows={6} placeholder="How can we help you?" className="w-full bg-white border border-black/5 rounded-xl px-8 py-5 focus:outline-none focus:border-brand-purple transition-colors font-light text-sm"></textarea>
                  </div>
                  <button className="btn-premium-gradient w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[600px] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-brand-paper">
          <div className="text-center space-y-8 relative z-10">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl border border-black/5">
              <MapPin className="w-8 h-8 text-brand-purple" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-brand-dark">Find Us in Alwar</h3>
              <p className="text-brand-muted font-light">Vijay Commercial Complex, Bhagat Singh Circle, Alwar</p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium"
            >
              Open in Maps
            </a>
          </div>
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
      </section>

      {/* WhatsApp Floating CTA */}
      <a
        href="https://wa.me/919829012345"
        className="fixed bottom-12 right-12 z-50 bg-[#25D366] text-white p-5 rounded-full hover:scale-110 transition-all shadow-2xl group"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-brand-dark text-white px-6 py-3 rounded-xl text-xs font-bold tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap shadow-2xl border border-white/10">
          Chat with Expert
        </span>
      </a>
    </div>
  );
}
