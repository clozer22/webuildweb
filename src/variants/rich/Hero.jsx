import React from 'react';
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Globe,
  Code2,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Layers,
  Award
} from 'lucide-react';

export default function Hero({ onExploreWork, onStartProject }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A0A0A]">
      {/* Background Glowing Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4FF00]/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-[#D4FF00]/5 rounded-full blur-[100px] pointer-events-none -z-0" />
      
      {/* Mesh Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Hero Text */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-semibold uppercase tracking-wider text-gray-300">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4FF00]"></span>
              </span>
              <span>Accepting New Web Development Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Modern Websites. <br />
              <span className="text-[#D4FF00] underline decoration-[#D4FF00]/40 decoration-wavy decoration-2">
                Real Results.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#7A7A7A] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We design and build high-performing websites and custom admin solutions that convert visitors into customers and elevate your brand.
            </p>

            {/* Tagline Badge from Brand Identity */}
            <div className="p-3 bg-[#1E1E1E]/90 rounded-2xl border border-[#2A2A2A] flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300 max-w-md mx-auto lg:mx-0">
              <Sparkles className="w-5 h-5 text-[#D4FF00] shrink-0" />
              <span>WE BUILD WEBS THAT BUILD <span className="text-[#D4FF00]">BUSINESSES.</span></span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4FF00] text-[#0A0A0A] font-bold text-sm uppercase tracking-wider hover:bg-[#b8de00] transition-all duration-300 shadow-xl shadow-[#D4FF00]/25 flex items-center justify-center gap-3 hover:scale-105 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={onExploreWork}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1E1E1E] text-white font-bold text-sm uppercase tracking-wider border border-[#2A2A2A] hover:border-[#D4FF00]/50 hover:bg-[#252525] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Our Work</span>
                <Globe className="w-4 h-4 text-[#D4FF00]" />
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 border-t border-[#1E1E1E] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs text-[#7A7A7A] uppercase font-medium">Custom Tailored</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#D4FF00]">+120%</p>
                <p className="text-xs text-[#7A7A7A] uppercase font-medium">Avg Performance</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">&lt;1.0s</p>
                <p className="text-xs text-[#7A7A7A] uppercase font-medium">Lightning Speed</p>
              </div>
            </div>

          </div>

          {/* Right Column - Interactive Hero Graphics & Laptop Mockup */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Showcase Laptop / Interface Box */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Floating Badge 1 - Performance */}
              <div className="absolute -top-6 -left-4 sm:-left-8 z-20 bg-[#1E1E1E]/90 backdrop-blur-md p-3.5 rounded-2xl border border-[#2A2A2A] shadow-2xl flex items-center gap-3 animate-float">
                <div className="p-2.5 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#7A7A7A] font-semibold uppercase">Performance Up</div>
                  <div className="text-base font-extrabold text-[#D4FF00]">+120%</div>
                </div>
              </div>

              {/* Floating Badge 2 - Leads Generated */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 z-20 bg-[#1E1E1E]/90 backdrop-blur-md p-3.5 rounded-2xl border border-[#2A2A2A] shadow-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#7A7A7A] font-semibold uppercase">Leads Generated</div>
                  <div className="text-base font-extrabold text-white">2,350+</div>
                  <div className="text-[9px] text-[#D4FF00]">This Month</div>
                </div>
              </div>

              {/* Floating Badge 3 - Mobile Optimized */}
              <div className="absolute -top-4 -right-2 sm:-right-6 z-20 bg-[#1E1E1E]/90 backdrop-blur-md p-3.5 rounded-2xl border border-[#2A2A2A] shadow-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Mobile Optimized</div>
                  <div className="flex items-center gap-1 text-[10px] text-[#D4FF00]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>100% Responsive</span>
                  </div>
                </div>
              </div>

              {/* Center Cover Banner Artwork Box */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#2A2A2A] bg-[#1E1E1E] shadow-2xl group hover:border-[#D4FF00]/40 transition-all duration-500">
                <img
                  src="/assets/cover-banner.png"
                  alt="WeBuildWeb Hero Banner Showcase"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Overlay gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Banner - 4 Core Pillars */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#1E1E1E]/80 border border-[#2A2A2A] flex items-center gap-4 hover:border-[#D4FF00]/50 transition-all">
            <div className="p-3 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00] shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Modern & Professional</h3>
              <p className="text-xs text-[#7A7A7A] mt-0.5">Built for trust and credibility</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E1E1E]/80 border border-[#2A2A2A] flex items-center gap-4 hover:border-[#D4FF00]/50 transition-all">
            <div className="p-3 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00] shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Fast & Performance Driven</h3>
              <p className="text-xs text-[#7A7A7A] mt-0.5">Speed that converts</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E1E1E]/80 border border-[#2A2A2A] flex items-center gap-4 hover:border-[#D4FF00]/50 transition-all">
            <div className="p-3 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00] shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Results Focused</h3>
              <p className="text-xs text-[#7A7A7A] mt-0.5">Websites that grow your business</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#1E1E1E]/80 border border-[#2A2A2A] flex items-center gap-4 hover:border-[#D4FF00]/50 transition-all">
            <div className="p-3 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00] shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Custom & Scalable</h3>
              <p className="text-xs text-[#7A7A7A] mt-0.5">Built to fit your vision</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
