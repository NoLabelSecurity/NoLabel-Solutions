/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Palette, Layers, CreditCard, Instagram, MapPin, QrCode, Cpu, ArrowRight, ShieldCheck, Zap, Cog, Smartphone } from 'lucide-react';
import { SERVICES } from '../data';
import ImagePlaceholder from './ImagePlaceholder';
import Virtual3DCard from './Virtual3DCard';

interface ServicesViewProps {
  onNavigate: (page: string) => void;
}

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  const [activeServiceId, setActiveServiceId] = useState('web-dev');

  const mainService = SERVICES.find(s => s.id === 'web-dev');
  const secondaryServices = SERVICES.filter(s => s.id !== 'web-dev');

  const getIcon = (name: string, className = "w-5 h-5 text-[#00D9FF]") => {
    switch (name) {
      case 'Globe': return <Globe className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'CreditCard': return <CreditCard className={className} />;
      case 'Instagram': return <Instagram className={className} />;
      case 'MapPin': return <MapPin className={className} />;
      case 'QrCode': return <QrCode className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      default: return <Globe className={className} />;
    }
  };

  // Dedicated features list for Website design core
  const websiteSubtypes = [
    { title: 'Small Business Websites', desc: 'Sleek multipage portfolios centered on service bookings and local target queries.' },
    { title: 'High-Converting Landing Pages', desc: 'Direct response layouts crafted cleanly to isolate action and capture prospects fast.' },
    { title: 'Contractor & Trades Portals', desc: 'Optimized quote engines, custom contact layers, and visual review boards.' },
    { title: 'Responsive Website Redesigns', desc: 'Take legacy, sluggish sites and port them to modern high-impact React frameworks.' },
    { title: 'Web Maintenance & Updates', desc: 'Ongoing optimization, security patching, and core text revisions on call.' },
    { title: 'Hosting & Domain Provisioning', desc: 'Zero-worry setup on global edge server pipelines with SSL protection.' },
    { title: 'Local SEO Integration', desc: 'Incorporate search metadata schema directly into static index files.' }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* HEADER HERO */}
      <section className="relative pt-12 md:pt-16 pb-4 text-left">
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-cyan-900/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <span className="text-xs font-mono text-[#00D9FF] bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Service Catalog
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-white tracking-tight leading-none" id="services-title">
              Our Core Digital Presence Capabilities
            </h1>
            <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
              We design custom visual systems and light, lightning-fast digital pipelines engineered to bolster offline authority and turn regional searches into recurring bookings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN FEATURE: WEBSITE DESIGN & DEVELOPMENT */}
      {mainService && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="web-dev-feature-block">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ borderColor: 'rgba(0, 217, 255, 0.3)', boxShadow: '0 12px 30px -10px rgba(0, 217, 255, 0.05)' }}
            className="bg-[#121923] border border-[#1A2433] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden text-left transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
              
              {/* Left explanation column */}
              <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-[#00D9FF] border border-cyan-500/20">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 block uppercase tracking-wider">PRIMARY POWERHOUSE</span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {mainService.title}
                    </h2>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-md leading-relaxed font-light">
                  {mainService.longDescription}
                </p>

                {/* Subservice checklist list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {websiteSubtypes.map((subtype, idx) => (
                    <div key={idx} className="bg-[#0B0F14]/40 border border-[#1A2433]/70 p-4 rounded-xl space-y-1.5 hover:border-gray-500 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">✓</span>
                        <h4 className="text-xs font-display font-medium text-white">{subtype.title}</h4>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-normal pl-4 font-light">{subtype.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Performance indicators */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-[#0B0F14]/65 border border-[#1A2433] rounded-xl font-mono text-left">
                  <div className="space-y-1">
                    <span className="text-gray-500 text-[8px] block uppercase">SPEED FACTOR</span>
                    <span className="text-green-400 text-xs sm:text-sm font-bold block">98+ PageSpeed</span>
                  </div>
                  <div className="space-y-1 border-x border-[#1A2433] px-3">
                    <span className="text-gray-500 text-[8px] block uppercase">COMPATIBILITY</span>
                    <span className="text-white text-xs sm:text-sm font-bold block">Mobile-First</span>
                  </div>
                  <div className="space-y-1 pl-3">
                    <span className="text-gray-500 text-[8px] block uppercase">SEO BLUEPRINT</span>
                    <span className="text-[#00D9FF] text-xs sm:text-sm font-bold block">Structured</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#0B0F14] font-display font-semibold rounded-lg text-sm transition-all focus:scale-98 cursor-pointer text-center"
                  >
                    Start Web Project
                  </motion.button>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span>Free blueprint included on consultation.</span>
                  </div>
                </div>
              </div>

              {/* Right Mockup Showcase column */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[10px] font-mono text-gray-500 block uppercase text-center lg:text-left">ADAPTIVE DEVICE PREVIEWS</span>
                
                <div className="space-y-4">
                  {/* High-Fidelity Laptop preview */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-[#0B0F14]/30 p-4 sm:p-6 rounded-2xl border border-[#1A2433] transition-all duration-300 flex items-center justify-center overflow-hidden relative group"
                    id="services-web-pc-mockup"
                    style={{ aspectRatio: '16/10' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src="https://raw.githubusercontent.com/NoLabelSecurity/CONTENT/main/NoLabel-Solutions/imgs/hero-pc.png" 
                      alt="NoLabel High-Fidelity Laptop Preview" 
                      className="w-full h-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* High-Fidelity Phone preview */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-[#0B0F14]/30 p-4 sm:p-6 rounded-2xl border border-[#1A2433] transition-all duration-300 flex items-center justify-center overflow-hidden relative group"
                    id="services-web-phone-mockup"
                    style={{ aspectRatio: '16/10' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src="https://raw.githubusercontent.com/NoLabelSecurity/CONTENT/main/NoLabel-Solutions/imgs/hero-phone.png" 
                      alt="NoLabel High-Fidelity Phone Preview" 
                      className="h-full w-auto object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>
              </div>

            </div>
          </motion.div>
        </section>
      )}

      {/* SECONDARY SERVICES SEPARATE PORTALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="border-t border-[#1A2433]/70 pt-16 mb-12"
        >
          <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider block mb-2">Extended Capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">Our Auxiliary Branding & Digital Services</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mt-1">Establishing high-quality visual footprints requires professional alignment across both paper margins and online grids.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, borderColor: 'rgba(0, 217, 255, 0.25)', boxShadow: '0 8px 24px -10px rgba(0, 217, 255, 0.04)' }}
              className="bg-[#121923] border border-[#1A2433] rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 transition-colors duration-300 group text-left"
              id={`services-page-card-${service.id}`}
            >
              <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
                
                {/* Information Text */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-[#1A2433] rounded text-[#00D9FF] group-hover:bg-cyan-500/10 transition-colors">
                      {getIcon(service.iconName, 'w-5 h-5')}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-white group-hover:text-[#00D9FF] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    {service.longDescription}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center gap-1.5 font-sans">
                        <span className="text-cyan-400 font-bold text-[10px]">✓</span> 
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Small preview block right aligned for large screens */}
                <div className={`w-full ${service.id === 'qr-solutions' ? 'sm:w-48' : 'sm:w-44'} flex-shrink-0 flex justify-center`}>
                  {service.id === 'brand-identity' && <ImagePlaceholder type="branding-kit" title="Colors" className="opacity-80 animate-fade" />}
                  {service.id === 'logo-design' && <ImagePlaceholder type="logo-showcase" title="Vector logo" className="scale-95" />}
                  {service.id === 'business-cards' && <ImagePlaceholder type="business-card" title="Vanguard Realty Cards" className="scale-95" />}
                  {service.id === 'social-media' && <ImagePlaceholder type="social-media" title="Instagram Grid" />}
                  {service.id === 'local-seo' && <ImagePlaceholder type="qr-showcase" title="SEO targeting" />}
                  {service.id === 'qr-solutions' && <Virtual3DCard />}
                  {service.id === 'automation' && <ImagePlaceholder type="tablet" title="Automated pipeline" className="opacity-80" />}
                </div>

              </div>

              {/* Card Footer actions */}
              <div className="border-t border-[#1A2433] pt-4 mt-auto flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">MAPPED VECTOR RESOURCE</span>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2 bg-[#1A2433] group-hover:bg-[#00D9FF] text-white group-hover:text-[#0B0F14] rounded-lg transition-all duration-300 font-display font-medium tracking-tight cursor-pointer"
                >
                  {service.ctaText} <span>→</span>
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS ADVERTISEMENT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 bg-gradient-to-br from-[#121923] to-[#0B0F14] border border-[#1A2433] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden"
        >
          <div className="space-y-3 max-w-xl z-10 relative">
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white">Need a dynamic, hybrid setup?</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              We package multiple services cleanly. Combine custom web development, unified logo marks, and local business map SEO targets for a robust, complete startup presence kit.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-display font-semibold rounded-lg text-sm transition-all shadow-lg cursor-pointer flex-shrink-0"
          >
            Create Your Bundled Blueprint
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
