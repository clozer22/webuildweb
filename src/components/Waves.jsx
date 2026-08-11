import React, { useRef, useEffect } from 'react';

export default function Waves({
  lineColor = '#6B6B6B',
  backgroundColor = 'transparent',
  waveSpeedX = 0.012,
  waveSpeedY = 0.005,
  waveAmpX = 35,
  waveAmpY = 15,
  xGap = 16,
  yGap = 32,
  friction = 0.92,
  tension = 0.005,
  maxCursorMove = 120,
  className = '',
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = containerRef.current.clientWidth);
    let height = (canvas.height = containerRef.current.clientHeight);

    let time = 0;
    let mouse = { x: -1000, y: -1000, lx: -1000, ly: -1000, sx: 0, sy: 0, active: false };

    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      width = canvas.width = containerRef.current.clientWidth;
      height = canvas.height = containerRef.current.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener('mousemove', handleMouseMove);
      containerEl.addEventListener('mouseleave', handleMouseLeave);
    }

    // Render loop for wave lines
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      if (backgroundColor && backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      const numLines = Math.floor(width / xGap) + 4;
      const pointsPerLine = Math.floor(height / yGap) + 4;

      for (let i = 0; i < numLines; i++) {
        const xBase = (i - 2) * xGap;
        ctx.beginPath();

        for (let j = 0; j < pointsPerLine; j++) {
          const yBase = (j - 2) * yGap;

          // Organic wave motion calculation
          const offsetWaveX =
            Math.sin(time * waveSpeedX * 50 + j * 0.15 + i * 0.1) * waveAmpX +
            Math.cos(time * waveSpeedY * 30 + i * 0.08) * (waveAmpY * 0.5);

          const offsetWaveY =
            Math.cos(time * waveSpeedY * 40 + i * 0.12 + j * 0.1) * waveAmpY;

          // Mouse interaction ripple effect
          let mouseFactorX = 0;
          let mouseFactorY = 0;
          if (mouse.active) {
            const dx = xBase - mouse.x;
            const dy = yBase - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxCursorMove) {
              const force = (1 - dist / maxCursorMove) * 25;
              mouseFactorX = (dx / dist) * force;
              mouseFactorY = (dy / dist) * force;
            }
          }

          const currentX = xBase + offsetWaveX + mouseFactorX;
          const currentY = yBase + offsetWaveY + mouseFactorY;

          if (j === 0) {
            ctx.moveTo(currentX, currentY);
          } else {
            ctx.lineTo(currentX, currentY);
          }
        }

        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (containerEl) {
        containerEl.removeEventListener('mousemove', handleMouseMove);
        containerEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [lineColor, backgroundColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, xGap, yGap, maxCursorMove]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full pointer-events-none opacity-30" />
    </div>
  );
}
