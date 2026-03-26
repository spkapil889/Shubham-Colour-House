import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, ClipboardList, Paintbrush, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

const steps = [
  { title: 'Share Requirement', desc: 'Tell us about your space, area, and preferred timeline.', icon: ClipboardList, color: 'bg-brand-blue' },
  { title: 'Expert Guidance', desc: 'We help you choose the right products and estimate budget.', icon: UserCheck, color: 'bg-brand-purple' },
  { title: 'Painter Matching', desc: 'We connect you with verified, skilled painters in Alwar.', icon: Paintbrush, color: 'bg-brand-accent' },
  { title: 'Start Work', desc: 'Begin your home transformation with confidence and support.', icon: CheckCircle2, color: 'bg-brand-red' },
];

export default function NeedAPainter() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled.jpg"
            alt="Painter Hero"
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/20 to-brand-dark/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Need a Trusted Painter in Alwar?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Don't leave your home transformation to chance. We connect you with verified, experienced painters who understand premium products.
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Our simple 4-step process to get your home painted professionally.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
                )}
                <div className="relative z-10 bg-white p-8 rounded-3xl border border-gray-100 transition-all text-center">
                  <div className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-brand-dark leading-tight">
                Why Use Our Painter <br />
                <span className="text-brand-blue">Connection Service?</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Verified Professionals', desc: 'We only recommend painters with a proven track record of quality work.' },
                  { title: 'Better Coordination', desc: 'We act as a bridge between you and the painter for clear communication.' },
                  { title: 'Right Product Usage', desc: 'Our painters are trained to use premium products correctly for best results.' },
                  { title: 'Saves Time & Effort', desc: 'Skip the hassle of searching and negotiating with unknown contractors.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100">
              <h3 className="text-2xl font-bold mb-8">Request a Painter</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500">Area / Locality in Alwar</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500">Type of Work</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue">
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Waterproofing</option>
                    <option>Wood/Metal Polishing</option>
                  </select>
                </div>
                <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-purple transition-all">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Need Immediate Assistance?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:+919829012345"
                className="flex items-center gap-3 bg-gray-100 px-8 py-4 rounded-full font-bold hover:bg-brand-blue hover:text-white transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href="https://wa.me/919829012345"
                className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
