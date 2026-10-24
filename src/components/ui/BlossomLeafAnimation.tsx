'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number; // depth: 0.4 to 1.1
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
  type: 'sakura' | 'sage_leaf' | 'gold_petal' | 'rose_petal';
}

/**
 * BlossomLeafAnimation
 * Handcrafted 3D botanical leaf & petal drift simulation.
 * Non-intrusive, organic, and performant (60fps canvas, pauses when hidden, respects prefers-reduced-motion).
 */
export function BlossomLeafAnimation({ className = '' }: { className?: string }) {
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

    // Create particles
    const PARTICLE_COUNT = width < 640 ? 18 : 32;
    const types: Particle['type'][] = ['sakura', 'sakura', 'sage_leaf', 'gold_petal', 'rose_petal'];

    const createParticle = (initialY?: number): Particle => {
      const z = 0.45 + Math.random() * 0.65;
      const type = types[Math.floor(Math.random() * types.length)];
      return {
        x: Math.random() * (width + 60) - 30,
        y: initialY !== undefined ? initialY : Math.random() * (height + 40) - 20,
        z,
        size: (type === 'sage_leaf' ? 14 : 11) * z,
        baseVx: 0.25 + Math.random() * 0.35,
        baseVy: (0.45 + Math.random() * 0.5) * z,
        vx: 0,
        vy: 0,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vRotX: 0.012 + Math.random() * 0.02,
        vRotY: 0.015 + Math.random() * 0.025,
        vRotZ: (Math.random() - 0.5) * 0.015,
        flutterPhase: Math.random() * Math.PI * 2,
        flutterSpeed: 0.02 + Math.random() * 0.02,
        flutterAmp: 0.6 + Math.random() * 0.8,
        opacity: (0.35 + Math.random() * 0.4) * Math.min(z * 1.1, 1),
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

      if (p.type === 'sakura') {
        // Delicate notched blossom petal (soft rose-blush)
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.8);
        ctx.bezierCurveTo(s * 0.65, -s * 0.6, s * 0.8, s * 0.3, s * 0.15, s * 0.85);
        ctx.quadraticCurveTo(0, s * 0.75, -s * 0.15, s * 0.85);
        ctx.bezierCurveTo(-s * 0.8, s * 0.3, -s * 0.65, -s * 0.6, 0, -s * 0.8);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, -s * 0.8, 0, s * 0.85);
        grad.addColorStop(0, `rgba(248, 205, 212, ${alpha * 0.95})`);
        grad.addColorStop(0.7, `rgba(238, 178, 188, ${alpha * 0.85})`);
        grad.addColorStop(1, `rgba(224, 150, 162, ${alpha * 0.7})`);
        ctx.fillStyle = grad;
        ctx.fill();

        // Subtle petal spine highlight
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.5);
        ctx.quadraticCurveTo(s * 0.05, 0, 0, s * 0.4);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();
      } else if (p.type === 'rose_petal') {
        // Slightly richer blush petal
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.75);
        ctx.bezierCurveTo(s * 0.75, -s * 0.5, s * 0.7, s * 0.5, 0, s * 0.9);
        ctx.bezierCurveTo(-s * 0.7, s * 0.5, -s * 0.75, -s * 0.5, 0, -s * 0.75);
        ctx.closePath();

        const grad = ctx.createRadialGradient(0, -s * 0.2, s * 0.1, 0, 0, s * 0.9);
        grad.addColorStop(0, `rgba(250, 218, 222, ${alpha * 0.9})`);
        grad.addColorStop(1, `rgba(220, 160, 172, ${alpha * 0.75})`);
        ctx.fillStyle = grad;
        ctx.fill();
      } else if (p.type === 'sage_leaf') {
        // Slender organic green-tea / olive leaf
        const leafLen = s * 1.35;
        const leafW = s * 0.5;

        ctx.beginPath();
        ctx.moveTo(0, -leafLen * 0.6);
        ctx.quadraticCurveTo(leafW, 0, 0, leafLen * 0.6);
        ctx.quadraticCurveTo(-leafW, 0, 0, -leafLen * 0.6);
        ctx.closePath();

        const grad = ctx.createLinearGradient(-leafW, 0, leafW, 0);
        grad.addColorStop(0, `rgba(132, 168, 148, ${alpha * 0.85})`);
        grad.addColorStop(0.5, `rgba(152, 186, 168, ${alpha * 0.9})`);
        grad.addColorStop(1, `rgba(118, 154, 134, ${alpha * 0.8})`);
        ctx.fillStyle = grad;
        ctx.fill();

        // Central leaf vein
        ctx.beginPath();
        ctx.moveTo(0, -leafLen * 0.5);
        ctx.lineTo(0, leafLen * 0.5);
        ctx.strokeStyle = `rgba(90, 125, 105, ${alpha * 0.45})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      } else {
        // Warm golden gingko/amber petal (accentuating brand gold)
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.7);
        ctx.bezierCurveTo(s * 0.6, -s * 0.4, s * 0.5, s * 0.4, 0, s * 0.8);
        ctx.bezierCurveTo(-s * 0.5, s * 0.4, -s * 0.6, -s * 0.4, 0, -s * 0.7);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, -s * 0.7, 0, s * 0.8);
        grad.addColorStop(0, `rgba(240, 206, 140, ${alpha * 0.9})`);
        grad.addColorStop(1, `rgba(209, 169, 95, ${alpha * 0.75})`);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      ctx.restore();
    };

    // If reduced motion is requested, render a static artistic distribution
    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      particles.slice(0, 12).forEach((p) => {
        p.opacity *= 0.7;
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

      // Subtle global wind field (left to right drift with low-frequency wave)
      const windForce = Math.sin(time * 0.0006) * 0.35 + 0.3;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Tumbling rotations
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
          if (dist < 130 && dist > 0) {
            const push = ((130 - dist) / 130) * (0.8 + mouseSpeed * 0.08);
            p.vx += (dx / dist) * push;
            p.vy += (dy / dist) * push * 0.5;
          }
        }

        // Dampen impulse velocity back to base
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Leaf aerodynamic drag: flatter leaves drift slower, vertical drop faster
        const drag = 0.85 + 0.3 * Math.abs(Math.sin(p.rotX));
        p.x += (p.baseVx + windForce + flutterOffset + p.vx) * dt * 60;
        p.y += (p.baseVy * drag + p.vy) * dt * 60;

        // Screen wrap-around
        if (p.y > height + 30) {
          p.y = -25;
          p.x = Math.random() * (width + 60) - 30;
        }
        if (p.x > width + 40) {
          p.x = -30;
        } else if (p.x < -40) {
          p.x = width + 30;
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full select-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
