/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ImagePlaceholderProps {
  type?: 'desktop' | 'tablet' | 'mobile' | 'logo-showcase' | 'business-card' | 'social-media' | 'qr-showcase' | 'branding-kit' | 'gallery' | 'default';
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

  if (type === 'desktop') {
    return (
      <div className={baseStyle} style={{ aspectRatio: '16/10' }}>
        {/* Simulating OS Browser chrome */}
        <div className="flex items-center justify-between border-b border-[#1A2433] pb-3 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <div className="w-48 sm:w-64 h-5 rounded-md bg-[#0B0F14]/70 border border-[#1A2433] flex items-center justify-center text-[10px] text-gray-500 font-mono">
            {title.toLowerCase().replace(/\s+/g, '-')}.com
          </div>
          <div className="w-4" />
        </div>

        {/* Dynamic Mockup Body */}
        <div className="flex-1 w-full bg-[#0B0F14]/50 rounded-lg p-4 border border-[#1A2433] flex flex-col gap-3 relative overflow-hidden group">
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
