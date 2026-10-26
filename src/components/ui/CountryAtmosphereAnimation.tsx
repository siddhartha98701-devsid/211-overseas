'use client';

import React, { useEffect, useRef } from 'react';

export type CountryTheme =
  | 'south-korea'
  | 'korea'
  | 'japan'
  | 'singapore'
  | 'taiwan'
  | 'luxembourg'
  | 'uae'
  | 'canada'
  | 'australia'
  | 'uk'
  | 'united-kingdom'
  | 'usa'
  | 'united-states'
  | 'europe'
  | 'greece'
  | 'work'
  | 'openings'
  | 'study';

export interface CountryAtmosphereProps {
  country?: string;
  className?: string;
  density?: 'subtle' | 'normal' | 'rich';
}

interface Particle {
  x: number;
  y: number;
  z: number;
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
  itemKind: number; // 0, 1, or 2 for diverse items in the theme
}

/**
 * Normalizes destination string to known CountryTheme key.
 */
function normalizeTheme(country?: string): CountryTheme {
  if (!country) return 'study';
  const c = country.toLowerCase().trim();
  if (c.includes('korea')) return 'south-korea';
  if (c.includes('japan')) return 'japan';
  if (c.includes('singapore')) return 'singapore';
  if (c.includes('taiwan')) return 'taiwan';
  if (c.includes('luxembourg')) return 'luxembourg';
  if (c.includes('uae') || c.includes('dubai')) return 'uae';
  if (c.includes('canada')) return 'canada';
  if (c.includes('australia')) return 'australia';
  if (c.includes('uk') || c.includes('kingdom') || c.includes('britain')) return 'uk';
  if (c.includes('usa') || c.includes('state') || c.includes('america')) return 'usa';
  if (c.includes('europe')) return 'europe';
  if (c.includes('greece')) return 'greece';
  if (c.includes('opening')) return 'openings';
  if (c.includes('work')) return 'work';
  return 'study';
}

/**
 * CountryAtmosphereAnimation
 * Highly tuned, 60fps canvas animation tailored specifically to each destination country.
 * Respects prefers-reduced-motion, pauses when offscreen, and has zero interaction capture.
 */
