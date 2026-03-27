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
    <div className="bg-brand-paper min-h-screen">
      {/* Hero */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-8"
          >
            <Paintbrush className="w-4 h-4 text-brand-purple" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-purple">Professional Services</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-brand-dark"
          >
            Trusted <span className="text-gradient">Artisans</span> in Alwar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto font-light leading-relaxed"
          >
            Don't leave your home transformation to chance. We connect you with verified, experienced painters who understand the nuances of premium finishes.
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple mb-4">Our Methodology</h2>
            <p className="text-3xl md:text-5xl font-black text-brand-dark">How It Works</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="relative z-10 bg-brand-paper p-10 rounded-[2.5rem] border border-brand-dark/5 transition-all text-center hover:shadow-xl hover:-translate-y-2 duration-500">
                  <div className={`w-16 h-16 bg-brand-dark text-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-brand-dark">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed font-light">{step.desc}</p>
                  <div className="mt-8 text-[10px] font-bold text-brand-purple/40 tracking-widest uppercase">Step 0{idx + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-40 bg-brand-paper">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple">Why Choose Us</h2>
                <p className="text-4xl md:text-6xl font-black text-brand-dark leading-tight">
                  The <span className="text-gradient">Excellence</span> in <br />
                  Connection Service
                </p>
              </div>
              <div className="space-y-10">
                {[
                  { title: 'Verified Professionals', desc: 'We only recommend painters with a proven track record of quality work.' },
                  { title: 'Better Coordination', desc: 'We act as a bridge between you and the painter for clear communication.' },
                  { title: 'Right Product Usage', desc: 'Our painters are trained to use premium products correctly for best results.' },
                  { title: 'Saves Time & Effort', desc: 'Skip the hassle of searching and negotiating with unknown contractors.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-brand-dark/5 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl text-brand-dark mb-2">{item.title}</h4>
                      <p className="text-brand-muted text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-brand-dark/5">
              <h3 className="text-3xl font-bold text-brand-dark mb-10">Request a Painter</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Full Name</label>
                    <input type="text" className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors text-brand-dark font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Phone Number</label>
                    <input type="tel" className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors text-brand-dark font-medium" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Area / Locality in Alwar</label>
                  <input type="text" className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors text-brand-dark font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Type of Work</label>
                  <select className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors appearance-none text-brand-dark font-medium">
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Waterproofing</option>
                    <option>Wood/Metal Polishing</option>
                  </select>
                </div>
                <button className="btn-premium-gradient w-full mt-4">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple">Immediate Assistance</h2>
              <p className="text-4xl md:text-6xl font-black text-brand-dark">Need Help <span className="text-gradient">Now?</span></p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="tel:+919829012345"
                className="btn-premium-gradient flex items-center gap-3"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
              <a
                href="https://wa.me/919829012345"
                className="btn-premium bg-[#25D366] text-white flex items-center gap-3"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
