import React, { useState } from 'react';
import { Sliders, Images, Eye } from 'lucide-react';
import AdminCustomizerModal from './AdminCustomizerModal';
import ProjectAlbumModal from './ProjectAlbumModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [albumProject, setAlbumProject] = useState(null);

  const categories = ['All', 'Cosmetics', 'Cafes', 'Resort', 'Real Estate', 'Staycation', 'Restaurant'];

  const projectData = [
    {
      id: 'glow-cosmetics',
      title: 'Aura Glow Cosmetics',
      category: 'Cosmetics',
      description: 'High-converting luxury cosmetics & beauty storefront featuring dynamic product showcases, custom shade pickers, and instant checkout.',
      tags: ['React', 'Cosmetics Engine', 'Tailwind CSS'],
      metrics: '4 Web UI Screenshots',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    {
      id: 'artisanal-cafe',
      title: 'Artisanal Coffee & Roastery',
      category: 'Cafes',
      description: 'Modern specialty cafe web application with interactive drink menus, online ordering, table reservations, and customizable aesthetic themes.',
      tags: ['React', 'Cafe Ordering UI', 'Tailwind CSS'],
      metrics: '4 Web UI Screenshots',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    {
      id: 'serenity-resort',
      title: 'Serenity Luxury Island Resort',
      category: 'Resort',
      description: 'Exclusive beachfront resort booking platform with interactive room customization, virtual tours, and guest concierge portal.',
      tags: ['React', 'Resort Booking Engine', 'Tailwind CSS'],
      metrics: '4 Web UI Screenshots',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    {
      id: 'haven-real-estate',
      title: 'Haven Prime Real Estate',
      category: 'Real Estate',
      description: 'Premium architectural & property listing portal with dynamic filter search, high-res gallery showcases, and agent scheduling.',
      tags: ['Next.js', 'Property Portal', 'Tailwind CSS'],
      metrics: '4 Web UI Screenshots',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    {
      id: 'urban-staycation',
      title: 'Urban Condotel & Staycation',
      category: 'Staycation',
      description: 'Boutique staycation & condotel rental platform featuring real-time room availability, instant booking system, and admin pricing tools.',
      tags: ['React', 'Condotel Engine', 'Tailwind CSS'],
      metrics: '4 Web UI Screenshots',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    {
      id: 'bistro-culinaire',
      title: 'Le Bistro Fine Dining Restaurant',
      category: 'Restaurant',
      description: 'Upscale restaurant experience with digital chef menus, online table reservation engine, and customizable seasonal promo banners.',
      tags: ['React', 'Restaurant Tech', 'Tailwind CSS'],
      metrics: '4 Web UI Screenshots',
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      ],
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000000] tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Category Filter Tabs */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group space-y-4 rounded-none bg-[#F2F2F2] border border-[#E5E5E5] p-6 hover:border-[#B7E200] transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              {/* Image Preview Container (Clickable for Album) */}
              <div
                onClick={() => setAlbumProject(project)}
                className="relative h-56 rounded-none overflow-hidden bg-white cursor-pointer group/img"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
                
                {/* Category Badge & Gallery Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-none bg-white text-[11px] font-bold text-[#000000] border border-[#E5E5E5]">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay Hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-white text-[#000000] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                    <Images className="w-4 h-4 text-[#B7E200]" />
                    <span>View Album ({project.gallery.length})</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <h3 className="text-xl font-bold text-[#000000] group-hover:text-[#111111] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons: View Album & Admin Studio */}
              <div className="pt-4 border-t border-[#E5E5E5] grid grid-cols-2 gap-2">
                <button
                  onClick={() => setAlbumProject(project)}
                  className="py-2.5 px-3 rounded-none bg-[#000000] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B7E200] hover:text-[#000000] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Album</span>
                </button>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="py-2.5 px-3 rounded-none bg-[#B7E200] text-[#000000] text-xs font-bold uppercase tracking-wider hover:bg-[#a2c900] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Admin Studio</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Album Lightbox Modal */}
      {albumProject && (
        <ProjectAlbumModal
          project={albumProject}
          onClose={() => setAlbumProject(null)}
          onOpenAdminStudio={(p) => setSelectedProject(p)}
        />
      )}

      {/* Admin Theme Customizer Modal */}
      {selectedProject && (
        <AdminCustomizerModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
