import React, { useState } from 'react';
import { Mail, ChevronUp, ChevronDown, Target, Zap, Code, ShieldCheck } from 'lucide-react';

export default function AboutUs() {
  const [expandedFounder, setExpandedFounder] = useState(null);

  const founders = [
    {
      id: 'mark',
      number: '01',
      name: 'Mark Diez Aballe',
      role: 'Co-Founder & Chief Technology Officer',
      shortRole: 'FULL-STACK SYSTEMS ARCHITECT & SENIOR SOFTWARE ENGINEER',
      image: '/assets/mark-aballe.jpg',
      bio: `Mark leads the technology and engineering strategy at WeBuildWeb, transforming complex business requirements into high-performance, scalable, and reliable digital solutions. With deep expertise in full-stack development and systems architecture, he oversees the design and development of the technologies that power our clients’ digital businesses.

From ultra-fast web architectures to custom administrative systems and business automation, Mark ensures every solution we build is engineered for performance, security, scalability, and long-term growth.`,
      skills: ['Full-Stack Systems', 'API & Database Architecture', 'Custom Admin Engines', 'Performance & Security'],
      email: 'markjosephaballe1@gmail.com',
    },
    {
      id: 'yzelle',
      number: '02',
      name: 'Yzelle Lim',
      role: 'Co-Founder & Chief Creative Officer',
      shortRole: 'PRODUCT DESIGNER & VISUAL SYSTEMS SPECIALIST',
      image: '/assets/yzelle-lim.jpg',
      bio: `Yzelle leads the creative and design direction at WeBuildWeb, combining strategic design, user experience, and brand storytelling to create digital experiences that are both visually compelling and built to perform.

She specializes in UI/UX design, custom visual systems, and brand identity, crafting cohesive digital experiences that strengthen brand credibility, engage audiences, and turn visitors into customers.

Through a balance of creativity and strategy, Yzelle ensures every WeBuildWeb project looks distinctive, feels intuitive, and communicates the value of our clients’ businesses with clarity and impact.`,
      skills: ['UI/UX Engineering', 'Brand Storytelling', 'Visual Systems', 'Conversion Design'],
      email: 'auraofficialph@gmail.com',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F2F2F2] text-[#000000] relative border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E5E5]">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000000] tracking-tight">
              Founders &amp; Business Partners
            </h2>
          </div>
          <p className="text-sm text-[#6B6B6B] max-w-md mt-4 md:mt-0 font-medium leading-relaxed">
            Combining software engineering precision with high-converting visual design.
          </p>
        </div>

        {/* Minimalist Founders Grid in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {founders.map((founder) => {
            const isExpanded = expandedFounder === founder.id;
            return (
              <div key={founder.id} className="group space-y-6">
                
                {/* Minimal Top Header Tag */}
                <div className="flex items-start justify-between pt-2 border-t border-[#E5E5E5] group-hover:border-[#B7E200] transition-colors">
                  <div>
                    <div className="text-[10px] font-mono text-[#111111] font-bold uppercase tracking-wider">{founder.shortRole}</div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000000] tracking-tight mt-1 group-hover:text-[#111111] transition-colors">
                      {founder.name}
                    </h3>
                  </div>

                  <a
                    href={`mailto:${founder.email}`}
                    className="p-2.5 rounded-none bg-white border border-[#E5E5E5] text-[#000000] hover:bg-[#B7E200] transition-all shadow-sm shrink-0 ml-3"
                    aria-label={`Email ${founder.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                {/* Full Aspect Ratio Portrait Container - Light Theme */}
                <div className="relative rounded-none overflow-hidden bg-white border border-[#E5E5E5] group-hover:border-[#B7E200] transition-all duration-500 shadow-md h-[520px] sm:h-[600px] lg:h-[650px] w-full">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Minimalist Overlay Badge at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-none bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex items-center justify-between shadow-sm">
                    <span className="text-xs font-bold text-[#000000]">{founder.role}</span>
                    <button
                      onClick={() => setExpandedFounder(isExpanded ? null : founder.id)}
                      className="px-3 py-1.5 rounded-none bg-[#F2F2F2] hover:bg-[#B7E200] text-xs font-bold text-[#000000] transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Info' : 'Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Expandable Bio Drawer */}
                {isExpanded && (
                  <div className="p-6 rounded-none bg-white border border-[#E5E5E5] text-xs sm:text-sm text-[#6B6B6B] leading-relaxed space-y-4 shadow-sm animate-fadeIn">
                    <div className="whitespace-pre-line space-y-3">{founder.bio}</div>
                    
                    <div className="pt-2">
                      <div className="text-[11px] font-bold text-[#000000] uppercase tracking-wider mb-2">Core Focus</div>
                      <div className="flex flex-wrap gap-2">
                        {founder.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-none bg-[#F2F2F2] border border-[#E5E5E5] text-xs font-semibold text-[#111111]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#000000]">
                      <span>Direct Contact:</span>
                      <a href={`mailto:${founder.email}`} className="text-[#000000] font-bold hover:text-[#B7E200] underline">
                        {founder.email}
                      </a>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Business Mission Card */}
        <div className="p-8 sm:p-12 rounded-none bg-white border border-[#E5E5E5] shadow-md relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#000000]">
              <Target className="w-4 h-4 text-[#B7E200]" />
              <span>Our Story &amp; Mission</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] leading-snug">
              "We believe every business deserves a custom, high-converting digital storefront that they truly own and control."
            </h3>

            <p className="text-base text-[#6B6B6B] leading-relaxed">
              WeBuildWeb was born from a shared vision between Mark Diez Aballe and Yzelle Lim. Combining Mark's deep software architecture expertise with Yzelle's conversion-driven design philosophy, WeBuildWeb delivers end-to-end web applications, e-commerce platforms, and landing pages with custom admin controls so our clients never feel trapped by generic templates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#E5E5E5]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-none bg-[#B7E200]/20 text-[#000000] shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#000000]">Pixel Perfect</h4>
                  <p className="text-xs text-[#6B6B6B] mt-1">Impeccable attention to typography &amp; motion.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-none bg-[#B7E200]/20 text-[#000000] shrink-0 mt-0.5">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#000000]">Clean Codebase</h4>
                  <p className="text-xs text-[#6B6B6B] mt-1">Built with React, Vite &amp; Tailwind CSS.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-none bg-[#B7E200]/20 text-[#000000] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#000000]">Full Customization</h4>
                  <p className="text-xs text-[#6B6B6B] mt-1">Tailored admin controls for easy updates.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
