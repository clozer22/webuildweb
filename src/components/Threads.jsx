import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map((x) => x + x).join('');
  }
  const num = parseInt(c, 16);
  return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

const vertexShader = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;

  uniform float uAmplitude;
  uniform float uDistance;
  uniform bool uEnableMouseInteraction;
  uniform vec3 uColor;

  varying vec2 vUv;

  void main() {
    // Standardized normalized screen coordinates
    vec2 st = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    vec2 mouse = (uMouse - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

    float time = uTime * 0.6;
    float alphaSum = 0.0;
    vec3 col = uColor;

    // Tight horizontal ribbon stream across the center (y = 0)
    float threadCount = 10.0;
    for (float i = 0.0; i < 10.0; i += 1.0) {
      float idx = i - 4.5;
      
      // Tight thread bundle spacing
      float threadOffset = idx * (0.008 + uDistance * 0.004);

      // Mouse influence
      vec2 mOffset = vec2(0.0);
      if (uEnableMouseInteraction) {
        float mDist = length(st - mouse);
        float mForce = smoothstep(0.35, 0.0, mDist) * 0.08;
        mOffset = (st - mouse) * mForce;
      }

      // Smooth horizontal sine ribbon oscillation
      float waveX = st.x * 2.5 + mOffset.x;
      float waveY = sin(waveX * 2.2 + time + i * 0.35) * (0.05 * uAmplitude) +
                    cos(waveX * 4.5 - time * 0.8 + i * 0.2) * (0.02 * uAmplitude) +
                    threadOffset + mOffset.y;

      // Distance to line center
      float dist = abs(st.y - waveY);
      
      // Ultra-crisp thin thread line
      float lineAlpha = smoothstep(0.0018, 0.0003, dist) + exp(-dist * 120.0) * 0.3;

      alphaSum += lineAlpha * (0.6 + 0.4 * sin(time * 1.5 + i));
    }

    float finalAlpha = clamp(alphaSum * 0.8, 0.0, 1.0);
    gl_FragColor = vec4(col, finalAlpha);
  }
`;

export default function Threads({
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = true,
  color = '#111111',
  className = '',
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [container.clientWidth, container.clientHeight] },
        uMouse: { value: [container.clientWidth * 0.5, container.clientHeight * 0.5] },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uEnableMouseInteraction: { value: enableMouseInteraction },
        uColor: { value: hexToRgb(color) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value = [w, h];
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const handleMouseMove = (e) => {
      if (!enableMouseInteraction || !container) return;
      const rect = container.getBoundingClientRect();
      program.uniforms.uMouse.value = [e.clientX - rect.left, rect.height - (e.clientY - rect.top)];
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const render = (t) => {
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (gl.canvas && container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, [amplitude, distance, enableMouseInteraction, color]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ minHeight: '100%' }}
    />
  );
}
