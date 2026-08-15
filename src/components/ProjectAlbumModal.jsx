import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sliders, Image as ImageIcon } from 'lucide-react';

export default function ProjectAlbumModal({ project, onClose, onOpenAdminStudio }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gallery = project?.gallery || [project?.image];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, gallery.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Container Box */}
      <div className="relative w-full max-w-5xl bg-white border border-[#E5E5E5] text-[#000000] rounded-none shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-[#E5E5E5] flex items-center justify-between bg-[#F2F2F2]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#B7E200] text-[#000000]">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6B6B]">
                {project.category} &bull; Screenshot Album ({currentIndex + 1} of {gallery.length})
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#000000] tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onOpenAdminStudio && (
              <button
                onClick={() => {
                  onClose();
                  onOpenAdminStudio(project);
                }}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-[#B7E200] text-[#000000] text-xs font-bold uppercase tracking-wider hover:bg-[#a2c900] transition-all cursor-pointer shadow-sm"
              >
                <Sliders className="w-4 h-4" />
                <span>Admin Studio</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2.5 bg-white border border-[#E5E5E5] text-[#000000] hover:bg-black hover:text-white transition-all cursor-pointer"
              aria-label="Close album"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Display Stage */}
        <div className="relative flex-1 bg-[#111111] min-h-[350px] sm:min-h-[450px] max-h-[550px] flex items-center justify-center p-2 sm:p-4 overflow-hidden select-none">
          <img
            src={gallery[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-[500px] object-contain transition-all duration-300 shadow-xl"
          />

          {/* Navigation Arrows */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 border border-[#E5E5E5] text-[#000000] hover:bg-[#B7E200] transition-all cursor-pointer shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 border border-[#E5E5E5] text-[#000000] hover:bg-[#B7E200] transition-all cursor-pointer shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Bar & Footer Description */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#E5E5E5] space-y-4">
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            {project.description}
          </p>

          {/* Thumbnails List */}
          {gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1 pt-2 border-t border-[#E5E5E5]">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-20 h-14 shrink-0 rounded-none overflow-hidden border-2 transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'border-[#B7E200] ring-2 ring-[#B7E200]/30 scale-105'
                      : 'border-[#E5E5E5] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Mobile Admin Studio Button */}
          {onOpenAdminStudio && (
            <div className="sm:hidden pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenAdminStudio(project);
                }}
                className="w-full py-3 bg-[#B7E200] text-[#000000] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4" />
                <span>Open Theme Admin Studio</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
