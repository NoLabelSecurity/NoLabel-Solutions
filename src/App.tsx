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
import { Menu, X, Globe, Phone, Mail, ArrowUpRight, HelpCircle, Terminal, ArrowUp, ShieldCheck, ChevronRight } from 'lucide-react';

// Import our views
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import ProjectsView from './components/ProjectsView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import LegalView from './components/LegalView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms' | 'cookies' | 'accessibility'>('privacy');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Auto-scroll to top on page switches to mimic a true multi-page framework
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string, targetId?: string) => {
    if (['privacy', 'terms', 'cookies', 'accessibility'].includes(page)) {
      setLegalTab(page as 'privacy' | 'terms' | 'cookies' | 'accessibility');
      setCurrentPage('legal');
    } else {
      setCurrentPage(page);
    }

    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

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
        return <HomeView onNavigate={handleNavigate} onSelectProject={handleSelectProjectFromHome} />;
      case 'services':
        return <ServicesView onNavigate={handleNavigate} />;
      case 'projects':
        return (
          <ProjectsView 
            onNavigate={handleNavigate} 
            selectedProjectId={selectedProjectId}
            onClearSelectedProject={() => setSelectedProjectId(null)}
          />
        );
      case 'about':
        return <AboutView onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactView onNavigate={handleNavigate} />;
      case 'legal':
        return <LegalView onNavigate={handleNavigate} initialTab={legalTab} />;
      default:
        return <HomeView onNavigate={handleNavigate} onSelectProject={handleSelectProjectFromHome} />;
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
      <footer className="bg-[#080C10] border-t border-[#161F2C] pt-16 pb-12 text-left relative z-10" id="global-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Column 1: Brand & Mission Info */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#121923] border border-[#1A2433] p-1.5 flex items-center justify-center shrink-0 shadow-inner">
                  <img 
                    src="https://github.com/NoLabelSecurity/NoLabel-Solutions/blob/content/media/NLS_Logo.png?raw=true" 
                    alt="No/Label Solutions Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="font-display font-bold text-lg tracking-tight text-white block">No/Label Solutions</span>
                  <span className="text-[10px] font-mono text-[#00D9FF] uppercase tracking-wider block">Web Engineering & Digital Presence</span>
                </div>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
                Engineering high-performance custom React websites, local SEO frameworks, and authentic digital identity systems for contractors, trades, and local businesses. Zero bloated page builders.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>AVAILABLE FOR NEW PROJECT BOOKINGS</span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]"></span>
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs font-mono text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        setCurrentPage(link.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group flex items-center gap-1.5 hover:text-[#00D9FF] cursor-pointer transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-[#00D9FF] transition-colors" />
                      <span>{link.label.toUpperCase()}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Core Capabilities */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Core Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-gray-400 font-sans font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#00D9FF] font-mono font-bold">•</span>
                  <span>Custom React & Vite Web Platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00D9FF] font-mono font-bold">•</span>
                  <span>Tactile Print & Brand Identity Guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00D9FF] font-mono font-bold">•</span>
                  <span>Local Map Coordinates & Schema SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00D9FF] font-mono font-bold">•</span>
                  <span>Contractor Estimators & Form Portals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00D9FF] font-mono font-bold">•</span>
                  <span>Automated Scheduling & Lead Workflows</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal & Standards */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider font-semibold flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D9FF]" />
                Legal & Governance
              </h4>
              <ul className="space-y-2 text-xs font-mono text-gray-400">
                <li>
                  <button onClick={() => handleNavigate('privacy')} className="group flex items-center gap-1.5 hover:text-[#00D9FF] cursor-pointer transition-colors">
                    <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-[#00D9FF] transition-colors" />
                    <span>PRIVACY POLICY</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('terms')} className="group flex items-center gap-1.5 hover:text-[#00D9FF] cursor-pointer transition-colors">
                    <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-[#00D9FF] transition-colors" />
                    <span>TERMS OF SERVICE</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('cookies')} className="group flex items-center gap-1.5 hover:text-[#00D9FF] cursor-pointer transition-colors">
                    <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-[#00D9FF] transition-colors" />
                    <span>COOKIE POLICY</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('accessibility')} className="group flex items-center gap-1.5 hover:text-[#00D9FF] cursor-pointer transition-colors">
                    <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-[#00D9FF] transition-colors" />
                    <span>ACCESSIBILITY STATEMENT</span>
                  </button>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="w-full sm:w-auto px-4 py-2.5 bg-[#121923] hover:bg-[#1A2433] border border-[#1A2433] hover:border-cyan-500/40 rounded-xl text-cyan-400 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center justify-between gap-2 transition-all cursor-pointer"
                >
                  <span>REQUEST PROPOSAL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00D9FF]" />
                </button>
              </div>
            </div>

          </div>

          {/* Sub-footer Bottom Bar */}
          <div className="pt-8 border-t border-[#121923] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <span>© 2026 NO/LABEL SOLUTIONS. ALL RIGHTS RESERVED.</span>
              <span className="hidden sm:inline text-gray-700">|</span>
              <span className="text-gray-400">ENGINEERED WITH REACT & TAILWIND</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[10px] bg-[#121923] text-gray-400 px-2.5 py-1 rounded border border-[#1A2433]">
                TLS 1.3 ENCRYPTED
              </span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-1.5 text-gray-400 hover:text-[#00D9FF] transition-colors cursor-pointer"
                title="Scroll to top"
              >
                <span className="text-[11px]">TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

