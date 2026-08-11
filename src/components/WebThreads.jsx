import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

// Helper to convert hex strings (#RRGGBB) to RGB arrays normalized [0..1]
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

  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;

  uniform float uSpeed;
  uniform float uThreadCount;
  uniform float uFrequency;
  uniform float uSpread;
  uniform float uTaper;
  uniform float uPosition;
  uniform float uGlow;
  uniform float uThickness;
  uniform float uBrightness;
  uniform float uOpacity;
  uniform float uMouseStrength;
  uniform bool uMirror;
  uniform bool uGrain;
  uniform float uGrainIntensity;

  varying vec2 vUv;

  // Simple pseudo random for grain
  float rand(vec2 co) {
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }

  void main() {
    vec2 st = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    vec2 mouseNorm = (uMouse - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

    if (uMirror) {
      st.x = abs(st.x);
    }

    float t = uTime * uSpeed * 2.0;
    float alphaSum = 0.0;
    vec3 colSum = vec3(0.0);

    float count = max(1.0, uThreadCount);
    for (float i = 0.0; i < 12.0; i += 1.0) {
      if (i >= count) break;
      
      float idxNorm = i / count;
      float xOffset = (i - count * 0.5) * uSpread;
      
      // Mouse interaction influence
      vec2 mOffset = mouseNorm * uMouseStrength * (1.0 - idxNorm * 0.5);
      
      // Sine wave displacement
      float yPos = sin(st.x * uFrequency + t + i * 1.5 + mOffset.x * 3.0) * (0.15 + uSpread * 0.5);
      yPos += cos(st.x * uFrequency * 0.5 - t * 0.7 + i) * 0.08;

      float dist = abs(st.y - (yPos + (uPosition - 0.5) + mOffset.y));
      
      // Tapering
      float taperFactor = 1.0 - abs(st.x) * (uTaper * 0.8);
      taperFactor = clamp(taperFactor, 0.1, 1.0);

      float width = (uThickness * 0.003) * taperFactor;
      float intensity = smoothstep(width, 0.0, dist);
      float glow = exp(-dist * (40.0 - uGlow * 20.0)) * (0.2 + uGlow);

      float lineAlpha = (intensity + glow) * uBrightness;

      // Color blending between color1, color2, color3
      vec3 threadCol = mix(uColor1, uColor2, idxNorm);
      threadCol = mix(threadCol, uColor3, sin(t + i) * 0.5 + 0.5);

      colSum += threadCol * lineAlpha;
      alphaSum += lineAlpha;
    }

    if (uGrain) {
      float grain = (rand(vUv + vec2(t)) - 0.5) * uGrainIntensity;
      colSum += vec3(grain);
    }

    colSum = clamp(colSum, 0.0, 1.0);
    float finalAlpha = clamp(alphaSum * uOpacity, 0.0, 1.0);

    gl_FragColor = vec4(colSum, finalAlpha);
  }
`;

export default function WebThreads({
  color1 = '#B7E200',
  color2 = '#000000',
  color3 = '#6B6B6B',
  speed = 0.2,
  threadCount = 6,
  frequency = 5,
  spread = 0.18,
  taper = 1,
  position = 0.5,
  fanMode = 'center',
  glow = 0.02,
  falloff = 0.6,
  thickness = 1.1,
  brightness = 0.6,
  opacity = 1,
  mirror = true,
  shimmer = false,
  grain = true,
  grainIntensity = 0.05,
  mouseInteraction = true,
  mouseStrength = 0.3,
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
        uColor1: { value: hexToRgb(color1) },
        uColor2: { value: hexToRgb(color2) },
        uColor3: { value: hexToRgb(color3) },
        uSpeed: { value: speed },
        uThreadCount: { value: threadCount },
        uFrequency: { value: frequency },
        uSpread: { value: spread },
        uTaper: { value: taper },
        uPosition: { value: position },
        uGlow: { value: glow },
        uThickness: { value: thickness },
        uBrightness: { value: brightness },
        uOpacity: { value: opacity },
        uMouseStrength: { value: mouseInteraction ? mouseStrength : 0 },
        uMirror: { value: mirror },
        uGrain: { value: grain },
        uGrainIntensity: { value: grainIntensity },
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
      if (!mouseInteraction || !container) return;
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
  }, [
    color1,
    color2,
    color3,
    speed,
    threadCount,
    frequency,
    spread,
    taper,
    position,
    glow,
    thickness,
    brightness,
    opacity,
    mirror,
    grain,
    grainIntensity,
    mouseInteraction,
    mouseStrength,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ minHeight: '100%' }}
    />
  );
}
