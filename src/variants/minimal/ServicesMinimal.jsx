import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesMinimal({ onSelectService }) {
  const services = [
    {
      num: '01',
      title: 'E-Commerce Storefronts',
      desc: 'High-converting online stores engineered with custom product managers, instant checkout, and inventory syncing.',
    },
    {
      num: '02',
      title: 'High-Converting Landing Pages',
      desc: 'Sub-second performance landing pages designed to capture leads and turn visitors into long-term clients.',
    },
    {
      num: '03',
      title: 'Admin Theme Customizer Engines',
      desc: 'Custom administrative panels empowering business owners to tweak colors, themes, and layout blocks effortlessly.',
    },
    {
      num: '04',
      title: 'Fullstack Web Applications',
      desc: 'Tailored web application architectures using React, Next.js, and scalable cloud APIs.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F2F2F2] text-[#000000] relative border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E5E5]">
          <div>
            <div className="text-xs font-mono text-[#000000] font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B7E200]" />
              <span>+ CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000000] tracking-tight">
              What We Build
            </h2>
          </div>
          <p className="text-sm text-[#6B6B6B] max-w-md mt-4 md:mt-0 font-medium leading-relaxed">
            End-to-end digital solutions tailored specifically to your business goals.
          </p>
        </div>

        {/* Minimalist 2-Column Editorial Services List in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((s) => (
            <div key={s.num} className="group pt-6 border-t border-[#E5E5E5] hover:border-[#B7E200] transition-colors space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#000000] font-bold">[{s.num}]</span>
                <button
                  onClick={() => onSelectService(s.title)}
                  className="text-[#6B6B6B] hover:text-[#000000] transition-colors flex items-center gap-1 cursor-pointer font-bold"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B7E200]" />
                </button>
              </div>
              <h3 className="text-xl font-bold text-[#000000] group-hover:text-[#111111] transition-colors">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
