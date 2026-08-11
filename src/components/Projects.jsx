import React, { useState } from 'react';
import {
  Sliders,
  ExternalLink,
  ShoppingBag,
  Sparkles,
  Layers,
  ArrowRight,
  Filter,
  CheckCircle2,
  Eye
} from 'lucide-react';
import AdminCustomizerModal from './AdminCustomizerModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'E-Commerce', 'Landing Pages', 'Web Apps'];

  const projectData = [
    {
      id: 'nexus-ecommerce',
      title: 'Nexus Luxury E-Commerce',
      category: 'E-Commerce',
      description: 'High-end storefront featuring dynamic product customization, inventory management, instant checkout, and real-time sales admin analytics.',
      tags: ['React', 'E-Commerce Engine', 'Tailwind CSS', 'Admin Theme Controls'],
      metrics: '+185% Sales Conversion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#',
    },
    {
      id: 'hypersaas-landing',
      title: 'HyperSaaS AI Platform',
      category: 'Landing Pages',
      description: 'Next-generation AI SaaS landing page built for maximum lead conversion with interactive pricing calculators and theme customizer.',
      tags: ['Next.js', 'Framer Motion', 'Custom Admin Panel', 'Tailwind CSS'],
      metrics: '3.2k Monthly Leads',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#',
    },
    {
      id: 'aura-beauty',
      title: 'Aura Skincare Store',
      category: 'E-Commerce',
      description: 'Minimalist skincare e-commerce platform with theme preset switcher, subscription checkout flows, and automated customer marketing.',
      tags: ['React', 'Shopify API', 'Tailwind CSS', 'Admin Palette Controls'],
      metrics: '4.9/5 Rating (1,400+ Sales)',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#',
    },
    {
      id: 'veloce-motors',
      title: 'Veloce Luxury Fleet',
      category: 'Landing Pages',
      description: 'Automotive booking and showcase landing page with customizable neon color themes, instant booking calendar, and client portal.',
      tags: ['React', 'Custom UI Engine', 'Tailwind CSS', 'Dynamic Layouts'],
      metrics: '99.8% Client Satisfaction',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#',
    },
    {
      id: 'quantum-agency',
      title: 'Quantum Tech Portal',
      category: 'Web Apps',
      description: 'Enterprise agency web app featuring real-time client dashboards, project milestones tracker, and customizable white-label branding.',
      tags: ['React', 'Node.js', 'Custom Admin Suite', 'Tailwind CSS'],
      metrics: '&lt;0.8s Load Speed',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#',
    },
    {
      id: 'zenith-[#0A0A0A]',
      title: 'Zenith Real Estate Portal',
      category: 'Landing Pages',
      description: 'Luxury real estate showcase with 3D virtual tour integrations, lead capture modals, and multi-theme admin switcher.',
      tags: ['React', 'Interactive Maps', 'Tailwind CSS', 'Admin Theme Controls'],
      metrics: '+$4.2M Property Leads',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      demoUrl: '#',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectData
    : projectData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4FF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-semibold uppercase tracking-wider text-[#D4FF00]">
            <Layers className="w-4 h-4" />
            <span>Featured Portfolio & Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Crafted for Impact. <br />
            <span className="text-[#D4FF00]">Customizable by Design.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#7A7A7A] leading-relaxed">
            Explore our featured e-commerce platforms and high-converting landing pages. Every website we build includes customizable admin controls for themes, colors, and layout management.
          </p>
        </div>

        {/* Filter Tab Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#D4FF00] text-[#0A0A0A] shadow-lg shadow-[#D4FF00]/20'
                  : 'bg-[#1E1E1E] text-gray-300 border border-[#2A2A2A] hover:border-[#D4FF00]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#1E1E1E] border border-[#2A2A2A] overflow-hidden hover:border-[#D4FF00]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4FF00]/10 flex flex-col justify-between"
            >
              {/* Project Card Image & Badges */}
              <div className="relative h-60 overflow-hidden bg-[#141414]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#0A0A0A]/90 backdrop-blur-md border border-[#2A2A2A] text-xs font-bold text-[#D4FF00]">
                    {project.category}
                  </span>
                </div>

                {/* Metrics Highlight */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-[#0A0A0A]/90 backdrop-blur-md text-[11px] font-extrabold text-[#D4FF00] border border-[#D4FF00]/30">
                    {project.metrics}
                  </span>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#7A7A7A] mt-2.5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#0A0A0A] border border-[#2A2A2A] text-[10px] font-semibold text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Admin Customizer CTA */}
                  <div className="pt-4 border-t border-[#2A2A2A] flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#D4FF00] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider hover:bg-[#b8de00] transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      <Sliders className="w-4 h-4" />
                      <span>Admin Theme Studio</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Admin Customizer Modal */}
      {selectedProject && (
        <AdminCustomizerModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
