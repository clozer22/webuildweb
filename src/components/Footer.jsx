import React from 'react';

export default function Footer({ onNavClick }) {
  const LinkedInIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const DribbbleIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.118 11.233c-.347-.097-3.468-.934-6.974-.356.611-1.579 1.134-3.208 1.492-4.372 3.125 1.258 5.163 3.447 5.482 4.728zm-6.911-5.945c-.407 1.272-.969 3.036-1.637 4.743-2.793-.787-5.836-1.109-8.497-1.077 1.229-2.072 3.329-3.565 5.823-3.882 1.542.001 3.018.32 4.311.216zm-11.45 4.545c2.936-.027 6.273.325 9.324 1.206-.215.589-.444 1.196-.688 1.815-3.818 1.189-7.854 1.705-11.026 1.734-.075-.515-.121-1.037-.121-1.569 0-1.133.209-2.221.511-3.186zm-.437 4.786c3.27-.01 7.425-.544 11.372-1.782.359.882.684 1.776.974 2.673-3.921 2.378-7.79 2.502-8.549 2.503-.687 0-2.316-.271-3.797-3.394zm5.097 4.601c.783.003 3.655-.078 7.397-2.359.508 1.34.908 2.65 1.182 3.829-2.073 1.144-4.464 1.796-7.009 1.796-1.554 0-3.04-.247-4.431-.72 1.095-1.282 2.115-2.28 2.861-2.546zm10.016 1.724c-.309-1.283-.736-2.687-1.287-4.12 3.284-.666 6.096.069 6.368.146-.381 1.636-1.895 3.023-3.69 3.974z"/>
    </svg>
  );

  const socialLinks = [
    { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com', tooltip: 'Connect on LinkedIn' },
    { name: 'GitHub', icon: GitHubIcon, href: 'https://github.com', tooltip: 'Explore Code Repositories' },
    { name: 'Twitter/X', icon: TwitterIcon, href: 'https://twitter.com', tooltip: 'Follow Updates' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com', tooltip: 'Behind The Scenes' },
    { name: 'Dribbble', icon: DribbbleIcon, href: 'https://dribbble.com', tooltip: 'Design Portfolios' },
  ];

  const quickLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Founders' },
    { id: 'projects', label: 'Our Projects' },
    { id: 'services', label: 'Capabilities' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-white text-[#000000] border-t border-[#E5E5E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/wbw-icon-transparent.png"
                alt="WeBuildWeb Logo Icon"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#6B6B6B] max-w-sm leading-relaxed font-medium">
              WeBuildWeb specializes in modern, high-converting websites, e-commerce storefronts, and customizable web applications engineered to accelerate business growth.
            </p>

            <div className="p-3 bg-[#F2F2F2] border border-[#E5E5E5] inline-flex items-center gap-2 text-xs font-bold text-[#000000] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#B7E200]" />
              <span>YOUR VISION. OUR CODE.</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#000000]">Sitemap Navigation</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="text-[#6B6B6B] hover:text-[#000000] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="text-[#B7E200] font-bold">&rsaquo;</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#000000]">Connect With Us</h4>
            
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-none bg-[#F2F2F2] border border-[#E5E5E5] text-[#000000] hover:bg-[#B7E200] transition-all duration-300 shadow-sm group relative"
                    title={social.tooltip}
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <div className="p-4 rounded-none bg-[#F2F2F2] border border-[#E5E5E5] text-xs text-[#6B6B6B]">
              <div className="font-bold text-[#000000] mb-1">Founders &amp; Leadership</div>
              <div>Mark Diez Aballe &bull; Yzelle Lim</div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B]">
          <div>
            &copy; {new Date().getFullYear()} WeBuildWeb (WBW). All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with precision by</span>
            <span className="text-[#000000] font-bold">Mark Diez Aballe</span>
            <span>&amp;</span>
            <span className="text-[#000000] font-bold">Yzelle Lim</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