export function CountryAtmosphereAnimation({
  country = 'study',
  className = '',
  density = 'normal',
}: CountryAtmosphereProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const theme = normalizeTheme(country);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animId: number | null = null;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth || 1200);
    let height = (canvas.height = canvas.offsetHeight || 600);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Particle count
    const countMultiplier = density === 'subtle' ? 0.6 : density === 'rich' ? 1.4 : 1.0;
    const baseCount = width < 640 ? 18 : 34;
    const PARTICLE_COUNT = Math.round(baseCount * countMultiplier);

    const createParticle = (initialY?: number): Particle => {
      const z = 0.5 + Math.random() * 0.65;
      return {
        x: Math.random() * (width + 80) - 40,
        y: initialY !== undefined ? initialY : Math.random() * (height + 60) - 30,
        z,
        size: (12 + Math.random() * 10) * z,
        baseVx: 0.25 + Math.random() * 0.45,
        baseVy: (0.45 + Math.random() * 0.5) * z,
        vx: 0,
        vy: 0,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vRotX: 0.01 + Math.random() * 0.02,
        vRotY: 0.012 + Math.random() * 0.022,
        vRotZ: (Math.random() - 0.5) * 0.015,
        flutterPhase: Math.random() * Math.PI * 2,
        flutterSpeed: 0.018 + Math.random() * 0.025,
        flutterAmp: 0.5 + Math.random() * 0.8,
        opacity: (0.55 + Math.random() * 0.4) * Math.min(z * 1.1, 1),
        itemKind: Math.floor(Math.random() * 3),
      };
    };

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => createParticle());

    // Custom drawing routines per country theme
    const renderParticle = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.scale(Math.cos(p.rotX), Math.sin(p.rotY));
      ctx.rotate(p.rotZ);

      const s = p.size;
      const alpha = p.opacity;

      switch (theme) {
        case 'south-korea': {
          // Cherry Blossom (Sakura/Beotkkot) or Golden Gingko
          if (p.itemKind === 0 || p.itemKind === 1) {
            // Cherry Blossom petal
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.85);
            ctx.bezierCurveTo(s * 0.65, -s * 0.6, s * 0.8, s * 0.3, s * 0.15, s * 0.85);
            ctx.quadraticCurveTo(0, s * 0.72, -s * 0.15, s * 0.85);
            ctx.bezierCurveTo(-s * 0.8, s * 0.3, -s * 0.65, -s * 0.6, 0, -s * 0.85);
            ctx.closePath();
            const grad = ctx.createLinearGradient(0, -s * 0.85, 0, s * 0.85);
            grad.addColorStop(0, `rgba(255, 230, 238, ${alpha * 0.95})`);
            grad.addColorStop(0.5, `rgba(255, 182, 193, ${alpha * 0.85})`);
            grad.addColorStop(1, `rgba(244, 143, 177, ${alpha * 0.75})`);
            ctx.fillStyle = grad;
            ctx.fill();
          } else {
            // Golden Gingko Leaf
            ctx.beginPath();
            ctx.moveTo(0, s * 0.7);
            ctx.lineTo(0, s * 0.2);
            ctx.bezierCurveTo(-s * 0.7, -s * 0.6, s * 0.7, -s * 0.6, 0, s * 0.2);
            ctx.closePath();
            const grad = ctx.createLinearGradient(0, -s * 0.6, 0, s * 0.7);
            grad.addColorStop(0, `rgba(250, 204, 21, ${alpha * 0.95})`);
            grad.addColorStop(1, `rgba(217, 119, 6, ${alpha * 0.8})`);
            ctx.fillStyle = grad;
            ctx.fill();
          }
          break;
        }

        case 'japan': {
          // Sakura petals and deep-crimson Momiji maple leaves
          if (p.itemKind === 0) {
            // Delicate pink sakura
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.8);
            ctx.bezierCurveTo(s * 0.6, -s * 0.5, s * 0.7, s * 0.3, 0, s * 0.8);
            ctx.bezierCurveTo(-s * 0.7, s * 0.3, -s * 0.6, -s * 0.5, 0, -s * 0.8);
            ctx.closePath();
            ctx.fillStyle = `rgba(255, 192, 203, ${alpha * 0.85})`;
            ctx.fill();
          } else {
            // Crimson Momiji Maple Leaf (5-lobed)
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.9);
            ctx.lineTo(s * 0.25, -s * 0.4);
            ctx.lineTo(s * 0.8, -s * 0.3);
            ctx.lineTo(s * 0.35, s * 0.1);
            ctx.lineTo(s * 0.5, s * 0.7);
            ctx.lineTo(0, s * 0.35);
            ctx.lineTo(-s * 0.5, s * 0.7);
            ctx.lineTo(-s * 0.35, s * 0.1);
            ctx.lineTo(-s * 0.8, -s * 0.3);
            ctx.lineTo(-s * 0.25, -s * 0.4);
            ctx.closePath();
            const grad = ctx.createLinearGradient(0, -s * 0.9, 0, s * 0.7);
            grad.addColorStop(0, `rgba(220, 38, 38, ${alpha * 0.95})`);
            grad.addColorStop(1, `rgba(153, 27, 27, ${alpha * 0.85})`);
            ctx.fillStyle = grad;
            ctx.fill();
          }
          break;
        }

        case 'singapore': {
          // Vibrant Orchid Petals & Emerald Tropical Rainforest Leaves
          if (p.itemKind === 0) {
            // Orchid petal (magenta-violet)
            ctx.beginPath();
            ctx.ellipse(0, 0, s * 0.55, s * 0.8, Math.PI / 6, 0, Math.PI * 2);
            const grad = ctx.createLinearGradient(-s * 0.5, -s * 0.8, s * 0.5, s * 0.8);
            grad.addColorStop(0, `rgba(232, 121, 249, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(162, 28, 175, ${alpha * 0.75})`);
            ctx.fillStyle = grad;
            ctx.fill();
          } else {
            // Emerald tropical leaf
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.85);
            ctx.bezierCurveTo(s * 0.5, -s * 0.3, s * 0.5, s * 0.3, 0, s * 0.85);
            ctx.bezierCurveTo(-s * 0.5, s * 0.3, -s * 0.5, -s * 0.3, 0, -s * 0.85);
            ctx.closePath();
            const grad = ctx.createLinearGradient(0, -s * 0.85, 0, s * 0.85);
            grad.addColorStop(0, `rgba(52, 211, 153, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(5, 150, 105, ${alpha * 0.8})`);
            ctx.fillStyle = grad;
            ctx.fill();
          }
          break;
        }

        case 'taiwan': {
          // Jade Mountain Oolong Tea Leaves & Cyber-Amber Energy Glints
          if (p.itemKind === 0 || p.itemKind === 1) {
            // Fresh jade tea leaf
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.8);
            ctx.quadraticCurveTo(s * 0.45, 0, 0, s * 0.8);
            ctx.quadraticCurveTo(-s * 0.45, 0, 0, -s * 0.8);
            ctx.closePath();
            const grad = ctx.createLinearGradient(0, -s * 0.8, 0, s * 0.8);
            grad.addColorStop(0, `rgba(74, 222, 128, ${alpha * 0.85})`);
            grad.addColorStop(1, `rgba(21, 128, 61, ${alpha * 0.8})`);
            ctx.fillStyle = grad;
            ctx.fill();
          } else {
            // Glowing semiconductor diamond glint
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.4);
            ctx.lineTo(s * 0.4, 0);
            ctx.lineTo(0, s * 0.4);
            ctx.lineTo(-s * 0.4, 0);
            ctx.closePath();
            ctx.fillStyle = `rgba(251, 191, 36, ${alpha * 0.95})`;
            ctx.fill();
          }
          break;
        }

        case 'luxembourg': {
          // Golden European Oak Leaves & Gilt Sparkles
          if (p.itemKind === 0 || p.itemKind === 1) {
            // Golden Oak Leaf
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.85);
            ctx.bezierCurveTo(s * 0.55, -s * 0.5, s * 0.65, 0, s * 0.35, s * 0.5);
            ctx.lineTo(0, s * 0.8);
            ctx.lineTo(-s * 0.35, s * 0.5);
            ctx.bezierCurveTo(-s * 0.65, 0, -s * 0.55, -s * 0.5, 0, -s * 0.85);
            ctx.closePath();
            const grad = ctx.createLinearGradient(0, -s * 0.85, 0, s * 0.8);
            grad.addColorStop(0, `rgba(245, 158, 11, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(180, 83, 9, ${alpha * 0.8})`);
            ctx.fillStyle = grad;
            ctx.fill();
          } else {
            // Gold European Star Sparkle
            ctx.beginPath();
            ctx.arc(0, 0, s * 0.28, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(253, 224, 71, ${alpha * 0.95})`;
            ctx.fill();
          }
          break;
        }

        case 'uae': {
          // Warm Desert Golden Amber Sand Breeze & Star Glints
          if (p.itemKind === 0 || p.itemKind === 1) {
            // Warm Amber Dune Leaflet
            ctx.beginPath();
            ctx.ellipse(0, 0, s * 0.35, s * 0.8, 0.4, 0, Math.PI * 2);
            const grad = ctx.createLinearGradient(-s * 0.35, -s * 0.8, s * 0.35, s * 0.8);
            grad.addColorStop(0, `rgba(252, 127, 78, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(163, 62, 17, ${alpha * 0.8})`);
            ctx.fillStyle = grad;
            ctx.fill();
          } else {
            // Desert Gold Dust Mote
            ctx.beginPath();
            ctx.arc(0, 0, s * 0.25, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(251, 191, 36, ${alpha * 0.95})`;
            ctx.fill();
          }
          break;
        }

        case 'canada': {
          // Iconic Canadian Crimson & Golden Sugar Maple Leaves
          ctx.beginPath();
          ctx.moveTo(0, -s * 0.9);
          ctx.lineTo(s * 0.25, -s * 0.45);
          ctx.lineTo(s * 0.8, -s * 0.35);
          ctx.lineTo(s * 0.38, s * 0.08);
          ctx.lineTo(s * 0.55, s * 0.7);
          ctx.lineTo(0, s * 0.38);
          ctx.lineTo(-s * 0.55, s * 0.7);
          ctx.lineTo(-s * 0.38, s * 0.08);
          ctx.lineTo(-s * 0.8, -s * 0.35);
          ctx.lineTo(-s * 0.25, -s * 0.45);
          ctx.closePath();
          const grad = ctx.createLinearGradient(0, -s * 0.9, 0, s * 0.7);
          if (p.itemKind === 0) {
            grad.addColorStop(0, `rgba(239, 68, 68, ${alpha * 0.95})`);
            grad.addColorStop(1, `rgba(185, 28, 28, ${alpha * 0.85})`);
          } else {
            grad.addColorStop(0, `rgba(249, 115, 22, ${alpha * 0.95})`);
            grad.addColorStop(1, `rgba(217, 119, 6, ${alpha * 0.85})`);
          }
          ctx.fillStyle = grad;
          ctx.fill();
          break;
        }

        case 'australia': {
          // Golden Wattle Blossoms & Slender Eucalyptus Gum Leaves
          if (p.itemKind === 0) {
            // Wattle blossom cluster
            ctx.beginPath();
            ctx.arc(0, 0, s * 0.35, 0, Math.PI * 2);
            ctx.arc(s * 0.25, s * 0.2, s * 0.25, 0, Math.PI * 2);
            ctx.arc(-s * 0.25, s * 0.1, s * 0.25, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(250, 204, 21, ${alpha * 0.95})`;
            ctx.fill();
          } else {
            // Slender curved eucalyptus leaf
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.9);
            ctx.quadraticCurveTo(s * 0.3, 0, 0, s * 0.9);
            ctx.quadraticCurveTo(-s * 0.15, 0, 0, -s * 0.9);
            ctx.closePath();
            const grad = ctx.createLinearGradient(0, -s * 0.9, 0, s * 0.9);
            grad.addColorStop(0, `rgba(132, 204, 22, ${alpha * 0.85})`);
            grad.addColorStop(1, `rgba(20, 184, 166, ${alpha * 0.75})`);
            ctx.fillStyle = grad;
            ctx.fill();
          }
          break;
        }

        case 'uk': {
          // Autumn London Plane Tree Leaves & Regal Gold Dust
          ctx.beginPath();
          ctx.moveTo(0, -s * 0.85);
          ctx.bezierCurveTo(s * 0.5, -s * 0.4, s * 0.6, s * 0.2, 0, s * 0.8);
          ctx.bezierCurveTo(-s * 0.6, s * 0.2, -s * 0.5, -s * 0.4, 0, -s * 0.85);
          ctx.closePath();
          const grad = ctx.createLinearGradient(0, -s * 0.85, 0, s * 0.8);
          grad.addColorStop(0, `rgba(217, 119, 6, ${alpha * 0.9})`);
          grad.addColorStop(1, `rgba(146, 64, 14, ${alpha * 0.8})`);
          ctx.fillStyle = grad;
          ctx.fill();
          break;
        }

        case 'usa': {
          // Academic Ivy Leaves & Golden Autumn Birch
          ctx.beginPath();
          ctx.moveTo(0, -s * 0.85);
          ctx.lineTo(s * 0.4, -s * 0.3);
          ctx.lineTo(s * 0.6, s * 0.2);
          ctx.lineTo(0, s * 0.75);
          ctx.lineTo(-s * 0.6, s * 0.2);
          ctx.lineTo(-s * 0.4, -s * 0.3);
          ctx.closePath();
          const grad = ctx.createLinearGradient(0, -s * 0.85, 0, s * 0.75);
          if (p.itemKind === 0) {
            grad.addColorStop(0, `rgba(34, 197, 94, ${alpha * 0.85})`);
            grad.addColorStop(1, `rgba(22, 101, 52, ${alpha * 0.8})`);
          } else {
            grad.addColorStop(0, `rgba(245, 158, 11, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(180, 83, 9, ${alpha * 0.8})`);
          }
          ctx.fillStyle = grad;
          ctx.fill();
          break;
        }

        case 'europe': {
          // Continental Golden Stars & European Beech Leaves
          if (p.itemKind === 0) {
            // Gold European Star
            ctx.beginPath();
            ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(250, 204, 21, ${alpha * 0.95})`;
            ctx.fill();
          } else {
            // Beech leaf
            ctx.beginPath();
            ctx.ellipse(0, 0, s * 0.35, s * 0.75, 0, 0, Math.PI * 2);
            const grad = ctx.createLinearGradient(0, -s * 0.75, 0, s * 0.75);
            grad.addColorStop(0, `rgba(234, 88, 12, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(161, 98, 7, ${alpha * 0.8})`);
            ctx.fillStyle = grad;
            ctx.fill();
          }
          break;
        }

        case 'greece': {
          // Mediterranean Silver-Green Olive Leaves & Azure Aegean Motes
          if (p.itemKind === 0 || p.itemKind === 1) {
            // Olive leaf (silver-green)
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.85);
            ctx.quadraticCurveTo(s * 0.35, 0, 0, s * 0.85);
            ctx.quadraticCurveTo(-s * 0.35, 0, 0, -s * 0.85);
            ctx.closePath();
            const grad = ctx.createLinearGradient(0, -s * 0.85, 0, s * 0.85);
            grad.addColorStop(0, `rgba(163, 230, 53, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(77, 124, 15, ${alpha * 0.8})`);
            ctx.fillStyle = grad;
            ctx.fill();
          } else {
            // Aegean Azure Light Mote
            ctx.beginPath();
            ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.95})`;
            ctx.fill();
          }
          break;
        }

        case 'work':
        case 'openings': {
          // Global Career Opportunity Gold Network Nodes
          ctx.beginPath();
          ctx.arc(0, 0, s * 0.32, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(252, 127, 78, ${alpha * 0.95})`;
          ctx.fill();
          // Halo ring
          ctx.beginPath();
          ctx.arc(0, 0, s * 0.6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(252, 127, 78, ${alpha * 0.35})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          break;
        }

        case 'study':
        default: {
          // Harmonious blend of cherry blossom, maple, and laurel leaves
          if (p.itemKind === 0) {
            ctx.beginPath();
            ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 182, 193, ${alpha * 0.85})`;
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.ellipse(0, 0, s * 0.4, s * 0.8, 0.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(251, 191, 36, ${alpha * 0.85})`;
            ctx.fill();
          }
          break;
        }
      }

      ctx.restore();
    };

    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      particles.slice(0, 12).forEach((p) => {
        p.opacity *= 0.65;
        renderParticle(p);
      });
      return;
    }

    let lastTime = performance.now();

    const loop = (time: number) => {
      if (!isVisible) {
        animId = requestAnimationFrame(loop);
        return;
      }

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const windForce = Math.sin(time * 0.0006) * 0.35 + 0.32;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.rotX += p.vRotX;
        p.rotY += p.vRotY;
        p.rotZ += p.vRotZ;

        p.flutterPhase += p.flutterSpeed;
        const flutterOffset = Math.sin(p.flutterPhase) * p.flutterAmp;

        const drag = 0.85 + 0.3 * Math.abs(Math.sin(p.rotX));
        p.x += (p.baseVx + windForce + flutterOffset) * dt * 60;
        p.y += (p.baseVy * drag) * dt * 60;

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

        renderParticle(p);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth || 1200;
      height = canvas.offsetHeight || 600;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [theme, density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full select-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
