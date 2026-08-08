/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, Cookie, Eye, ArrowLeft, Lock, CheckCircle2, HelpCircle } from 'lucide-react';

interface LegalViewProps {
  onNavigate: (page: string) => void;
  initialTab?: 'privacy' | 'terms' | 'cookies' | 'accessibility';
}

export default function LegalView({ onNavigate, initialTab = 'privacy' }: LegalViewProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies' | 'accessibility'>(initialTab);

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: <Lock className="w-4 h-4" /> },
    { id: 'terms', label: 'Terms of Service', icon: <FileText className="w-4 h-4" /> },
    { id: 'cookies', label: 'Cookie Policy', icon: <Cookie className="w-4 h-4" /> },
    { id: 'accessibility', label: 'Accessibility Statement', icon: <Eye className="w-4 h-4" /> },
  ] as const;

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
      
      {/* Header Banner */}
      <div className="space-y-4 border-b border-[#1A2433] pb-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO HOME</span>
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#00D9FF] text-[10px] font-mono uppercase tracking-widest mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LEGAL & COMPLIANCE STANDARDS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Legal Policy & Production Standards
            </h1>
          </div>

          <span className="text-xs font-mono text-gray-400 bg-[#121923] px-3 py-1.5 rounded-lg border border-[#1A2433] self-start sm:self-auto">
            LAST REVISED: AUGUST 2026
          </span>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex flex-wrap gap-2 border-b border-[#1A2433] pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-[#0B0F14] font-bold shadow-lg shadow-cyan-500/10'
                : 'bg-[#121923] text-gray-400 hover:text-white hover:bg-[#1A2433]'
            }`}
          >
            {tab.icon}
            <span>{tab.label.toUpperCase()}</span>
          </button>
        ))}
      </div>

      {/* Main Legal Content Container */}
      <div className="bg-[#121923] border border-[#1A2433] rounded-3xl p-6 sm:p-10 text-gray-300 space-y-8 font-light leading-relaxed">
        
        {/* PRIVACY POLICY */}
        {activeTab === 'privacy' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
              <Lock className="w-6 h-6 text-[#00D9FF]" />
              Privacy Policy
            </h2>

            <p className="text-sm">
              At No/Label Solutions ("we", "our", or "us"), protecting your personal privacy is a fundamental operational standard. This Privacy Policy explains how we handle visitor information collected through our web development inquiry portals, contact forms, and online service estimators.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-base font-display font-semibold text-white">1. Information We Collect</h3>
              <p className="text-xs sm:text-sm">
                We only collect personal information that you voluntarily submit to us via our project inquiry forms. This may include your name, business name, phone number, email address, service preferences, and project scope details.
              </p>

              <h3 className="text-base font-display font-semibold text-white">2. How We Use Your Information</h3>
              <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1.5 text-gray-300">
                <li>Preparing custom web development estimates, design blueprints, and proposals.</li>
                <li>Communicating directly regarding requested branding or technical consulting services.</li>
                <li>Maintaining site security and validating form submissions against automated spam.</li>
                <li>We never sell, rent, or trade your personal contact details to third-party advertisers.</li>
              </ul>

              <h3 className="text-base font-display font-semibold text-white">3. Local Browser Storage</h3>
              <p className="text-xs sm:text-sm">
                Our application utilizes standard client-side storage (`localStorage`) solely to maintain site navigation states and user preferences within your session. No advertising tracking scripts or invasive cross-site identifiers are placed on your machine.
              </p>

              <h3 className="text-base font-display font-semibold text-white">4. Data Security & Encryption</h3>
              <p className="text-xs sm:text-sm">
                All data transmitted through No/Label Solutions is encrypted in transit using industry-standard Transport Layer Security (TLS 1.3 / SSL). Server pipelines are hosted on secure edge cloud infrastructure with automated security patches.
              </p>

              <h3 className="text-base font-display font-semibold text-white">5. Your Data Rights</h3>
              <p className="text-xs sm:text-sm">
                You have the right to request access to, correction of, or deletion of any contact information submitted to us. To exercise these rights, please contact our privacy compliance officer at <span className="text-[#00D9FF] font-mono">brianlorick1988@gmail.com</span>.
              </p>
            </div>
          </motion.div>
        )}

        {/* TERMS OF SERVICE */}
        {activeTab === 'terms' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#00D9FF]" />
              Terms of Service
            </h2>

            <p className="text-sm">
              By accessing or utilizing the No/Label Solutions website and web engineering services, you agree to comply with and be bound by the following production terms and conditions.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-base font-display font-semibold text-white">1. Scope of Digital Services</h3>
              <p className="text-xs sm:text-sm">
                No/Label Solutions provides custom React website engineering, responsive mobile design, local SEO schema optimization, brand strategy, and print collateral layout services for small businesses and contractors.
              </p>

              <h3 className="text-base font-display font-semibold text-white">2. Project Blueprints & Quotes</h3>
              <p className="text-xs sm:text-sm">
                Estimates and price quotes provided through our online calculators or workbook proposals represent non-binding preliminary project assessments until a formal statement of work (SOW) is executed by both parties.
              </p>

              <h3 className="text-base font-display font-semibold text-white">3. Intellectual Property Ownership</h3>
              <p className="text-xs sm:text-sm">
                Upon final payment for a completed project, clients receive 100% full ownership of custom code assets, design files, and brand marks created for their project. No ongoing website rental or code locking fees apply.
              </p>

              <h3 className="text-base font-display font-semibold text-white">4. Limitation of Liability</h3>
              <p className="text-xs sm:text-sm">
                No/Label Solutions shall not be liable for any indirect, incidental, or consequential damages arising from site interruptions, third-party domain registrar outages, or client-managed content modifications following project delivery.
              </p>
            </div>
          </motion.div>
        )}

        {/* COOKIE POLICY */}
        {activeTab === 'cookies' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
              <Cookie className="w-6 h-6 text-[#00D9FF]" />
              Cookie Policy
            </h2>

            <p className="text-sm">
              This Cookie Policy details how No/Label Solutions uses browser storage technologies to deliver a fast, reliable, and secure web experience.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-base font-display font-semibold text-white">1. Essential Technical Storage</h3>
              <p className="text-xs sm:text-sm">
                We use essential client storage (`localStorage` and session keys) strictly necessary to support core website functionality, such as remembering selected project filters and active navigation tabs.
              </p>

              <div className="p-4 bg-[#0B0F14] border border-[#1A2433] rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>NO THIRD-PARTY ADVERTISING COOKIES</span>
                </div>
                <p className="text-xs text-gray-400 font-light">
                  We do not embed third-party tracking pixels, remarketing tags, or invasive cross-site advertising identifiers.
                </p>
              </div>

              <h3 className="text-base font-display font-semibold text-white">2. Managing Browser Storage</h3>
              <p className="text-xs sm:text-sm">
                You can clear or disable client storage at any time through your browser settings. Note that clearing storage may reset temporary site preferences during your session.
              </p>
            </div>
          </motion.div>
        )}

        {/* ACCESSIBILITY STATEMENT */}
        {activeTab === 'accessibility' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#00D9FF]" />
              Accessibility Statement
            </h2>

            <p className="text-sm">
              No/Label Solutions is committed to ensuring digital accessibility for people of all abilities. We continuously apply relevant Web Content Accessibility Guidelines (WCAG 2.1 Level AA) across our website engineering projects.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-base font-display font-semibold text-white">1. Accessibility Measures Built In</h3>
              <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1.5 text-gray-300">
                <li>Full keyboard navigation support across all buttons, navigation controls, and input forms.</li>
                <li>High contrast color ratios (WCAG AA compliant) for enhanced readability in light and dark contexts.</li>
                <li>Semantic HTML structure (`main`, `nav`, `header`, `footer`, `section`) with explicit landmark regions.</li>
                <li>Descriptive alt text for images and non-text visual content.</li>
                <li>Visible focus rings and hover feedback across all interactive UI controls.</li>
              </ul>

              <h3 className="text-base font-display font-semibold text-white">2. Accessibility Feedback & Contact</h3>
              <p className="text-xs sm:text-sm">
                If you encounter any accessibility barriers while navigating our platform or require assistance accessing information, please contact us:
              </p>

              <div className="p-4 bg-[#0B0F14] border border-[#1A2433] rounded-2xl font-mono text-xs text-gray-300 space-y-1">
                <p className="text-white font-bold">No/Label Solutions Accessibility Team</p>
                <p>Email: <span className="text-[#00D9FF]">brianlorick1988@gmail.com</span></p>
                <p>Response Time: Within 24 business hours</p>
              </div>
            </div>
          </motion.div>
        )}

      </div>

    </div>
  );
}
