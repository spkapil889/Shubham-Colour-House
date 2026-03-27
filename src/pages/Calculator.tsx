import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator as CalcIcon, 
  Info, 
  RefreshCw, 
  CheckCircle2, 
  Home, 
  Maximize2, 
  DoorOpen, 
  Layout,
  ChevronRight,
  Droplets,
  Layers
} from 'lucide-react';

type RoomType = 'interior' | 'exterior';
type SurfaceCondition = 'new' | 're-dark' | 're-light';
type PaintQuality = 'economy' | 'standard' | 'premium' | 'luxury';

const ROOM_PRESETS = [
  { name: 'Bedroom', l: '12', w: '10', h: '10' },
  { name: 'Living Room', l: '18', w: '14', h: '10' },
  { name: 'Kitchen', l: '10', w: '8', h: '10' },
  { name: 'Bathroom', l: '8', w: '6', h: '8' },
];

const PRICE_PER_LITER: Record<PaintQuality, number> = {
  economy: 180,
  standard: 350,
  premium: 650,
  luxury: 1200
};

export default function Calculator() {
  const [formData, setFormData] = useState({
    roomType: 'interior' as RoomType,
    length: '12',
    width: '10',
    height: '10',
    doors: '1',
    windows: '1',
    coats: '2',
    quality: 'standard' as PaintQuality,
    condition: 're-light' as SurfaceCondition,
    includeCeiling: false,
    isManualArea: false,
    manualArea: '0',
  });

  const [showResult, setShowResult] = useState(false);

  const calculations = useMemo(() => {
    let netArea = 0;

    if (formData.isManualArea) {
      netArea = parseFloat(formData.manualArea) || 0;
    } else {
      const l = parseFloat(formData.length) || 0;
      const w = parseFloat(formData.width) || 0;
      const h = parseFloat(formData.height) || 0;
      const d = parseInt(formData.doors) || 0;
      const win = parseInt(formData.windows) || 0;

      // 1. Calculate Gross Wall Area
      const grossWallArea = 2 * (l + w) * h;

      // 2. Calculate Deductions (Standard sizes in sq ft)
      const doorArea = d * 21; // Standard door is ~21 sq ft
      const windowArea = win * 12; // Standard window is ~12 sq ft
      const totalDeductions = doorArea + windowArea;

      // 3. Net Wall Area
      netArea = Math.max(0, grossWallArea - totalDeductions);

      // 4. Add Ceiling if selected
      const ceilingArea = l * w;
      if (formData.includeCeiling) {
        netArea += ceilingArea;
      }
    }

    const c = parseInt(formData.coats) || 2;

    // 5. Coverage per liter (sq ft per liter for 1 coat)
    const coverageMap: Record<PaintQuality, number> = {
      economy: 80,
      standard: 100,
      premium: 130,
      luxury: 150
    };

    // 6. Surface Condition Multiplier
    const conditionMultiplier: Record<SurfaceCondition, number> = {
      new: 1.2,      // Fresh plaster absorbs more
      're-dark': 1.3, // Covering dark colors needs more
      're-light': 1.0 // Standard repaint
    };

    const baseCoverage = coverageMap[formData.quality];
    const adjustedCoverage = baseCoverage / conditionMultiplier[formData.condition];

    // 7. Final Calculation
    const litersPerCoat = netArea / adjustedCoverage;
    const totalLiters = litersPerCoat * c;
    const estimatedCost = totalLiters * PRICE_PER_LITER[formData.quality];

    return {
      totalArea: Math.round(netArea),
      liters: Math.ceil(totalLiters * 10) / 10,
      primer: formData.condition === 'new' ? Math.ceil((netArea / 120) * 10) / 10 : 0,
      cost: Math.round(estimatedCost)
    };
  }, [formData]);

  const [copied, setCopied] = useState(false);

  const resetForm = () => {
    setFormData({
      roomType: 'interior',
      length: '12',
      width: '10',
      height: '10',
      doors: '1',
      windows: '1',
      coats: '2',
      quality: 'standard',
      condition: 're-light',
      includeCeiling: false,
      isManualArea: false,
      manualArea: '0',
    });
    setShowResult(false);
  };

  const applyPreset = (preset: typeof ROOM_PRESETS[0]) => {
    setFormData(prev => ({
      ...prev,
      length: preset.l,
      width: preset.w,
      height: preset.h,
      isManualArea: false
    }));
  };

  return (
    <div className="bg-brand-paper min-h-screen pb-24">
      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-8"
          >
            <CalcIcon className="w-4 h-4 text-brand-purple" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-purple">Smart Estimation Tool</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tight text-brand-dark leading-[1.1]"
          >
            Paint <span className="text-gradient">Calculator</span>
          </motion.h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto font-light">
            Estimate your paint requirements with precision. Simply enter your room dimensions and preferences below.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Input Form */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-black/5">
                <div className="space-y-12">
                  
                  {/* Step 1: Basic Info */}
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold text-sm">1</div>
                        <h3 className="text-2xl font-black text-brand-dark">Room Dimensions</h3>
                      </div>
                      <div className="flex bg-brand-paper p-1 rounded-2xl">
                        <button 
                          onClick={() => setFormData({ ...formData, isManualArea: false })}
                          className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${!formData.isManualArea ? 'bg-white shadow-sm text-brand-purple' : 'text-brand-muted'}`}
                        >
                          By Dimensions
                        </button>
                        <button 
                          onClick={() => setFormData({ ...formData, isManualArea: true })}
                          className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${formData.isManualArea ? 'bg-white shadow-sm text-brand-purple' : 'text-brand-muted'}`}
                        >
                          Manual Area
                        </button>
                      </div>
                    </div>
                    
                    {!formData.isManualArea ? (
                      <div className="space-y-8">
                        <div className="flex flex-wrap gap-3">
                          {ROOM_PRESETS.map((preset) => (
                            <button
                              key={preset.name}
                              onClick={() => applyPreset(preset)}
                              className={`px-4 py-2 rounded-full border transition-all text-xs font-bold ${
                                formData.length === preset.l && formData.width === preset.w 
                                ? 'bg-brand-purple text-white border-brand-purple' 
                                : 'bg-brand-paper border-transparent text-brand-muted hover:border-brand-purple/30'
                              }`}
                            >
                              {preset.name}
                            </button>
                          ))}
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                          <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                            <div className="space-y-3">
                              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted flex items-center gap-2">
                                <Maximize2 className="w-3 h-3" /> Length (ft)
                              </label>
                              <input
                                type="number"
                                value={formData.length}
                                onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                                className="w-full bg-brand-paper border-b-2 border-transparent focus:border-brand-purple p-4 rounded-2xl transition-all outline-none font-bold text-xl"
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted flex items-center gap-2">
                                <Maximize2 className="w-3 h-3 rotate-90" /> Width (ft)
                              </label>
                              <input
                                type="number"
                                value={formData.width}
                                onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                                className="w-full bg-brand-paper border-b-2 border-transparent focus:border-brand-purple p-4 rounded-2xl transition-all outline-none font-bold text-xl"
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted flex items-center gap-2">
                                <Layout className="w-3 h-3" /> Height (ft)
                              </label>
                              <input
                                type="number"
                                value={formData.height}
                                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                className="w-full bg-brand-paper border-b-2 border-transparent focus:border-brand-purple p-4 rounded-2xl transition-all outline-none font-bold text-xl"
                              />
                            </div>
                          </div>

                          {/* Room Visualizer */}
                          <div className="hidden md:flex flex-col items-center gap-4 p-8 bg-brand-paper rounded-[2rem] border border-black/5 min-w-[200px]">
                            <div className="relative w-32 h-32 perspective-1000">
                              <motion.div 
                                animate={{ 
                                  scaleX: Math.min(1.5, Math.max(0.5, parseFloat(formData.width) / 10)),
                                  scaleY: Math.min(1.5, Math.max(0.5, parseFloat(formData.height) / 10)),
                                  scaleZ: Math.min(1.5, Math.max(0.5, parseFloat(formData.length) / 10)),
                                }}
                                className="w-16 h-16 bg-brand-purple/20 border-2 border-brand-purple/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-style-3d rotate-x-12 rotate-y-12"
                              >
                                <div className="absolute inset-0 bg-brand-purple/10 border border-brand-purple/20 translate-z-8" />
                                <div className="absolute inset-0 bg-brand-purple/10 border border-brand-purple/20 -translate-z-8" />
                              </motion.div>
                            </div>
                            <span className="text-[8px] uppercase tracking-widest font-bold text-brand-muted">Room Scale Preview</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted flex items-center gap-2">
                          <Maximize2 className="w-3 h-3" /> Total Surface Area (sq. ft.)
                        </label>
                        <input
                          type="number"
                          value={formData.manualArea}
                          onChange={(e) => setFormData({ ...formData, manualArea: e.target.value })}
                          placeholder="Enter total area to be painted"
                          className="w-full bg-brand-paper border-b-2 border-transparent focus:border-brand-purple p-6 rounded-2xl transition-all outline-none font-bold text-3xl"
                        />
                        <p className="text-xs text-brand-muted italic">Useful if you've already measured your walls or have a floor plan.</p>
                      </div>
                    )}
                  </div>

                  {/* Step 2: Openings */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold text-sm">2</div>
                      <h3 className="text-2xl font-black text-brand-dark">Doors & Windows</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted flex items-center gap-2">
                          <DoorOpen className="w-3 h-3" /> Number of Doors
                        </label>
                        <div className="flex items-center bg-brand-paper rounded-2xl overflow-hidden">
                          <button 
                            onClick={() => setFormData(prev => ({ ...prev, doors: Math.max(0, parseInt(prev.doors) - 1).toString() }))}
                            className="p-4 hover:bg-brand-purple/10 transition-colors"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={formData.doors}
                            onChange={(e) => setFormData({ ...formData, doors: e.target.value })}
                            className="flex-grow bg-transparent text-center font-bold outline-none"
                          />
                          <button 
                            onClick={() => setFormData(prev => ({ ...prev, doors: (parseInt(prev.doors) + 1).toString() }))}
                            className="p-4 hover:bg-brand-purple/10 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted flex items-center gap-2">
                          <Layout className="w-3 h-3" /> Number of Windows
                        </label>
                        <div className="flex items-center bg-brand-paper rounded-2xl overflow-hidden">
                          <button 
                            onClick={() => setFormData(prev => ({ ...prev, windows: Math.max(0, parseInt(prev.windows) - 1).toString() }))}
                            className="p-4 hover:bg-brand-purple/10 transition-colors"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={formData.windows}
                            onChange={(e) => setFormData({ ...formData, windows: e.target.value })}
                            className="flex-grow bg-transparent text-center font-bold outline-none"
                          />
                          <button 
                            onClick={() => setFormData(prev => ({ ...prev, windows: (parseInt(prev.windows) + 1).toString() }))}
                            className="p-4 hover:bg-brand-purple/10 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <label className="flex items-center gap-4 p-6 bg-brand-paper rounded-3xl cursor-pointer group border border-transparent hover:border-brand-purple/20 transition-all">
                      <input
                        type="checkbox"
                        checked={formData.includeCeiling}
                        onChange={(e) => setFormData({ ...formData, includeCeiling: e.target.checked })}
                        className="w-6 h-6 accent-brand-purple rounded-lg"
                      />
                      <div className="flex-grow">
                        <span className="block font-bold text-brand-dark">Include Ceiling?</span>
                        <span className="text-xs text-brand-muted">Calculate paint for the top surface as well</span>
                      </div>
                    </label>
                  </div>

                  {/* Step 3: Paint Details */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold text-sm">3</div>
                      <h3 className="text-2xl font-black text-brand-dark">Paint & Surface</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Paint Quality</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            { id: 'economy', desc: 'Budget friendly, basic finish' },
                            { id: 'standard', desc: 'Good durability, matte finish' },
                            { id: 'premium', desc: 'High washability, satin finish' },
                            { id: 'luxury', desc: 'Ultra-rich look, high sheen' }
                          ].map((q) => (
                            <button
                              key={q.id}
                              onClick={() => setFormData({ ...formData, quality: q.id as PaintQuality })}
                              className={`p-6 rounded-3xl text-left transition-all border group ${
                                formData.quality === q.id 
                                ? 'bg-brand-dark text-white border-brand-dark shadow-xl scale-[1.02]' 
                                : 'bg-brand-paper text-brand-muted border-transparent hover:border-brand-purple/30'
                              }`}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-black uppercase tracking-widest">{q.id}</span>
                                <div className={`w-2 h-2 rounded-full ${formData.quality === q.id ? 'bg-brand-purple' : 'bg-brand-muted/20'}`} />
                              </div>
                              <p className={`text-[10px] leading-tight ${formData.quality === q.id ? 'text-white/60' : 'text-brand-muted/60'}`}>
                                {q.desc}
                              </p>
                              <div className="mt-4 flex items-baseline gap-1">
                                <span className={`text-lg font-black ${formData.quality === q.id ? 'text-brand-purple' : 'text-brand-dark'}`}>₹{PRICE_PER_LITER[q.id as PaintQuality]}</span>
                                <span className="text-[8px] opacity-40">/ Liter</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Surface Condition</label>
                        <div className="space-y-3">
                          {[
                            { id: 'new', label: 'Fresh Wall (New Plaster)' },
                            { id: 're-light', label: 'Repaint (Light to Light)' },
                            { id: 're-dark', label: 'Repaint (Dark to Light)' }
                          ].map((c) => (
                            <button
                              key={c.id}
                              onClick={() => setFormData({ ...formData, condition: c.id as SurfaceCondition })}
                              className={`w-full p-4 rounded-2xl text-left text-sm font-bold transition-all border flex items-center justify-between ${
                                formData.condition === c.id 
                                ? 'bg-brand-purple/5 border-brand-purple text-brand-purple' 
                                : 'bg-brand-paper border-transparent text-brand-muted hover:border-brand-purple/20'
                              }`}
                            >
                              {c.label}
                              {formData.condition === c.id && <CheckCircle2 className="w-4 h-4" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Number of Coats</label>
                      <div className="flex gap-4">
                        {['1', '2', '3'].map((coat) => (
                          <button
                            key={coat}
                            onClick={() => setFormData({ ...formData, coats: coat })}
                            className={`flex-grow py-4 rounded-2xl font-bold transition-all border ${
                              formData.coats === coat 
                              ? 'bg-brand-purple text-white border-brand-purple shadow-xl scale-105' 
                              : 'bg-brand-paper text-brand-muted border-transparent hover:border-brand-purple/20'
                            }`}
                          >
                            {coat} {parseInt(coat) === 1 ? 'Coat' : 'Coats'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-8">
                    <button
                      onClick={() => setShowResult(true)}
                      className="flex-grow btn-premium-gradient py-6 text-lg"
                    >
                      Calculate Now
                    </button>
                    <button
                      onClick={resetForm}
                      className="p-6 bg-brand-paper rounded-3xl hover:bg-brand-dark hover:text-white transition-all border border-brand-dark/5"
                    >
                      <RefreshCw className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Results & Tips */}
            <div className="lg:col-span-4 space-y-8 sticky top-32">
              <AnimatePresence mode="wait">
                {showResult ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-brand-dark text-white rounded-[3rem] p-10 relative overflow-hidden shadow-2xl"
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/10 blur-[80px] rounded-full -mr-20 -mt-20" />
                    
                    <div className="relative z-10 space-y-12">
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-purple">Estimated Requirement</span>
                        <div className="flex items-baseline gap-4">
                          <span className="text-8xl font-black text-brand-purple leading-none">{calculations.liters}</span>
                          <span className="text-2xl font-bold text-white/40">Liters</span>
                        </div>
                      </div>

                      <div className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-white/40 font-medium">Total Area</span>
                          <span className="font-bold">{calculations.totalArea} sq. ft.</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-white/40 font-medium">Coats</span>
                          <span className="font-bold">{formData.coats}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm pt-4 border-t border-white/10">
                          <span className="text-brand-purple font-bold">Estimated Cost</span>
                          <span className="font-bold text-brand-purple">₹{calculations.cost.toLocaleString()}</span>
                        </div>
                        {calculations.primer > 0 && (
                          <div className="flex justify-between items-center text-sm pt-2">
                            <span className="text-white/40 font-medium">Primer Needed</span>
                            <span className="font-bold text-white/80">{calculations.primer} Liters</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <p className="text-[10px] text-white/30 leading-relaxed italic">
                          *Estimates are approximate. Actual coverage depends on surface texture and application method.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <button 
                            onClick={() => {
                              const summary = `Paint Estimate:
- Total Area: ${calculations.totalArea} sq. ft.
- Paint Required: ${calculations.liters} Liters
- Estimated Cost: ₹${calculations.cost}
- Quality: ${formData.quality}
- Coats: ${formData.coats}
${calculations.primer > 0 ? `- Primer: ${calculations.primer} Liters` : ''}`;
                              navigator.clipboard.writeText(summary);
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2000);
                            }}
                            className="py-5 bg-white/10 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10"
                          >
                            {copied ? 'Copied!' : 'Copy Summary'}
                          </button>
                          <button className="py-5 bg-white text-brand-dark rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all shadow-xl">
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-[3rem] p-12 border border-brand-dark/5 text-center space-y-8 shadow-sm h-[600px] flex flex-col items-center justify-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-brand-paper flex items-center justify-center">
                      <CalcIcon className="w-10 h-10 text-brand-muted/20" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-brand-dark">Ready to Estimate?</h3>
                      <p className="text-brand-muted font-light leading-relaxed">
                        Adjust the dimensions and options on the left to see your personalized paint requirement.
                      </p>
                    </div>
                    <div className="w-full h-1 bg-brand-paper rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-1/2 h-full bg-brand-purple/20"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="bg-white rounded-[3rem] p-10 border border-brand-dark/5 space-y-8 shadow-sm">
                <div className="flex items-center gap-3 text-brand-purple">
                  <Info className="w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Pro Tips</span>
                </div>
                <div className="space-y-6">
                  {[
                    { title: 'Buy Extra', desc: 'Always keep 10% extra for future touch-ups and repairs.' },
                    { title: 'Primer First', desc: 'Using a primer can reduce paint consumption by up to 20%.' },
                    { title: 'Weather Check', desc: 'Avoid painting during high humidity or extreme heat.' }
                  ].map((tip, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="mt-1">
                        <CheckCircle2 className="w-4 h-4 text-brand-purple" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-brand-dark text-sm">{tip.title}</h4>
                        <p className="text-xs text-brand-muted leading-relaxed font-light">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Info Section */}
      <section className="container mx-auto px-4 mt-24">
        <div className="bg-brand-dark rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-mesh opacity-10" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">Still Unsure About <br /><span className="text-gradient">The Quantity?</span></h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Our experts can visit your site for a professional measurement and provide a detailed, no-obligation quote.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="btn-premium-gradient">Book Site Visit</button>
                <button className="px-8 py-4 rounded-2xl border border-white/20 font-bold hover:bg-white/10 transition-all">Talk to Expert</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <Droplets className="w-8 h-8 text-brand-purple" />
                <h4 className="text-xl font-bold">100+ Brands</h4>
                <p className="text-xs text-white/40 font-light">Widest range of premium paints in Alwar.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <Layers className="w-8 h-8 text-brand-purple" />
                <h4 className="text-xl font-bold">Expert Advice</h4>
                <p className="text-xs text-white/40 font-light">30+ years of experience in color selection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

