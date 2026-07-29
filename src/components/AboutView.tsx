/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Building2, Terminal, Users, Layers, Award } from 'lucide-react';
import { COMPANY_STATS, TEAM_MEMBERS } from '../data';
import ImagePlaceholder from './ImagePlaceholder';

interface AboutViewProps {
  onNavigate: (page: string) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <div className="space-y-20 pb-20 text-left">
      {/* HERO SECTION */}
      <section className="relative pt-12 md:pt-16 pb-4">
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-blue-900/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <span className="text-xs font-mono text-[#00D9FF] bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Our Creed
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-white tracking-tight leading-none" id="about-title">
              We Are No/Label Solutions.
            </h1>
            <h2 className="text-xl sm:text-2xl font-display font-light text-gray-400">
              Helping small businesses establish a professional digital presence.
            </h2>
            <p className="text-gray-400 text-sm sm:text-md font-light leading-relaxed max-w-2xl pt-2">
              We founded No/Label Solutions because we saw local contractors, shops, boutiques, and freelancers drowning in expensive SaaS contracts, sluggish website templates, and flashy agencies that didn't understand regional markets. We engineer elite, high-speed code and tactile brand assets designed to match your service quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#121923] border border-[#1A2433] rounded-2xl p-6 sm:p-8" 
          id="about-stats-grid"
        >
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="space-y-1 text-center md:text-left"
            >
              <span className="text-gray-500 font-mono text-[9px] uppercase tracking-wider block">{stat.label}</span>
              <span className="text-3xl sm:text-4xl font-display font-bold text-white block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CORE PHILOSOPHY & WORKPLACE IMAGE PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider">System Standards</span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">Our Core Principles</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              We operate exclusively of unneeded jargon, bloated page builders (Wix, Squarespace, WordPress), and hidden markup commissions. Our work is clean-cut, reliable, and entirely transparent.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#121923] border border-[#1A2433] rounded text-cyan-400 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs text-white font-mono uppercase tracking-wider">Absolute Ownership</h4>
                  <p className="text-gray-400 text-xs mt-1 font-light">We hand over complete vector blueprints, high-contrast assets, and modular index source repositories. No arbitrary locking, no lease-to-own tricks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#121923] border border-[#1A2433] rounded text-cyan-400 mt-1">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs text-white font-mono uppercase tracking-wider">Aesthetic Fidelity</h4>
                  <p className="text-gray-400 text-xs mt-1 font-light">Every font pair, border height, and tracking spacing ratio is selected with pixel accuracy to convey clean workspace discipline.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Showcase for Core Principles */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <motion.div 
              whileHover={{ y: -4, borderColor: 'rgba(0, 217, 255, 0.3)' }}
              className="bg-[#121923] border border-[#1A2433] rounded-3xl overflow-hidden shadow-2xl relative group transition-all duration-300"
            >
              <img 
                src="https://github.com/NoLabelSecurity/NoLabel-Solutions/blob/content/media/1.png?raw=true" 
                alt="No/Label Solutions Core Principles" 
                className="w-full h-auto object-cover rounded-3xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER / TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-[#1A2433]/60 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-12"
        >
          <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider block mb-2">Our Artisans</span>
          <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">The Core Makers</h3>
          <p className="text-gray-400 text-sm font-light mt-1">We maintain a lean, highly communication-oriented crew which secures fast response speeds and direct access to production developers.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="about-team-grid">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, borderColor: 'rgba(0, 217, 255, 0.2)', boxShadow: '0 8px 24px -10px rgba(0, 217, 255, 0.05)' }}
              className="bg-[#121923] border border-[#1A2433] rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-colors duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  {/* Styled avatar letter since real profile photos are placeholders */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-lg text-[#0B0F14] font-mono shadow-md">
                    {member.avatarLetter}
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-medium text-white">{member.name}</h4>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">{member.role}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>

              {/* Verified seal */}
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono mt-4 pt-4 border-t border-[#1A2433]">
                <Award className="w-3.5 h-3.5 text-yellow-500" />
                <span>NO/LABEL AUTHORIZED SOLUTIONS MAKER</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
