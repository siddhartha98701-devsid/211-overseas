'use client';

import React, { useEffect, useRef } from 'react';

export type LeafType = 'copper_leaf' | 'emerald_leaf' | 'gold_gingko' | 'sage_leaf' | 'sakura' | 'rose_petal';

export interface Particle {
  x: number;
  y: number;
  z: number; // depth: 0.4 to 1.15
  size: number;
  baseVx: number;
  baseVy: number;
  vx: number;
  vy: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  flutterPhase: number;
  flutterSpeed: number;
  flutterAmp: number;
  opacity: number;
  type: LeafType;
}

export interface BlossomLeafProps {
  className?: string;
  theme?: 'dark' | 'light' | 'contrast' | 'auto';
  density?: 'subtle' | 'normal' | 'rich';
  leafTypes?: LeafType[];
}

/**
 * BlossomLeafAnimation
 * Handcrafted 3D botanical leaf & petal drift simulation.
 * Includes color-contrast leaves: rich autumnal copper/rust, deep forest emerald,
 * golden gingko, and soft botanical petals.
 * Non-intrusive, organic, and performant (60fps canvas, pauses when hidden, respects prefers-reduced-motion).
 */
export function BlossomLeafAnimation({
  className = '',
  theme = 'contrast',
  density = 'normal',
  leafTypes,
}: BlossomLeafProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animId: number | null = null;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // High DPI scaling
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse breeze interaction
    let mouseX = -1000;
    let mouseY = -1000;
    let prevMouseX = -1000;
    let prevMouseY = -1000;
    let mouseSpeed = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      if (prevMouseX > 0) {
        const dx = currentX - prevMouseX;
        const dy = currentY - prevMouseY;
        mouseSpeed = Math.min(Math.hypot(dx, dy), 20);
      }
      prevMouseX = mouseX = currentX;
      prevMouseY = mouseY = currentY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      prevMouseX = -1000;
      prevMouseY = -1000;
      mouseSpeed = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle count based on screen width & density
    const countMultiplier = density === 'subtle' ? 0.6 : density === 'rich' ? 1.4 : 1.0;
    const baseCount = width < 640 ? 18 : 34;
    const PARTICLE_COUNT = Math.round(baseCount * countMultiplier);

    // Available types
    const defaultTypes: LeafType[] =
      theme === 'dark'
        ? ['gold_gingko', 'copper_leaf', 'emerald_leaf', 'sage_leaf', 'sakura']
        : ['copper_leaf', 'emerald_leaf', 'gold_gingko', 'sage_leaf', 'rose_petal'];

    const activeTypes: LeafType[] = leafTypes && leafTypes.length > 0 ? leafTypes : defaultTypes;

    const isLightOrContrast = theme === 'light' || theme === 'contrast';

    const createParticle = (initialY?: number): Particle => {
      const z = 0.45 + Math.random() * 0.7;
      const type = activeTypes[Math.floor(Math.random() * activeTypes.length)];
      const isLeaf = type.includes('leaf') || type.includes('gingko');
      return {
        x: Math.random() * (width + 80) - 40,
        y: initialY !== undefined ? initialY : Math.random() * (height + 60) - 30,
        z,
        size: (isLeaf ? 15 : 12) * z,
        baseVx: 0.3 + Math.random() * 0.4,
        baseVy: (0.5 + Math.random() * 0.55) * z,
        vx: 0,
        vy: 0,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vRotX: 0.012 + Math.random() * 0.02,
        vRotY: 0.015 + Math.random() * 0.025,
        vRotZ: (Math.random() - 0.5) * 0.016,
        flutterPhase: Math.random() * Math.PI * 2,
        flutterSpeed: 0.02 + Math.random() * 0.025,
        flutterAmp: 0.6 + Math.random() * 0.9,
        // High opacity for contrast against light or dark background
        opacity: (isLightOrContrast ? 0.65 + Math.random() * 0.3 : 0.5 + Math.random() * 0.4) * Math.min(z * 1.1, 1),
        type,
      };
    };

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => createParticle());

    // Botanical Drawing Routines
    const drawPetal = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotZ);

      // Realistic 3D flutter projection using orthogonal cos scaling
      const sx = Math.cos(p.rotX);
      const sy = Math.cos(p.rotY);
      ctx.scale(sx, sy);

      const s = p.size;
      const alpha = p.opacity;

      if (p.type === 'copper_leaf') {
        // High-Contrast Autumn Copper / Rust Leaf (matches #A33E11 / #C24E1B)
        const leafLen = s * 1.45;
        const leafW = s * 0.55;

        ctx.beginPath();
        ctx.moveTo(0, -leafLen * 0.6);
        ctx.quadraticCurveTo(leafW * 1.1, -leafLen * 0.1, 0, leafLen * 0.6);
        ctx.quadraticCurveTo(-leafW * 1.1, -leafLen * 0.1, 0, -leafLen * 0.6);
        ctx.closePath();

        const grad = ctx.createLinearGradient(-leafW, -leafLen * 0.5, leafW, leafLen * 0.5);
        if (isLightOrContrast) {
          // Rich, vivid terracotta rust with crisp contrast on cream
          grad.addColorStop(0, `rgba(163, 62, 17, ${alpha * 0.95})`);
          grad.addColorStop(0.5, `rgba(202, 80, 27, ${alpha * 0.95})`);
          grad.addColorStop(1, `rgba(130, 44, 9, ${alpha * 0.9})`);
        } else {
          // Luminous glowing coral rust on dark background
          grad.addColorStop(0, `rgba(252, 127, 78, ${alpha * 0.95})`);
          grad.addColorStop(0.6, `rgba(249, 115, 22, ${alpha * 0.9})`);
          grad.addColorStop(1, `rgba(217, 85, 12, ${alpha * 0.85})`);
        }
        ctx.fillStyle = grad;
        ctx.fill();

        // Central leaf vein
        ctx.beginPath();
        ctx.moveTo(0, -leafLen * 0.52);
        ctx.lineTo(0, leafLen * 0.52);
        ctx.strokeStyle = isLightOrContrast
          ? `rgba(88, 25, 4, ${alpha * 0.8})`
          : `rgba(255, 200, 170, ${alpha * 0.75})`;
        ctx.lineWidth = 1.0;
        ctx.stroke();

        // Delicate secondary angled veins
        ctx.beginPath();
        const steps = 4;
        for (let vi = 1; vi <= steps; vi++) {
          const vy = -leafLen * 0.35 + (vi * (leafLen * 0.7)) / (steps + 1);
          // Right vein
          ctx.moveTo(0, vy);
          ctx.lineTo(leafW * 0.45, vy - leafLen * 0.08);
          // Left vein
          ctx.moveTo(0, vy);
          ctx.lineTo(-leafW * 0.45, vy - leafLen * 0.08);
        }
        ctx.strokeStyle = isLightOrContrast
          ? `rgba(90, 28, 5, ${alpha * 0.55})`
          : `rgba(255, 210, 180, ${alpha * 0.45})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      } else if (p.type === 'emerald_leaf') {
        // Deep Forest Emerald / Olive Leaf (Crisp Contrast against Cream)
        const leafLen = s * 1.5;
        const leafW = s * 0.48;

        ctx.beginPath();
        ctx.moveTo(0, -leafLen * 0.65);
        ctx.quadraticCurveTo(leafW, 0, 0, leafLen * 0.65);
        ctx.quadraticCurveTo(-leafW, 0, 0, -leafLen * 0.65);
        ctx.closePath();

        const grad = ctx.createLinearGradient(-leafW, 0, leafW, 0);
        if (isLightOrContrast) {
          grad.addColorStop(0, `rgba(24, 70, 48, ${alpha * 0.95})`);
          grad.addColorStop(0.5, `rgba(40, 95, 68, ${alpha * 0.95})`);
          grad.addColorStop(1, `rgba(18, 55, 36, ${alpha * 0.9})`);
        } else {
          grad.addColorStop(0, `rgba(110, 231, 183, ${alpha * 0.9})`);
          grad.addColorStop(0.5, `rgba(52, 211, 153, ${alpha * 0.85})`);
          grad.addColorStop(1, `rgba(16, 185, 129, ${alpha * 0.8})`);
        }
        ctx.fillStyle = grad;
        ctx.fill();

        // Central leaf vein
        ctx.beginPath();
        ctx.moveTo(0, -leafLen * 0.55);
        ctx.lineTo(0, leafLen * 0.55);
        ctx.strokeStyle = isLightOrContrast
          ? `rgba(10, 35, 22, ${alpha * 0.85})`
          : `rgba(209, 250, 229, ${alpha * 0.75})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      } else if (p.type === 'gold_gingko') {
        // Golden Amber Gingko Leaf (Contrast Fan Shape)
        const r = s * 0.9;
        ctx.beginPath();
        ctx.moveTo(0, r * 0.5);
        ctx.lineTo(0, 0);
        ctx.arc(0, 0, r, -Math.PI * 0.75, -Math.PI * 0.25, false);
        ctx.closePath();

        const grad = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r);
        if (isLightOrContrast) {
          grad.addColorStop(0, `rgba(180, 120, 20, ${alpha * 0.95})`);
          grad.addColorStop(0.7, `rgba(215, 150, 30, ${alpha * 0.95})`);
          grad.addColorStop(1, `rgba(165, 105, 15, ${alpha * 0.9})`);
        } else {
          grad.addColorStop(0, `rgba(253, 224, 71, ${alpha * 0.95})`);
          grad.addColorStop(0.7, `rgba(245, 158, 11, ${alpha * 0.9})`);
          grad.addColorStop(1, `rgba(217, 119, 6, ${alpha * 0.85})`);
        }
        ctx.fillStyle = grad;
        ctx.fill();

        // Radiating striations
        ctx.beginPath();
        for (let angle = -Math.PI * 0.7; angle <= -Math.PI * 0.3; angle += 0.15) {
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(angle) * r * 0.9, Math.sin(angle) * r * 0.9);
        }
        ctx.strokeStyle = isLightOrContrast
          ? `rgba(130, 80, 10, ${alpha * 0.6})`
          : `rgba(255, 245, 190, ${alpha * 0.55})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      } else if (p.type === 'sage_leaf') {
        // Slender organic olive leaf
        const leafLen = s * 1.35;
        const leafW = s * 0.48;

        ctx.beginPath();
        ctx.moveTo(0, -leafLen * 0.6);
        ctx.quadraticCurveTo(leafW, 0, 0, leafLen * 0.6);
        ctx.quadraticCurveTo(-leafW, 0, 0, -leafLen * 0.6);
        ctx.closePath();

        const grad = ctx.createLinearGradient(-leafW, 0, leafW, 0);
        if (isLightOrContrast) {
          grad.addColorStop(0, `rgba(60, 105, 80, ${alpha * 0.9})`);
          grad.addColorStop(0.5, `rgba(80, 130, 105, ${alpha * 0.9})`);
          grad.addColorStop(1, `rgba(50, 95, 70, ${alpha * 0.85})`);
        } else {
          grad.addColorStop(0, `rgba(132, 168, 148, ${alpha * 0.85})`);
          grad.addColorStop(0.5, `rgba(152, 186, 168, ${alpha * 0.9})`);
          grad.addColorStop(1, `rgba(118, 154, 134, ${alpha * 0.8})`);
        }
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, -leafLen * 0.5);
        ctx.lineTo(0, leafLen * 0.5);
        ctx.strokeStyle = isLightOrContrast
          ? `rgba(30, 65, 45, ${alpha * 0.8})`
          : `rgba(90, 125, 105, ${alpha * 0.5})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      } else {
        // Delicate notched blossom petal (warm rose/coral blush)
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.8);
        ctx.bezierCurveTo(s * 0.65, -s * 0.6, s * 0.8, s * 0.3, s * 0.15, s * 0.85);
        ctx.quadraticCurveTo(0, s * 0.75, -s * 0.15, s * 0.85);
        ctx.bezierCurveTo(-s * 0.8, s * 0.3, -s * 0.65, -s * 0.6, 0, -s * 0.8);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, -s * 0.8, 0, s * 0.85);
        if (isLightOrContrast) {
          grad.addColorStop(0, `rgba(215, 95, 115, ${alpha * 0.9})`);
          grad.addColorStop(0.7, `rgba(195, 70, 95, ${alpha * 0.9})`);
          grad.addColorStop(1, `rgba(160, 45, 70, ${alpha * 0.8})`);
        } else {
          grad.addColorStop(0, `rgba(250, 218, 222, ${alpha * 0.9})`);
          grad.addColorStop(0.7, `rgba(238, 178, 188, ${alpha * 0.85})`);
          grad.addColorStop(1, `rgba(224, 150, 162, ${alpha * 0.7})`);
        }
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, -s * 0.5);
        ctx.quadraticCurveTo(s * 0.05, 0, 0, s * 0.4);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.45})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }

      ctx.restore();
    };

    // If reduced motion is requested, render a static artistic distribution
    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      particles.slice(0, 14).forEach((p) => {
        p.opacity *= 0.75;
        drawPetal(p);
      });
      return;
    }

    // Animation Loop
    let lastTime = performance.now();

    const loop = (time: number) => {
      if (!isVisible) {
        animId = requestAnimationFrame(loop);
        return;
      }

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Subtle global wind field (left to right drift with gentle wave)
      const windForce = Math.sin(time * 0.0006) * 0.35 + 0.32;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Tumbling rotations in 3D
        p.rotX += p.vRotX;
        p.rotY += p.vRotY;
        p.rotZ += p.vRotZ;

        // Flutter oscillation (seesaw movement)
        p.flutterPhase += p.flutterSpeed;
        const flutterOffset = Math.sin(p.flutterPhase) * p.flutterAmp;

        // Mouse breeze reaction
        if (mouseX > 0 && mouseY > 0) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.hypot(dx, dy);
          if (dist < 140 && dist > 0) {
            const push = ((140 - dist) / 140) * (0.85 + mouseSpeed * 0.08);
            p.vx += (dx / dist) * push;
            p.vy += (dy / dist) * push * 0.5;
          }
        }

        // Dampen impulse velocity back to base
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Aerodynamic drag
        const drag = 0.85 + 0.3 * Math.abs(Math.sin(p.rotX));
        p.x += (p.baseVx + windForce + flutterOffset + p.vx) * dt * 60;
        p.y += (p.baseVy * drag + p.vy) * dt * 60;

        // Screen wrap-around
        if (p.y > height + 35) {
          p.y = -30;
          p.x = Math.random() * (width + 60) - 30;
        }
        if (p.x > width + 45) {
          p.x = -35;
          p.y = Math.random() * height;
        } else if (p.x < -45) {
          p.x = width + 35;
        }

        drawPetal(p);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    // Pause when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Pause when tab is inactive
    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [theme, density, leafTypes]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full select-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
