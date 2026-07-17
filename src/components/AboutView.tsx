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

          {/* Large workspace container placeholders as requested */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-gray-500 block uppercase">NO/LABEL DESIGN LAB & WORKSPACE MOCKUP</span>
              
              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(0, 217, 255, 0.25)' }}
                className="bg-[#121923] border border-[#1A2433] p-4 rounded-3xl relative overflow-hidden group transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1a2433_1.2px,transparent_1.2px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                <div className="absolute -right-24 -bottom-24 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
                
                {/* Visual grid rendering a gorgeous layout of workspace wireframes */}
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center border-b border-[#1A2433] pb-3 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1.5 font-mono text-[10px]">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" /> 
                      NO_LABEL_WORKSPACE.CFG
                    </span>
                    <span>STATUS: ACTIVE SYSTEM</span>
                  </div>

                  <div className="grid grid-cols-12 gap-3">
                    {/* Simulated whiteboard notes */}
                    <div className="col-span-7 bg-[#0B0F14]/80 p-4 rounded-xl border border-[#1A2433]/70 space-y-3 font-sans font-light">
                      <div className="h-1.5 w-1/3 bg-cyan-400/30 rounded" />
                      <div className="h-3 w-5/6 bg-white/10 rounded" />
                      <div className="h-2 w-full bg-gray-700 rounded" />
                      <div className="h-2 w-2/3 bg-gray-700/50 rounded" />
                      <div className="border-t border-[#1A2433] pt-2 mt-4 flex items-center justify-between text-[8px] font-mono text-gray-500">
                        <span>Figma Whiteboard</span>
                        <span>Scale: 100%</span>
                      </div>
                    </div>

                    <div className="col-span-5 bg-[#0B0F14]/80 p-3 rounded-xl border border-[#1A2433]/70 flex flex-col justify-between">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      </div>
                      <div className="my-2 h-14 w-full rounded border border-cyan-400/20 bg-[#121923]/60 flex items-center justify-center">
                        <span className="font-mono text-[9px] text-cyan-400 animate-pulse">DEPLOY_PIPELINE()</span>
                      </div>
                      <span className="text-[7px] font-mono text-gray-500 uppercase text-center block">Edge distribution config</span>
                    </div>
                  </div>

                  {/* Representing the workspace image with geometric layers */}
                  <div className="bg-[#0B0F14]/50 border border-[#1A2433] p-4 rounded-xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded overflow-hidden flex items-center justify-center">
                        <img 
                          src="https://github.com/NoLabelSecurity/NoLabel-Solutions/blob/content/media/NLS_Logo.png?raw=true" 
                          alt="No/Label Logo" 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-xs text-white uppercase font-mono block">Creative Studio CAD Details</span>
                        <span className="text-[10px] text-gray-500 block font-sans font-light">Abstract engineering draft representing our physical headquarters</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-[9px] font-mono text-[#00D9FF]">VECTOR LAYOUT</span>
                  </div>
                </div>

              </motion.div>
            </div>
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
