import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroMinimal from './variants/minimal/HeroMinimal';
import AboutUsMinimal from './variants/minimal/AboutUsMinimal';
import ProjectsMinimal from './variants/minimal/ProjectsMinimal';
import ServicesMinimal from './variants/minimal/ServicesMinimal';
import ContactUs from './components/ContactUs';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [preselectedService, setPreselectedService] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['hero', 'about', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white text-[#000000] selection:bg-[#B7E200] selection:text-[#000000] font-sans antialiased">
      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Sections - Pure Minimalist Design */}
      <main>
        <HeroMinimal
          onExploreWork={() => scrollToSection('projects')}
          onStartProject={() => scrollToSection('contact')}
        />
        <AboutUsMinimal />
        <ProjectsMinimal />
        <ServicesMinimal onSelectService={handleSelectService} />
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer onNavClick={scrollToSection} />

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => scrollToSection('hero')}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-none bg-[#F2F2F2] border border-[#E5E5E5] text-[#000000] hover:bg-[#B7E200] transition-all duration-300 shadow-lg hover:scale-110 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
