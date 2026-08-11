import React, { useState } from 'react';
import {
  Code,
  ShieldCheck,
  Zap,
  Target,
  Sparkles,
  Mail,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function AboutUs() {
  const [expandedFounder, setExpandedFounder] = useState(null);

  const founders = [
    {
      id: 'mark',
      number: '01',
      name: 'Mark Diez Aballe',
      role: 'Co-Founder & Chief Technology Officer',
      shortRole: 'CO-FOUNDER & CTO',
      image: '/assets/mark-aballe.jpg',
      bio: 'Fullstack Systems Architect & Senior Software Engineer. Mark leads technical strategy and engineering at WeBuildWeb, crafting ultra-fast web architectures and custom admin customization engines that power modern digital businesses.',
      skills: ['React & Next.js', 'Custom Admin Engines', 'API Architecture', 'Performance Optimization'],
      email: 'mark@webuildweb.com',
    },
    {
      id: 'yzelle',
      number: '02',
      name: 'Yzelle Lim',
      role: 'Co-Founder & Chief Creative Officer',
      shortRole: 'CO-FOUNDER & CCO',
      image: '/assets/yzelle-lim.jpg',
      bio: 'Product Designer & Visual Systems Specialist. Yzelle elevates client brands through high-converting UI/UX design, custom visual aesthetics, and brand identity systems that captivate audiences and maximize user engagement.',
      skills: ['UI/UX Engineering', 'Brand Strategy', 'Interactive Design', 'Conversion Systems'],
      email: 'yzelle@webuildweb.com',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#D4FF00]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#2A2A2A]">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#D4FF00] uppercase tracking-widest font-semibold flex items-center gap-2">
              <span>+ OUR LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Founders &amp; Business Partners
            </h2>
          </div>
          <p className="text-sm text-[#7A7A7A] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Combining software engineering precision with high-converting visual design to build custom web applications.
          </p>
        </div>

        {/* Minimalist Founders Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-24 items-start">
          {founders.map((founder) => {
            const isExpanded = expandedFounder === founder.id;
            return (
              <div
                key={founder.id}
                className="group flex flex-col space-y-6"
              >
                {/* Top Minimalist Header Tag */}
                <div className="flex items-start justify-between pt-2 border-t border-[#2A2A2A] group-hover:border-[#D4FF00] transition-colors duration-300">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#D4FF00] font-bold">[{founder.number}]</span>
                      <span className="text-xs font-mono tracking-widest text-[#7A7A7A] uppercase font-semibold">
                        {founder.shortRole}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#D4FF00] transition-colors">
                      {founder.name}
                    </h3>
                  </div>

                  <a
                    href={`mailto:${founder.email}`}
                    className="p-2.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-gray-400 hover:text-[#0A0A0A] hover:bg-[#D4FF00] hover:border-[#D4FF00] transition-all duration-300"
                    title={`Email ${founder.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                {/* Fixed Height Portrait Container */}
                <div className="relative rounded-3xl overflow-hidden bg-[#161616] border border-[#2A2A2A] group-hover:border-[#D4FF00]/40 transition-all duration-500 shadow-2xl h-[520px] sm:h-[600px] lg:h-[650px] w-full">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Minimalist Overlay Badge at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3.5 rounded-2xl bg-[#0A0A0A]/85 backdrop-blur-md border border-[#2A2A2A]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white">
                      <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
                      <span>{founder.role}</span>
                    </div>

                    <button
                      onClick={() => setExpandedFounder(isExpanded ? null : founder.id)}
                      className="px-3 py-1.5 rounded-xl bg-[#1E1E1E] hover:bg-[#D4FF00] hover:text-[#0A0A0A] text-xs font-semibold text-gray-300 transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Info' : 'Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Expandable Bio Drawer (Includes Skills Inside) */}
                {isExpanded && (
                  <div className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#2A2A2A] text-xs sm:text-sm text-[#7A7A7A] leading-relaxed space-y-4 animate-fadeIn">
                    <p>{founder.bio}</p>
                    
                    {/* Skills pills inside details modal */}
                    <div>
                      <div className="text-[11px] font-semibold text-white uppercase tracking-wider mb-2">Core Focus</div>
                      <div className="flex flex-wrap gap-2">
                        {founder.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md bg-[#0A0A0A] border border-[#2A2A2A] text-xs font-medium text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-white">
                      <span>Direct Contact:</span>
                      <a href={`mailto:${founder.email}`} className="text-[#D4FF00] hover:underline font-semibold">
                        {founder.email}
                      </a>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Business Story & Mission Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1E1E1E] border border-[#2A2A2A] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Sparkles className="w-48 h-48 text-[#D4FF00]" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4FF00]">
              <Target className="w-4 h-4" />
              <span>Our Story &amp; Mission</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              "We believe every business deserves a custom, high-converting digital storefront that they truly own and control."
            </h3>

            <p className="text-base text-[#7A7A7A] leading-relaxed">
              WeBuildWeb was born from a shared vision between Mark Diez Aballe and Yzelle Lim. Combining Mark's deep software architecture expertise with Yzelle's conversion-driven design philosophy, WeBuildWeb delivers end-to-end web applications, e-commerce platforms, and landing pages with custom admin controls so our clients never feel trapped by generic templates.
            </p>

            {/* Key Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#2A2A2A]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#D4FF00]/10 text-[#D4FF00] shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Pixel Perfect</h4>
                  <p className="text-xs text-[#7A7A7A] mt-1">Impeccable attention to typography &amp; motion.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#D4FF00]/10 text-[#D4FF00] shrink-0 mt-0.5">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Clean Codebase</h4>
                  <p className="text-xs text-[#7A7A7A] mt-1">Built with React, Vite &amp; Tailwind CSS.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#D4FF00]/10 text-[#D4FF00] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full Customization</h4>
                  <p className="text-xs text-[#7A7A7A] mt-1">Tailored admin controls for easy updates.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
