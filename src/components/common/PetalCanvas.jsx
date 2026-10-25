// src/components/common/PetalCanvas.jsx
import React, { useEffect, useRef } from 'react';

/**
 * ROMANTIC ANIME SAKURA / LOTUS PETAL CANVAS
 * (ចលនាធ្លាក់ផ្កាឈូក/សាគូរ៉ាបែប Anime រ៉ូមែនទិក)
 * Lightweight, high-performance canvas that drifts delicate blossom petals
 * with subtle wind variation, 3D rotation, and glowing sparkle bokeh.
 */
export default function PetalCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Number of petals: tuned for smooth performance on phones and desktops
    const PETAL_COUNT = window.innerWidth < 768 ? 16 : 28;
    const petals = [];

    // Realistic Sakura / Lotus Blossom Petal Color Palette
    const colors = [
      'rgba(255, 192, 203, 0.72)', // Soft Rose
      'rgba(255, 182, 193, 0.65)', // Light Pink
      'rgba(255, 218, 224, 0.78)', // Pale Blossom
      'rgba(253, 205, 218, 0.70)', // Sakura Pink
      'rgba(255, 235, 240, 0.85)'  // Dewdrop Petal
    ];

    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 9 + 8,
        speedX: Math.random() * 1.2 - 0.4,
        speedY: Math.random() * 1.5 + 1.0,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.03 + 0.015,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.scale(Math.cos(p.flip), 1);

      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.7, p.size * 0.9, p.size * 0.6, 0, p.size);
      ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.6, -p.size * 0.8, -p.size * 0.7, 0, -p.size);

      ctx.fillStyle = p.color;
      ctx.shadowColor = 'rgba(255, 160, 180, 0.35)';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.x += p.speedX + Math.sin(p.flip) * 0.4;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        // Reset if off-screen
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
      aria-hidden="true"
    />
  );
}

