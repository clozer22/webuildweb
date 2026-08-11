import React from 'react';
import {
  ShoppingBag,
  Zap,
  Sliders,
  Code2,
  Search,
  Wrench,
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const servicesList = [
    {
      icon: ShoppingBag,
      title: 'E-Commerce Platforms',
      description: 'Custom e-commerce storefronts engineered for high conversion, lightning-fast product search, inventory syncing, and secure payment checkout flows.',
      features: ['Custom Cart & Checkout', 'Inventory Admin Panel', 'Payment Gateways Integration', 'Mobile Optimized Catalog'],
    },
    {
      icon: Zap,
      title: 'High-Converting Landing Pages',
      description: 'Modern, high-impact landing pages built to capture leads, showcase products, and turn casual site visitors into paying clients.',
      features: ['Sub-second Load Times', 'A/B Test Ready Structures', 'Interactive Product Mockups', 'SEO & Analytics Setup'],
    },
    {
      icon: Sliders,
      title: 'Admin Theme Customization Suite',
      description: 'We equip every web application with a bespoke admin theme studio, giving you full control over primary color accents, light/dark modes, and layout blocks.',
      features: ['Live Theme Preset Selector', 'Header & Footer Styles Toggle', 'Banner & Promo Controller', 'Zero Code Needed for Clients'],
    },
    {
      icon: Code2,
      title: 'Fullstack Web Applications',
      description: 'Scalable custom web apps tailored to your unique business workflows using React, Node.js, and modern cloud database architecture.',
      features: ['Custom API Integration', 'Client Portals & Auth', 'Real-time Dashboards', 'Cloud Scalability'],
    },
    {
      icon: Search,
      title: 'SEO & Performance Tuning',
      description: 'Comprehensive Core Web Vitals optimization, organic Google SEO strategy, structured metadata, and accessibility compliance.',
      features: ['Google Lighthouse 95+ Score', 'Semantic HTML5 Structure', 'OpenGraph Social Media Cards', 'Continuous Performance Audits'],
    },
    {
      icon: Wrench,
      title: 'Maintenance & Continuous Support',
      description: 'Dedicated ongoing support, security updates, feature additions, and performance monitoring to keep your web business running smoothly 24/7.',
      features: ['24/7 Monitoring & Backups', 'Security Patch Management', 'Content & Asset Updates', 'Priority Engineering Support'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#D4FF00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-semibold uppercase tracking-wider text-[#D4FF00]">
            <Sparkles className="w-4 h-4" />
            <span>Our Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Web Solutions <br />
            <span className="text-[#D4FF00]">Built to Scale Your Business.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#7A7A7A] leading-relaxed">
            From bespoke e-commerce platforms to high-converting landing pages with custom admin controls, we provide complete end-to-end digital engineering.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl bg-[#1E1E1E] border border-[#2A2A2A] p-8 hover:border-[#D4FF00]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4FF00]/10 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Service Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A] flex items-center justify-center text-[#D4FF00] group-hover:bg-[#D4FF00] group-hover:text-[#0A0A0A] transition-all duration-300 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7A7A7A] mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features checklist */}
                  <div className="pt-4 border-t border-[#2A2A2A]/60 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF00] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action button */}
                <div className="pt-6 mt-6 border-t border-[#2A2A2A]">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 px-4 rounded-xl bg-[#0A0A0A] hover:bg-[#D4FF00] hover:text-[#0A0A0A] text-gray-300 border border-[#2A2A2A] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inquire Solution</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
