/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface ImagePlaceholderProps {
  type?: 'desktop' | 'tablet' | 'mobile' | 'logo-showcase' | 'business-card' | 'social-media' | 'qr-showcase' | 'branding-kit' | 'gallery' | 'default' | 'handyman-brand';
  accent?: string;
  title?: string;
  className?: string;
}

export default function ImagePlaceholder({
  type = 'default',
  accent = 'from-cyan-500/10 via-blue-500/5 to-transparent',
  title = 'Project Preview',
  className = ''
}: ImagePlaceholderProps) {
  // Common container with smooth gradient backing and grid lines
  const baseStyle = `relative w-full overflow-hidden rounded-xl border border-[#1A2433] bg-[#121923] flex flex-col justify-between p-4 ${className}`;

  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  if (type === 'desktop') {
    const isApexHvac = title.toLowerCase().includes('apex') || title.toLowerCase().includes('hvac') || title.toLowerCase().includes('wright') || title.toLowerCase().includes('inspection');
    return (
      <div className={`relative w-full overflow-hidden rounded-xl border border-[#1A2433] bg-[#0B0F14]/40 flex flex-col ${className}`} style={{ aspectRatio: '16/10' }}>
        {/* Simulating OS Browser chrome */}
        <div className="flex items-center justify-between border-b border-[#1A2433] px-3 sm:px-4 py-2 sm:py-2.5 bg-[#121923]/90">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/40" />
          </div>
          <div className="flex-1 mx-2 sm:mx-4 h-5 sm:h-6 rounded bg-[#0B0F14]/70 border border-[#1A2433] flex items-center justify-between px-2 text-[8px] sm:text-[10px] text-gray-500 font-mono select-none overflow-hidden">
            <span className="truncate">
              {isApexHvac 
                ? (activeTab === 'before' ? 'wright-way.netlify.app' : 'wright-way-services.netlify.app')
                : `${title.toLowerCase().replace(/\s+/g, '-')}.com`
              }
            </span>
            {isApexHvac && (
              <span className={`text-[7px] sm:text-[8px] shrink-0 ml-1 ${activeTab === 'before' ? 'text-amber-500' : 'text-emerald-500'}`}>
                {activeTab === 'before' ? '⚠️ Unsecured' : '🔒 Secure'}
              </span>
            )}
          </div>
          {isApexHvac ? (
            <div className="flex gap-1 bg-[#0B0F14]/60 border border-[#1A2433] rounded p-0.5 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setActiveTab('before')}
                className={`px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-mono tracking-wider transition-all duration-200 uppercase cursor-pointer ${
                  activeTab === 'before' 
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 font-medium' 
                    : 'bg-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                Before
              </button>
              <button 
                onClick={() => setActiveTab('after')}
                className={`px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-mono tracking-wider transition-all duration-200 uppercase cursor-pointer ${
                  activeTab === 'after' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30 font-medium' 
                    : 'bg-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                After
              </button>
            </div>
          ) : (
            <div className="w-4" />
          )}
        </div>

        {isApexHvac ? (
          activeTab === 'before' ? (
            <div className="flex-1 w-full relative overflow-hidden bg-gray-50 flex flex-col font-sans text-gray-700">
              {/* Top Banner */}
              <div className="bg-amber-600 text-white text-[7px] sm:text-[8px] px-2 py-0.5 flex justify-between items-center font-mono">
                <span>⚠️ Unsecured Connection (Missing SSL)</span>
                <span>Lexington County: (803) 555-0143</span>
              </div>
              {/* Header */}
              <div className="border-b border-gray-200 px-3 py-1 flex justify-between items-center bg-white">
                <span className="font-serif font-bold text-[9px] sm:text-[10px] text-gray-800 flex items-center gap-1">
                  🏠 Wright-Way Inspections
                </span>
                <span className="text-[7px] sm:text-[8px] text-blue-600 underline">Home | Gallery | Contact</span>
              </div>
              {/* Hero */}
              <div className="flex-1 p-3 flex flex-col justify-center items-center text-center space-y-1 bg-gray-100">
                <h1 className="text-[10px] sm:text-xs font-serif font-bold text-gray-900 leading-tight">
                  Done your way, the Wright Way — Every Time
                </h1>
                <p className="text-[7px] sm:text-[8px] text-gray-600 max-w-[200px] sm:max-w-[280px]">
                  Professional Home Inspection & Remodeling Services in Lexington, SC and surrounding areas.
                </p>
                <button className="bg-blue-600 text-white text-[7px] sm:text-[8px] px-2 py-0.5 rounded shadow cursor-not-allowed">
                  Submit Form
                </button>
              </div>
              {/* Performance Indicator Overlay */}
              <div className="absolute inset-0 bg-[#0B0F14]/95 flex flex-col items-center justify-center p-3 text-center space-y-1.5 backdrop-blur-[1px]">
                <div className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-1.5 py-0.5 rounded text-[7px] sm:text-[8px] font-mono uppercase tracking-wider">
                  Legacy Site: wright-way.netlify.app
                </div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-red-500 tracking-tight">24/100</div>
                <div className="text-[9px] sm:text-[10px] text-red-400 font-medium font-mono">
                  Sluggish Mobile Performance & Unoptimized
                </div>
                <p className="text-[7px] sm:text-[8px] text-gray-400 max-w-[240px] sm:max-w-[320px] leading-relaxed">
                  The original platform loaded slowly, lacked secure elements, and failed to guide users to structured lead generation.
                </p>
                <div className="flex gap-1.5 pt-1">
                  <span className="px-1.5 py-0.5 bg-[#121923] text-gray-400 rounded text-[7px] font-mono border border-[#1A2433]">
                    6.2s load time
                  </span>
                  <span className="px-1.5 py-0.5 bg-[#121923] text-gray-400 rounded text-[7px] font-mono border border-[#1A2433]">
                    0.4% conv. rate
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 w-full relative overflow-hidden bg-black flex flex-col justify-between">
              <img 
                src="https://raw.githubusercontent.com/NoLabelSecurity/CONTENT/main/NoLabel-Solutions/imgs/image.png"
                alt={title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Elegant "After" Overlay badge */}
              <div className="absolute bottom-2 right-2 bg-[#0B0F14]/80 border border-green-500/30 text-green-400 px-2 py-0.5 rounded text-[7px] sm:text-[8px] font-mono uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                NoLabel Redesign Active
              </div>
            </div>
          )
        ) : (
          /* Dynamic Mockup Body */
          <div className="flex-1 w-full bg-[#0B0F14]/50 rounded-b-lg p-4 flex flex-col gap-3 relative overflow-hidden group">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,36,51,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(26,36,51,0.25)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            {/* Ambient glow */}
            <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />
            
            <div className="flex items-center justify-between z-10">
              <div className="h-4 w-16 bg-cyan-400/20 rounded border border-cyan-400/30" />
              <div className="flex gap-2">
                <span className="h-2 w-8 bg-gray-700 rounded" />
                <span className="h-2 w-8 bg-gray-700 rounded" />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-2 z-10">
              <div className="h-3 w-3/4 bg-gray-600 rounded" />
              <div className="h-5 w-5/6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded" />
              <div className="h-2 w-1/2 bg-gray-700 rounded" />
            </div>

            <div className="grid grid-cols-3 gap-2 mt-auto z-10">
              <div className="h-10 rounded border border-[#1A2433] bg-[#121923]/60" />
              <div className="h-10 rounded border border-[#1A2433] bg-[#121923]/60" />
              <div className="h-10 rounded border border-cyan-500/30 bg-cyan-500/10" />
            </div>
          </div>
        )}
      </div>
    );
  }

  if (type === 'tablet') {
    return (
      <div className={baseStyle} style={{ aspectRatio: '4/3' }}>
        {/* Tablet camera bezel and border */}
        <div className="flex-1 w-full bg-[#0B0F14] rounded-lg p-4 border border-[#1A2433] flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-gray-800" />
          
          <div className="flex items-center justify-between mt-2">
            <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center font-bold text-[8px] text-cyan-400">NL</div>
            <div className="h-1.5 w-12 bg-gray-800 rounded" />
          </div>

          <div className="space-y-2 my-auto">
            <div className="h-2 w-12 bg-cyan-400/20 rounded" />
            <div className="h-4 w-5/6 bg-gray-700 rounded" />
            <div className="h-1.5 w-full bg-gray-800 rounded" />
            <div className="h-1.5 w-2/3 bg-gray-800 rounded" />
          </div>

          <div className="h-20 bg-[#121923] rounded-lg border border-[#1a2433] p-2 flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-500/20 border border-blue-500/30 flex-shrink-0" />
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-1/2 bg-gray-700 rounded" />
              <div className="h-1 w-3/4 bg-gray-800 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'mobile') {
    return (
      <div className={baseStyle} style={{ aspectRatio: '9/16' }}>
        {/* Smartphone mockup */}
        <div className="flex-1 w-full bg-[#0B0F14] rounded-2xl p-4 border border-[#1A2433] flex flex-col justify-between relative overflow-hidden group">
          <div className="flex items-center justify-between border-b border-[#1A2433]/70 pb-2 text-[8px] text-gray-500 font-mono tracking-widest">
            <span>09:41</span>
            <div className="w-10 h-3 rounded-full bg-black border border-[#1A2433]/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
            </div>
            <div className="flex items-center gap-0.5">
              <span>LTE</span>
              <span className="w-2.5 h-1.5 border border-gray-500 rounded-sm" />
            </div>
          </div>

          <div className="my-auto space-y-4 py-4">
            <div className="space-y-1.5">
              <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500" />
              <div className="h-2.5 w-1/2 bg-gray-700 rounded" />
            </div>

            <div className="space-y-2">
              <div className="h-5 w-full bg-gray-800/80 rounded" />
              <div className="h-2 w-5/6 bg-gray-800/40 rounded" />
              <div className="h-2 w-2/3 bg-gray-800/40 rounded" />
            </div>

            <div className="h-28 rounded-lg border border-[#1A2433] bg-[#121923]/80 p-2 text-[9px] text-gray-400 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[7px] text-cyan-400">SECURE PIPELINE</span>
                <span className="text-green-400">● LIVE</span>
              </div>
              <div className="h-8 w-full bg-[#0B0F14] rounded flex items-center justify-between px-2 text-gray-500 border border-[#1A2433]">
                <span>Submit Lead</span>
                <span className="text-[7px]">→</span>
              </div>
            </div>
          </div>

          <div className="h-1 w-1/3 bg-gray-800 rounded-full mx-auto" />
        </div>
      </div>
    );
  }

  if (type === 'business-card') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Front of Card */}
        <div className="relative w-full rounded-xl border border-[#1A2433] bg-gradient-to-br from-[#121923] to-[#0B0F14] p-6 overflow-hidden flex flex-col justify-between shadow-xl" style={{ aspectRatio: '1.75/1' }}>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl pointer-events-none" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-sm tracking-tighter text-[#0B0F14]">
              NL
            </div>
            <div>
              <span className="font-display font-bold text-md tracking-tight text-white block">NoLabel</span>
              <span className="text-[8px] font-mono tracking-widest text-[#00D9FF] -mt-1 block">WEB_AGENCY</span>
            </div>
          </div>
          <div className="mt-auto">
            <p className="text-xs text-gray-400 font-mono tracking-wider">PREMIUM OFFLINE TOUCHPOINT</p>
            <p className="text-[10px] text-gray-500">Dual-layered silk-matte vector template</p>
          </div>
        </div>

        {/* Back of Card */}
        <div className="relative w-full rounded-xl border border-[#1A2433] bg-[#0B0F14] p-6 overflow-hidden flex flex-col justify-between shadow-xl" style={{ aspectRatio: '1.75/1' }}>
          <div className="absolute inset-0 bg-[radial-gradient(#1a2433_1px,transparent_1.5px)] bg-[size:10px_10px] opacity-30 pointer-events-none" />
          <div className="flex justify-between items-start">
            <div>
              <p className="font-display font-medium text-sm text-white">Alexander Finch</p>
              <p className="text-[9px] text-[#00D9FF] font-mono tracking-wider uppercase">Senior Architect</p>
            </div>
            {/* Simulated QR Code on Back */}
            <div className="w-12 h-12 rounded bg-[#121923] border border-[#1A2433] p-1 flex flex-col items-center justify-center gap-0.5">
              <div className="grid grid-cols-4 gap-0.5 w-full h-full opacity-60">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className={`rounded-sm ${(i * 3 + 1) % 4 === 0 || i % 3 === 0 ? 'bg-[#00D9FF]' : 'bg-transparent'}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1 text-[8px] font-mono text-gray-400 mt-auto">
            <div>
              <p className="text-[6px] text-gray-500 uppercase">TELEPHONE</p>
              <p>+1 (555) 304-2041</p>
            </div>
            <div>
              <p className="text-[6px] text-gray-500 uppercase">SYSTEM LINK</p>
              <p className="text-[#00D9FF]">nolabel.dev/card</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'logo-showcase') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
        {['Symmetric', 'Grid Lines', 'Monogram', 'Contrast Mode', 'Minimal Typography', 'Stamp Ring', 'Horizontal', 'Adaptive Badge'].map((label, idx) => (
          <div key={idx} className="aspect-square bg-[#121923] hover:bg-[#1A2433] rounded-xl border border-[#1A2433] flex flex-col justify-between p-3 transition-all duration-300 group">
            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute scale-75 group-hover:scale-90 transition-all duration-300 opacity-20 w-16 h-16 rounded-full border border-dashed border-cyan-500" />
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-mono font-bold border transition-colors ${
                idx % 4 === 0 
                  ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
                  : idx % 4 === 1
                  ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                  : idx % 4 === 2
                  ? 'bg-purple-500/10 border-purple-500/30 text-[#A855F7]'
                  : 'bg-white/5 border-white/10 text-white'
              }`}>
                {label.substring(0,2).toUpperCase()}
              </div>
            </div>
            <div className="text-[9px] font-mono text-gray-500 text-center">{label}</div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'social-media') {
    return (
      <div className="grid grid-cols-3 gap-2 w-full max-w-lg mx-auto" style={{ aspectRatio: '1/1' }}>
        {Array.from({ length: 9 }).map((_, idx) => (
          <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-[#1A2433] bg-[#121923] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F14] to-cyan-500/10 opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[6px] font-mono text-[#00D9FF]">
                <span>@NOLABEL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
              <div className="space-y-1">
                <div className="h-1 w-3/4 bg-gray-500 rounded" />
                <div className="h-1.5 w-5/6 bg-white rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'qr-showcase') {
    return (
      <div className={baseStyle} style={{ aspectRatio: '4/3' }}>
        <div className="flex-1 w-full bg-[#0B0F14] rounded-lg p-4 border border-[#1A2433] flex items-center justify-center relative">
          <div className="absolute top-2 left-2 text-[8px] font-mono text-[#00D9FF]">GRID RESOLUTION ACTIVE</div>
          
          <div className="bg-gradient-to-tr from-cyan-400 to-blue-500 p-0.5 rounded-xl shadow-2xl">
            <div className="bg-[#0B0F14] p-3 rounded-lg flex flex-col items-center gap-2">
              {/* Complex SVG layout for pseudo QR code */}
              <div className="w-24 h-24 grid grid-cols-6 gap-1 p-1 bg-white rounded-md">
                {Array.from({ length: 36 }).map((_, idx) => {
                  // Corners should look like standard alignment patterns
                  const isCorner = 
                    (idx < 2 || (idx > 3 && idx < 6) || (idx > 29 && idx < 32) || (idx > 33)) &&
                    (idx % 6 < 2 || idx % 6 > 3);
                  return (
                    <div 
                      key={idx} 
                      className={`rounded-sm ${isCorner || (idx * 2) % 3 === 0 ? 'bg-[#0B0F14]' : 'bg-transparent'}`} 
                    />
                  );
                })}
              </div>
              <span className="font-mono text-[9px] text-[#00D9FF] tracking-widest uppercase">SCAN FOR CONTACT</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'branding-kit') {
    return (
      <div className={baseStyle} style={{ aspectRatio: '16/10' }}>
        <div className="flex-1 w-full flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono text-gray-400 border-b border-[#1A2433] pb-2">
            <span>BRAND BRANDING SYSTEM</span>
            <span className="text-[#00D9FF]">v1.0.4</span>
          </div>

          <div className="grid grid-cols-4 gap-2 my-auto py-2">
            <div>
              <div className="h-12 rounded-lg bg-[#0B0F14] border border-[#1A2433] flex items-end p-1">
                <span className="text-[7px] font-mono text-gray-500">#0B0F14</span>
              </div>
              <p className="text-[9px] text-gray-400 mt-1 font-mono text-center">Midnight</p>
            </div>
            <div>
              <div className="h-12 rounded-lg bg-[#121923] border border-[#1A2433] flex items-end p-1">
                <span className="text-[7px] font-mono text-gray-500">#121923</span>
              </div>
              <p className="text-[9px] text-gray-400 mt-1 font-mono text-center">Slate</p>
            </div>
            <div>
              <div className="h-12 rounded-lg bg-[#00D9FF] flex items-end p-1">
                <span className="text-[7px] font-mono text-black font-bold">#00D9FF</span>
              </div>
              <p className="text-[9px] text-gray-400 mt-1 font-mono text-center">Cyan</p>
            </div>
            <div>
              <div className="h-12 rounded-lg bg-[#3B82F6] flex items-end p-1">
                <span className="text-[7px] font-mono text-white font-bold">#3B82F6</span>
              </div>
              <p className="text-[9px] text-gray-400 mt-1 font-mono text-center">Blue</p>
            </div>
          </div>

          <div className="text-[10px] font-mono bg-[#0B0F14] border border-[#1A2433] p-1.5 rounded text-gray-400">
            <span className="text-pink-400">font-family:</span> "Space Grotesk", "Inter", monospace;
          </div>
        </div>
      </div>
    );
  }

  if (type === 'handyman-brand') {
    return (
      <div 
        className={`relative w-full overflow-hidden rounded-xl border border-[#1A2433] group bg-[#0B0F14] flex flex-col justify-end p-4 ${className}`}
        style={{ aspectRatio: '16/10' }}
      >
        {/* Real image of carpentry wood planks and measuring tape in background */}
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
          alt="Fix It Right Handyman Services"
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        
        {/* Premium Dark Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/70 to-[#0B0F14]/25" />
        
        {/* Brand visual showcase floating inside container */}
        <div className="relative z-10 w-full space-y-3">
          {/* Glowing brand bar */}
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="text-[9px] font-mono tracking-widest text-[#F59E0B] font-bold uppercase">HANDYMAN BRAND IDENTITY</span>
            <span className="text-[9px] font-mono text-white/50">v1.2.0</span>
          </div>

          {/* Floating Logo card */}
          <div className="bg-[#1E293B]/90 backdrop-blur-md border border-[#A68B6B]/20 rounded-xl p-3 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              {/* House & Hammer custom SVG */}
              <div className="p-2 bg-[#F59E0B] rounded-lg text-[#1E293B] flex items-center justify-center">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6m-1-11v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4" />
                </svg>
              </div>
              <div className="text-left">
                <span className="text-xs uppercase font-bold tracking-tight text-white block font-sans">
                  FIX IT RIGHT
                </span>
                <span className="text-[7px] text-[#A68B6B] tracking-wider uppercase block font-mono -mt-1 font-semibold">
                  Handyman Services
                </span>
              </div>
            </div>
            
            <div className="text-right">
              <span className="text-[6px] text-gray-400 block uppercase font-mono">Core Tagline</span>
              <span className="text-[7px] text-[#F59E0B] font-bold uppercase tracking-wider block">Reliable Work. Quality Results.</span>
            </div>
          </div>

          {/* Color palette blocks */}
          <div className="flex gap-2 justify-between items-center">
            <div className="flex gap-1">
              <div className="w-3.5 h-3.5 rounded bg-[#1E293B] border border-white/10" title="Charcoal" />
              <div className="w-3.5 h-3.5 rounded bg-[#64748B] border border-white/10" title="Slate" />
              <div className="w-3.5 h-3.5 rounded bg-[#F59E0B]" title="Mustard" />
              <div className="w-3.5 h-3.5 rounded bg-[#F1F5F9]" title="Off White" />
              <div className="w-3.5 h-3.5 rounded bg-[#A68B6B]" title="Warm Wood" />
            </div>
            <div className="text-[8px] font-mono text-gray-400 text-right">
              font-family: <span className="text-[#F59E0B]">Oswald</span> / <span className="text-white">Inter</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback / default cards
  return (
    <div className={baseStyle} style={{ aspectRatio: '16/9' }}>
      <div className={`absolute inset-0 bg-gradient-to-tr ${accent} opacity-40`} />
      <div className="absolute inset-0 bg-[radial-gradient(#1a2433_1px,transparent_1px)] bg-[size:12px_12px] opacity-45" />

      <div className="flex justify-between items-center z-10 w-full mb-2">
        <span className="text-[9px] font-mono tracking-widest text-[#00D9FF] uppercase">{title}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-1.5 z-10 py-6">
        <div className="h-1.5 w-1/4 bg-gray-500 rounded" />
        <div className="h-3.5 w-2/3 bg-white/70 rounded" />
        <div className="h-1.5 w-1/2 bg-gray-600 rounded" />
      </div>

      <div className="flex justify-between items-center z-10 w-full border-t border-[#1A2433] pt-2 text-[9px] font-mono text-gray-500">
        <span>ASPECT RATIO 16:9</span>
        <span>MOCKUP WIREFRAME</span>
      </div>
    </div>
  );
}
