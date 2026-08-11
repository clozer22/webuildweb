import React, { useState } from 'react';
import {
  X,
  Sliders,
  Paintbrush,
  Moon,
  Layout,
  Check,
  Star,
  Sparkles,
  ArrowRight,
  Monitor,
  CheckCircle,
  RefreshCw
} from 'lucide-react';

export default function AdminCustomizerModal({ project, onClose }) {
  const [accentColor, setAccentColor] = useState('#D4FF00');
  const [accentName, setAccentName] = useState('Lime Green');
  const [bgStyle, setBgStyle] = useState('dark');
  const [headerStyle, setHeaderStyle] = useState('split');
  const [fontFamily, setFontFamily] = useState('Outfit');
  const [showPromoBanner, setShowPromoBanner] = useState(true);
  const [showRatings, setShowRatings] = useState(true);

  const colorPresets = [
    { name: 'Lime Green', color: '#D4FF00' },
    { name: 'Cyber Cyan', color: '#00F0FF' },
    { name: 'Sunset Coral', color: '#FF5577' },
    { name: 'Emerald Gold', color: '#FFD700' },
    { name: 'Purple Neon', color: '#A855F7' },
  ];

  const resetCustomizer = () => {
    setAccentColor('#D4FF00');
    setAccentName('Lime Green');
    setBgStyle('dark');
    setHeaderStyle('split');
    setFontFamily('Outfit');
    setShowPromoBanner(true);
    setShowRatings(true);
  };

  const getBgClass = () => {
    if (bgStyle === 'midnight') return 'bg-[#050814] text-white';
    if (bgStyle === 'slate') return 'bg-[#0F172A] text-white';
    return 'bg-[#0A0A0A] text-white';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-none w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Modal Top Header */}
        <div className="p-6 border-b border-[#2A2A2A] flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-none bg-[#D4FF00]/10 text-[#D4FF00]">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">WBW Admin Theme Customizer</h3>
                <span className="px-2.5 py-0.5 rounded-none bg-[#D4FF00] text-[#0A0A0A] text-[10px] font-extrabold uppercase">
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
              className="p-2 rounded-none bg-[#1E1E1E] hover:bg-[#2A2A2A] text-[#7A7A7A] hover:text-white transition-all flex items-center gap-1.5 text-xs font-semibold"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-none bg-[#1E1E1E] hover:bg-[#2A2A2A] text-gray-400 hover:text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Controls Panel */}
          <div className="lg:col-span-4 p-6 border-b lg:border-b-0 lg:border-r border-[#2A2A2A] bg-[#181818] space-y-6">
            
            {/* Accent Colors */}
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
                    className={`w-9 h-9 rounded-none flex items-center justify-center transition-all ${
                      accentColor === c.color ? 'ring-2 ring-white scale-110 shadow-lg' : 'opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.color }}
                  >
                    {accentColor === c.color && (
                      <Check className="w-4 h-4 text-[#0A0A0A] stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
              <div className="text-[11px] text-[#7A7A7A] mt-2">Active: <span className="font-semibold text-white">{accentName}</span></div>
            </div>

            {/* Background Style */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2 mb-3">
                <Moon className="w-4 h-4 text-[#D4FF00]" />
                <span>Background Canvas</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['dark', 'midnight', 'slate'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setBgStyle(mode)}
                    className={`py-2 px-3 rounded-none border text-xs font-medium capitalize transition-all ${
                      bgStyle === mode
                        ? 'bg-[#0A0A0A] border-[#D4FF00] text-[#D4FF00] font-bold'
                        : 'bg-[#0A0A0A]/50 border-[#2A2A2A] text-gray-400 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Header Navigation */}
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
                    className={`w-full p-2.5 rounded-none border text-left text-xs font-medium flex items-center justify-between transition-all ${
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

            {/* Toggles */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#D4FF00]" />
                <span>Component Features</span>
              </label>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-2.5 rounded-none bg-[#1A1A1A] border border-[#2A2A2A] cursor-pointer">
                  <span className="text-xs font-medium text-gray-300">Top Promo Announcement</span>
                  <input
                    type="checkbox"
                    checked={showPromoBanner}
                    onChange={(e) => setShowPromoBanner(e.target.checked)}
                    className="accent-[#D4FF00] w-4 h-4 cursor-pointer"
                  />
                </label>
                <label className="flex items-center justify-between p-2.5 rounded-none bg-[#1A1A1A] border border-[#2A2A2A] cursor-pointer">
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

          {/* Live Preview */}
          <div className="lg:col-span-8 p-6 bg-[#0A0A0A] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2A2A2A]">
                <div className="flex items-center gap-2 text-xs text-[#7A7A7A]">
                  <Monitor className="w-4 h-4 text-[#D4FF00]" />
                  <span>Real-Time Client Preview</span>
                </div>
              </div>

              {/* Dynamic Theme Render Window */}
              <div className={`rounded-none border border-[#2A2A2A] overflow-hidden transition-all duration-300 shadow-xl ${getBgClass()}`}>
                
                {showPromoBanner && (
                  <div
                    className="py-1.5 px-4 text-center text-xs font-bold text-[#0A0A0A] uppercase tracking-wider"
                    style={{ backgroundColor: accentColor }}
                  >
                    🎉 SPECIAL LAUNCH PROMO - GET 20% OFF FOR NEW CUSTOMERS!
                  </div>
                )}

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
                        <span>Shop</span>
                        <span>Catalog</span>
                        <span>About</span>
                      </div>
                      <button
                        className="px-3 py-1.5 rounded-none font-bold text-xs text-[#0A0A0A]"
                        style={{ backgroundColor: accentColor }}
                      >
                        Action
                      </button>
                    </>
                  )}
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  <div className="max-w-md space-y-3">
                    <span
                      className="inline-block px-3 py-1 rounded-none text-[11px] font-bold uppercase tracking-wider"
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
                        className="px-4 py-2 rounded-none text-xs font-bold text-[#0A0A0A] flex items-center gap-2 shadow-md"
                        style={{ backgroundColor: accentColor }}
                      >
                        <span>Explore Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {showRatings && (
                        <div className="flex items-center gap-1 text-xs text-yellow-400">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="font-bold text-white">4.9/5.0</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#2A2A2A]/50">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="p-3 rounded-none bg-[#141414] border border-[#2A2A2A]/50 space-y-2">
                        <div className="h-20 rounded-none bg-[#222222] flex items-center justify-center text-xs text-[#7A7A7A]">
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

            <div className="mt-6 pt-4 border-t border-[#2A2A2A] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#D4FF00]" />
                <span>Tailored admin features for your business needs</span>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-none bg-[#D4FF00] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#b8de00] transition-all cursor-pointer"
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
