/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Activity, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import ImagePlaceholder from './ImagePlaceholder';

// Flashpoint Solutions Branded Components
function FlashpointHouseIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chimney */}
      <path d="M66 22V10H74V28" stroke="#1B75BC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Main Roof Triangle */}
      <path d="M12 40L50 10L88 40" stroke="#1B75BC" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Roof horizontal base */}
      <path d="M18 40H82" stroke="#1B75BC" strokeWidth="5.5" strokeLinecap="round" />
      {/* Circular Window with Green Crosshair */}
      <circle cx="50" cy="27" r="9.5" stroke="#22C55E" strokeWidth="4" fill="none" />
      {/* Window Crosshair quadrants */}
      <path d="M50 17.5V36.5" stroke="#22C55E" strokeWidth="2.5" />
      <path d="M40.5 27H59.5" stroke="#22C55E" strokeWidth="2.5" />
    </svg>
  );
}

function FlashpointFullLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <FlashpointHouseIcon className="w-28 h-14 -ml-2.5" />
      <div className="text-left select-none mt-1">
        <span className="text-2xl sm:text-3xl font-sans font-black tracking-tight text-[#1B75BC] block leading-none">
          Flashpoint
        </span>
        <span className="text-sm sm:text-md font-sans font-bold tracking-widest text-[#22C55E] block leading-none mt-1">
          SOLUTIONS LLC
        </span>
      </div>
    </div>
  );
}

interface ProjectsViewProps {
  onNavigate: (page: string) => void;
  selectedProjectId: string | null;
  onClearSelectedProject: () => void;
}

