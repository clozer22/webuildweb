import React, { useState } from 'react';

export default function ProjectsMinimal() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cosmetics', 'Cafes', 'Resort', 'Real Estate', 'Staycation', 'Restaurant'];

  const projectData = [
    {
      id: 'glow-cosmetics',
      title: 'Aura Glow Cosmetics',
      category: 'Cosmetics',
      description: 'High-converting luxury cosmetics & beauty storefront featuring dynamic product showcases, custom shade pickers, and instant checkout.',
      tags: ['React', 'Cosmetics Engine', 'Tailwind CSS'],
      image: '/assets/projects/cosmetics-landing.jpg',
    },
    {
      id: 'artisanal-cafe',
      title: 'Artisanal Coffee & Roastery',
      category: 'Cafes',
      description: 'Modern specialty cafe web application with interactive drink menus, online ordering, table reservations, and customizable aesthetic themes.',
      tags: ['React', 'Cafe Ordering UI', 'Tailwind CSS'],
      image: '/assets/projects/cafe-landing.jpg',
    },
    {
      id: 'serenity-resort',
      title: 'Serenity Luxury Island Resort',
      category: 'Resort',
      description: 'Exclusive beachfront resort booking platform with interactive room customization, virtual tours, and guest concierge portal.',
      tags: ['React', 'Resort Booking Engine', 'Tailwind CSS'],
      image: '/assets/projects/resort-landing.jpg',
    },
    {
      id: 'haven-real-estate',
      title: 'Haven Prime Real Estate',
      category: 'Real Estate',
      description: 'Premium architectural & property listing portal with dynamic filter search, high-res gallery showcases, and agent scheduling.',
      tags: ['Next.js', 'Property Portal', 'Tailwind CSS'],
      image: '/assets/projects/real-estate-landing.jpg',
    },
    {
      id: 'urban-staycation',
      title: 'Urban Condotel & Staycation',
      category: 'Staycation',
      description: 'Boutique staycation & condotel rental platform featuring real-time room availability, instant booking system, and admin pricing tools.',
      tags: ['React', 'Condotel Engine', 'Tailwind CSS'],
      image: '/assets/projects/staycation-landing.jpg',
    },
    {
      id: 'bistro-culinaire',
      title: 'Le Bistro Fine Dining Restaurant',
      category: 'Restaurant',
      description: 'Upscale restaurant experience with digital chef menus, online table reservation engine, and customizable seasonal promo banners.',
      tags: ['React', 'Restaurant Tech', 'Tailwind CSS'],
      image: '/assets/projects/restaurant-landing.jpg',
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
              {/* Image Card Container */}
              <div className="relative h-60 rounded-none overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-none bg-white/95 text-[11px] font-bold text-[#000000] border border-[#E5E5E5] backdrop-blur-sm shadow-sm">
                    {project.category}
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

              {/* Tags */}
              <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-white border border-[#E5E5E5] text-[10px] font-semibold text-[#111111]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
