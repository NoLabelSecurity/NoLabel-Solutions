/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Palette, Layers, CreditCard, Instagram, MapPin, QrCode, Cpu, ArrowRight, ShieldCheck, Zap, Smartphone, CheckCircle2, TrendingUp, Sparkles, Code, Search, Server, Wrench } from 'lucide-react';
import { SERVICES } from '../data';
import ImagePlaceholder from './ImagePlaceholder';
import Virtual3DCard from './Virtual3DCard';

interface ServicesViewProps {
  onNavigate: (page: string) => void;
}

const WEB_DEV_SHOWCASE_VIDEOS = [
  {
    id: 'web-engineering',
    title: 'Custom Web Application Development',
    tag: 'SMALL BUSINESS REACT ENGINE',
    url: 'https://cdn.pixabay.com/video/2020/05/25/40149-425232145_large.mp4',
    desc: 'Lightning-fast React & TypeScript builds engineered for local business conversions.'
  },
  {
    id: 'responsive-design',
    title: 'Mobile-First Responsive Layouts',
    tag: '100% SMARTPHONE OPTIMIZED',
    url: 'https://cdn.pixabay.com/video/2022/06/21/121470-724697516_large.mp4',
    desc: 'Seamless experience across iPhones, tablets, and desktop workstations.'
  },
  {
    id: 'local-seo-growth',
    title: 'Local SEO & Analytics Dashboard',
    tag: 'GOOGLE MAPS RANKING ENGINE',
    url: 'https://cdn.pixabay.com/video/2020/09/22/51616-465942484_large.mp4',
    desc: 'Turn regional searches into direct phone calls, bookings, and foot traffic.'
  }
];

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  const [activeServiceId, setActiveServiceId] = useState('web-dev');
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideoIdx((prev) => (prev + 1) % WEB_DEV_SHOWCASE_VIDEOS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

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

  // Dedicated inner subservices tailored for small businesses with animated background themes
  const subservicesList = [
    {
      id: 'small-biz',
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      badge: 'POPULAR FOR SMALL BIZ',
      title: 'Small Business Websites',
      desc: 'High-impact multipage platforms featuring instant booking systems, service catalogs, and direct customer contact funnels.',
      theme: 'cyan-pulse',
      features: ['Custom Service Booking', 'Mobile Call-to-Action', 'Google Reviews Integration']
    },
    {
      id: 'landing-pages',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      badge: 'HIGH CONVERSION',
      title: 'High-Converting Landing Pages',
      desc: 'Laser-focused, single-page designs optimized to convert ad campaigns and local search traffic into qualified inquiries.',
      theme: 'emerald-radar',
      features: ['Fast Lead Capture', 'A/B Test Ready Layouts', 'Clear Value Proposition']
    },
    {
      id: 'contractors',
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      badge: 'TRADES & SERVICES',
      title: 'Contractor & Trades Portals',
      desc: 'Interactive quote estimation tools, visual project portfolio galleries, and online scheduling for home services.',
      theme: 'amber-matrix',
      features: ['Instant Quote Calculator', 'Before/After Showcase', 'Customer Rating Widgets']
    },
    {
      id: 'redesign',
      icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
      badge: 'SPEED UPGRADE',
      title: 'Responsive Web Redesigns',
      desc: 'Modernize slow, outdated websites into ultra-fast React platforms with 98+ PageSpeed scores and zero downtime.',
      theme: 'indigo-shimmer',
      features: ['98+ PageSpeed Score', 'Fluid Mobile Layouts', 'Clean UI Modernization']
    },
    {
      id: 'seo-schema',
      icon: <Search className="w-5 h-5 text-purple-400" />,
      badge: 'LOCAL SEARCH RANK',
      title: 'Local SEO & Maps Engine',
      desc: 'Structured JSON-LD schema, local keyword targeting, and Google Maps optimization to rank #1 in your service area.',
      theme: 'purple-sweep',
      features: ['Google Maps Sync', 'Local Keyword Schema', 'Geo-Targeted Landing']
    },
    {
      id: 'hosting-security',
      icon: <Server className="w-5 h-5 text-[#00D9FF]" />,
      badge: 'MANAGED & SECURE',
      title: 'Cloud Edge Hosting & Support',
      desc: 'Zero-hassle global CDN hosting, automated SSL encryption, security monitoring, and rapid text/photo content updates.',
      theme: 'cyan-mesh',
      features: ['99.9% Uptime SLA', 'Automated Daily Backups', 'Managed Security Patches']
    }
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
            className="bg-[#121923] border border-[#1A2433] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden text-left transition-colors duration-300"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] pointer-events-none z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
              
              {/* Left Column: Description & Subservice Cards with Animated Backgrounds */}
              <div className="lg:col-span-7 space-y-8">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-cyan-500/10 rounded-xl text-[#00D9FF] border border-cyan-500/20 shadow-lg shadow-cyan-500/5">
                      <Globe className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-cyan-400 block uppercase tracking-widest font-semibold">
                        PRIMARY POWERHOUSE FOR SMALL BUSINESSES
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                        {mainService.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                    We build high-converting, custom web solutions tailored specifically to help small businesses, local service providers, and regional brands outshine corporate competitors. From mobile appointment scheduling to local SEO engineering, we create web experiences that turn visitors into paying customers.
                  </p>
                </div>

                {/* Performance Banner */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-[#0B0F14]/80 border border-cyan-500/20 rounded-2xl font-mono text-left relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 animate-pulse pointer-events-none" />
                  <div className="space-y-1 relative z-10">
                    <span className="text-gray-400 text-[9px] block uppercase font-semibold">SPEED RATING</span>
                    <span className="text-green-400 text-xs sm:text-sm font-bold block">98+ PageSpeed</span>
                  </div>
                  <div className="space-y-1 border-x border-[#1A2433] px-3 relative z-10">
                    <span className="text-gray-400 text-[9px] block uppercase font-semibold">TARGET AUDIENCE</span>
                    <span className="text-white text-xs sm:text-sm font-bold block">Small Business</span>
                  </div>
                  <div className="space-y-1 pl-3 relative z-10">
                    <span className="text-gray-400 text-[9px] block uppercase font-semibold">SEARCH MAPS</span>
                    <span className="text-[#00D9FF] text-xs sm:text-sm font-bold block">Local SEO Ready</span>
                  </div>
                </div>

                {/* INNER CONTAINERS WITH ANIMATED BACKGROUNDS DEPICING CONTENT */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Small Business Solutions & Inner Capabilities
                    </h3>
                    <span className="text-[10px] text-gray-500 font-mono">ANIMATED CONTENT PANELS</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {subservicesList.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ y: -3, scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className="relative overflow-hidden bg-[#0B0F14]/90 border border-[#1A2433] hover:border-cyan-500/40 p-4 rounded-2xl group transition-all duration-300 shadow-md flex flex-col justify-between"
                      >
                        {/* ANIMATED BACKGROUND ENGINE SPECIFIC TO CONTENT TYPE */}
                        {item.theme === 'cyan-pulse' && (
                          <motion.div 
                            animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-cyan-500/20 blur-2xl pointer-events-none z-0"
                          />
                        )}

                        {item.theme === 'emerald-radar' && (
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                            className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full border border-emerald-500/15 pointer-events-none z-0 flex items-center justify-center"
                          >
                            <div className="w-20 h-20 rounded-full border border-emerald-500/10" />
                            <div className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                          </motion.div>
                        )}

                        {item.theme === 'amber-matrix' && (
                          <motion.div 
                            animate={{ backgroundPosition: ['0px 0px', '20px 20px'] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 opacity-10 pointer-events-none z-0"
                            style={{
                              backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                              backgroundSize: '12px 12px'
                            }}
                          />
                        )}

                        {item.theme === 'indigo-shimmer' && (
                          <motion.div 
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent skew-x-12 pointer-events-none z-0"
                          />
                        )}

                        {item.theme === 'purple-sweep' && (
                          <motion.div 
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-purple-500/20 blur-xl pointer-events-none z-0"
                          />
                        )}

                        {item.theme === 'cyan-mesh' && (
                          <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none z-0"
                          />
                        )}

                        {/* Card Content Header */}
                        <div className="relative z-10 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="p-2 bg-[#121923] rounded-lg border border-[#1A2433] group-hover:border-cyan-500/30 transition-colors">
                              {item.icon}
                            </div>
                            <span className="text-[9px] font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                              {item.badge}
                            </span>
                          </div>

                          <h4 className="text-sm font-display font-semibold text-white group-hover:text-[#00D9FF] transition-colors pt-1">
                            {item.title}
                          </h4>
                          
                          <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        {/* Card Feature Bullet Pills */}
                        <div className="relative z-10 pt-3 mt-3 border-t border-[#1A2433]/70 space-y-1">
                          {item.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-1.5 text-[10px] text-gray-300 font-sans">
                              <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#0B0F14] font-display font-semibold rounded-xl text-sm transition-all focus:scale-98 cursor-pointer text-center shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                  >
                    <span>Start Small Business Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Free architectural wireframe included.</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Interactive Web Development Video Mockup Showcase */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Main Video Showcase Frame */}
                <div className="bg-[#0B0F14] border border-[#1A2433] rounded-3xl p-4 sm:p-5 relative overflow-hidden shadow-2xl group">
                  
                  {/* Top Header Bar for Video Selector */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-[10px] font-mono font-bold text-[#00D9FF] tracking-wider uppercase">
                        {WEB_DEV_SHOWCASE_VIDEOS[activeVideoIdx].tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {WEB_DEV_SHOWCASE_VIDEOS.map((vid, vIdx) => (
                        <button
                          key={vid.id}
                          onClick={() => setActiveVideoIdx(vIdx)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${activeVideoIdx === vIdx ? 'bg-[#00D9FF] w-6' : 'bg-gray-700 hover:bg-gray-500 w-2'}`}
                          title={vid.title}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Device Frame with Live Video Overlay */}
                  <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#070A0F] aspect-[16/10] sm:aspect-[16/10] shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.video
                        key={activeVideoIdx}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        src={WEB_DEV_SHOWCASE_VIDEOS[activeVideoIdx].url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {/* Gradient Overlay for Text Overlay Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Floating Video Info Card */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0B0F14]/90 backdrop-blur-md rounded-xl border border-cyan-500/30 text-left space-y-1 z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase">
                          {WEB_DEV_SHOWCASE_VIDEOS[activeVideoIdx].title}
                        </span>
                        <Code className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <p className="text-[11px] text-gray-300 font-light leading-snug">
                        {WEB_DEV_SHOWCASE_VIDEOS[activeVideoIdx].desc}
                      </p>
                    </div>
                  </div>

                  {/* Promo Callouts below Video */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-left">
                    <div className="p-3 bg-[#121923] border border-[#1A2433] rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                        <Zap className="w-3.5 h-3.5 text-yellow-400" />
                        <span>Instant Loading</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-light">
                        Built with React edge pipelines to reduce bounce rates.
                      </p>
                    </div>

                    <div className="p-3 bg-[#121923] border border-[#1A2433] rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Local Leads</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-light">
                        Designed to convert local Google search traffic.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Additional Small Business Promo Card */}
                <div className="bg-gradient-to-r from-cyan-950/30 via-[#121923] to-blue-950/30 border border-cyan-500/20 p-5 rounded-2xl text-left space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-sm font-display font-semibold text-white">Why Small Businesses Choose No/Label</h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-300 font-light">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      No ongoing website rental fees — you own 100% of your code.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Direct WhatsApp & Click-to-Call integrations built in.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Seamless expansion to e-commerce & online payments anytime.
                    </li>
                  </ul>
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
                <div className={`w-full ${service.id === 'brand-identity' || service.id === 'qr-solutions' || service.id === 'local-seo' ? 'sm:w-48' : 'sm:w-44'} flex-shrink-0 flex justify-center`}>
                  {service.id === 'brand-identity' && (
                    <div className="w-full transition-all duration-300 group-hover:scale-[1.03] flex items-center justify-center">
                      <img 
                        src="https://raw.githubusercontent.com/NoLabelSecurity/CONTENT/main/NoLabel-Solutions/imgs/Jacobs%20Fractal%20Burning%20Brand%20Board.png" 
                        alt="Jacobs Fractal Burning Brand Board"
                        className="w-full h-auto object-contain rounded-xl border border-[#1A2433] shadow-2xl bg-[#0B0F14]/20"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  {service.id === 'logo-design' && <ImagePlaceholder type="logo-showcase" title="Vector logo" className="scale-95" />}
                  {service.id === 'business-cards' && <ImagePlaceholder type="business-card" title="Vanguard Realty Cards" className="scale-95" />}
                  {service.id === 'social-media' && <ImagePlaceholder type="social-media" title="Instagram Grid" />}
                  {service.id === 'local-seo' && (
                    <div className="w-full transition-all duration-300 group-hover:scale-[1.03] flex items-center justify-center">
                      <video 
                        src="https://pixabay.com/videos/download/video-155163_medium.mp4" 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-contain rounded-xl border border-[#1A2433] shadow-2xl bg-[#0B0F14]/20"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
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
