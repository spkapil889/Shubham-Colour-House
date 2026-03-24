import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-blue text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled.jpg"
            alt="Contact Hero"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-brand-blue/60 to-brand-blue/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light"
          >
            Have a question or need a quote? Reach out to Alwar's paint experts today.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-brand-dark">Get in Touch</h2>
                <p className="text-gray-500 leading-relaxed">
                  Visit our showroom in Alwar or contact us through any of the following channels. We're here to help!
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Showroom</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Vijay Commercial Complex, Near Bhagat Singh Circle, Alwar, Rajasthan 301001
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-gray-500 text-sm">+91 98290 12345</p>
                    <p className="text-gray-500 text-sm">+91 94140 12345</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7 text-brand-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-gray-500 text-sm">info@shubhamcolourhouse.com</p>
                    <p className="text-gray-500 text-sm">sales@shubhamcolourhouse.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                    <p className="text-gray-500 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100">
                <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500">Your Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500">Phone Number</label>
                      <input type="tel" placeholder="+91 98290 12345" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500">Subject</label>
                      <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue">
                        <option>General Inquiry</option>
                        <option>Product Quote</option>
                        <option>Waterproofing Consultation</option>
                        <option>Painter Requirement</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Your Message</label>
                    <textarea rows={5} placeholder="How can we help you?" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue"></textarea>
                  </div>
                  <button className="w-full bg-brand-blue text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-purple transition-all flex items-center justify-center gap-3">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center space-y-4">
            <MapPin className="w-12 h-12 text-brand-blue mx-auto" />
            <h3 className="text-2xl font-bold text-brand-dark">Find Us on Google Maps</h3>
            <p className="text-gray-500">Vijay Commercial Complex, Alwar, Rajasthan</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-purple transition-all"
            >
              Open in Maps
            </a>
          </div>
        </div>
        {/* In a real app, you would embed the Google Maps iframe here */}
      </section>

      {/* WhatsApp Floating CTA */}
      <a
        href="https://wa.me/919829012345"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full hover:scale-110 transition-all group"
      >
        <MessageSquare className="w-8 h-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-dark px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with Expert
        </span>
      </a>
    </div>
  );
}
