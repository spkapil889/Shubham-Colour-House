import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { generateBrandGuideline } from '../services/imageService';
import { Loader2, Palette } from 'lucide-react';

export default function BrandIdentitySection() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      try {
        const url = await generateBrandGuideline();
        setImageUrl(url);
      } catch (error) {
        console.error('Failed to generate brand guideline:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchImage();
  }, []);

  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">Our Identity</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-dark leading-[1.1]">
                A Modern <br />
                <span className="italic font-light text-brand-gold">Visual Language</span>
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-light">
                Our brand identity reflects our commitment to innovation, creativity, and premium quality. We've developed a visual language that balances professional elegance with a fresh, modern energy.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-paper rounded-xl flex items-center justify-center shrink-0">
                    <Palette className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-black text-brand-dark mb-2">Controlled Color Balance</h4>
                    <p className="text-brand-muted text-sm font-light">A sophisticated gradient system transitioning from Cyan to Orange, representing our diverse product range and creative possibilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="rounded-[3rem] overflow-hidden aspect-video bg-brand-paper flex items-center justify-center shadow-2xl border border-black/5 relative">
              {loading ? (
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="w-10 h-10 text-brand-gold animate-spin" />
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted">Generating Identity Board...</p>
                </div>
              ) : imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Brand Guideline"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <p className="text-brand-muted">Failed to load brand guideline.</p>
              )}
              
              {/* Decorative elements */}
              <div className="absolute inset-0 border-[24px] border-white/10 pointer-events-none" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-10 -right-10 bg-brand-dark text-white p-10 rounded-3xl shadow-2xl border border-white/10 hidden md:block">
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-2">Style Guide</p>
              <p className="font-serif text-xl font-black italic">Premium <br />Minimalism</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
