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

  return (
    <div className="space-y-16 pb-20 text-left">
      {/* HEADER HERO */}
      <section className="relative pt-12 md:pt-16 pb-4">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-blue-900/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-[#00D9FF] bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
              Agency Case Studies
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
                  {project.id === 'contractor-web' && <ImagePlaceholder type="desktop" title={project.title} />}
                  {project.id === 'handyman-brand' && <ImagePlaceholder type="handyman-brand" title={project.title} />}
                  {project.id === 'premium-cards' && <ImagePlaceholder type="business-card" title={project.title} />}
                  {project.id === 'social-cohesion' && <ImagePlaceholder type="social-media" title={project.title} />}
                  {project.id === 'core-logo' && <ImagePlaceholder type="logo-showcase" title={project.title} />}
                  {project.id === 'landing-funnel' && <ImagePlaceholder type="desktop" title={project.title} />}
                  {project.id === 'seo-optimized-growth' && <ImagePlaceholder type="desktop" title={project.title} />}
                  {project.id !== 'contractor-web' && 
                   project.id !== 'handyman-brand' && 
                   project.id !== 'premium-cards' && 
                   project.id !== 'social-cohesion' && 
                   project.id !== 'core-logo' && 
                   project.id !== 'landing-funnel' && 
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
                    
                    {activeModalProject.id === 'contractor-web' && <ImagePlaceholder type="desktop" title={activeModalProject.title} />}
                    {activeModalProject.id === 'handyman-brand' && <ImagePlaceholder type="handyman-brand" title={activeModalProject.title} />}
                    {activeModalProject.id === 'premium-cards' && <ImagePlaceholder type="business-card" title={activeModalProject.title} />}
                    {activeModalProject.id === 'social-cohesion' && <ImagePlaceholder type="social-media" title={activeModalProject.title} />}
                    {activeModalProject.id === 'core-logo' && <ImagePlaceholder type="logo-showcase" title={activeModalProject.title} />}
                    {activeModalProject.id === 'landing-funnel' && <ImagePlaceholder type="desktop" title={activeModalProject.title} />}
                    {activeModalProject.id === 'seo-optimized-growth' && <ImagePlaceholder type="desktop" title={activeModalProject.title} />}
                    {activeModalProject.id !== 'contractor-web' && 
                     activeModalProject.id !== 'handyman-brand' && 
                     activeModalProject.id !== 'premium-cards' && 
                     activeModalProject.id !== 'social-cohesion' && 
                     activeModalProject.id !== 'core-logo' && 
                     activeModalProject.id !== 'landing-funnel' && 
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
                        <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Post-Deployment Metrics</span>
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

                {/* Footer buttons of lightbox modal */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-4 border-t border-[#1A2433]">
                  <div className="flex items-center gap-2 text-xs text-green-400 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>{activeModalProject.statusLine || "Deployment live & locked to global servers."}</span>
                  </div>
                  
                  <div className="flex gap-3 w-full sm:w-auto">
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
