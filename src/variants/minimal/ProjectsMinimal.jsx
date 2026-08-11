import React, { useState } from 'react';
import { Sliders } from 'lucide-react';
import AdminCustomizerModal from '../../components/AdminCustomizerModal';

export default function ProjectsMinimal() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'E-Commerce', 'Landing Pages', 'Web Apps'];

  const projectData = [
    {
      id: 'nexus-ecommerce',
      title: 'Nexus Luxury E-Commerce',
      category: 'E-Commerce',
      description: 'High-end storefront featuring dynamic product customization, inventory management, instant checkout, and real-time sales admin analytics.',
      tags: ['React', 'E-Commerce Engine', 'Tailwind CSS'],
      metrics: '+185% Sales Conversion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'hypersaas-landing',
      title: 'HyperSaaS AI Platform',
      category: 'Landing Pages',
      description: 'Next-generation AI SaaS landing page built for maximum lead conversion with interactive pricing calculators and theme customizer.',
      tags: ['Next.js', 'Framer Motion', 'Custom Admin Panel'],
      metrics: '3.2k Monthly Leads',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'aura-beauty',
      title: 'Aura Skincare Store',
      category: 'E-Commerce',
      description: 'Minimalist skincare e-commerce platform with theme preset switcher, subscription checkout flows, and automated customer marketing.',
      tags: ['React', 'Shopify API', 'Tailwind CSS'],
      metrics: '4.9/5 Rating (1,400+ Sales)',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'veloce-motors',
      title: 'Veloce Luxury Fleet',
      category: 'Landing Pages',
      description: 'Automotive booking and showcase landing page with customizable color themes, instant booking calendar, and client portal.',
      tags: ['React', 'Custom UI Engine', 'Tailwind CSS'],
      metrics: '99.8% Client Satisfaction',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectData
    : projectData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white text-[#000000] relative border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E5E5E5]">
          <div>
            <div className="text-xs font-mono text-[#000000] font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B7E200]" />
              <span>+ SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000000] tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-none text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#B7E200] text-[#000000]'
                    : 'bg-[#F2F2F2] text-[#6B6B6B] border border-[#E5E5E5] hover:text-[#000000]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group space-y-4 rounded-none bg-[#F2F2F2] border border-[#E5E5E5] p-6 hover:border-[#B7E200] transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div className="relative h-64 rounded-none overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-none bg-white text-[11px] font-bold text-[#000000] border border-[#E5E5E5]">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-bold text-[#000000] group-hover:text-[#111111] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                <span className="text-xs font-bold text-[#000000]">{project.metrics}</span>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="py-2.5 px-4 rounded-none bg-[#B7E200] text-[#000000] text-xs font-extrabold uppercase tracking-wider hover:bg-[#a2c900] transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Admin Studio</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {selectedProject && (
        <AdminCustomizerModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
