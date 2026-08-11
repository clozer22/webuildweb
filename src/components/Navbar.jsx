import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Our Work' },
    { id: 'services', label: 'Services' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E5E5E5] py-3 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Transparent WBW Icon Asset */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
          >
            <img
              src="/assets/wbw-icon-transparent.png"
              alt="WeBuildWeb Logo Icon"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation - Centered Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-semibold transition-all cursor-pointer relative py-1 flex flex-col items-center ${
                    isActive ? 'text-[#000000]' : 'text-[#6B6B6B] hover:text-[#000000]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7E200] mt-1 inline-block" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA Button - Outlined Style */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2.5 rounded-full border-2 border-[#B7E200] bg-white text-[#000000] text-xs font-bold uppercase tracking-wider hover:bg-[#B7E200] hover:text-[#000000] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 text-[#B7E200] group-hover:text-[#000000]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-none bg-[#F2F2F2] border border-[#E5E5E5] text-[#000000] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#B7E200]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E5E5] px-4 pt-4 pb-6 mt-2 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between px-4 py-3 text-base font-semibold transition-all ${
                  activeTab === link.id
                    ? 'bg-[#F2F2F2] text-[#000000] border-l-4 border-[#B7E200]'
                    : 'text-[#6B6B6B] hover:text-[#000000]'
                }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && <span className="w-2 h-2 rounded-full bg-[#B7E200]" />}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-[#B7E200] bg-[#B7E200] text-[#000000] font-bold uppercase tracking-wider"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
