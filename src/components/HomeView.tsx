/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Globe, Palette, Layers, CreditCard, Instagram, MapPin, QrCode, Cpu, ArrowRight, Star, ChevronRight } from 'lucide-react';
import { SERVICES, PROJECTS, TESTIMONIALS, STEPS } from '../data';
import ImagePlaceholder from './ImagePlaceholder';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onSelectProject: (projectId: string) => void;
}

export default function HomeView({ onNavigate, onSelectProject }: HomeViewProps) {
  // Find the principal service to highlight it on home page
  const mainService = SERVICES.find(s => s.id === 'web-dev');
  const otherServices = SERVICES.filter(s => s.id !== 'web-dev');

  // Interactive icon mapper for Lucide icons
  const getIcon = (name: string, className = "w-6 h-6 text-[#00D9FF]") => {
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

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* SECTION 1 — HERO */}
      <section className="relative pt-10 pb-8 sm:pt-16 sm:pb-12 md:pt-24 md:pb-20">
        {/* Subtle background glow element */}
        <div className="absolute top-1/4 -left-36 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-36 w-96 h-96 rounded-full bg-cyan-700/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Texts */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#121923] border border-[#1A2433] rounded-full text-xs font-mono text-[#00D9FF]"
                id="hero-badge"
              >
                <span>●</span> DIGITAL ARCHITECTURE FOR SMALL BUSINESSES
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]"
                id="hero-headline"
              >
                Professional Websites & <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Digital Solutions</span> <br />
                for Growing Businesses
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-400 max-w-xl font-sans font-light leading-relaxed"
                id="hero-subheadline"
              >
                Helping businesses build, launch, and grow through high-performance client websites, unified brand systems, and organic local online visibility.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
                id="hero-ctas"
              >
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#0B0F14] font-display font-medium rounded-lg shadow-lg hover:shadow-cyan-500/20 active:opacity-95 transition-all text-center cursor-pointer flex items-center justify-center gap-2 group"
                  id="hero-btn-quote"
                >
                  Request a Free Quote <span>→</span>
                </button>
                <button
                  onClick={() => onNavigate('projects')}
                  className="px-6 py-3.5 bg-[#121923] hover:bg-[#1A2433] border border-[#1A2433] hover:border-gray-500 text-white font-display font-medium rounded-lg transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                  id="hero-btn-work"
                >
                  View Agency Portfolio
                </button>
              </motion.div>

              {/* Floating UI highlights tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#1A2433]"
                id="hero-highlights-badges"
              >
                {[
                  { text: 'Custom Code', icon: <Cpu className="w-3.5 h-3.5 text-[#00D9FF]" /> },
                  { text: 'No Templates', icon: <Palette className="w-3.5 h-3.5 text-[#00D9FF]" /> },
                  { text: 'SEO Built-In', icon: <MapPin className="w-3.5 h-3.5 text-[#00D9FF]" /> },
                  { text: 'Fast Hosting', icon: <Globe className="w-3.5 h-3.5 text-[#00D9FF]" /> }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-[#121923]/40 border border-[#1A2433]/50 rounded text-xs text-gray-300 font-mono">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right mockup view */}
            <div className="lg:col-span-6 relative w-full flex items-center justify-center pt-8 lg:pt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full relative max-w-lg sm:max-w-xl md:max-w-2xl px-4"
              >
                {/* Simulated Floating widgets */}
                <div className="absolute -top-6 -left-6 bg-[#121923]/95 border border-[#1A2433] p-3 rounded-lg flex items-center gap-3 shadow-2xl z-40 float-animation max-w-[210px]">
                  <div className="w-8 h-8 rounded bg-[#00D9FF]/20 flex items-center justify-center text-[#00D9FF]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-medium text-white block">Website Design</h4>
                    <span className="text-[9px] font-mono text-cyan-400">100% Core Web Score</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-10 bg-[#121923]/95 border border-[#1A2433] p-3 rounded-lg flex items-center gap-3 shadow-2xl z-40 float-animation-delayed max-w-[190px]">
                  <div className="w-8 h-8 rounded bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-medium text-white block">Custom Branding</h4>
                    <span className="text-[9px] font-mono text-gray-400">Vector Guidelines</span>
                  </div>
                </div>

                {/* Main Interactive Grid representing the 3 requested Device Previews */}
                <div className="grid grid-cols-12 gap-4 items-end relative">
                  {/* Desktop Preview: Large 8 cols */}
                  <div className="col-span-9 relative z-20">
                    <ImagePlaceholder type="desktop" title="NoLabel Project Preview" className="shadow-2xl shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  {/* Mobile Preview: Floated 3 cols */}
                  <div className="col-span-3 relative z-30 -ml-8">
                    <ImagePlaceholder type="mobile" title="Custom App" className="shadow-2xl shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </div>

                {/* Sub-grid of tablet preview below to complete instructions */}
                <div className="mt-4 grid grid-cols-12 gap-4 relative z-10">
                  <div className="col-span-3" />
                  <div className="col-span-6">
                    <ImagePlaceholder type="tablet" title="Tablet Adaptive Design" className="opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-xl" />
                  </div>
                  {/* Extra floating analytics card */}
                  <div className="col-span-3 bg-[#121923]/80 border border-[#1A2433] p-3 rounded-xl flex flex-col justify-between font-mono text-left">
                    <span className="text-[8px] text-gray-500 uppercase">LOCAL SEO TARGET</span>
                    <span className="text-green-400 text-sm font-bold">+210% map views</span>
                    <span className="text-[7px] text-gray-400">Apex Plumbing Case</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICES OVERVIEW */}
      <section className="bg-gradient-to-b from-[#0B0F14] via-[#121923]/50 to-[#0B0F14] py-16 border-y border-[#1A2433]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider">What We Provide</span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">Our Digital Presence Services</h2>
            <p className="text-gray-400 text-sm sm:text-md">We design cohesive, high-performance packages specifically for local contractors, boutiques, and field services to build digital credibility.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Website Design - Large and Featured Card */}
            {mainService && (
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6, borderColor: 'rgba(0, 217, 255, 0.4)', boxShadow: '0 10px 30px -10px rgba(0, 217, 255, 0.1)' }}
                className="md:col-span-8 bg-gradient-to-br from-[#121923] to-[#1A2433] border border-[#1A2433] rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 relative shadow-xl overflow-hidden group text-left transition-colors duration-300"
                id="service-featured-card"
              >
                <div className="absolute right-0 top-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl group-hover:scale-125 transition-transform" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 text-[#00D9FF]">
                      {getIcon(mainService.iconName, 'w-8 h-8')}
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/10 rounded-full text-[10px] font-mono text-[#00D9FF] tracking-wider uppercase">PRIMARY FOCUS</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white max-w-md">{mainService.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xl">{mainService.shortDescription}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#1A2433]/80">
                    {mainService.features.map((feat, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="text-[#00D9FF]">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo(0, 0);
                    }}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-mono tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    LEARN ABOUT METHOD <span>→</span>
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('contact')}
                    className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-[#0B0F14] font-display font-semibold rounded-lg text-sm transition-colors text-center cursor-pointer shadow-md hover:shadow-cyan-400/25"
                  >
                    {mainService.ctaText}
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Accent helper column card to keep grid filled */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, borderColor: 'rgba(156, 163, 175, 0.3)' }}
              className="md:col-span-4 bg-[#121923] border border-[#1A2433] rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden group transition-colors duration-300"
            >
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-500/5 blur-xl group-hover:scale-125 transition-transform" />
              <div className="space-y-4 z-10">
                <span className="text-[10px] font-mono text-gray-500 uppercase">THE NOLABEL EDGE</span>
                <h4 className="text-xl font-display text-white">Why avoid mass templates?</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Cookie-cutter templates carry massive unneeded tracking scripts, heavy code layers, and look identical to your competitors. We write clean layouts from scratch which secures fast load times and guarantees high client trust.
                </p>
                <ul className="space-y-2 text-xs text-gray-400 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> +200% average load speed
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Proper local metadata standard
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Modular React code systems
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('about')}
                className="mt-6 text-xs text-gray-400 hover:text-white font-mono flex items-center gap-1 cursor-pointer"
              >
                ABOUT OUR AGENCY <span>→</span>
              </button>
            </motion.div>

            {/* Other Services Secondary Cards */}
            {otherServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, borderColor: 'rgba(0, 217, 255, 0.25)', boxShadow: '0 8px 24px -10px rgba(0, 217, 255, 0.05)' }}
                className="md:col-span-4 bg-[#121923] border border-[#1A2433] rounded-2xl p-6 flex flex-col justify-between gap-5 text-left relative overflow-hidden group transition-colors duration-300"
                id={`service-card-${service.id}`}
              >
                <div className="space-y-3">
                  <div className="p-2.5 bg-[#1A2433] w-fit rounded-lg text-[#00D9FF]">
                    {getIcon(service.iconName)}
                  </div>
                  <h4 className="text-lg font-display font-medium text-white group-hover:text-cyan-400 transition-colors">{service.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{service.shortDescription}</p>
                </div>

                <div className="pt-4 border-t border-[#1A2433] flex items-center justify-between mt-auto">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo(0, 0);
                    }}
                    className="text-[10px] font-mono tracking-wider text-gray-400 hover:text-cyan-400 flex items-center gap-1 cursor-pointer"
                  >
                    EXPLORE <span>→</span>
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-[10px] font-mono tracking-wider text-[#00D9FF] hover:text-white cursor-pointer"
                  >
                    GET QUOTE
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED PROJECT SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 text-left"
        >
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider">Showcase Grid</span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">Recent Client Deployments</h2>
            <p className="text-gray-400 text-sm max-w-xl">A selection of premium digital architectures built to launch local businesses onto page one and secure organic lead pipelines.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, x: 2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              onNavigate('projects');
              window.scrollTo(0, 0);
            }}
            className="px-5 py-3 bg-[#121923] hover:bg-[#1A2433] border border-[#1A2433] text-white font-display font-medium rounded-lg text-sm transition-all flex items-center gap-1 flex-shrink-0 cursor-pointer h-fit"
          >
            Browse All Case Studies <ChevronRight className="w-4 h-4 text-cyan-400" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* We will showcase the first 4 projects with beautiful mockups */}
          {PROJECTS.slice(0, 4).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8, borderColor: 'rgba(0, 217, 255, 0.4)', boxShadow: '0 12px 30px -10px rgba(0, 217, 255, 0.08)' }}
              onClick={() => onSelectProject(project.id)}
              className="bg-[#121923]/90 border border-[#1A2433] rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-6 cursor-pointer group transition-all duration-305 relative overflow-hidden"
              id={`featured-project-${project.id}`}
            >
              {/* Dynamic image mockup depending on category */}
              <div className="w-full relative overflow-hidden rounded-xl bg-[#0B0F14]/70 p-4 border border-[#1A2433]">
                {project.id === 'contractor-web' && <ImagePlaceholder type="desktop" title={project.title} />}
                {project.id === 'restaurant-brand' && <ImagePlaceholder type="branding-kit" title={project.title} />}
                {project.id === 'premium-cards' && <ImagePlaceholder type="business-card" title={project.title} />}
                {project.id === 'social-cohesion' && <ImagePlaceholder type="social-media" title={project.title} />}
                {project.id !== 'contractor-web' && project.id !== 'restaurant-brand' && project.id !== 'premium-cards' && project.id !== 'social-cohesion' && (
                  <ImagePlaceholder type="default" title={project.title} />
                )}
              </div>

              {/* Info section of featured project */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#1A2433] rounded-md text-[10px] font-mono text-cyan-400 tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">{project.year}</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-white group-hover:text-[#00D9FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Simulated Metrics Grid as requested! */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#1A2433] text-left">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="space-y-1">
                      <span className="text-gray-500 text-[8px] font-mono uppercase block">{metric.label}</span>
                      <span className="text-white text-xs sm:text-sm font-bold font-mono tracking-tight block text-[#00D9FF]">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-xs font-mono font-medium text-cyan-400 group-hover:text-white transition-colors gap-1 pt-2">
                READ CLIENT CASE STUDY <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section className="bg-[#121923]/40 border-y border-[#1A2433]/50 py-20 relative text-left">
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-cyan-900/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto space-y-4 mb-20"
          >
            <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider">Methodology Blueprint</span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">Our Five-Step Roadmap</h2>
            <p className="text-gray-400 text-sm">We take local services and companies from obscure map ranks to polished, automated frontrunners using an engineered approach.</p>
          </motion.div>

          {/* Timeline Style Layout */}
          <div className="relative border-l border-[#1A2433] ml-4 md:ml-12 md:max-w-4xl md:mx-auto space-y-12">
            {STEPS.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="relative pl-8 sm:pl-12 group" 
                id={`timeline-step-${step.number}`}
              >
                {/* Timeline Dot with step step level */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0B0F14] border border-[#1A2433] group-hover:border-cyan-400 text-[#00D9FF] group-hover:text-white flex items-center justify-center font-mono text-xs font-bold transition-all shadow-md">
                  {step.number}
                </div>

                <div className="space-y-2 bg-[#121923]/70 border border-[#1A2433]/70 group-hover:border-[#1A2433] p-5 sm:p-6 rounded-xl transition-colors">
                  <h3 className="text-lg sm:text-xl font-display font-medium text-white group-hover:text-[#00D9FF] transition-colors">{step.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — TESTIMONIAL PLACEHOLDERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-4 mb-16"
        >
          <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider">Client Validation</span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">Decisive Small Business Voices</h2>
          <p className="text-gray-400 text-sm">Read how local service providers transformed their visual standing and reservation pipelines directly.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, borderColor: 'rgba(0, 217, 255, 0.2)', boxShadow: '0 8px 30px -10px rgba(0, 217, 255, 0.05)' }}
              className="bg-[#121923] border border-[#1A2433] rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 relative transition-colors duration-300"
              id={`testimonial-card-${t.id}`}
            >
              <div className="absolute top-6 right-6 flex text-yellow-500 gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-xs sm:text-sm italic font-light leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#1A2433]/60">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-sm text-[#0B0F14] font-mono">
                  {t.avatarLetter}
                </div>
                <div>
                  <h4 className="text-xs font-display font-medium text-white">{t.name}</h4>
                  <span className="text-[10px] font-mono text-gray-500 block">
                    {t.role}, <span className="text-[#00D9FF]">{t.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-[#1A2433] bg-gradient-to-br from-[#121923] via-[#0B0F14] to-[#121923] p-8 sm:p-12 lg:p-16 overflow-hidden max-w-5xl mx-auto text-center space-y-8 shadow-2xl"
        >
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-2xl mx-auto z-10 relative">
            <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-widest block font-bold">LET'S SECURE YOUR CALENDAR</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Ready to Build Your Online Presence?
            </h2>
            <p className="text-gray-400 text-sm sm:text-md max-w-lg mx-auto font-light leading-relaxed">
              Skip the template headaches. Request a custom roadmap blueprint from our crew and grow organic leads natively.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 z-10 relative">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#0B0F14] font-display font-bold rounded-lg text-sm transition-all shadow-lg hover:shadow-cyan-500/20 cursor-pointer text-center"
              id="cta-primary-btn"
            >
              Get My Free Proposal System
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, borderColor: '#00D9FF' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                onNavigate('services');
                window.scrollTo(0,0);
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#121923]/90 hover:bg-[#1A2433] border border-[#1A2433] text-white font-display font-medium rounded-lg text-sm transition-all cursor-pointer text-center"
            >
              Explore Our Services
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
