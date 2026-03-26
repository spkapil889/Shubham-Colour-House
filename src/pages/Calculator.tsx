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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-brand-blue text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://shubhamcolourhouse.com/wp-content/uploads/2025/09/beautiful-open-concept-interior-living-room-of-hou-2024-09-11-23-57-38-utc-1-scaled.jpg"
            alt="Calculator Hero"
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-brand-blue/30 to-brand-blue/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CalcIcon className="w-20 h-20 mx-auto mb-8 opacity-90" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Paint Calculator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light"
          >
            Get an accurate estimate of how much paint you need for your next project.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100">
                  <form onSubmit={calculatePaint} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-dark">Area Type</label>
                        <select
                          value={formData.roomType}
                          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue"
                        >
                          <option value="interior">Interior Walls</option>
                          <option value="exterior">Exterior Walls</option>
                          <option value="waterproofing">Waterproofing Area</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-dark">Paint Type</label>
                        <select
                          value={formData.paintType}
                          onChange={(e) => setFormData({ ...formData, paintType: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue"
                        >
                          <option value="standard">Standard Finish</option>
                          <option value="premium">Premium Luxury</option>
                          <option value="distemper">Economy Distemper</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-dark">Wall Width (ft)</label>
                        <input
                          type="number"
                          required
                          value={formData.width}
                          onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                          placeholder="e.g. 12"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-dark">Wall Height (ft)</label>
                        <input
                          type="number"
                          required
                          value={formData.height}
                          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                          placeholder="e.g. 10"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-dark">Number of Walls</label>
                        <input
                          type="number"
                          value={formData.walls}
                          onChange={(e) => setFormData({ ...formData, walls: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-dark">Number of Coats</label>
                        <select
                          value={formData.coats}
                          onChange={(e) => setFormData({ ...formData, coats: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue"
                        >
                          <option value="1">1 Coat (Touch up)</option>
                          <option value="2">2 Coats (Standard)</option>
                          <option value="3">3 Coats (Premium)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-dark">Doors Count</label>
                        <input
                          type="number"
                          value={formData.doors}
                          onChange={(e) => setFormData({ ...formData, doors: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-dark">Windows Count</label>
                        <input
                          type="number"
                          value={formData.windows}
                          onChange={(e) => setFormData({ ...formData, windows: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <input
                        type="checkbox"
                        id="ceiling"
                        checked={formData.ceiling}
                        onChange={(e) => setFormData({ ...formData, ceiling: e.target.checked })}
                        className="w-5 h-5 accent-brand-blue"
                      />
                      <label htmlFor="ceiling" className="text-sm font-bold text-brand-dark cursor-pointer">
                        Include Ceiling in calculation?
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="flex-grow bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-purple transition-all"
                      >
                        Calculate Requirement
                      </button>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="p-4 bg-gray-100 text-gray-500 rounded-xl hover:bg-gray-200 transition-all"
                      >
                        <RefreshCw className="w-6 h-6" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-8">
                {result !== null ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-brand-dark text-white p-10 rounded-[2rem] relative overflow-hidden"
                  >
                    <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                      <CalcIcon className="w-5 h-5 text-brand-accent" />
                      Estimated Requirement
                    </h3>
                    <div className="text-center space-y-2">
                      <span className="text-7xl font-extrabold text-brand-accent">{result}</span>
                      <span className="text-2xl font-bold block text-gray-400 uppercase tracking-widest">Liters</span>
                    </div>
                    <div className="mt-10 pt-10 border-t border-white/10 space-y-4">
                      <p className="text-sm text-gray-400 italic">
                        *Actual paint requirement may vary based on surface condition, texture, absorption, and product type.
                      </p>
                      <button className="w-full bg-white text-brand-dark py-4 rounded-xl font-bold hover:bg-brand-accent hover:text-white transition-all">
                        Get Exact Quote
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-white p-10 rounded-[2rem] border-2 border-dashed border-gray-200 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                    <CalcIcon className="w-16 h-16 text-gray-200 mb-6" />
                    <h3 className="text-xl font-bold text-gray-400">Fill the form to see <br />estimated requirement</h3>
                  </div>
                )}

                <div className="bg-white p-8 rounded-2xl border border-gray-100 space-y-4">
                  <div className="flex items-center gap-2 text-brand-blue font-bold">
                    <Info className="w-5 h-5" />
                    <span>Quick Tips</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Always buy 10% extra for future touch-ups.',
                      'Darker shades might require an extra coat.',
                      'Use a primer for better coverage and finish.',
                      'Check the coverage area on the paint bucket.'
                    ].map((tip, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
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
