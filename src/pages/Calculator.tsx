import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, Info, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function Calculator() {
  const [formData, setFormData] = useState({
    roomType: 'interior',
    width: '',
    height: '',
    walls: '4',
    ceiling: false,
    doors: '1',
    windows: '1',
    coats: '2',
    paintType: 'standard'
  });

  const [result, setResult] = useState<number | null>(null);

  const calculatePaint = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(formData.width);
    const h = parseFloat(formData.height);
    const nWalls = parseInt(formData.walls);
    const nDoors = parseInt(formData.doors);
    const nWindows = parseInt(formData.windows);
    const nCoats = parseInt(formData.coats);

    if (isNaN(w) || isNaN(h)) return;

    // Area of walls
    let totalArea = w * h * nWalls;

    // Subtract doors (approx 20 sq ft per door) and windows (approx 15 sq ft per window)
    totalArea -= (nDoors * 20) + (nWindows * 15);

    // Add ceiling if selected (width * width approx for a square room, or w*w)
    // Let's assume a square room for simplicity if only one width is given, or w*w
    if (formData.ceiling) {
      totalArea += (w * w);
    }

    // Standard coverage: 1 liter covers approx 100 sq ft for 1 coat
    // Adjust based on coats
    const litersNeeded = (totalArea / 100) * nCoats;
    
    setResult(Math.ceil(litersNeeded * 10) / 10); // Round to 1 decimal
  };

  const resetForm = () => {
    setFormData({
      roomType: 'interior',
      width: '',
      height: '',
      walls: '4',
      ceiling: false,
      doors: '1',
      windows: '1',
      coats: '2',
      paintType: 'standard'
    });
    setResult(null);
  };

  return (
    <div className="bg-brand-paper min-h-screen">
      {/* Hero */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-8"
          >
            <CalcIcon className="w-4 h-4 text-brand-purple" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-purple">Precision Tools</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-brand-dark"
          >
            Paint <span className="text-gradient">Calculator</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto font-light leading-relaxed"
          >
            Plan your project with precision. Our advanced calculator helps you estimate the exact amount of premium paint required for your space.
          </motion.p>
        </div>
      </section>

      <section className="pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Form */}
              <div className="lg:col-span-8">
                <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-brand-dark/5">
                  <form onSubmit={calculatePaint} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Area Type</label>
                        <select
                          value={formData.roomType}
                          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                          className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors appearance-none text-brand-dark font-medium"
                        >
                          <option value="interior">Interior Walls</option>
                          <option value="exterior">Exterior Walls</option>
                          <option value="waterproofing">Waterproofing Area</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Paint Type</label>
                        <select
                          value={formData.paintType}
                          onChange={(e) => setFormData({ ...formData, paintType: e.target.value })}
                          className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors appearance-none text-brand-dark font-medium"
                        >
                          <option value="standard">Standard Finish</option>
                          <option value="premium">Premium Luxury</option>
                          <option value="distemper">Economy Distemper</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Wall Width (ft)</label>
                        <input
                          type="number"
                          required
                          value={formData.width}
                          onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                          placeholder="e.g. 12"
                          className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors text-brand-dark font-medium placeholder:text-brand-muted/30"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Wall Height (ft)</label>
                        <input
                          type="number"
                          required
                          value={formData.height}
                          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                          placeholder="e.g. 10"
                          className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors text-brand-dark font-medium placeholder:text-brand-muted/30"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Number of Walls</label>
                        <input
                          type="number"
                          value={formData.walls}
                          onChange={(e) => setFormData({ ...formData, walls: e.target.value })}
                          className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors text-brand-dark font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Number of Coats</label>
                        <select
                          value={formData.coats}
                          onChange={(e) => setFormData({ ...formData, coats: e.target.value })}
                          className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors appearance-none text-brand-dark font-medium"
                        >
                          <option value="1">1 Coat (Touch up)</option>
                          <option value="2">2 Coats (Standard)</option>
                          <option value="3">3 Coats (Premium)</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Doors Count</label>
                        <input
                          type="number"
                          value={formData.doors}
                          onChange={(e) => setFormData({ ...formData, doors: e.target.value })}
                          className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors text-brand-dark font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Windows Count</label>
                        <input
                          type="number"
                          value={formData.windows}
                          onChange={(e) => setFormData({ ...formData, windows: e.target.value })}
                          className="w-full bg-brand-paper border-b border-brand-dark/10 px-0 py-4 focus:outline-none focus:border-brand-purple transition-colors text-brand-dark font-medium"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-6 bg-brand-paper rounded-2xl border border-brand-dark/5">
                      <input
                        type="checkbox"
                        id="ceiling"
                        checked={formData.ceiling}
                        onChange={(e) => setFormData({ ...formData, ceiling: e.target.checked })}
                        className="w-5 h-5 accent-brand-purple rounded-full border-brand-dark/10"
                      />
                      <label htmlFor="ceiling" className="text-sm font-medium text-brand-dark cursor-pointer">
                        Include Ceiling in calculation?
                      </label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                      <button
                        type="submit"
                        className="flex-grow btn-premium-gradient"
                      >
                        Calculate Requirement
                      </button>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="p-4 bg-brand-paper text-brand-muted rounded-full hover:bg-brand-dark hover:text-white transition-all flex items-center justify-center border border-brand-dark/5"
                      >
                        <RefreshCw className="w-6 h-6" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-4 space-y-8">
                {result !== null ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-brand-dark text-white p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 blur-3xl rounded-full -mr-16 -mt-16" />
                    <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-purple mb-10 flex items-center gap-2">
                      <CalcIcon className="w-3 h-3" />
                      Estimated Requirement
                    </h3>
                    <div className="text-center space-y-4 py-8">
                      <span className="text-8xl font-black text-brand-purple leading-none">{result}</span>
                      <span className="text-xs font-bold block text-white/40 uppercase tracking-[0.3em]">Liters Needed</span>
                    </div>
                    <div className="mt-10 pt-10 border-t border-white/5 space-y-8">
                      <p className="text-[11px] text-white/40 leading-relaxed italic">
                        *Actual paint requirement may vary based on surface condition, texture, absorption, and product type.
                      </p>
                      <button className="btn-premium w-full bg-white text-brand-dark">
                        Get Exact Quote
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-white p-12 rounded-[2.5rem] border border-brand-dark/5 text-center flex flex-col items-center justify-center h-full min-h-[450px] shadow-sm">
                    <div className="w-20 h-20 rounded-full bg-brand-paper flex items-center justify-center mb-8">
                      <CalcIcon className="w-8 h-8 text-brand-muted/30" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark mb-4">Awaiting Input</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">Fill the form to see your <br />estimated paint requirement</p>
                  </div>
                )}

                <div className="bg-white p-10 rounded-[2.5rem] border border-brand-dark/5 space-y-6 shadow-sm">
                  <div className="flex items-center gap-3 text-brand-purple">
                    <Info className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Expert Advice</span>
                  </div>
                  <ul className="space-y-5">
                    {[
                      'Always buy 10% extra for future touch-ups.',
                      'Darker shades might require an extra coat.',
                      'Use a primer for better coverage and finish.',
                      'Check the coverage area on the paint bucket.'
                    ].map((tip, idx) => (
                      <li key={idx} className="flex gap-4 text-sm text-brand-muted leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
