/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Phone, Mail, ArrowUpRight, HelpCircle, Terminal } from 'lucide-react';

// Import our views
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import ProjectsView from './components/ProjectsView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Auto-scroll to top on page switches to mimic a true multi-page framework
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Handle homepage detail button triggers
  const handleSelectProjectFromHome = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage('projects');
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onNavigate={setCurrentPage} onSelectProject={handleSelectProjectFromHome} />;
      case 'services':
        return <ServicesView onNavigate={setCurrentPage} />;
      case 'projects':
        return (
          <ProjectsView 
            onNavigate={setCurrentPage} 
            selectedProjectId={selectedProjectId}
            onClearSelectedProject={() => setSelectedProjectId(null)}
          />
        );
      case 'about':
        return <AboutView onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactView onNavigate={setCurrentPage} />;
      default:
        return <HomeView onNavigate={setCurrentPage} onSelectProject={handleSelectProjectFromHome} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#ECEFEF] flex flex-col selection:bg-cyan-500/20 selection:text-[#00D9FF] relative font-sans">
      {/* BACKGROUND DECORATIVE ELEMENTS - Ambient clean details */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,#121923_0%,transparent_75%)] pointer-events-none" />
      
      {/* 1. STICKY GLASSMORPHISM NAVBAR */}
      <header className="sticky top-0 z-40 w-full bg-[#0B0F14]/75 backdrop-blur-md border-b border-[#121923]" id="global-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo */}
            <div 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2.5 cursor-pointer group"
              id="header-logo"
            >
              <div className="w-24 h-24 overflow-hidden flex items-center justify-center select-none group-hover:scale-105 transition-transform">
                <img 
                  src="https://github.com/NoLabelSecurity/NoLabel-Solutions/blob/content/media/NLS_Logo.png?raw=true" 
                  alt="No/Label Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left select-none">
                <span className="font-display font-bold text-xl tracking-tight text-white block">No/Label</span>
                <span className="text-[8px] font-mono tracking-widest text-[#00D9FF] -mt-1 block font-bold">SOLUTIONS</span>
              </div>
            </div>

            {/* Desktop Navigation Link Blocks */}
            <nav className="hidden md:flex items-center gap-8" id="desktop-links">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`text-xs font-mono tracking-wider hover:text-white transition-all cursor-pointer relative py-2 ${
                    currentPage === link.id ? 'text-[#00D9FF]' : 'text-gray-400'
                  }`}
                >
                  {link.label.toUpperCase()}
                  {currentPage === link.id && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Button Header Desktop */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-4 py-2 bg-gradient-to-r from-[#121923] to-[#1A2433] hover:from-cyan-500 hover:to-blue-600 border border-[#1A2433] hover:border-cyan-400 hover:text-[#0B0F14] text-white hover:text-black font-display font-medium text-xs rounded-lg transition-all duration-300 cursor-pointer shadow-md"
                id="header-cta-btn"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Hamburger toggle */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-white bg-[#121923] border border-[#1A2433] transition-all cursor-pointer"
                id="mobile-hamburger-toggle"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Collapsible Overlay Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden w-full bg-[#0B0F14]/95 border-b border-[#1A2433] overflow-hidden"
              id="mobile-drawer-overlay"
            >
              <div className="px-4 pt-4 pb-6 space-y-3 text-left">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setCurrentPage(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left py-3 px-4 rounded-lg font-mono text-xs tracking-wider transition-all cursor-pointer ${
                      currentPage === link.id 
                        ? 'bg-[#121923] text-cyan-400 border border-cyan-500/20' 
                        : 'text-gray-400 hover:text-white hover:bg-[#121923]/50'
                    }`}
                  >
                    {link.label.toUpperCase()}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-[#121923] px-4">
                  <button
                    onClick={() => {
                      setCurrentPage('contact');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#0B0F14] font-display font-medium text-center rounded-lg text-xs tracking-wider cursor-pointer font-bold block"
                  >
                    REQUEST A FREE QUOTE
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. MAIN ACTIVE VIEW DISPATCHER */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            id="main-view-wrapper"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. FOOTER COMPONENT */}
      <footer className="bg-[#0B0F14] border-t border-[#121923] pt-16 pb-12 text-left relative z-10" id="global-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Left info column */}
            <div className="md:col-span-5 space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://github.com/NoLabelSecurity/NoLabel-Solutions/blob/content/media/NLS_Logo.png?raw=true" 
                    alt="No/Label Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display font-bold text-lg tracking-tight text-white">No/Label Solutions</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
                No/Label Solutions is a small business web development, branding, and digital presence partner built strictly to help local contractors, builders, shops, and service groups establish authentic regional credibility. No bloated page builders.
              </p>
              
              <div className="text-[11px] font-mono text-gray-500 space-y-1">
                <p>NO/LABEL SOLUTIONS DIGITAL SYSTEMS</p>
                <p>© 2026 No/Label Solutions. All rights reserved.</p>
              </div>
            </div>

            {/* Services navigation links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-xs font-mono text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        setCurrentPage(link.id);
                        window.scrollTo(0,0);
                      }}
                      className="hover:text-[#00D9FF] cursor-pointer transition-colors"
                    >
                      {link.label.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core focus services columns */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider">Requested Core Deliverables</h4>
              <ul className="space-y-1.5 text-xs text-gray-400 font-sans font-light">
                <li>• Custom High-Speed React Web Design</li>
                <li>• Unified Vector Typography Mark Guides</li>
                <li>• Tactile Print Premium Business Cards</li>
                <li>• Local Map Coordinates & Metadata Targeting</li>
                <li>• Zero-Touch Scheduling Automation setup</li>
              </ul>

              <div className="pt-4 border-t border-[#121923] flex items-center gap-4 text-xs font-mono">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="text-cyan-400 hover:text-white uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  REQUEST WORKBOOK PROPOSAL <ArrowUpRight className="w-3.5 h-3.5 text-[#00D9FF]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

