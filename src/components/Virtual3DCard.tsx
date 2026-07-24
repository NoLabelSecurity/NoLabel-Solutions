/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { RotateCw, RefreshCw } from 'lucide-react';

export default function Virtual3DCard() {
  const [rotateY, setRotateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const startX = useRef(0);
  const startRotateY = useRef(0);
  const isPointerDown = useRef(false);

  const frontImage = "https://github.com/NoLabelSecurity/Wright-Way/blob/content/imgs/business_card/front.png?raw=true";
  const backImage = "https://github.com/NoLabelSecurity/Wright-Way/blob/content/imgs/business_card/back.png?raw=true";

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isPointerDown.current = true;
    setIsDragging(true);
    startX.current = e.clientX;
    startRotateY.current = rotateY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current) return;
    const deltaX = e.clientX - startX.current;
    
    // Sensible sensitivity mapping ClientX to degrees
    const sensitivity = 0.8;
    setRotateY(startRotateY.current + deltaX * sensitivity);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    // Snapping to the nearest multiple of 180 degrees
    const nearest180 = Math.round(rotateY / 180) * 180;
    setRotateY(nearest180);
  };

  const triggerFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add 180 degrees to flip to the other side
    setRotateY(prev => prev + 180);
  };

  // Determine active side for assistive text (near 0, 360 = Front; near 180 = Back)
  const normalizedRotation = Math.abs(Math.round(rotateY / 180) % 2);
  const isFrontActive = normalizedRotation === 0;

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {/* 3D Perspective Container */}
      <div 
        className="relative w-full max-w-[190px] cursor-grab active:cursor-grabbing select-none touch-none"
        style={{ perspective: '1200px', aspectRatio: '2/3.5' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        id="virtual-3d-business-card"
      >
        {/* Card Object with 3D preservations */}
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY }}
          transition={
            isDragging
              ? { type: 'tween', duration: 0 } // No delay while dragging
              : { type: 'spring', stiffness: 220, damping: 20 } // Snappy bounce back
          }
        >
          {/* FRONT FACE */}
          <div 
            className="absolute inset-0 w-full h-full rounded-xl border border-white/10 overflow-hidden bg-[#0B0F14] shadow-2xl"
            style={{ 
              backfaceVisibility: 'hidden', 
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)' 
            }}
          >
            <img 
              src={frontImage} 
              alt="Wright-Way Business Card - Front" 
              className="w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />
            {/* Glossy shine element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none mix-blend-overlay" />
          </div>

          {/* BACK FACE */}
          <div 
            className="absolute inset-0 w-full h-full rounded-xl border border-white/10 overflow-hidden bg-[#0B0F14] shadow-2xl"
            style={{ 
              backfaceVisibility: 'hidden', 
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)' 
            }}
          >
            <img 
              src={backImage} 
              alt="Wright-Way Business Card - Back" 
              className="w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />
            {/* Glossy shine element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none mix-blend-overlay" />
          </div>
        </motion.div>
      </div>

      {/* Control Utility Toolbar */}
      <div className="flex items-center justify-between w-full max-w-[190px] px-1 bg-[#0B0F14]/60 border border-[#1A2433] rounded-lg py-1.5 text-[10px] font-mono text-gray-400">
        <span className="text-cyan-400 pl-2 uppercase tracking-wide">
          {isFrontActive ? 'Front View' : 'Back View'}
        </span>
        <button
          onClick={triggerFlip}
          className="flex items-center gap-1.5 px-2 py-0.5 bg-[#1A2433] hover:bg-[#00D9FF] hover:text-[#0B0F14] text-white rounded transition-colors duration-200 uppercase tracking-tight cursor-pointer font-semibold font-display"
          title="Flip card"
          id="flip-3d-card-btn"
        >
          <RotateCw className="w-3 h-3" />
          <span>Flip</span>
        </button>
      </div>
      
      {/* Helper swipe callout */}
      <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider text-center select-none">
        Drag or swipe card to spin
      </span>
    </div>
  );
}
