import React from 'react';

export default function Footer({ onNavClick }) {
  const FacebookIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const TikTokIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12.525 0h3.08c.12 1.348.67 2.453 1.65 3.313 1 .86 2.21 1.31 3.63 1.35v3.13c-1.39-.06-2.61-.43-3.66-1.11v7.62c0 1.95-.59 3.55-1.77 4.81-1.18 1.26-2.71 1.89-4.59 1.89-1.92 0-3.51-.66-4.77-1.98-1.26-1.32-1.89-2.94-1.89-4.86 0-1.94.63-3.56 1.89-4.86 1.26-1.3 2.85-1.95 4.77-1.95.42 0 .84.04 1.26.12v3.21c-.38-.11-.74-.17-1.08-.17-.96 0-1.74.32-2.34.96-.6.64-.9 1.46-.9 2.46 0 1 .3 1.82.9 2.46.6.64 1.38.96 2.34.96.94 0 1.72-.31 2.34-.93.62-.62.93-1.43.93-2.43V0z"/>
    </svg>
  );

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FacebookIcon,
      href: 'https://www.facebook.com/profile.php?id=100079053657257',
      tooltip: 'Follow us on Facebook',
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      href: 'https://www.instagram.com/webuildweb.official?igsh=eDl3ejk4NDF0cGNx&utm_source=qr',
      tooltip: 'Follow us on Instagram',
    },
    {
      name: 'TikTok',
      icon: TikTokIcon,
      href: 'https://www.tiktok.com/@webuildweb.official?_r=1&_t=ZS-98qTmadLi6f',
      tooltip: 'Watch us on TikTok',
    },
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
                    className="p-3 rounded-none bg-[#F2F2F2] border border-[#E5E5E5] text-[#000000] hover:bg-[#B7E200] hover:text-[#000000] transition-all duration-300 shadow-sm group relative"
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
