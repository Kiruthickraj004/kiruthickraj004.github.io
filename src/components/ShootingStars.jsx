import React, { useEffect, useRef } from 'react';

export default function ShootingStars({ active = false, onComplete }) {
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

    // Static ambient twinkling stars
    const ambientStars = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.3 + 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      increasing: Math.random() > 0.5
    }));

    // Shooting stars array
    const shootingStars = [];

    const isDarkMode = () => document.documentElement.classList.contains('dark');

    const createShootingStar = () => {
      const isDark = isDarkMode();
      const startFromTop = Math.random() > 0.35;
      const x = startFromTop ? Math.random() * width * 1.3 - width * 0.2 : -80;
      const y = startFromTop ? -80 : Math.random() * height * 0.6;
      const speed = Math.random() * 16 + 18; // Fast, snappy, cinematic
      const angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1); // ~45 deg
      const length = Math.random() * 160 + 100;

      const colors = isDark 
        ? ['#ffffff', '#67e8f9', '#a5f3fc', '#e0e7ff'] 
        : ['#4f46e5', '#6366f1', '#0284c7', '#3b82f6'];

      const chosenColor = colors[Math.floor(Math.random() * colors.length)];

      return {
        x,
        y,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length,
        size: Math.random() * 2 + 1.2,
        opacity: 1,
        fadeSpeed: Math.random() * 0.012 + 0.008,
        color: chosenColor
      };
    };

    // If active, launch waves of shooting stars
    let waveInterval;
    let starsSpawned = 0;
    const totalStars = 32;

    if (active) {
      // Immediate first burst
      for (let i = 0; i < 4; i++) {
        shootingStars.push(createShootingStar());
      }
      starsSpawned += 4;

      waveInterval = setInterval(() => {
        if (starsSpawned < totalStars) {
          shootingStars.push(createShootingStar());
          shootingStars.push(createShootingStar());
          starsSpawned += 2;
        } else {
          clearInterval(waveInterval);
        }
      }, 60);
    }

    let isCompletedNotified = false;

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = isDarkMode();

      // 1. Ambient twinkling stars
      ambientStars.forEach((star) => {
        if (star.increasing) {
          star.alpha += star.speed;
          if (star.alpha >= 0.8) star.increasing = false;
        } else {
          star.alpha -= star.speed;
          if (star.alpha <= 0.1) star.increasing = true;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${star.alpha})`
          : `rgba(99, 102, 241, ${star.alpha * 0.5})`;
        ctx.fill();
      });

      // 2. Shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];

        s.x += s.dx;
        s.y += s.dy;
        s.opacity -= s.fadeSpeed;

        if (s.opacity <= 0 || s.x > width + 300 || s.y > height + 300) {
          shootingStars.splice(i, 1);
          continue;
        }

        // Tail gradient
        const tailX = s.x - (s.dx / Math.hypot(s.dx, s.dy)) * s.length;
        const tailY = s.y - (s.dy / Math.hypot(s.dx, s.dy)) * s.length;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(0.6, isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(99, 102, 241, 0.3)');
        grad.addColorStop(1, s.color);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Glowing star head
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#ffffff' : '#312e81';
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      if (active && starsSpawned >= totalStars && shootingStars.length === 0 && !isCompletedNotified) {
        isCompletedNotified = true;
        if (onComplete) onComplete();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (waveInterval) clearInterval(waveInterval);
    };
  }, [active, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}
