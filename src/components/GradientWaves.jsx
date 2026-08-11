import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Plane } from 'ogl';

// Convert hex string to RGB array normalized [0..1]
function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map((x) => x + x).join('');
  }
  const num = parseInt(c, 16);
  return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

const vertexShader = /* glsl */ `
  attribute vec3 position;
  attribute vec2 uv;
  attribute vec3 normal;

  uniform float uTime;
  uniform float uSpeed;
  uniform float uAmplitude;
  uniform float uWaveScale;
  uniform float uWaveRatio;
  uniform float uSwell;
  uniform float uTurbulence;
  uniform float uTilt;
  uniform float uHeight;
  uniform vec2 uMouse;
  uniform float uParallaxStrength;

  varying vec2 vUv;
  varying float vElevation;
  varying float vDepth;

  // Simplex 2D noise helper
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ) );
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * vec2(x12.x, x12.z) + vec3(h.y, h.z) * vec2(x12.y, x12.w);
    return 130.0 * dot(m, g);
  }

  void main() {
    vUv = uv;
    vec3 pos = position;

    float t = uTime * uSpeed * 1.5;
    vec2 waveUv = uv * uWaveScale;
    waveUv.y *= uWaveRatio;

    // Mouse Parallax
    pos.x += uMouse.x * uParallaxStrength * 0.2;
    pos.y += uMouse.y * uParallaxStrength * 0.2;

    // Multi-layered wave displacement
    float e1 = sin(waveUv.x * 6.0 + t) * cos(waveUv.y * 5.0 + t * 0.8) * (uSwell * 0.02);
    float e2 = snoise(waveUv * 4.0 + vec2(t * 0.5)) * (uTurbulence * 0.01);
    float elevation = (e1 + e2) * uAmplitude;

    pos.z += elevation * uHeight;

    // Tilt transformation
    float rad = uTilt * 0.5;
    float cosT = cos(rad);
    float sinT = sin(rad);
    pos.y = pos.y * cosT - pos.z * sinT;
    pos.z = pos.y * sinT + pos.z * cosT;

    vElevation = elevation;
    vDepth = pos.z;

    gl_Position = vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3 uHorizonColor;
  uniform vec3 uWaveColor;
  uniform vec3 uCrestColor;

  uniform float uFogDepth;
  uniform float uBrightness;
  uniform float uOpacity;
  uniform bool uGrain;
  uniform float uGrainIntensity;

  varying vec2 vUv;
  varying float vElevation;
  varying float vDepth;

  float rand(vec2 co) {
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }

  void main() {
    // Gradient mix based on vertical UV and wave elevation crest
    float mixHorizon = smoothstep(0.0, 0.7, vUv.y);
    float mixCrest = smoothstep(0.1, 0.8, vElevation + 0.5);

    vec3 col = mix(uHorizonColor, uWaveColor, mixHorizon);
    col = mix(col, uCrestColor, mixCrest * 0.7);

    // Fog depth attenuation
    float fog = clamp(1.0 - (vDepth / max(1.0, uFogDepth)), 0.2, 1.0);
    col *= fog * uBrightness;

    if (uGrain) {
      float grain = (rand(vUv) - 0.5) * uGrainIntensity;
      col += vec3(grain);
    }

    col = clamp(col, 0.0, 1.0);
    float finalAlpha = clamp(mixHorizon * uOpacity * 0.4, 0.0, 1.0);

    gl_FragColor = vec4(col, finalAlpha);
  }
`;

export default function GradientWaves({
  horizonColor = '#B7E200',
  waveColor = '#000000',
  crestColor = '#F2F2F2',
  speed = 0.4,
  amplitude = 2.5,
  waveScale = 0.6,
  waveRatio = 0.9,
  swell = 35,
  turbulence = 20,
  tilt = 1.11,
  zoom = 1,
  height = 5.5,
  fogDepth = 15,
  detail = 'medium',
  brightness = 1,
  opacity = 1,
  mouseInteraction = true,
  parallaxStrength = 0.5,
  grain = true,
  grainIntensity = 0.05,
  className = '',
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const subs = detail === 'high' ? 80 : detail === 'low' ? 30 : 50;
    const geometry = new Plane(gl, { width: 3, height: 3, widthSegments: subs, heightSegments: subs });

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: [0, 0] },
        uHorizonColor: { value: hexToRgb(horizonColor) },
        uWaveColor: { value: hexToRgb(waveColor) },
        uCrestColor: { value: hexToRgb(crestColor) },
        uSpeed: { value: speed },
        uAmplitude: { value: amplitude },
        uWaveScale: { value: waveScale },
        uWaveRatio: { value: waveRatio },
        uSwell: { value: swell },
        uTurbulence: { value: turbulence },
        uTilt: { value: tilt },
        uHeight: { value: height },
        uFogDepth: { value: fogDepth },
        uBrightness: { value: brightness },
        uOpacity: { value: opacity },
        uParallaxStrength: { value: mouseInteraction ? parallaxStrength : 0 },
        uGrain: { value: grain },
        uGrainIntensity: { value: grainIntensity },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleResize = () => {
      if (!container) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const handleMouseMove = (e) => {
      if (!mouseInteraction || !container) return;
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      program.uniforms.uMouse.value = [nx, ny];
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
    horizonColor,
    waveColor,
    crestColor,
    speed,
    amplitude,
    waveScale,
    waveRatio,
    swell,
    turbulence,
    tilt,
    height,
    fogDepth,
    detail,
    brightness,
    opacity,
    mouseInteraction,
    parallaxStrength,
    grain,
    grainIntensity,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ minHeight: '100%' }}
    />
  );
}