export default function ProjectsView({ onNavigate, selectedProjectId, onClearSelectedProject }: ProjectsViewProps) {
  const [filter, setFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Link selectedProjectId from parent navigation (e.g., if clicked on homepage)
  useEffect(() => {
    if (selectedProjectId) {
      const proj = PROJECTS.find(p => p.id === selectedProjectId);
      if (proj) {
        setActiveModalProject(proj);
      }
    }
  }, [selectedProjectId]);

  const categories = ['All', 'Web Development', 'Branding', 'Print Design', 'Marketing', 'SEO'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const handleOpenProjectModal = (project: Project) => {
    setActiveModalProject(project);
  };

  const handleCloseProjectModal = () => {
    setActiveModalProject(null);
    onClearSelectedProject();
  };

  const getProjectLiveUrl = (id: string) => {
    switch (id) {
      case 'contractor-web':
        return 'https://wright-way-services.netlify.app/';
      case 'easys-welding':
        return 'https://easys-welding.netlify.app/';
      case 'flashpoint-web':
        return 'https://flashpoint-solutions.netlify.app/';
      default:
        return null;
    }
  };

  return (
    <div className="space-y-16 pb-20 text-left">
      {/* HEADER HERO */}
      <section className="relative pt-12 md:pt-16 pb-4">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-blue-900/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-[#00D9FF] bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
              Solutions Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-white tracking-tight" id="portfolio-title">
              Our Deployments & Engineered Works
            </h1>
            <p className="text-gray-400 text-sm sm:text-md font-light leading-relaxed">
              Explore how we translate business operations into digital assets. Click on any card below to launch the details lightbox and review performance values, client requirements, and responsive blueprints.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#1A2433] pb-6" id="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-wider transition-all duration-305 border rounded-lg cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500/15 to-blue-600/15 border-cyan-400 text-cyan-400 font-medium'
                  : 'bg-[#121923] border-[#1A2433] hover:border-gray-500 text-gray-400 hover:text-white'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS MASONRY/GRID LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, borderColor: 'rgba(0, 217, 255, 0.4)', boxShadow: '0 12px 30px -10px rgba(0, 217, 255, 0.08)' }}
                key={project.id}
                onClick={() => handleOpenProjectModal(project)}
                className="bg-[#121923] border border-[#1A2433] rounded-2xl p-5 cursor-pointer flex flex-col justify-between gap-5 group transition-colors duration-300"
                id={`project-grid-card-${project.id}`}
              >
                {/* Beautiful custom responsive wireframe illustration based on project categories */}
                <div className="w-full relative overflow-hidden">
                  {(project.id === 'contractor-web' || project.id === 'easys-welding' || project.id === 'flashpoint-web' || project.id === 'seo-optimized-growth') && (
                    <ImagePlaceholder type="desktop" title={project.title} />
                  )}
                  {project.id === 'premium-cards' && <ImagePlaceholder type="business-card" title={project.title} />}
                  {project.id === 'wright-way-cards' && <ImagePlaceholder type="business-card-portrait" title={project.title} />}
                  {project.id === 'nolabel-branding' && <ImagePlaceholder type="branding-board" title={project.title} />}
                  {project.id === 'easys-welding-branding' && <ImagePlaceholder type="branding-board-easys" title={project.title} />}
                  {project.id === 'flashpoint-branding' && <ImagePlaceholder type="branding-board-flashpoint" title={project.title} />}
                  {project.id === 'social-cohesion' && <ImagePlaceholder type="social-media" title={project.title} />}
                  {project.id === 'core-logo' && <ImagePlaceholder type="logo-showcase" title={project.title} />}
                  {project.id !== 'contractor-web' && 
                   project.id !== 'easys-welding' && 
                   project.id !== 'flashpoint-web' && 
                   project.id !== 'premium-cards' && 
                   project.id !== 'wright-way-cards' && 
                   project.id !== 'nolabel-branding' && 
                   project.id !== 'easys-welding-branding' && 
                   project.id !== 'flashpoint-branding' && 
                   project.id !== 'social-cohesion' && 
                   project.id !== 'core-logo' && 
                   project.id !== 'seo-optimized-growth' && (
                     <ImagePlaceholder type="default" title={project.title} />
                  )}
                </div>

                {/* Info and Tags */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded border border-cyan-500/20 text-[9px] font-mono tracking-wider text-cyan-400">
                      {project.category.toUpperCase()}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">{project.year}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-display font-medium text-white group-hover:text-[#00D9FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed mt-2 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Quantitative Mock Metrics placeholders */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#1A2433]/60">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-left">
                        <span className="text-gray-500 text-[7px] font-mono block tracking-tight uppercase leading-none">{metric.label}</span>
                        <span className="text-[#00D9FF] text-xs font-bold font-mono block mt-1 tracking-tight">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trigger button action simulated */}
                <div className="flex items-center text-[11px] font-mono text-gray-400 group-hover:text-cyan-400 transition-colors gap-1 pt-1 mt-auto">
                  EXPAND DEPLOYMENT SHEET <span>→</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* PORTFOLIO LIGHTBOX DETAILS MODAL */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B0F14]/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            id="portfolio-lightbox-modal"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121923] border border-[#1A2433] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 text-left"
            >
              {/* Close button absolute top */}
              <button
                onClick={handleCloseProjectModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#0B0F14] border border-[#1A2433] hover:border-gray-500 hover:bg-[#1A2433] text-gray-400 hover:text-white transition-all cursor-pointer"
                id="modal-close-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-8">
                {activeModalProject.id === 'core-logo' ? (
                  // Custom Flashpoint Solutions LLC Branding Layout
                  <>
                    {/* Categorical labels */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs font-mono text-green-400 tracking-wider font-semibold">
                        {activeModalProject.category.toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">CLIENT: {activeModalProject.client}</span>
                      <span className="text-xs text-gray-500 font-mono">● {activeModalProject.year}</span>
                    </div>

                    {/* Header Row: Big Flashpoint Logo Left, Description Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end pb-4 border-b border-[#1A2433]">
                      <div>
                        <FlashpointFullLogo />
                      </div>
                      <div className="md:text-right">
                        <p className="text-gray-400 text-sm sm:text-md leading-relaxed font-light max-w-md md:ml-auto">
                          {activeModalProject.description}
                        </p>
                      </div>
                    </div>

                    {/* Blueprint and deliverables columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0B0F14]/70 border border-[#1A2433] rounded-2xl p-4">
                      <div>
                        <span className="text-[9px] font-mono text-gray-500 block mb-3 uppercase tracking-wider font-semibold">OUTPUT WORKPIECE BLUEPRINT</span>
                        <ImagePlaceholder type="logo-showcase" title={activeModalProject.title} />
                      </div>

                      <div className="flex flex-col justify-between">
                        <div className="space-y-4">
                          <span className="text-[9px] font-mono text-gray-500 block uppercase tracking-wider font-semibold">Project Deliverables & Tech Tags</span>
                          
                          <div className="flex flex-wrap gap-2">
                            {activeModalProject.tags.map((tag, i) => (
                              <span key={i} className="px-2.5 py-1 bg-[#121923] border border-[#1A2433] rounded text-[10px] font-mono text-emerald-400">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="space-y-3 font-sans text-xs text-gray-400 leading-relaxed font-light">
                            <p className="text-gray-300 font-semibold font-sans">Brief summary:</p>
                            <p>{activeModalProject.longDescription}</p>
                          </div>
                        </div>

                        {/* Secondary statistics showing inside lightbox */}
                        <div className="pt-6 border-t border-[#1A2433] mt-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Activity className="w-4 h-4 text-emerald-400" />
                            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest font-semibold">Post-Deployment Metrics</span>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2">
                            {activeModalProject.metrics.map((met, i) => (
                              <div key={i} className="bg-[#121923] p-2.5 border border-[#1A2433] rounded-lg">
                                <span className="text-[7px] text-gray-500 block uppercase tracking-tight">{met.label}</span>
                                <span className="text-white text-xs sm:text-sm font-semibold tracking-tight block mt-1 font-mono">
                                  {met.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Responsive Scaling Guide Column spanning full width */}
                    <div className="border border-[#1A2433] bg-[#0E131F]/40 rounded-2xl p-5 space-y-4 text-left">
                      <div className="flex items-center gap-2 border-b border-[#1A2433] pb-2">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">RESPONSIVE SCALING GUIDE</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Truck */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-[9.5px] font-mono">
                            <span className="text-emerald-400 uppercase font-bold">Truck / Shipping Panel</span>
                            <span className="text-gray-500">48" - 96" Wide</span>
                          </div>
                          <div className="bg-[#0B0F14]/90 border border-[#1A2433] rounded-xl p-4 flex items-center justify-center min-h-[160px] relative overflow-hidden group">
                            <div className="w-full max-w-[200px] relative scale-95 group-hover:scale-100 transition-transform duration-300">
                              <svg viewBox="0 0 160 80" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="10" y1="65" x2="150" y2="65" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                                <rect x="35" y="15" width="95" height="40" rx="3" fill="#121923" stroke="#1A2433" strokeWidth="2" />
                                <path d="M15 40h20v22H19c-2.2 0-4-1.8-4-4V40z" fill="#1E293B" stroke="#1A2433" strokeWidth="2" />
                                <path d="M15 40l6-8h14v8H15z" fill="#0B0F14" stroke="#1A2433" strokeWidth="1.5" />
                                <path d="M22 62a6 6 0 0112 0h14a6 6 0 0112 0h22a6 6 0 0112 0h12" stroke="#1A2433" strokeWidth="2" />
                                <circle cx="28" cy="62" r="7" fill="#0B0F14" stroke="#334155" strokeWidth="2" />
                                <circle cx="28" cy="62" r="2.5" fill="#64748B" />
                                <circle cx="54" cy="62" r="7" fill="#0B0F14" stroke="#334155" strokeWidth="2" />
                                <circle cx="54" cy="62" r="2.5" fill="#64748B" />
                                <circle cx="106" cy="62" r="7" fill="#0B0F14" stroke="#334155" strokeWidth="2" />
                                <circle cx="106" cy="62" r="2.5" fill="#64748B" />
                                
                                <g transform="translate(62, 22) scale(0.24)">
                                  <path d="M12 40L50 10L88 40" stroke="#1B75BC" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M18 40H82" stroke="#1B75BC" strokeWidth="6" strokeLinecap="round" />
                                  <circle cx="50" cy="27" r="9.5" stroke="#22C55E" strokeWidth="5" />
                                  <path d="M50 17.5V36.5" stroke="#22C55E" strokeWidth="3.5" />
                                  <path d="M40.5 27H59.5" stroke="#22C55E" strokeWidth="3.5" />
                                  <text x="50" y="58" fill="#1B75BC" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Flashpoint</text>
                                  <text x="50" y="72" fill="#22C55E" fontSize="9" fontWeight="bold" letterSpacing="0.5" textAnchor="middle" fontFamily="sans-serif">SOLUTIONS LLC</text>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Shirts */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-[9.5px] font-mono">
                            <span className="text-emerald-400 uppercase font-bold">Uniform / Apparel</span>
                            <span className="text-gray-500">3" - 5" Wide</span>
                          </div>
                          <div className="bg-[#0B0F14]/90 border border-[#1A2433] rounded-xl p-4 flex items-center justify-center min-h-[160px] relative overflow-hidden group">
                            <div className="w-full max-w-[200px] relative scale-95 group-hover:scale-100 transition-transform duration-300">
                              <svg viewBox="0 0 160 80" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(25, 5) scale(0.85)" opacity="0.65">
                                  <path d="M10 20l20-8 15 15-5 12h-8v35H18V39h-8v-19z" fill="#0B0F14" stroke="#1A2433" strokeWidth="1.5" />
                                  <path d="M30 12l10 10-10 12-10-12 10-10z" fill="#1E293B" stroke="#1A2433" strokeWidth="1.5" />
                                </g>
                                <g transform="translate(60, 2)">
                                  <path d="M10 20l25-8 15 15-5 12h-10v35H20V39h-10v-19z" fill="#121923" stroke="#1A2433" strokeWidth="1.5" />
                                  <path d="M35 12l12 10-12 12-12-12 12-12z" fill="#0B0F14" stroke="#1A2433" strokeWidth="1.5" />
                                  <circle cx="35" cy="28" r="1.5" fill="#475569" />
                                  <circle cx="35" cy="33" r="1.5" fill="#475569" />
                                  
                                  <g transform="translate(18, 25) scale(0.11)">
                                    <path d="M12 40L50 10L88 40" stroke="#1B75BC" strokeWidth="8" />
                                    <path d="M18 40H82" stroke="#1B75BC" strokeWidth="8" />
                                    <circle cx="50" cy="27" r="9.5" stroke="#22C55E" strokeWidth="6" />
                                    <path d="M50 17.5V36.5" stroke="#22C55E" strokeWidth="4.5" />
                                    <path d="M40.5 27H59.5" stroke="#22C55E" strokeWidth="4.5" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Invoices */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-[9.5px] font-mono">
                            <span className="text-emerald-400 uppercase font-bold">Invoices / Digital Headers</span>
                            <span className="text-gray-500">150px - 600px Wide</span>
                          </div>
                          <div className="bg-[#0B0F14]/90 border border-[#1A2433] rounded-xl p-4 flex items-center justify-center min-h-[160px] relative overflow-hidden group">
                            <div className="w-full max-w-[200px] relative scale-95 group-hover:scale-100 transition-transform duration-300">
                              <div className="bg-[#121923] border border-[#1A2433] rounded-lg p-3 aspect-[1.5] w-full flex flex-col justify-between relative shadow-inner">
                                <div className="flex justify-between items-start">
                                  <div className="space-y-1">
                                    <div className="h-1.5 w-16 bg-gray-700 rounded-sm" />
                                    <div className="h-1.5 w-12 bg-gray-800 rounded-sm" />
                                    <div className="h-1 w-20 bg-gray-800/60 rounded-sm" />
                                  </div>
                                  <div className="scale-50 -mt-3 -mr-3">
                                    <FlashpointHouseIcon className="w-12 h-6" />
                                    <div className="text-[4px] font-bold text-[#1B75BC] leading-none text-center">Flashpoint</div>
                                    <div className="text-[3px] font-bold text-[#22C55E] leading-none text-center">SOLUTIONS LLC</div>
                                  </div>
                                </div>
                                <div className="space-y-1.5 py-2 border-t border-b border-[#1A2433]/60 my-1">
                                  <div className="flex justify-between items-center">
                                    <div className="h-1.5 w-24 bg-gray-800 rounded-sm" />
                                    <div className="h-1.5 w-6 bg-gray-700 rounded-sm" />
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="h-1.5 w-16 bg-gray-800 rounded-sm" />
                                    <div className="h-1.5 w-6 bg-gray-700 rounded-sm" />
                                  </div>
                                </div>
                                <div className="flex justify-between items-center mt-auto">
                                  <div className="h-1 w-12 bg-gray-800 rounded-sm" />
                                  <div className="h-2 w-8 bg-green-500/20 border border-green-500/40 rounded-sm" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // Standard default layout
                  <>
                    {/* Categorical labels */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-cyan-500/15 border border-cyan-500/30 rounded-full text-xs font-mono text-cyan-400 tracking-wider">
                        {activeModalProject.category.toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">CLIENT: {activeModalProject.client}</span>
                      <span className="text-xs text-gray-500 font-mono">● {activeModalProject.year}</span>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                        {activeModalProject.title}
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl font-light">
                        {activeModalProject.description}
                      </p>
                    </div>

                    {/* Simulated responsive visualization inside the modal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0B0F14]/70 border border-[#1A2433] rounded-2xl p-4">
                      <div>
                        <span className="text-[9px] font-mono text-gray-500 block mb-2 uppercase">OUTPUT WORKPIECE BLUEPRINT</span>
                        
                        {(activeModalProject.id === 'contractor-web' || activeModalProject.id === 'easys-welding' || activeModalProject.id === 'flashpoint-web' || activeModalProject.id === 'seo-optimized-growth') && (
                          <ImagePlaceholder type="desktop" title={activeModalProject.title} />
                        )}
                        {activeModalProject.id === 'premium-cards' && <ImagePlaceholder type="business-card" title={activeModalProject.title} />}
                        {activeModalProject.id === 'wright-way-cards' && <ImagePlaceholder type="business-card-portrait" title={activeModalProject.title} />}
                        {activeModalProject.id === 'nolabel-branding' && <ImagePlaceholder type="branding-board" title={activeModalProject.title} />}
                        {activeModalProject.id === 'easys-welding-branding' && <ImagePlaceholder type="branding-board-easys" title={activeModalProject.title} />}
                        {activeModalProject.id === 'flashpoint-branding' && <ImagePlaceholder type="branding-board-flashpoint" title={activeModalProject.title} />}
                        {activeModalProject.id === 'social-cohesion' && <ImagePlaceholder type="social-media" title={activeModalProject.title} />}
                        {activeModalProject.id === 'core-logo' && <ImagePlaceholder type="logo-showcase" title={activeModalProject.title} />}
                        {activeModalProject.id !== 'contractor-web' && 
                         activeModalProject.id !== 'easys-welding' && 
                         activeModalProject.id !== 'flashpoint-web' && 
                         activeModalProject.id !== 'premium-cards' && 
                         activeModalProject.id !== 'wright-way-cards' && 
                         activeModalProject.id !== 'nolabel-branding' && 
                         activeModalProject.id !== 'easys-welding-branding' && 
                         activeModalProject.id !== 'flashpoint-branding' && 
                         activeModalProject.id !== 'social-cohesion' && 
                         activeModalProject.id !== 'core-logo' && 
                         activeModalProject.id !== 'seo-optimized-growth' && (
                           <ImagePlaceholder type="default" title={activeModalProject.title} />
                        )}
                      </div>

                      <div className="flex flex-col justify-between">
                        <div className="space-y-4">
                          <span className="text-[9px] font-mono text-gray-500 block uppercase">Project Deliverables & Tech Tags</span>
                          
                          <div className="flex flex-wrap gap-2">
                            {activeModalProject.tags.map((tag, i) => (
                              <span key={i} className="px-2.5 py-1 bg-[#121923] border border-[#1A2433] rounded text-[10px] font-mono text-gray-300">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="space-y-3 font-sans text-xs text-gray-400 leading-relaxed font-light">
                            <p className="text-gray-300 font-normal">Brief summary:</p>
                            <p>{activeModalProject.longDescription}</p>
                          </div>
                        </div>

                        {/* Secondary statistics showing inside lightbox */}
                        <div className="pt-6 border-t border-[#1A2433] mt-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Activity className="w-4 h-4 text-green-400" />
                            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest font-semibold">Post-Deployment Metrics</span>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2">
                            {activeModalProject.metrics.map((met, i) => (
                              <div key={i} className="bg-[#121923] p-2.5 border border-[#1A2433] rounded-lg">
                                <span className="text-[7px] text-gray-500 block uppercase tracking-tight">{met.label}</span>
                                <span className="text-white text-xs sm:text-sm font-semibold tracking-tight text-white block mt-1">
                                  {met.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Footer buttons of lightbox modal */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-4 border-t border-[#1A2433]">
                  <div className="flex items-center gap-2 text-xs text-green-400 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>{activeModalProject.statusLine || "Deployment live & locked to global servers."}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 w-full sm:w-auto justify-end">
                    {getProjectLiveUrl(activeModalProject.id) && (
                      <a
                        href={getProjectLiveUrl(activeModalProject.id)!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#121923] border border-cyan-500/30 hover:border-[#00D9FF] text-[#00D9FF] hover:text-white rounded-lg text-xs font-display font-semibold transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        Visit Site <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={handleCloseProjectModal}
                      className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#0B0F14] border border-[#1A2433] hover:border-gray-500 text-gray-300 hover:text-white rounded-lg text-xs transition-colors text-center cursor-pointer"
                    >
                      Close Overlay
                    </button>
                    <button
                      onClick={() => {
                        handleCloseProjectModal();
                        onNavigate('contact');
                      }}
                      className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#00D9FF] hover:bg-cyan-400 text-black font-display font-semibold rounded-lg text-xs transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Request Similar Results 🚀
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
