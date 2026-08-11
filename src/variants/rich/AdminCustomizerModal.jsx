import React, { useState } from 'react';
import {
  X,
  Sliders,
  Paintbrush,
  Sun,
  Moon,
  Layout,
  Type,
  Eye,
  Check,
  ShoppingBag,
  Star,
  Sparkles,
  ArrowRight,
  Monitor,
  CheckCircle,
  RefreshCw
} from 'lucide-react';

export default function AdminCustomizerModal({ project, onClose }) {
  // Admin customizer interactive state
  const [accentColor, setAccentColor] = useState('#D4FF00'); // default Lime Green
  const [accentName, setAccentName] = useState('Lime Green');
  const [bgStyle, setBgStyle] = useState('dark'); // 'dark', 'midnight', 'slate'
  const [headerStyle, setHeaderStyle] = useState('split'); // 'split', 'centered', 'compact'
  const [fontFamily, setFontFamily] = useState('Outfit');
  const [showPromoBanner, setShowPromoBanner] = useState(true);
  const [showRatings, setShowRatings] = useState(true);
  const [layoutColumns, setLayoutColumns] = useState(3);

  const colorPresets = [
    { name: 'Lime Green', color: '#D4FF00', glow: 'rgba(212,255,0,0.4)' },
    { name: 'Cyber Cyan', color: '#00F0FF', glow: 'rgba(0,240,255,0.4)' },
    { name: 'Sunset Coral', color: '#FF5577', glow: 'rgba(255,85,119,0.4)' },
    { name: 'Emerald Gold', color: '#FFD700', glow: 'rgba(255,215,0,0.4)' },
    { name: 'Purple Neon', color: '#A855F7', glow: 'rgba(168,85,247,0.4)' },
  ];

  const resetCustomizer = () => {
    setAccentColor('#D4FF00');
    setAccentName('Lime Green');
    setBgStyle('dark');
    setHeaderStyle('split');
    setFontFamily('Outfit');
    setShowPromoBanner(true);
    setShowRatings(true);
    setLayoutColumns(3);
  };

  const getBgClass = () => {
    if (bgStyle === 'midnight') return 'bg-[#050814] text-white';
    if (bgStyle === 'slate') return 'bg-[#0F172A] text-white';
    return 'bg-[#0A0A0A] text-white';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Modal Top Header */}
        <div className="p-6 border-b border-[#2A2A2A] flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00]">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">WBW Admin Theme Customizer</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#D4FF00] text-[#0A0A0A] text-[10px] font-extrabold uppercase">
                  Live Studio
                </span>
              </div>
              <p className="text-xs text-[#7A7A7A] mt-0.5">
                Simulating client admin panel customization for <span className="text-white font-semibold">{project.title}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={resetCustomizer}
              className="p-2 rounded-xl bg-[#1E1E1E] hover:bg-[#2A2A2A] text-[#7A7A7A] hover:text-white transition-all flex items-center gap-1.5 text-xs font-semibold"
              title="Reset Settings"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1E1E1E] hover:bg-[#2A2A2A] text-gray-400 hover:text-white transition-all"
              aria-label="Close Modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body - 2 Columns (Left Controls, Right Live Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Controls Panel (4 Cols) */}
          <div className="lg:col-span-4 p-6 border-b lg:border-b-0 lg:border-r border-[#2A2A2A] bg-[#181818] space-y-6">
            
            {/* Accent Color Palette Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2 mb-3">
                <Paintbrush className="w-4 h-4 text-[#D4FF00]" />
                <span>Primary Accent Theme</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {colorPresets.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => {
                      setAccentColor(c.color);
                      setAccentName(c.name);
                    }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      accentColor === c.color ? 'ring-2 ring-white scale-110 shadow-lg' : 'opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.color }}
                    title={c.name}
                  >
                    {accentColor === c.color && (
                      <Check className="w-4 h-4 text-[#0A0A0A] stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
              <div className="text-[11px] text-[#7A7A7A] mt-2">Active: <span className="font-semibold text-white">{accentName}</span> ({accentColor})</div>
            </div>

            {/* Background Theme Mode */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2 mb-3">
                <Moon className="w-4 h-4 text-[#D4FF00]" />
                <span>Background Canvas</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setBgStyle('dark')}
                  className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                    bgStyle === 'dark'
                      ? 'bg-[#0A0A0A] border-[#D4FF00] text-[#D4FF00] font-bold'
                      : 'bg-[#0A0A0A]/50 border-[#2A2A2A] text-gray-400 hover:text-white'
                  }`}
                >
                  Charcoal
                </button>
                <button
                  onClick={() => setBgStyle('midnight')}
                  className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                    bgStyle === 'midnight'
                      ? 'bg-[#050814] border-[#D4FF00] text-[#D4FF00] font-bold'
                      : 'bg-[#050814]/50 border-[#2A2A2A] text-gray-400 hover:text-white'
                  }`}
                >
                  Midnight
                </button>
                <button
                  onClick={() => setBgStyle('slate')}
                  className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                    bgStyle === 'slate'
                      ? 'bg-[#0F172A] border-[#D4FF00] text-[#D4FF00] font-bold'
                      : 'bg-[#0F172A]/50 border-[#2A2A2A] text-gray-400 hover:text-white'
                  }`}
                >
                  Slate
                </button>
              </div>
            </div>

            {/* Header Navigation Layout */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2 mb-3">
                <Layout className="w-4 h-4 text-[#D4FF00]" />
                <span>Navigation Header Style</span>
              </label>
              <div className="space-y-2">
                {[
                  { id: 'split', label: 'Split Search & Nav Bar' },
                  { id: 'centered', label: 'Centered Minimalist Logo' },
                  { id: 'compact', label: 'Compact Tech Drawer' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setHeaderStyle(item.id)}
                    className={`w-full p-2.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                      headerStyle === item.id
                        ? 'bg-[#252525] border-[#D4FF00] text-white font-semibold'
                        : 'bg-[#1A1A1A] border-[#2A2A2A] text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {headerStyle === item.id && <Check className="w-4 h-4 text-[#D4FF00]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Features */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#D4FF00]" />
                <span>Component Features</span>
              </label>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-2.5 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] cursor-pointer">
                  <span className="text-xs font-medium text-gray-300">Top Promo Announcement</span>
                  <input
                    type="checkbox"
                    checked={showPromoBanner}
                    onChange={(e) => setShowPromoBanner(e.target.checked)}
                    className="accent-[#D4FF00] w-4 h-4 cursor-pointer"
                  />
                </label>
                <label className="flex items-center justify-between p-2.5 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] cursor-pointer">
                  <span className="text-xs font-medium text-gray-300">Customer Ratings & Reviews</span>
                  <input
                    type="checkbox"
                    checked={showRatings}
                    onChange={(e) => setShowRatings(e.target.checked)}
                    className="accent-[#D4FF00] w-4 h-4 cursor-pointer"
                  />
                </label>
              </div>
            </div>

          </div>

          {/* Live Preview Panel (8 Cols) */}
          <div className="lg:col-span-8 p-6 bg-[#0A0A0A] flex flex-col justify-between">
            <div>
              {/* Preview Bar Top Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2A2A2A]">
                <div className="flex items-center gap-2 text-xs text-[#7A7A7A]">
                  <Monitor className="w-4 h-4 text-[#D4FF00]" />
                  <span>Real-Time Client Preview</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
              </div>

              {/* Dynamic Theme Render Window */}
              <div className={`rounded-2xl border border-[#2A2A2A] overflow-hidden transition-all duration-300 shadow-xl ${getBgClass()}`}>
                
                {/* Optional Promo Banner */}
                {showPromoBanner && (
                  <div
                    className="py-1.5 px-4 text-center text-xs font-bold text-[#0A0A0A] uppercase tracking-wider transition-colors"
                    style={{ backgroundColor: accentColor }}
                  >
                    🎉 SPECIAL LAUNCH PROMO - GET 20% OFF FOR NEW CUSTOMERS!
                  </div>
                )}

                {/* Navbar Header Render */}
                <div className="p-4 border-b border-[#2A2A2A]/50 flex items-center justify-between">
                  {headerStyle === 'centered' ? (
                    <div className="w-full text-center font-extrabold text-lg tracking-wider" style={{ fontFamily }}>
                      {project.title.toUpperCase()}
                    </div>
                  ) : (
                    <>
                      <div className="font-extrabold text-lg tracking-wider" style={{ fontFamily }}>
                        {project.title.split(' ')[0]}<span style={{ color: accentColor }}>.</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="hover:opacity-100 opacity-80 cursor-pointer">Shop</span>
                        <span className="hover:opacity-100 opacity-80 cursor-pointer">Catalog</span>
                        <span className="hover:opacity-100 opacity-80 cursor-pointer">About</span>
                      </div>
                      <button
                        className="px-3 py-1.5 rounded-lg font-bold text-xs text-[#0A0A0A] transition-colors"
                        style={{ backgroundColor: accentColor }}
                      >
                        Action
                      </button>
                    </>
                  )}
                </div>

                {/* Hero Showcase Area inside Live Preview */}
                <div className="p-6 md:p-8 space-y-6">
                  <div className="max-w-md space-y-3">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                    >
                      {project.category}
                    </span>

                    <h4 className="text-2xl font-extrabold text-white leading-tight">
                      Experience Next-Gen Web Solutions
                    </h4>

                    <p className="text-xs text-[#7A7A7A] leading-relaxed">
                      This live sandbox displays how WeBuildWeb equips client administrators with custom controls to adjust themes, colors, and features on demand.
                    </p>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        className="px-4 py-2 rounded-xl text-xs font-bold text-[#0A0A0A] flex items-center gap-2 shadow-md transition-all hover:scale-105"
                        style={{ backgroundColor: accentColor }}
                      >
                        <span>Explore Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {showRatings && (
                        <div className="flex items-center gap-1 text-xs text-yellow-400">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="font-bold text-white">4.9/5.0</span>
                          <span className="text-[10px] text-[#7A7A7A]">(240 reviews)</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sample Items Cards Grid inside Live Preview */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#2A2A2A]/50">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="p-3 rounded-xl bg-[#141414] border border-[#2A2A2A]/50 space-y-2">
                        <div className="h-20 rounded-lg bg-[#222222] flex items-center justify-center text-xs text-[#7A7A7A]">
                          Product #{item}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">$149.00</span>
                          <span className="text-[10px] font-semibold" style={{ color: accentColor }}>In Stock</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#D4FF00]" />
                <span>Custom admin panel features are fully tailored to your business needs!</span>
              </div>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#D4FF00] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#b8de00] transition-all shadow-md cursor-pointer"
              >
                Close Admin Studio
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
